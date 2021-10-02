<template >
  <app-nav></app-nav> 
  <div class="online_therapist">

    <h2>We are hiring!</h2>
    <p>Right now we are looking for new therapy practitioners 
      to join our online therapy network! Work from home, during hours that suits you.</p>
      <img src="@/img/online_therapist3.jpg" />
      <button class="btn btn-warning" id="headerBtn" @click="goToCreateAccount">APPLY NOW</button>
    
     

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
            <button class="btn btn-warning" id="footerBtn" @click="goToCreateAccount"> APPLY NOW</button> 
      </div>
      <div class="note">
      <p>Note: Practitioners are not employees but independent therapy providers.</p>
      </div>
      
  c

   <div class="get_started">
     <h1>How do I get started?</h1>
     <div class="get_header">
     <h2 class="header1">1.</h2>
     <h2 class="header2">2.</h2>
     </div>
     <div class="get_text">
     <p class="para1">Complete the application steps, including your highest clinical license in your state(s)/country.</p>
     <p class="para2">When your application has been approved you’ll get the necessary training to start working right away.</p>
     </div>

     <div class="get_header">
     <h2 class="header3">3.</h2>
     <h2 class="header4">4.</h2>
    </div>

     <div class="get_text">
     <p class="para3">Choose your work hours and get matched with clients in your selected states and countries.</p>
     <p class="para4">Start working from home (or wherever you prefer being) using our user-friendly online therapy platform!</p>
   </div>
   </div>
   <button class="btn btn-warning" id="get_started" @click="goToCreateAccount">APPLY NOW</button>
  
   <div class="footer">
    <div class="footer_title">
      <h1>Power Hour</h1>
      
  </div>
  <div class="footer_content_1">
   
    <h3>Contact Us</h3>
   
     <span><i class="far fa-question-circle" id="help"></i></span><a href="#"><h4 class="help">Help Center</h4></a>
  <span><i class="fab fa-facebook-f" id="fb"></i></span>  <a href="#"><h4 class="fb">Facebook</h4></a>
    <span><i class="fas fa-search" id="about"></i></span><a href="#"><h4 class="about">About Us</h4></a>
  </div>
  <div class="footer_content_2">
      <h3>Useful Links</h3>
      <a href="#"><P>How it Works</P></a>
      <a href="#"><P>Reviews</P></a>
      <a href="#"> <P>Terms and Conditions</P></a>
      <a href="#"> <P>Privacy Policy</P></a>
  </div>
  <div class="emergency">
  <p><code>Emergency: </code>If you or any other person are feeling suicidal or are in immediate 
    crisis - don't use this site. <a href="#">These resources</a> can provide you with immediate 
    help worldwide
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
      goToCreateAccount : function(){
        this.$router.push('/create_account');
      }
     
    }
    }
</script>

<style lang="scss" scoped>
  .footer{
    width: 110%;
    margin-left: -115px;
    height: 20%;
    background-color: black;
  }
  .footer_title{
    margin-left: 650px;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-size : 40px;
    font-weight: bold;
    margin-top: 150px;
  }
  .footer_title h1{
    padding-top: 50px;
    font-size: 40px;
  }
  .footer_content_1{
    margin-left: 450px;
    margin-top: 100px;
    font-family: 'Times New Roman', Times, serif;
    color: white;
  }
  .footer_content_1 h3{
    font-size: 40px;
  }
  .footer_content_2 h3{
    font-size : 40px;
  }
  .footer_content_1 h4{
    font-size : 30px;
  }

  .footer_content_2 p{
    font-size : 20px;
  }
  .footer_content_2{
    margin-left: 800px;
    margin-top: -250px;
    font-family: 'Times New Roman', Times, serif;
    color: white;
  }
  .emergency{
    padding-top: 30px;
    font-family: 'Times New Roman', Times, serif;
    font-size : 25px;
    width: 200%;
    color: white;
  margin-left: 170px;
}
.emergency p{
  text-align: center;
}
.fb{
  margin-top: -30px;
  margin-left: 35px;

}
.about{
  margin-top: -28px;
  margin-left: 35px;
}
.help{
  margin-top: -30px;
  margin-left: 35px;
}
#help{
  font-size : 24px;
  margin-top: 40px;
}
#fb{
  font-size : 24px;
  margin-top: 20px;
}
#about{
  font-size : 24px;
  margin-top: 20px;
}
  #get_started{
    margin-top: 120px;
    width: 300px;
  height: 60px;
  border-radius: 20px;
  margin-left: 500px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  }
  .get_header .header2 {
     margin-left: 700px;
     margin-top: -80px;
  }
  .get_header .header4 {
     margin-left: 700px;
     margin-top: -80px;
  }
  .get_text .para1{
    margin-left: 100px;
  }
  .get_text .para3{
    margin-left: 100px;
  }
  .get_text .para4{
    margin-left: 700px;
    margin-top: -150px;
  }
  .get_text .para2{
    margin-left: 700px;
    margin-top: -150px;
  }
  .get_started{
    width: 100%;
  }
  .get_started h1{
    margin-top: 150px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  .get_started h2{
    font-family: 'Times New Roman', Times, serif;
    font-size: 25x;
    font-weight: bold;
    color: grey;
  }
  .get_started p{
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    margin-left: 100px;
  }
  .dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active {
  background-color: #717171;
}
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 5.5s;
  animation-name: fade;
  animation-duration: 5.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

  #two{
    margin-top: -20px;
  }
  #leftQ{
margin-left: 450px;
  padding-top: 50px;
  }
  #rightQ{
margin-left: 880px;
  padding-top: -100px;
  margin-top: -100px;
  font-size: 25px;
  }
  .therapist_sample{
    margin-top: 200px;
    font-size: 25px;
  }
  .therapist_sample h3{
    font-size: 40px;
    text-align: center;
    font-family: 'Times New Roman', Times, seri25
  }
  .therapist_sample h5{
    font-size: 25px;
    margin-left: 500px;
    margin-top: 30px;
    font-family: 'Times New Roman', Times, serif;
    width: 50%;
  }
  .therapist_sample h4{
    
    font-size: 30px;
    margin-left: 500px;
    margin-top: -150px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
  }
  .therapist_sample #img{
    width: 15%;
    margin-left: 100px;
    margin-top: 150px;
    border-radius: 100%;
     overflow: hidden;
    height: 150px;

  }
  .note {
    width: 180%;
    text-align: center;
    margin-left: 200px;
    margin-top: 100px;
  }
  #footerBtn{
    margin-top: 120px;
    width: 300px;
  height: 60px;
  border-radius: 20px;
  margin-left: 500px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  }
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
