
export const bubbleSort = (arr)=>{
   const len = arr.length
   const dupArr = [...arr]
   const output ={}


   for(let i =0; i<len; i++){
    output[`${i}`] = {
        sorted : "",
        innerSort : {}
    }
       for(let j=0; j<len-i-1; j++){
           if(dupArr[j]>dupArr[j+1]){
               let temp = dupArr[j]
               dupArr[j] = dupArr[j+1]
               dupArr[j+1] = temp
           }
           output[`${i}`].innerSort[j] = dupArr.toString()
      }
      output[`${i}`].sorted = dupArr.toString()
    }
    return output
}

