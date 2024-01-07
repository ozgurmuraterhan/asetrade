module.exports = {
    apps: [
        {
            name: 'websitenextly',
            cwd: '../nextly/website/',
            script: 'npm',
            args: 'start',
        },
        {
            name: 'adminnextly',
            cwd: '../nextly/admin/',
            script: 'npm',
            args: 'start',
        },
        {
            name: 'backendnextly',
            cwd: '../nextly/backend/',
            script: 'nodemon',
            args: 'server.js',
        },

        {
            name: 'website',
            cwd: './website/',
            script: 'npm',
            args: 'start',
        },
        {
            name: 'admin',
            cwd: './admin/',
            script: 'npm',
            args: 'start',
        },
        {
            name: 'backend',
            cwd: './backend/',
            script: 'nodemon',
            args: 'server.js',
        },
    ],
};