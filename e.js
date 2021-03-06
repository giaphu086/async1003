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
    const tong = await congPromise(a, b);
    console.log('tong =', tong);
    const tich = await nhanPromise(tong, c);
    console.log('tich =', tich);
    const kq = await chiaPromise(tich, 2);
    console.log('kq =', kq);
    return kq;
}

tinhDienTich(4, 5, 6);
tinhDienTich(2, 3, 4);
tinhDienTich(7, 8, 9);

// tinhDienTich(4, 5, 'x')
// .then(kq => console.log(kq))
// .catch(error => console.log(error.message));

function tinhDienTichSync(a, b, c) {
    const tong = a + b;
    console.log('tong =', tong);
    const tich = tong * c;
    console.log('tich =', tich);
    const kq = tich / 2;
    console.log('kq =', kq);
    return kq;
}

// tinhDienTichSync(4, 5, 6);
// tinhDienTichSync(2, 3, 4);
// tinhDienTichSync(7, 8, 9);
