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

congPromise('x', 5)
.then(result => console.log(result))
.catch(error => console.log(error.message));
