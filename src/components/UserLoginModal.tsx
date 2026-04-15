import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  UserPlus,
  LogIn,
  X,
  Shield
} from 'lucide-react';
import { useAcademicTheme } from './AcademicTheme';

interface UserLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: (credentials: LoginCredentials) => void;
  onRegister?: (userData: RegisterData) => void;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  institution: string;
}

const UserLoginModal: React.FC<UserLoginModalProps> = memo(({ 
  isOpen, 
  onClose, 
  onLogin, 
  onRegister 
}) => {
  const { currentTheme } = useAcademicTheme();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState<LoginCredentials>({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    institution: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // 模拟登录过程
      await new Promise(resolve => setTimeout(resolve, 1500));
      onLogin?.(loginData);
      onClose();
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // 模拟注册过程
      await new Promise(resolve => setTimeout(resolve, 2000));
      onRegister?.(registerData);
      onClose();
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForms = () => {
    setLoginData({ email: '', password: '' });
    setRegisterData({ name: '', email: '', password: '', institution: '' });
    setShowPassword(false);
  };

  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    resetForms();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.background.paper}f5, ${currentTheme.background.secondary}f0)`,
            border: `1px solid ${currentTheme.primary[300]}60`
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 头部 */}
          <div className="relative p-6 pb-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                color: currentTheme.text.secondary,
                backgroundColor: `${currentTheme.background.overlay}40`
              }}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`
                }}
              >
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold mb-2" style={{ color: currentTheme.text.primary }}>
                {isLoginMode ? '用户登录' : '用户注册'}
              </h2>
              <p className="text-sm" style={{ color: currentTheme.text.secondary }}>
                {isLoginMode 
                  ? '登录访问钙钛矿研究平台' 
                  : '创建账户开始您的研究之旅'
                }
              </p>
            </div>
          </div>

          {/* 表单内容 */}
          <div className="px-6 pb-6">
            {isLoginMode ? (
              // 登录表单
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: currentTheme.text.primary }}>
                    邮箱地址
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: currentTheme.text.secondary }} />
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                      style={{
                        background: `${currentTheme.background.paper}80`,
                        color: currentTheme.text.primary,
                        borderColor: `${currentTheme.primary[300]}40`
                      }}
                      placeholder="请输入邮箱地址"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: currentTheme.text.primary }}>
                    密码
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: currentTheme.text.secondary }} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginData.password}
                      onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                      className="w-full pl-10 pr-12 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                      style={{
                        background: `${currentTheme.background.paper}80`,
                        color: currentTheme.text.primary,
                        borderColor: `${currentTheme.primary[300]}40`
                      }}
                      placeholder="请输入密码"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded transition-colors"
                      style={{ color: currentTheme.text.secondary }}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.primary[500]}, ${currentTheme.secondary[500]})`,
                    boxShadow: `0 4px 15px ${currentTheme.primary[500]}40`
                  }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      登录中...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4" />
                      登录
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              // 注册表单
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: currentTheme.text.primary }}>
                    姓名
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: currentTheme.text.secondary }} />
                    <input
                      type="text"
                      value={registerData.name}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                      style={{
                        background: `${currentTheme.background.paper}80`,
                        color: currentTheme.text.primary,
                        borderColor: `${currentTheme.primary[300]}40`
                      }}
                      placeholder="请输入真实姓名"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: currentTheme.text.primary }}>
                    邮箱地址
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: currentTheme.text.secondary }} />
                    <input
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                      style={{
                        background: `${currentTheme.background.paper}80`,
                        color: currentTheme.text.primary,
                        borderColor: `${currentTheme.primary[300]}40`
                      }}
                      placeholder="请输入邮箱地址"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: currentTheme.text.primary }}>
                    研究机构
                  </label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: currentTheme.text.secondary }} />
                    <input
                      type="text"
                      value={registerData.institution}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, institution: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                      style={{
                        background: `${currentTheme.background.paper}80`,
                        color: currentTheme.text.primary,
                        borderColor: `${currentTheme.primary[300]}40`
                      }}
                      placeholder="请输入研究机构名称"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: currentTheme.text.primary }}>
                    密码
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: currentTheme.text.secondary }} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={registerData.password}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                      className="w-full pl-10 pr-12 py-3 rounded-xl border transition-all duration-200 focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                      style={{
                        background: `${currentTheme.background.paper}80`,
                        color: currentTheme.text.primary,
                        borderColor: `${currentTheme.primary[300]}40`
                      }}
                      placeholder="请输入密码"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded transition-colors"
                      style={{ color: currentTheme.text.secondary }}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.secondary[500]}, ${currentTheme.primary[500]})`,
                    boxShadow: `0 4px 15px ${currentTheme.secondary[500]}40`
                  }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      注册中...
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4" />
                      注册账户
                    </>
                  )}
                </motion.button>
              </form>
            )}

            {/* 切换模式 */}
            <div className="mt-6 text-center">
              <div className="text-sm" style={{ color: currentTheme.text.secondary }}>
                {isLoginMode ? '还没有账户？' : '已有账户？'}
                <button
                  onClick={switchMode}
                  className="ml-2 font-semibold hover:underline transition-colors"
                  style={{ color: currentTheme.primary[400] }}
                >
                  {isLoginMode ? '立即注册' : '立即登录'}
                </button>
              </div>
            </div>

            {/* 演示提示 */}
            <div 
              className="mt-4 p-3 rounded-lg border"
              style={{
                backgroundColor: `${currentTheme.primary[500]}10`,
                borderColor: `${currentTheme.primary[300]}30`
              }}
            >
              <div className="text-xs text-center" style={{ color: currentTheme.text.secondary }}>
                💡 演示模式：您可以使用任意邮箱和密码进行体验
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

UserLoginModal.displayName = 'UserLoginModal';

export { UserLoginModal };