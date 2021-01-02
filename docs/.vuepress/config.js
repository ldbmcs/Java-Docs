const pluginConf = require('./config/plugin.js');
const navConf = require('./config/nav.js');
const headConf = require('./config/head.js');
const sidebarConf = require('./config/sidebar.js');

module.exports = {
    title: 'java 知识体系',
    description: '',
    head: headConf,
    base: '/',
    themeConfig: {
        docsRepo: 'ldbmcs/java-Notes',
        docsDir: '/',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: navConf,
        sidebar: sidebarConf
    },
    plugins: pluginConf,
}
