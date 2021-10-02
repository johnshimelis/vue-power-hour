<template >
  <div class="container">
      
    <!-- <img class="therapyImg" src="@/img/therapy.jpg"/> -->
    <!-- <img class="therapyImg2" src="@/img/therapy2.jpg"/> -->
 
    <img class="banner" src="@/img/therapy5.jpg"/>
    <h1 class="heading2">Power Hour Online Therapy System to keep your health and life safe</h1>
    <p class="banner-text">It’s not just chat. It’s a complete toolbox. You get all the support and tools 
      you need to be happier.</p>
      <button class="btn btn-warning" @click="GetStarted">GET STARTED</button>
      <button class="btn btn1 btn-outline-info" @click="howDoesItWork">HOW IT WORKS</button>
      <div class="banner-end">
        <h3>FAIR PRICE ESPECIALLY FOR NEW COMERS</h3>
      </div>
     
      <div class="toolbox">
        <h4>The most complete online therapy toolbox there is :</h4>
        <div class="iconBox">
          <i class="fas fa-user-nurse"></i> 
          <p class="toolbox-name">THERAPIST</p>
        </div>
        
        <div class="iconBox">
          <i class="fas fa-puzzle-piece"></i>
            <p class="toolbox-name">SECTIONS</p>
        </div>
            
        <div class="iconBox">
          <i class="far fa-address-book"></i>
              <p class="toolbox-name">WORKSHEETS</p> 
        </div>
             
       <div class="iconBox">
        <i class="fas fa-comments"></i>
                <p class="toolbox-name">LIVE SESSIONS</p> 
       </div>
               
       <div class="iconBox">
        <i class="fas fa-envelope"></i>
                  <p class="toolbox-name">MESSAGES</p> 
        </div>
                
        <div class="iconBox">
          <i class="fas fa-cloud"></i>
                    <p class="toolbox-name jornal">JORNAL</p>
        </div>
                    
        <div class="iconBox">
          <i class="fas fa-calendar-alt"></i>
          <p class="toolbox-name">ACTIVITY PLAN</p>
        </div>
                      
         <div class="iconBox">
          <i class="fas fa-child"></i>
                        <p class="toolbox-name yoga">YOGA</p>
          </div>
                       
   </div>
   <button class="btn btn-outline-success" id="learn_more" @click="learnMore">LEARN MORE</button>
      
    <div class="banner_2">
    <img class="banner_2" src="@/img/therapy4.jpg"/>
    <div class="aboutPH">
        <h3 class="therapy-header">Online Therapy With Power Hour Therapists</h3>
        <p class="therapy-text">Research and personal experiences show that Power Hour therapist services do help
             people. This kind of therapeutic support with a licensed therapist online is a powerful & effective 
             treatment option for a wide variety of mental illnesses and everyday life challenges. Working with 
             a therapist can reduce symptoms due to depression, anxiety, insomnia, eating disorders, and more. 
             Qualified & experienced therapists can also help strengthen or heal relationships.</p>
         <p class="therapy-text2">
            All therapists currently available on the Power Hour online therapy platform are licensed 
            practitioners. There are many different types of therapists that can help our users deal with a variety of 
            important concerns at a time and location best suited for the user; unlike most traditional therapy 
            options.</p>

    </div>
</div>

<div class="chat">
  <h2>Instant help. On any device, wherever you are in the world</h2>
  <div class="message_img">
    <img src="@/img/message.png">
  </div>
  <div class="message_img2">
    <img src="@/img/message2.jpg">
  </div>

  <p>We know how difficult it can be to get a face-to-face therapy appointment these days. 
    How expensive it can be. How impossible it can feel to squeeze in a visit in your already 
    hectic schedule. How lonely and unsupported you can feel inbetween sessions. And how you
     just seem to forget all the things your therapist told you since that last visit.

    No more. This is therapy on your terms.</p>
   
  <div class="learn_more">
    <button class="btn btn-outline-info" @click="learnMore">LEARN MORE</button>
  </div>
  <div class="sign_up">
    <button class="btn btn-warning" @click="signUp">SIGN UP</button>
  </div>
 
</div>

<div class="footer">
  <div class="footer_title">
    <h1>Power Hour</h1>
    
</div>
<div class="footer_content_1">
 
  <h2>Contact Us</h2>
 
   <span><i class="far fa-question-circle" id="help"></i></span><a href="#"><P class="help">Help Center</P></a>
<span><i class="fab fa-facebook-f" id="fb"></i></span>  <a href="#"><P class="fb">Facebook</P></a>
  <span><i class="fas fa-search" id="about"></i></span><a href="#"><P class="about">About Us</P></a>
</div>
<div class="footer_content_2">
    <h2>Useful Links</h2>
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
 
  export default{
    components :{
 
    },
    
      
    data(){
      return{
  
      
      } 
    },
    methods : {
      learnMore : function(){
        this.$router.push('/how_it_work');
      },
      signUp : function(){
        this.$router.push('/therapist_list')
      },
      howDoesItWork : function(){
        this.$router.push('./how_it_work')
      },
      GetStarted : function(){
      this.$router.push('/therapist_list')
    }
     
     
    }
    }
</script>

<style lang="scss" scoped>
  a{
    text-decoration: none;
  }
  .footer{
    width: 120%;
    margin-top: 300px ;
    margin-left: -115px;
    height: 20%;
    background-color: black;
  }
  .footer_title{
    margin-left: 600px;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-size : 30px;
    font-weight: bold;
    margin-top: 150px;
  }
  .footer_title h1{
    padding-top: 50px;
  }
  .footer_content_1{
    margin-left: 450px;
    margin-top: 50px;
    font-family: 'Times New Roman', Times, serif;
    color: white;
  }
  .footer_content_1 h2{
    font-size : 30px;
  }
  .footer_content_2 h2{
    font-size : 30px;
  }
  .footer_content_1 p{
    font-size : 20px;
  }

  .footer_content_2 p{
    font-size : 20px;
  }
  .footer_content_2{
    margin-left: 800px;
    margin-top: -180px;
    font-family: 'Times New Roman', Times, serif;
    color: white;
  }
  .emergency{
    padding-top: 30px;
    font-family: 'Times New Roman', Times, serif;
    font-size : 25px;
    width: 80%;
    color: white;
  margin-left: 170px;
}
.emergency p{
  text-align: center;
}
.fb{
  margin-top: -28px;
  margin-left: 35px;

}
.about{
  margin-top: -28px;
  margin-left: 35px;
}
.help{
  margin-top: -28px;
  margin-left: 35px;
}
#help{
  font-size : 24px;
}
#fb{
  font-size : 24px;
}
#about{
  font-size : 24px;
}
.chat .sign_up{
  margin-left: -100px;
  margin-top: -60px;
}

.chat .learn_more{
  margin-left: 150px;
  margin-top: 100px;
  color: #000;
  width: 90%;
}
.chat button{
  margin-left: 800px;
  color: #000;
}
  .chat h2{
    font-family: 'Times New Roman', Times, serif;
    font-size: 35px;
    font-weight: bold;
    margin-left: 150px;

  }
  .chat p{
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
    width: 50%;
    margin-top: -500px;
    margin-left: 600px;
  }
  .message_img2 img{
  border-radius:30px;
  width: 40%;
  margin-left: 200px;
  margin-top: -120px;
  
}
.message_img img{
  border-radius:30px;
  width: 50%;
  margin-left: -100px;
  margin-top: 150px;
  }
  .banner_2 h3{
    margin-top: -400px;
    margin-left: -100px;
    font-size: 25px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
  }
  .banner_2 p{
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    margin-left: -100px;

    width: 50%;
  }
  .banner_2 img{
    width: 700px;
    height: 400px;
    margin-left: 420px;
    margin-top: -200px;
    border-radius: 30px;
  }

#learn_more{
margin-left: 450px;
margin-top: 40px;
}

.banner_2{
    
 margin-top: 350px;
 height: 500px;
 width: 1000px;
 margin-left: 70px;
}
.banner{
     height: 500px;
     margin-top: 150px;
    width: 1350px;
    margin-left: -120px;
   }
.heading{
    margin-top: -200px;
    margin-left: 250px;
}
.therapy-header{
margin-left: 250px;
margin-top: 140px;
}
.therapy-text{
    margin-left: 180px;
    width: 70%;
}

.therapy-text2{
    margin-top: 40px;
    margin-left: 180px;
    width: 70%;
}
.heading2{
    margin-top: -400px;
    width: 50%;
    color: white;
    font-size: 30px;
    margin-left: -60px;
    font-weight: bold;
}
.banner-text{
  color: #fff;
  
  width: 40%;
  margin-left: -50px;
  margin-top: 10px;
  font-size: 25px;
  font-family: 'Times New Roman', Times, serif;
}
.btn{
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  margin-left: -40px;
  border-radius: 20px;
  font-size: 18px;
  margin-top: 20px;
  width: 15%;
  height: 45px;


}
.btn:hover{
  background-color: orange;
}
.btn1{
  margin-left: 40px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  border-radius: 20px;
  color: #fff;
  width: 15%;
  height: 45px;
}
.btn1:hover{
  background-color: #000;
  color: #fff;
}
.banner-end{
  margin-left: -120px;
  margin-top: 50px;
  background-color: orange;
  padding: 15px;
  padding-left: -40px;
  width: 1350px;
}
.banner-end h3{
  margin-left: 400px;
  margin-top: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 25px;
  color: #fff;
}
.toolbox h4{
  text-align: center;
  margin-top: 100px;
  font-size: 40px;
  font-weight: lighter;
}
.iconBox{
  margin-top: 70px;
  font-size: 50px;
}
.toolbox-name{
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  margin-left: -15px;
}
.toolbox .iconBox{
  display: inline-block;
  padding: 25px;

 
}
.jornal{
  margin-left: -5px;
}
.yoga{
  margin-left: -8px;
}
.fa-calendar-alt{
  margin-left: 20px;
}

.iconBox:hover{
  font-size: 70px;
}

</style>
