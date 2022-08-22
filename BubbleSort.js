function BubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log("Sorted array:\n",arr)
}
let arr=[10,50,20,70,40,100,40,30,120,85]
BubbleSort(arr)
