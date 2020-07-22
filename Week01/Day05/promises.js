let promiseR = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Done"), 1000)
}).then(result => console.log(result),
    error => console.log(error)).catch(error => console.log(error))
    .finally(()=> console.log("finally"));

let promiseE = new Promise(function (resolve, reject) {
    setTimeout(() => reject("Error"), 1000)
}).then(result => console.log(result),
    error => console.log(error))
    .catch(error => console.log(error))
    .finally(()=> console.log("finally"));

;

// resolve(value), reject(error) --- callbacks

