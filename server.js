'use strict';

const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Ejs = require('ejs');
const Inert = require('@hapi/inert');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register(Vision);
    await  server.register(Inert);

    server.views({
        engines: {
            ejs: Ejs
        },
        relativeTo: __dirname,
        path: 'views',
        partialsPath: 'views/partials',
        layoutPath: 'views/layouts',
        allowInsecureAccess: true,
        allowAbsolutePaths: true
        // layout: true,
        // layoutPath: './views/layouts/'
    });

    // Load Routes
    const routes = require('./routes/');
    server.route(routes);
    // Routes Loaded

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();