<template >
  <div class="container">
    <app-nav></app-nav>
    <home></home>
   
    

</div>
</template>
<script>
 

 import Nav from '../components/Nav_Therapist.vue'
import Home from '../components/Home.vue'
  export default{
    components :{
        'app-nav' : Nav,
        'home' : Home
       
      
    },
    
      
    data(){
      return{
     
      } 
    },
    methods : {
     
    }
    }
</script>

<style lang="scss" scoped>

</style>