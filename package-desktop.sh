#!/bin/bash

echo "开始打包钙钛矿GNN预测系统为桌面应用..."

# 检查build目录是否存在
if [ ! -d "build" ]; then
    echo "构建目录不存在，正在构建React应用..."
    npm run build
fi

# 检查是否安装了electron
if ! [ -x "$(command -v electron)" ]; then
    echo "正在尝试安装electron..."
    npm install electron --save-dev --no-audit --no-fund || {
        echo "安装electron失败，尝试全局安装..."
        npm install -g electron || {
            echo "无法安装electron，请手动安装"
            exit 1
        }
    }
fi

# 创建简单的打包目录
mkdir -p dist-portable

# 复制必要文件
cp -r build/* dist-portable/
cp electron-simple.js dist-portable/
cp package.json dist-portable/

# 创建启动脚本
cat > dist-portable/start.js << 'EOF'
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1200,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    title: '钙钛矿GNN预测系统 | Perovskite GNN Prediction System',
    show: false,
    backgroundColor: '#0f172a'
  });

  // 加载本地build文件
  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // 简化的菜单
  const template = [
    {
      label: '文件',
      submenu: [
        { label: '退出', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() }
      ]
    },
    {
      label: '视图',
      submenu: [
        { label: '重新加载', accelerator: 'CmdOrCtrl+R', role: 'reload' },
        { label: '开发者工具', accelerator: 'F12', role: 'toggleDevTools' },
        { label: '全屏', accelerator: 'F11', role: 'togglefullscreen' }
      ]
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '关于',
          click: () => {
            const { dialog } = require('electron');
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: '关于钙钛矿GNN预测系统',
              message: '钙钛矿GNN预测系统 v1.0.0',
              detail: '基于图神经网络的钙钛矿发光材料性能预测系统\n\n© 2025 All rights reserved.'
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
EOF

# 更新package.json中的main字段
cat > dist-portable/package.json << 'EOF'
{
  "name": "perovskite-gnn-prediction-system",
  "version": "1.0.0",
  "description": "钙钛矿GNN预测系统桌面版",
  "main": "start.js",
  "scripts": {
    "start": "electron ."
  }
}
EOF

# 创建启动批处理文件（Windows）
cat > dist-portable/run.bat << 'EOF'
@echo off
echo 启动钙钛矿GNN预测系统...
echo.
echo 如果首次运行，请确保已安装Node.js和Electron
echo.
node start.js
pause
EOF

# 创建启动脚本（Linux/Mac）
cat > dist-portable/run.sh << 'EOF'
#!/bin/bash
echo "启动钙钛矿GNN预测系统..."
echo
echo "如果首次运行，请确保已安装Node.js和Electron"
echo
electron .
EOF

chmod +x dist-portable/run.sh

# 创建README
cat > dist-portable/README.md << 'EOF'
# 钙钛矿GNN预测系统 桌面版

## 运行说明

### 前提条件
1. 安装Node.js (版本 14 或更高)
2. 安装Electron: `npm install -g electron`

### 运行方式

#### Windows
双击运行 `run.bat` 文件

#### Linux/Mac
在终端运行: `./run.sh`

或者直接使用: `electron .`

## 系统功能

- 🔬 **性能预测**: 基于GNN的材料性能预测
- 🧪 **材料优化**: 逆向设计和材料筛选  
- 📊 **3D可视化**: 16种材料的交互式3D结构展示
- 🗃️ **材料数据库**: 扩展的钙钛矿材料数据库
- 📈 **数据分析**: 光谱分析和性能对比
- ⚙️ **系统设置**: 个性化配置选项

## 技术栈

- React 18 + TypeScript
- Electron (桌面应用框架)
- Three.js (3D可视化)
- Plotly.js (科学图表)
- Tailwind CSS (样式框架)

---
© 2025 钙钛矿GNN预测系统. All rights reserved.
EOF

echo "打包完成！"
echo "打包文件位于: dist-portable/"
echo ""
echo "使用方法:"
echo "1. 确保已安装 Node.js 和 Electron"
echo "2. 进入 dist-portable 目录"
echo "3. 运行: electron . 或使用提供的启动脚本"