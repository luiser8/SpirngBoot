module.exports = global.config = {
    url: {
        production: false,
        dev: 'http://localhost:8080/api/',
        prod: 'http://localhost:8080/api/'
    },
    headers: {
        production: false,
        dev: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }),
        prod: ''
    }
};