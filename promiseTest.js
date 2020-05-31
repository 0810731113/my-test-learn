function Promise(executor){
    const self = this;
    self.status = 'pending'; //pending -> fulfilled  pending - rejected
    self.value = null;
    self.reason = null;
    self.onFulFilledCb = [];
    self.onRejectedCb = [];

    function resolve(value){
        if(self.status === 'pending'){
            self.status = 'fulfilled';
            self.value = value;
            self.onFulFilledCb.forEach(function(fn){
                fn();
            });
        }
    }

    function reject(reason){
        if(self.status === 'pending'){
            self.status = 'rejected';
            self.reason = reason;
            self.onRejectedCb.forEach(function(fn){
                fn();
            });
        }
    }

    try{
        executor(resolve,reject);
    }catch(e){
        reject(e);
    }
}

Promise.prototype.then = function(onFulfilled,onRejected){
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(value){
        return value;
    }
    onRejected = typeof onRejected === 'function' ? onFulfilled : function(err){
       throw err;
    }

    const self = this;
    let promise2;   //定义一个promise2变量
    if(self.status === 'fulfilled'){
        //onFulfilled();
        promise2 = new Promise(function(resolve,reject){
            setTimeout(function(){
                try{
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2,x,resolve,reject);
                }catch(e){
                   reject(e);
                }
            })
        });


    }
    if(self.status === 'rejected'){
        //onRejected();
        promise2 = new Promise(function(resolve,reject){
            setTimeout(function(){
                try{
                    let x = onRejected(self.reason);
                    resolvePromise(promise2,x,resolve,reject);
                }catch(e){
                    reject(e);
                }
            })
        });
    }

    if(self.status === 'pending'){
        promise2 = new Promise(function(resolve,reject){

            self.onFulFilledCb.push(function(){
                setTimeout(function(){
                    try{
                        onFulfilled(self.value);
                        resolvePromise(promise2,x,resolve,reject);
                    }catch(e){
                        reject(e);
                    }
                })
            });

            self.onRejectedCb.push(function(){
                setTimeout(function(){
                    try{
                        onRejected(self.reason);
                        resolvePromise(promise2,x,resolve,reject)
                    }catch(e){
                        reject(e);
                    }
                });

            });
        });

    }
    return promise2;
};


function resolvePromise(p2,x,resolve,reject){
    if(p2 === x){
     return reject(new TypeError(`循环引用`));
    }

    let called ; //表示是否调用成功或失败
    if(x !== null && (typeof x === 'object' || typeof x === 'function')){
        try{
            let then = x.then;
            if(typeof then === 'function'){
                then.call(x,function(y){
                    if(called) return;
                    called = true;
                    resolvePromise(p2,y,resolve,reject);

                },function(e){
                    if(called) return;
                    called = true;
                    rejected(e);
                })
            }else{
                resolve(x);
            }

        }catch(e){
            if (called) return ;
            called = true;
            reject(e);
        }

    }else{
        resolve(x);
    }

}

Promise.prototype.catch = function(callback){
    return this.then(null,callback);
}

Promise.all = function(items){
    return new Promise(function(resolve,reject){
        let res = [];
        let num = 0;
        let len = items.length;
        for(let i = 0; i < len; i++){
            items[i].then(function(data){
                res[i] = data;
                if(++num === len){
                    resolve(res);
                }
            },reject);

        }
    });
}

Promise.race = function(items){
    return new Promise(function(resolve,reject){
       for(let i = 0; i < items.length; i++){
           items[i].then(resolve,reject);

       }
    })
}

Promise.resolve = function(value){
    return new Promise(function(resolve,reject){
        resolve(value);
    });
}

Promise.reject = function(reason){
    return new Promise(function(resolve,reject){
        reject(reason);

    });
}

Promise.defer = Promise.deferred = function(){
    let def = {};
    def.promise = new Promise(function(resolve,reject){
        def.resolve = resolve;
        def.reject = reject;
    });

    return def;
};


module.exports = Promise;





























































