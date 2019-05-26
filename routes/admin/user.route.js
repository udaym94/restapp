module.exports = [
    { method: 'GET', path: '/', handler: function (request, h) {
        // console.log('3', request);
        return h.view('login', {
            title: 'Login',
            message: 'Hello Ejs!'
        });
        // return 0;
    } },
]