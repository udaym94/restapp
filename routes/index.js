const fs = require('fs');

let  routes = [];

// console.log('5', __dirname);
fs.readdirSync(__dirname, { withFileTypes: true })
    .filter(file => file != 'index.js')
    .forEach(folder => {
        // console.log('9',folder);
        // console.log('10',folder.isDirectory());
        if(folder.isDirectory()){
            let file = fs.readdirSync(`${__dirname}/${folder.name}`);
            // console.log('12', file);
            routes = routes.concat(require(`${__dirname}/${folder.name}/${file}`));
        }
    });

module.exports = routes;