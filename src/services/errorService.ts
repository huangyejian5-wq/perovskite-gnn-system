import toast from 'react-hot-toast';

export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
  userId?: string;
  context?: string;
}

export class ErrorService {
  private static instance: ErrorService;
  private errorLog: AppError[] = [];
  private maxLogSize = 100;

  static getInstance(): ErrorService {
    if (!ErrorService.instance) {
      ErrorService.instance = new ErrorService();
    }
    return ErrorService.instance;
  }

  private constructor() {}

  handleError(error: any, context?: string): AppError {
    const appError: AppError = {
      code: this.getErrorCode(error),
      message: this.getErrorMessage(error),
      details: error,
      timestamp: new Date(),
      context
    };

    this.logError(appError);
    this.showUserFriendlyError(appError);

    return appError;
  }

  private getErrorCode(error: any): string {
    if (error?.code) return error.code;
    if (error?.name) return error.name;
    if (error?.response?.status) return `HTTP_${error.response.status}`;
    return 'UNKNOWN_ERROR';
  }

  private getErrorMessage(error: any): string {
    if (typeof error === 'string') return error;
    if (error?.message) return error.message;
    if (error?.response?.data?.message) return error.response.data.message;
    return '发生未知错误';
  }

  private logError(error: AppError): void {
    this.errorLog.unshift(error);
    
    // Keep log size manageable
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(0, this.maxLogSize);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('App Error:', error);
    }
  }

  private showUserFriendlyError(error: AppError): void {
    const userMessage = this.getUserFriendlyMessage(error);
    
    switch (error.code) {
      case 'VALIDATION_ERROR':
        toast.error(userMessage, { duration: 4000 });
        break;
      case 'NETWORK_ERROR':
        toast.error(userMessage, { 
          duration: 6000,
          icon: '🌐'
        });
        break;
      case 'PREDICTION_ERROR':
        toast.error(userMessage, {
          duration: 5000,
          icon: '🔮'
        });
        break;
      default:
        toast.error(userMessage, { duration: 4000 });
    }
  }

  private getUserFriendlyMessage(error: AppError): string {
    const messageMap: { [key: string]: string } = {
      'NETWORK_ERROR': '网络连接失败，请检查网络设置',
      'VALIDATION_ERROR': '输入参数有误，请检查后重试',
      'PREDICTION_ERROR': '预测计算失败，请稍后重试',
      'FILE_UPLOAD_ERROR': '文件上传失败，请检查文件格式和大小',
      'OPTIMIZATION_ERROR': '优化计算失败，请调整参数后重试',
      'DATABASE_ERROR': '数据库访问失败，请稍后重试',
      'TIMEOUT_ERROR': '操作超时，请重试或联系技术支持',
      'UNAUTHORIZED': '访问权限不足，请登录后重试',
      'FORBIDDEN': '操作被拒绝，权限不足',
      'NOT_FOUND': '请求的资源不存在',
      'SERVER_ERROR': '服务器内部错误，请联系技术支持'
    };

    return messageMap[error.code] || error.message || '操作失败，请重试';
  }

  getErrorLog(): AppError[] {
    return [...this.errorLog];
  }

  clearErrorLog(): void {
    this.errorLog = [];
    toast.success('错误日志已清除');
  }

  // Helper methods for common error scenarios
  static handleValidationError(message: string, field?: string): AppError {
    const error = new Error(message);
    error.name = 'VALIDATION_ERROR';
    return ErrorService.getInstance().handleError(error, field);
  }

  static handleNetworkError(error: any): AppError {
    error.name = 'NETWORK_ERROR';
    return ErrorService.getInstance().handleError(error, 'network');
  }

  static handlePredictionError(error: any): AppError {
    error.name = 'PREDICTION_ERROR';
    return ErrorService.getInstance().handleError(error, 'prediction');
  }

  static handleFileError(error: any, filename?: string): AppError {
    error.name = 'FILE_UPLOAD_ERROR';
    return ErrorService.getInstance().handleError(error, filename);
  }

  static handleOptimizationError(error: any): AppError {
    error.name = 'OPTIMIZATION_ERROR';
    return ErrorService.getInstance().handleError(error, 'optimization');
  }

  // Validation helpers
  static validateNumericRange(value: number, min: number, max: number, fieldName: string): void {
    if (isNaN(value)) {
      throw new Error(`${fieldName}必须是数字`);
    }
    if (value < min || value > max) {
      throw new Error(`${fieldName}必须在${min}到${max}之间`);
    }
  }

  static validateRequired(value: any, fieldName: string): void {
    if (value === null || value === undefined || value === '') {
      throw new Error(`${fieldName}不能为空`);
    }
  }

  static validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('邮箱格式不正确');
    }
  }

  static validateFile(file: File, maxSize: number, allowedTypes: string[]): void {
    if (file.size > maxSize) {
      throw new Error(`文件大小不能超过${Math.round(maxSize / 1024 / 1024)}MB`);
    }

    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!allowedTypes.includes(fileExtension)) {
      throw new Error(`支持的文件格式: ${allowedTypes.join(', ')}`);
    }
  }

  // Performance monitoring
  static async monitorPerformance<T>(
    operation: () => Promise<T>, 
    operationName: string
  ): Promise<T> {
    const startTime = performance.now();
    
    try {
      const result = await operation();
      const duration = performance.now() - startTime;
      
      if (duration > 5000) { // Log slow operations
        console.warn(`Slow operation detected: ${operationName} took ${duration.toFixed(2)}ms`);
      }
      
      return result;
    } catch (error) {
      const duration = performance.now() - startTime;
      console.error(`Operation failed: ${operationName} after ${duration.toFixed(2)}ms`, error);
      throw error;
    }
  }

  // Retry mechanism
  static async withRetry<T>(
    operation: () => Promise<T>,
    maxRetries: number = 3,
    delay: number = 1000
  ): Promise<T> {
    let lastError: any;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        
        if (attempt === maxRetries) {
          throw lastError;
        }
        
        // Exponential backoff
        const backoffDelay = delay * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, backoffDelay));
        
        console.warn(`Retrying operation (${attempt}/${maxRetries}) after ${backoffDelay}ms delay`);
      }
    }
    
    throw lastError;
  }

  // Circuit breaker pattern for external services
  static createCircuitBreaker(
    service: string,
    failureThreshold: number = 5,
    resetTimeout: number = 60000
  ) {
    let failures = 0;
    let lastFailureTime = 0;
    let state: 'closed' | 'open' | 'half-open' = 'closed';

    return async <T>(operation: () => Promise<T>): Promise<T> => {
      const now = Date.now();

      if (state === 'open') {
        if (now - lastFailureTime > resetTimeout) {
          state = 'half-open';
        } else {
          throw new Error(`Circuit breaker is open for ${service}`);
        }
      }

      try {
        const result = await operation();
        
        if (state === 'half-open') {
          state = 'closed';
          failures = 0;
        }
        
        return result;
      } catch (error) {
        failures++;
        lastFailureTime = now;

        if (failures >= failureThreshold) {
          state = 'open';
          toast.error(`服务${service}暂时不可用，请稍后重试`);
        }

        throw error;
      }
    };
  }
}

// Export singleton instance
export const errorService = ErrorService.getInstance();