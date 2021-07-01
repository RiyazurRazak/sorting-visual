<template>
   <div class="root">
      <h1>{{sortType}}</h1> 
      <h3 class="test-array">Array To Be Sorted: {{initialArray}}</h3>
      <br />
       <el-collapse  v-for="(data,index) in sortedData" :key="index" > 
          <el-collapse-item :title="`Iteration ${parseInt(index)+1}`" name="1">
            <h3>Results  : {{data.sorted}}</h3>
            <ul v-for="(data,index) in data.innerSort" :key="index">
                <li class="inner-array">Inner-Iteration {{parseInt(index)+1}}: {{data}}</li>
            </ul>
         </el-collapse-item>
      </el-collapse>

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
@media screen and (max-width: 835px) {
    .root{
        height: 100%;
        overflow-y: hidden;
    }
}

</style>