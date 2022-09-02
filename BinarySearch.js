// iteratively

const arr = [1, 3, 5, 7, 8, 9];
function func(arr,x){
    let start=0;
    let end=arr.length-1;
    let mid=Math.floor((start+end)/2);
    if(arr[mid]==x){
        console.log(mid);
    }else{
        while(arr[mid]!==x){
            if(arr[mid]>x){
                mid=mid-1;
            }
            else{
                mid=mid+1
            }
        }
        console.log(mid)
    }
}

func(arr,8)

//recursion

