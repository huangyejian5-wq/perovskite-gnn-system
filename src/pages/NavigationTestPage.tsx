import React from 'react';
import { useAcademicTheme } from '../components/AcademicTheme';
import { Atom, Brain, Target, Database, Microscope, Users } from 'lucide-react';

export const NavigationTestPage: React.FC = () => {
  const { currentTheme } = useAcademicTheme();

  const testMenus = [
    {
      key: 'research',
      title: '研究工具',
      icon: Brain,
      items: ['性能预测', '智能优化', '逆向设计', '深度分析']
    },
    {
      key: 'database', 
      title: '数据库',
      icon: Database,
      items: ['文献数据库', '实验数据库', '标准数据库', '高通量计算']
    },
    {
      key: 'visualization',
      title: '可视化',
      icon: Microscope,
      items: ['3D分子查看器', '晶体结构', '性能图谱', '相图分析']
    },
    {
      key: 'collaboration',
      title: '学术协作',
      icon: Users,
      items: ['研究团队', '学术会议', '学术发表', '合作项目']
    }
  ];

  return (
    <div className="min-h-screen p-8" style={{ background: currentTheme.background.primary }}>
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Atom className="w-8 h-8" style={{ color: currentTheme.primary[500] }} />
            <h1 className="text-4xl font-bold" style={{ color: currentTheme.text.primary }}>
              导航菜单测试页面
            </h1>
          </div>
          <p className="text-lg" style={{ color: currentTheme.text.secondary }}>
            验证顶部导航菜单的显示和交互功能
          </p>
        </div>

        {/* 菜单测试区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testMenus.map((menu) => {
            const IconComponent = menu.icon;
            return (
              <div
                key={menu.key}
                className="p-6 rounded-xl border backdrop-blur-xl hover:scale-105 transition-all duration-300"
                style={{
                  background: currentTheme.background.paper,
                  borderColor: `${currentTheme.primary[300]}40`
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${currentTheme.primary[500]}20` }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: currentTheme.primary[500] }} />
                  </div>
                  <h3 className="font-semibold" style={{ color: currentTheme.text.primary }}>
                    {menu.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {menu.items.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm py-1 px-2 rounded hover:bg-black/10 transition-colors cursor-pointer"
                      style={{ color: currentTheme.text.secondary }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* 状态指示器 */}
        <div className="mt-12 text-center">
          <div 
            className="inline-block px-6 py-3 rounded-full border"
            style={{
              background: `${currentTheme.secondary[500]}20`,
              borderColor: `${currentTheme.secondary[500]}40`,
              color: currentTheme.text.primary
            }}
          >
            ✅ 导航菜单系统已优化，支持智能延迟显示和流畅交互
          </div>
        </div>

        {/* 使用说明 */}
        <div className="mt-8 p-6 rounded-xl border" style={{
          background: `${currentTheme.primary[500]}10`,
          borderColor: `${currentTheme.primary[300]}40`
        }}>
          <h4 className="font-semibold mb-3" style={{ color: currentTheme.text.primary }}>
            📝 使用说明：
          </h4>
          <ul className="space-y-2 text-sm" style={{ color: currentTheme.text.secondary }}>
            <li>• 将鼠标悬停在顶部导航菜单项上即可显示下拉菜单</li>
            <li>• 菜单有150ms的智能延迟，防止意外关闭</li>
            <li>• 点击任意菜单项可导航到相应页面</li>
            <li>• 支持键盘导航和无障碍访问</li>
            <li>• 在移动设备上会自动切换为折叠菜单</li>
          </ul>
        </div>
      </div>
    </div>
  );
};