// const wordArr;

let promiseArr = (function () {
    const wait = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    };


    function getData(a, b, c) {
        return wait(1000)
            .then(() => {
                return stringCheck(a , b , c);
            }).then((shouldResolve) => {
                if (shouldResolve) {
                    return Promise.resolve([a + b + c]);
                } else {
                    return Promise.reject(new Error(`Error adding values ${a} and ${b} and ${c}.`));
                }
            });
    }
    function getBang(a, b, c){
        return wait(1000)
        .then(() => {
            return stringCheck(a , b, c);
        }).then((shouldResolve) => {
        if(shouldResolve){
            return Promise.resolve([`${a} "!" , ${b} "!", ${c}"!"`]);
        }else{
            return Promise.reject(new Error(`Error adding values ${a} and ${b} and ${c}.`));
        }
        });
    }

    function getBang(a, b, c) {
        return wait(1000)
            .then(() => {
                return stringCheck(a, b, c);
            }).then((shouldResolve) => {
                if (shouldResolve) {
                    return Promise.resolve([]);
                } else {
                    return Promise.reject(new Error(`Error adding values ${a} and ${b} and ${c}.`));
                }
            });
    }

    function stringCheck(a , b , c){
        return typeof a !== "undefined" && typeof b !== "undefined" && typeof c !== "undefined"
    }


    return {getData,getBang};
})();