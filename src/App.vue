<template>
  <Main />
  <Footer />
</template>

<script>
import Main from './components/SotrtedData.vue'
import Footer from './components/Bootom.vue'


export default {
  name: 'App',
  components: {
    Main,
    Footer,
  },
  data(){
     return {
       array : null
     }
  },
  mounted(){
    this.emitter.on("array-to-sort", (data)=>{
      console.log(data)
      this.array = data
    })
  }
}
</script>

<style>
html, body{
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
a{
  text-decoration: none;
  color: inherit;
}
.el-message-box{
    margin: 50px 10%;
    width: 80% !important;
}
</style>
