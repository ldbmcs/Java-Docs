module.exports = [
    {text: '首页', link: '/'},
    {text: '计算机基础', link: '/md/base'},
    {text: 'Java', items: [
            {text: 'Java 基础', link: '/md/java/'},
            {text: 'Java 集合', link: '/md/java/'},
            {text: 'Java 并发', link: '/md/java/'},
            {text: 'Java IO/NIO/AIO', link: '/md/java/'},
            {text: 'Java JVM', link: '/md/java/'},
            {text: 'Java 8+特性', link: '/md/java/'},
            {text: 'Java 设计模式', link: '/md/java/'}
        ]},
    {
        text: '算法', items: [
            {text: '数据结构基础', link: '/md/java/'},
            {text: '内部排序', link: '/md/java/'},
            {text: '算法思想', link: '/md/java/'},
            {text: '领域算法', link: '/md/java/'}
        ]
    },
    {
        text: '数据库', items: [
            {text: 'DB', items: [{text: '数据库原理', link: '/md/database/'}, {text: 'SQL语言', link: '/md/database/'}]},
            {text: 'SQL DB', items: [{text: 'MySQL', link: '/md/database/'}]},
            {text: 'NoSQL DB', items: [{text: 'Redis', link: '/md/database/'}]},
        ]
    },
    {text: '分布式', link: '/md/distributed/'},
    {text: '微服务', link: '/md/micro/'},
    {text: '架构', link: '/md/arch/'},
    {text: '运维|工具', link: '/md/devops/'}
];