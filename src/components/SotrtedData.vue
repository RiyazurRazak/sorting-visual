<template>
   <div class="root">
      <h1>{{sortType}}</h1> 
      <h3 class="test-array">Array To Be Sorted: {{initialArray}}</h3>
      <br />
      <div v-if="sortType !='Merge Sort'">
       <el-collapse  v-for="(data,index) in sortedData" :key="index" > 
          <el-collapse-item :title="`Iteration ${parseInt(index)+1}`" name="1">
            <h3>Results  : {{data.sorted}}</h3>
            <ul v-for="(data,index) in data.innerSort" :key="index">
                <li class="inner-array">Inner-Iteration {{parseInt(index)+1}}: {{data}}</li>
            </ul>
         </el-collapse-item>
      </el-collapse>
      </div>
     <div v-else>
          <p class="note">Note * In Divide Method First It separates the left array and after finish, it separate right side </p>
         <h3> Sorted Data : {{sortedData.sorted}}</h3>
         <div>
           <div style="display: flex">
               <div style="margin-right: 40px">
                   <p class="bold">left : {{sortedData[0].left}}</p>
                  <p v-for="index in Math.floor((Object.keys(sortedData).length-2)/2)" :key="index">left : {{sortedData[index].left}} | right : {{sortedData[index].right}}</p>
               </div>
               <div>
                   <p class="bold">right : {{sortedData[0].right}}</p>
                  <p v-for="index in Math.floor((Object.keys(sortedData).length-2)/2)" :key="index"> left : {{sortedData[index + Math.floor((Object.keys(sortedData).length-2)/2)].left}} | right : {{sortedData[index + Math.floor((Object.keys(sortedData).length-2)/2)].right}} </p>
               </div>
           </div>
        </div>
     </div>

   </div>    
</template>

<script>
export default {
  data(){
      return {
          sortType : "Choose Any Of The Sort Method Mentioned Below",
          sortedData : {},
          initialArray : [],
      }
  },
  mounted(){
      this.emitter.on("sort-method", data=> this.sortType = data)
      this.emitter.on("sorted-data", data=> this.sortedData = data)
      this.emitter.on("test-array", data=> this.initialArray = data)
  }
}
</script>

<style scoped>
.root{
  margin: 30px;
  height: 72vh;
  overflow-y: scroll;
}
h1{
    color: #212121;
}
.test-array{
    color: #4C4C6D;
}
.inner-array{
    font-weight: 600;
    color: #52006A;
}
.note{
    color: red;
    margin-top: 0;
}
.bold{
    font-weight: 600;
}
@media screen and (max-width: 835px) {
    .root{
        height: 100%;
        overflow-y: hidden;
    }
}

</style>