# 钙钛矿 GNN 预测系统部署指南

本文档提供适合公开仓库的通用部署方式，不包含本机 IP、局域网地址或个人目录路径。

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动 Web 开发环境

```bash
npm start
```

### 启动 Electron 开发环境

```bash
npm run electron-dev
```

### 构建生产版本

```bash
npm run build
```

## 静态站点部署

该项目的前端部分可构建为静态资源，适合部署到常见前端托管平台。

### 使用 `serve` 本地预览生产构建

```bash
npm run build
npx serve -s build -l 3000
```

### Nginx 反向代理示例

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## 云平台部署

### Vercel

```bash
vercel --prod
```

### Netlify

```bash
npm run build
```

然后将 `build/` 目录部署到 Netlify。

### GitHub Pages

如需部署到 GitHub Pages，建议先根据仓库地址调整 `homepage` 字段，再添加部署脚本。

示例：

```json
{
  "homepage": "https://your-name.github.io/your-repo"
}
```

## Electron 打包

### 构建桌面应用

```bash
npm run dist
```

### 仅构建 Windows 安装包

```bash
npm run dist-win
```

### 使用脚本打包

```bash
./package-desktop.sh
```

## Docker 示例

如需容器化部署，可参考以下基础 `Dockerfile`：

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
```

## 公开发布前建议

- 配置正式域名和 HTTPS
- 根据仓库实际情况补充许可证文件
- 检查是否仍包含本地日志、构建产物和临时脚本
- 如需长期演示，建议使用静态托管或云服务器，而不是直接暴露开发服务
