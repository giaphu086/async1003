const request = require('request');

function cong(a, b, cb) {
    const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
    request(url, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
    request(url, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error.'));
    if (b == 0) return cb(new Error('Divide by zero.'));
    request(url, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}
