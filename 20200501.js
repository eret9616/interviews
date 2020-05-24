1.PM2底层原理
pm2是对cluster模块的封装，node的cluster模块，有master和worker，之间通过IPC通讯(进程间通信)
nodejs是单线程的，所以利用多进程来发挥cpu能力


2.TypeScript Partial与Readonly源码

type Partial<T> = {
    [P in keyof T]?: T[P];
}

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}