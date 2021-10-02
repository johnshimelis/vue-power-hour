<template >
    <app-nav></app-nav> 
    <div class="online_therapist">
        <button class="btn btn-info" id="warning">Apply </button>
        <button class="btn btn-warning" id="warning">Apply now</button>
        <button class="btn btn-warning" id="warning">Apply now</button>
      <h2>We are hiring!</h2>
      <p>Right now we are looking for new therapy practitioners 
        to join our online therapy network! Work from home, during hours that suits you.</p>
        <img src="@/img/online_therapist1.jpg" />
        <button class="btn btn-info">Apply now</button>
        <button class="btn btn-warning" id="warning">Apply now</button>
     
       
  

    </div>
  </template>
  <script>
   import Nav from '../components/Nav_Only.vue'
    export default{
      components :{
        'app-nav' : Nav,
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
   
  .online_therapist{
    width: 100%;
  }
  .online_therapist h2{
    font-size: 60px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    margin-left: 100px;
    margin-top: 140px;
  }
  .online_therapist p{
    width: 40%;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    margin-left: 30px;
    margin-top: 30px;
  
  }
  .online_therapist img{
    margin-left: 600px;
    margin-top: -250px;
    width: 700px;
    border-radius: 20px;
    height: 400px;
  }

  .whyJoined h2{
    font-family: 'Times New Roman', Times, serif;
    font-size: 40px;
    text-align: center;
    margin-top: 200px;
    margin-left: 20px;
  }
  .whyJoined h1{
    font-family: 'Times New Roman', Times, serif;
    font-size: 40px;
   
    margin-top: 20px;
    margin-left: 120px;
  }
  .whyJoined p{
    margin-left: 120px;
  }
  .whyJoined .far{
    font-size: 80px;
    margin-left: 120px;
    margin-top: 100px;
  }
  .whyJoined .fas{
    font-size: 80px;
    margin-left: 120px;
    margin-top: -100px;
  }
  .whyJoined .reason2{
    margin-left : 700px;
    width  : 90%;
    margin-top : -300px;
  }
  .whyJoined .reason4{
    margin-left : 700px;
    width  : 80%;
    margin-top : -470px;
  }
  .whyJoined .reason6{
    margin-left : 700px;
    width  : 80%;
    margin-top : -350px;
  }
  .whyJoined .reason5{
    
    width  : 80%;
    margin-top : 200px;
  }
  </style>
  