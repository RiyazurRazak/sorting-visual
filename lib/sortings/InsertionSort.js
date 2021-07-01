


export const insertionSort = (arr)=>{
      
    const len = arr.length
    const dupArr = arr
    const output ={}

    for(let i=1; i<len; i++){
        output[`${i-1}`] = {
            sorted : "",
            innerSort : {}
        }

        let current = dupArr[i]
        let j = i-1

        while(j>=0 && (dupArr[j] > current)){
            dupArr[j+1] = dupArr[j]
            j -=1
        }
        dupArr[j+1] = current
      
        output[`${i-1}`].sorted = dupArr.toString()
        
        
    }
    return output
}