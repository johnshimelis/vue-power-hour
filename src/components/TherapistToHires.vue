<template >
  <app-nav></app-nav> 
  <div class="online_therapist">

    <h2>We are hiring!</h2>
    <p>Right now we are looking for new therapy practitioners 
      to join our online therapy network! Work from home, during hours that suits you.</p>
      <img src="@/img/online_therapist1.jpg" />
      <button class="btn btn-warning">APPLY NOW</button>
      <button class="btn btn-warning">APPLY NOW</button>
     

      <div class="whyJoined">
      
        <h2>Why should I join the Power Hour Online-Therapy System Team?</h2>
        <span><i class="far fa-clock"></i></span>
        <div class="reason1">
        <h1>Flexibility</h1>
        <p>There’s no hassle with going to an office. Instead you can work with all of your 
          clients from the comfort of your home, during hours that suits you.
        </p>
        </div>

        <div class="reason2">
          <span><i class="fas fa-dollar-sign"></i></span>
          <h1>Additional income</h1>
          <p>Your work at Power Hour Online Therapy System can be a major source of income or 
            just a supplement to your current day-to-day therapy job.
          </p>
        </div>

        <div class="reason3">
          <span><i class="far fa-star"></i></span>
          <h1>Top Quality Therapy</h1>
          <p>You’ll be using a therapy platform that is based on well-researched therapy treatments.
             Helping your clients via worksheets, chats and messages.</p>
          </div>
          
          <div class="reason4">
            <span><i class="far fa-check-circle"></i></span>
            <h1>No hassle</h1>
            <p>We’ll take care of acquiring clients, billing, administrations etc so
               that you can focus on your clients 100%.
            </p>
          </div>

          <div class="reason5">
            <span><i class="fas fa-calendar-alt"></i></span>
            <h1>Easy notification system</h1>
            <p>From your dashboard and email notifications you can easily see what clients
               are expecting your feedback and upcoming chats with clients.</p>
            </div>
            
            <div class="reason6">
              <span><i class="fas fa-lock"></i></span>
              <h1>Secure & confidential</h1>
              <p>All the communication is anonymously stored on our secure server, 
                where only you and your client can access it.
              </p>
             
              
            </div>
            
      </div>
    
    
   
   
      
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
.online_therapist button{
  margin-left: -1260px;
  width: 200px;
  height: 60px;
  border-radius: 20px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
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
