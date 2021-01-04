const pluginConf = require('./config/plugin.js');
const navConf = require('./config/nav.js');
const headConf = require('./config/head.js');
const sidebarConf = require('./config/sidebar.js');

module.exports = {
    title: 'Java 全栈知识体系',
    description: 'Java, 算法, 数据库, 微服务, 分布式, 中间件, 架构设计, 开发工具, 源码学习, 开源项目...',
    head: headConf,
    base: '/',
    themeConfig: {
        docsRepo: 'ldbmcs/java-Docs',
        docsDir: '/',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: navConf,
        sidebar: sidebarConf
    },
    plugins: pluginConf,
}
