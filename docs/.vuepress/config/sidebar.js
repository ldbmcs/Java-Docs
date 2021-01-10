module.exports =
    [
        {
            title: "Java",
            collapsable: false,
            path: '/md/java/',
            sidebarDepth: 3,
            children: [
                {
                    title: "Java IO/NIO/AIO",
                    collapsable: false,
                    children: [
                        '/md/java/io/',
                        '/md/java/io/java-io-nio-zerocopy'
                    ]
                },
                {
                    title: "Java JVM",
                    collapsable: false,
                    children: [
                        '/md/java/JVM/',
                        '/md/java/JVM/java-jvm-class',
                        '/md/java/JVM/java-jvm-classloader',
                        '/md/java/JVM/java-jvm-struct',
                        '/md/java/JVM/java-jvm-introduce',
                        '/md/java/JVM/java-jvm-jmm',
                        '/md/java/JVM/java-jvm-gc',
                        '/md/java/JVM/java-jvm-zgc',
                        '/md/java/JVM/java-jvm-shenandoah',
                        '/md/java/JVM/java-jvm-param',
                        '/md/java/JVM/java-jvm-oom',
                        '/md/java/JVM/java-jvm-thread-dump',
                        '/md/java/JVM/java-jvm-heap-dump',
                        '/md/java/JVM/java-jvm-debug-tools-list',
                    ]
                }
            ]
        }
    ]
