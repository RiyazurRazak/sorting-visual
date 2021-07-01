<template>
  <div class="root">
    <div class="row">
       <button class="button left-btn" @click="generatearrayHandller">Generate Custom Array</button>
     <div class="separator"></div>
       <el-button-group>
          <button class="button" :class="{active : sortMethod === 'Bubble'}" @click="sortMethod='Bubble'">Bubble Sort</button>
          <button class="button" :class="{active : sortMethod === 'Selection'}" @click="sortMethod='Selection'" >Selection Sort</button>
          <button class="button" :class="{active : sortMethod === 'Insertion'}" @click="sortMethod='Insertion'">Insertion Sort</button>
           <button class="button" :class="{active : sortMethod === 'Merge'}" @click="sortMethod='Merge'">Merge Sort</button>
       </el-button-group>
    </div>
    <p>Created By <a href="http://riyazurrazak.com/">Riyazur Razak</a></p>
  </div>    

</template>

<script>

  import { ElMessageBox } from 'element-plus';
  import { ElMessage } from 'element-plus';
  import {bubbleSort} from '../../lib/sortings/BubbleSort.js'
  import {selectionSort} from '../../lib/sortings/SelectionSort.js'
  import {insertionSort} from '../../lib/sortings/InsertionSort.js'
  import {mergeSort} from '../../lib/sortings/MergeSort.js'


export default {
  data(){
      return{
          sortMethod : "",
          array : [],
      }
  },
  mounted(){
      this.generateInitialArrayHandller()
  },
  watch : {
    sortMethod : "sortHandller"
  },
  methods: {

      generateInitialArrayHandller(){
          for(let i =0; i<10; i++){
             this.array.push(Math.round(Math.random()*1000))
          }
          this.emitter.emit("test-array", [...this.array])
      },
      generatearrayHandller(){
         ElMessageBox.prompt("Enter Your Array Elements To Sort(separate elements with ,)", "Generate New Array",{
             confirmButtonText: "Generate New Array",
             cancelButtonText: "Cancel",
         }).then((e)=>{
             this.array = e.value.split(",").map((num)=> num.length> 0 && parseInt(num)).filter((val)=> Number.isInteger(val))
             this.emitter.emit("test-array", [...this.array])
             this.sortHandller(this.sortMethod)
             ElMessage({
                 type: "success",
                 message : "New Array Generated"
             })
         }).catch(()=>{
             ElMessage({
                 type: "error",
                 message: "Oops! Something Error"
             })
         })
      },
      sortHandller(sortMethod){
          this.emitter.emit('sort-method', sortMethod+" Sort")
          console.log("emmit")
          switch (sortMethod) {
              case "Bubble":
                 this.emitter.emit("sorted-data", bubbleSort(this.array))
                break;
              case "Selection":
                   this.emitter.emit("sorted-data", selectionSort(this.array))
                break;  
              case "Insertion":
                  this.emitter.emit("sorted-data", insertionSort(this.array))  
                 break;
              case "Merge" :
                    this.emitter.emit("sorted-data", mergeSort(this.array))    
                    break;
              default:
                  break;
          }
      }
  }
}
</script>

<style scoped>
.root{
    position: absolute;
    bottom: 0;
    width: 90%;
    padding: 20px 5%;
    padding-bottom: 0px;
    background-color: cadetblue;
    text-align: center;
    height: 20vh;
}
.row{
   display: flex;
   align-items: center;
   justify-content: center;
}
.button{
    color: #fff;
    background-color: #4C4C6D;
    padding: 16px 24px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 10px;
}
.active{
    background-color: brown !important;
}
.separator{
    border-right: 2px solid #fff;
    height: 40px;
    margin: 10px;
}
p{
    color: #fff;
}
@media screen and (max-width:835px) {
    .root{
        height: fit-content;
        position: relative;
    }
    .row{
        flex-direction: column;
        background-color: cadetblue;
    }
    .separator{
        display: none;
    }
    .button{
        margin: 20px;
    }
    p{
        margin-bottom: 0px;
        padding-bottom: 10px;
    }
}

</style>