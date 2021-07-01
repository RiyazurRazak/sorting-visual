
let obj = {}
let onfIndex = 0

export const mergeSort = (arr)=>{
    obj = {}
    onfIndex = 0
    const dupArr = [...arr]
    
    
    const sortedData = splitArray(dupArr)
    obj["sorted"] = [...sortedData]
    console.log(obj)
    return obj
}

const mergeSortHandller = (left, right)=>{
    
    let final = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            final.push(left.shift())
        }else{
            final.push(right.shift())
        }
    }


    return ([...final, ...left, ...right]) 

}

const splitArray = (arr)=>{

    obj[`${onfIndex}`]={
        left : [],
        right : [],
    }
    const mid = Math.floor(arr.length/2)

    if(arr.length === 1){
        return arr;
    }

    const left = arr.splice(0, mid)
    
    console.log(left)
    obj[`${onfIndex}`].left = [...left]
    obj[`${onfIndex}`].right = [...arr]
    onfIndex++

    return mergeSortHandller(splitArray(left), splitArray(arr))
    
}