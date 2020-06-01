const syncFun = (second) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(second);
            resolve();
        },second * 1000);
    })
}

//
const syncFunArr = [2,8,4,6,4];

//依次输出 2,4,8,,6     //同一时间只能执行两个函数，直到最后

function excuter(funcArr){
    const arr = funcArr;
    let current = -1;

    const loop = (num) => {
        syncFun(arr[num]).then((res) => {
            if(current < arr.length - 1){
                loop(++current);
            }
        });
    };
    loop(++current);
    loop(++current);

}

excuter(syncFunArr);
