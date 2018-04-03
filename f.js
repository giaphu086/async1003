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

async function tinhDienTich(a, b, c) {
    const tong = await congPromise(a, b).catch(error => {
        throw new Error('Loi cong');
    });
    const tich = await nhanPromise(tong, c).catch(error => {
        throw new Error('Loi nhan');
    });
    const kq = await chiaPromise(tich, 2).catch(error => {
        throw new Error('Loi chia');
    });
    return kq;
}

tinhDienTich(4, 'y', 'x')
.then(result => console.log(result))
.catch(error => console.log(error))
// [1, 2, 3].forEach(async () => {
//     const dt = await tinhDienTich(4, 5, 6);
//     console.log(dt);
// });
// async function start() {
//     for (let i = 0; i < 3; i++) {
//         const dt = await tinhDienTich(4, 5, 6);
//         console.log(dt);
//     }
// }

// start();
