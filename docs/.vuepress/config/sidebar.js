module.exports =
    [
        {
            title: "Java",
            collapsable: false,
            path: '/md/java/',
            sidebarDepth: 5,
            children: [
                {
                    title: "JVM",
                    collapsable: false,
                    path: '/md/java/JVM/',
                    sidebarDepth: 3,
                    children: [
                        '/md/java/JVM/java-jvm-class',
                        '/md/java/JVM/java-jvm-classload',
                        '/md/java/JVM/java-jvm-struct',
                        '/md/java/JVM/java-jvm-introduce',
                        '/md/java/JVM/java-jvm-jmm',
                        '/md/java/JVM/java-jvm-gc',
                        '/md/java/JVM/java-jvm-param',
                        '/md/java/JVM/java-jvm-oom'
                    ]
                }
            ]
        }
    ]
