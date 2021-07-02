


export const selectionSort = (arr)=>{
    const len = arr.length
    const dupArr = [...arr]
    const output ={}

    for(let i=0; i<len; i++){
        output[`${i}`] = {
            sorted : "",
            innerSort : {}
        }

        let min = i
        for(let j = i+1; j<len; j++){
            if(dupArr[min]>dupArr[j]){
                min = j
            }
        }

        let temp = dupArr[i]
        dupArr[i] = dupArr[min]
        dupArr[min] = temp

        output[`${i}`].sorted = dupArr.toString()
    }

    return output
}