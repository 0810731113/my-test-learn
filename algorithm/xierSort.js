const shellSort = arr => {
    let len = arr.length , temp , gap = 1 ;

    console.time(`希尔排序开始`);
    while(gap < len / 3){
        gap = gap * 3 + 1;

    }

    for(gap; gap > 0; gap = Math.floor(gap  / 3)){
        for(let i = gap; i < len; i++){
            temp = arr[i];
            let j = i - gap;
            for(; j >= 0 && arr[j] > temp; j -= gap){
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
            console.log(`arr :`, arr);
        }
    }
    console.log(`希尔排序结束`);
    return arr;
}

// 测试
const array = [35, 33, 42, 10, 14, 19, 27, 44];
console.log('原始array:', array);
const newArr = shellSort(array);
console.log('newArr:', newArr);

