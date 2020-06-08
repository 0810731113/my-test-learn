const heapSort = array => {
    console.log(`堆排序开始`);
    for(let i = Math.floor(array.length / 2 - 1); i >= 0 ; i--){
        heapify(array,i,array.length);
    }
    for(let i = array.length - 1; i > 0; i--){
        swap(array,0,i);
        heapify(array,0,i);
    }

    console.log(`堆排序结束`);
    return array;
}

const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const heapify = (array,i,length) => {
    let temp = array[i];
    for(let j = 2 * i + 1; j < length; j = 2 * j + 1){
        temp = array[i];
        if(j+ 1 < length && array[j] < array[j + 1]){
            j++;
        }
        if(temp < array[j]){
            swap(array,i,j);
            i = j;
        }else{
            break;
        }
    }
}

const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.log('原始array:', array);
const newArr = heapSort(array);
console.log('newArr:', newArr);
