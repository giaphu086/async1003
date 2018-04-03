const request = require('request');

function congPromise(a, b) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function nhanPromise(a, b) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function chiaPromise(a, b) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error.'));
        if (b == 0) return reject(new Error('Divide by zero.'));
        request(url, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function tinhDienTichHinhThang(a, b, h, cb) {
    return congPromise(a, b)
    .then(tong => nhanPromise(tong, h))
    .then(tich => chiaPromise(tich, 2));
}

tinhDienTichHinhThang(4, 5, 6)
.then(result => console.log(result))
.catch(error => console.log(error));

// tinhDienTichHinhThang(4, 5, 'x', (error, result) => {
//     console.log(error || result);
// });

// congPromise(4, 5)
// .then(tong => nhanPromise(tong, 6))
// .then(tich => chiaPromise(tich, 2))
// .then(kq => console.log(kq))
// .catch(error => console.log(error.message));
