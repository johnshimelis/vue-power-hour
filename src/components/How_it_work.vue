<template >
  <app-nav></app-nav>
  <div class="container">
      <div class="header">
          <h3>How does it works?</h3>
          <div class="overlay">
          <div class="overlay-left">
              <p>Our whole operation is based on cognitive behavioral therapy (CBT), 
                  which is one of the most commonly used psychotherapeutic approaches 
                  for treating mental health problems. CBT helps you to identify, 
                  challenge and overcome your dysfunctional thoughts, behaviors and emotions.</p>

          </div>
          
          <div class="overlay-right">
           
            <video width="600" controls >
              <source src="@/video/therapy.mp4" type="video/mp4">
              <div class="playBtn">
                <span><i class="fab fa-youtube"></i></span>
              </div>
            </video>
          
          </div>
          <div class="getStarted">
            <button class="btn btn-outline-info" id="getStarted" @click="GetStarted">GET STARTED</button>
          </div>
          
      <div class="toolbox">
      
        <div @click="goto('div1')" class="iconBox">
          <i class="fas fa-user-nurse"></i> 
          <p class="toolbox-name" >THERAPIST</p>
        </div>
        
        <div @click="goto('div2')" class="iconBox">
          <i class="fas fa-puzzle-piece"></i>
            <p class="toolbox-name">SECTIONS</p>
        </div>
            
        <div @click="goto('div3')" class="iconBox">
          <i class="far fa-address-book"></i>
              <p class="toolbox-name">WORKSHEETS</p> 
        </div>
             
       <div @click="goto('div4')" class="iconBox">
        <i class="fas fa-comments"></i>
                <p class="toolbox-name">LIVE SESSIONS</p> 
       </div>
               
       <div @click="goto('div5')" class="iconBox">
        <i class="fas fa-envelope"></i>
                  <p class="toolbox-name">MESSAGES</p> 
        </div>
                
        <div @click="goto('div6')" class="iconBox">
          <i class="fas fa-cloud"></i>
                    <p class="toolbox-name jornal">JORNAL</p>
        </div>
                    
        <div @click="goto('div7')" class="iconBox">
          <i class="fas fa-calendar-alt"></i>
          <p class="toolbox-name">ACTIVITY PLAN</p>
        </div>
                      
         <div @click="goto('div8')" class="iconBox">
          <i class="fas fa-child"></i>
                        <p class="toolbox-name yoga">YOGA</p>
          </div>
                       
   </div>
          </div>
          <div class="therapist" ref="div1">
            <div class="therapist-header">
              <h3>QUALIFIED THERAPIST</h3>
            </div>
            <div class="therapist-text">
            <p>
                Your personal therapist will be by your side from start to finish. Guiding
                 you to a happier you through the sections, worksheets, messaging at any 
                 time and live sessions (available as video, voice only or text chat). 
                 You can do this from wherever you are in the world
            </p>
            </div>
            <div class="therapist-img">
              <img src="@/img/therapist2.png">
            </div>
          </div>

          <div class="sections" ref="div2">
            <div class="sections-header">
              <h3>SECTIONS</h3>
            </div>
            <div class="sections-text">
              <p>
                Each section includes all the information and hands-on tools that 
                you need to identify, challenge and overcome your problems. 
                The sections are available as video, audio and/or text.</p>
            </div>
            <div class="sections-img">
              <img src="@/img/section1.jpg">
            </div>
            <div class="sections-img2">
              <img src="@/img/section2.jpg">
            </div>
          </div>
          <div class="worksheet" ref="div3">
            <div class="worksheet-header">
              <h3>WORKSHEETS</h3>
            </div>
            <div class="worksheet-text">
              <p>
                There are several worksheets in each section. 
                In each worksheet you will answer questions
                 and get valuable hands-on tools and tips from
                  your therapist on a daily basis.</p>
            </div>
            
            <div class="worksheet-img2">
              <img src="@/img/worksheet3.png">
            </div>
            
          </div>
          <div class="live_session" ref="div4">
            <div class="live_session_header">
              <h3>LIVE SESSIONS</h3>
            </div>
            <div class="live_session_text">
              <p>
                Each week you will have access to 30 minutes of live chat 
                with your therapist. The live sessions are available as video,
                 voice only or text. This is a perfect opportunity to get instant
                  guidance and support.</p>
            </div>
            
            <div class="live_session_img">
              <img src="@/img/live_session.png">
            </div>
            <div class="live_session_img2">
              <img src="@/img/live_session2.jpg">
            </div>
            
          </div>
          <div class="message" ref="div5">
            <div class="message_header">
              <h3>MESSAGING AT ANY TIME
              </h3>
            </div>
            <div class="message_text">
              <p>
                In addition to communicating with your therapist through
                 the worksheets and the live sessions, you can always send 
                 them a message with any questions or thoughts.</p>
            </div>
            
            <div class="message_img">
              <img src="@/img/message.png">
            </div>
            <div class="message_img2">
              <img src="@/img/message2.jpg">
            </div>
           
            </div>

            <div class="journal" ref="div6">
              <div class="journal_header">
                <h3>JOURNAL</h3>
              </div>
              <div class="journal_text">
                <p>
                  This easy-to-use journal helps you start and end your day in a more 
                  positive way. You will soon notice a big difference in your attitude 
                  towards yourself and life by just writing a few notes each morning and evening.</p>
              </div>
              
              <div class="journal_img">
                <img src="@/img/journal.png">
              </div>
              <div class="journal_img2">
                <img src="@/img/journal2.jpg">
              </div>
             
              
            </div>

            
            <div class="activity" ref="div7">
              <div class="activity_header">
                <h3>ACTIVITY PLAN</h3>
              </div>
              <div class="activity_text">
                <p>
                  This is where you add and schedule the things that will 
                  add extra light into your life! The activity plan also 
                  serves as a written agreement with yourself. It greatly
                   increases the chances of you carrying out your plans!</p>
              </div>
              
              <div class="activity_img">
                <img src="@/img/activity.jpg">
              </div>
            
             
              
            </div>

            <div class="yoga" ref="div8">
              <div class="yoga_header">
                <h3>YOGA - NEW FEATURE!</h3>
              </div>
              <div class="yoga_text">
                <p>
                  This is the latest addition to our ”happiness-toolbox”! 
                  These simple videos are perfect when you need help coping
                   with your depression, anxiety or stress. They are perfect 
                   when you need an instant boost of gratitude and happiness.</p>
              </div>
              
              <div class="yoga_img">
                <img src="@/img/yoga_img.png">
              </div>
           </div>
          
      </div>
<div class="other_header">
  <h1>We're here to help you get happier NOW!</h1>
  <p>Your therapist is ready to start the journey with you today. So what are you waiting for?</p>
  <div class="get_started">
  <button class="btn btn-warning" @click="GetStarted">GET STARTED</button>
</div>
</div>

<div class="next_header">?
  <h1>How do i get started?</h1>
</div>

<div class="note">
  <div class="note_header">
    <h1 class="header1">1.</h1>
    <h1 class="header2">2.</h1>
    
  </div>
  <div class="note_text">
    <p class="para1">Choose your areas of concern to get matched with your therapist.</p>
    <p class="para2">Choose the subscription plan that best suits your needs, starting at just 200 birr/week (20% discount first month).</p>
    </div>
    <div class="note_header">
      <h1 class="header3">3.</h1>
    <h1 class="header4">4.</h1>
   
    </div>
    <div class="note_text">
    <p class="para3">Get instant access to your online therapy program, including sections, worksheets, diary, activity plan and more.</p>
    <p class="para4">Start communicating with your therapist through worksheets, messages and live video, voice or text chat sessions.</p>
    </div>
    <div class="note_header">
      <h1 class="header5">5.</h1>
    </div>
    <div class="note_text">
    <p class="para5">With the help of the tools and the support of your therapist, you will start getting happier, day by day.</p>
  </div>
</div>

<div class="get_started ">
<button class="btn btn-warning" id="start_btn" @click="GetStarted">GET STARTED</button>
</div>
<div class="theaphy_img">
  <img src="@/img/online_therapy.jpg"/>
</div>

<div class="FAQ_container">
  <div class="FAQ_header">
    <h1>Frequently Asked Questions:</h1>
    <h2 class="FAQ_header1">How does it work?</h2>
    <h2 class="FAQ_header2">How do I cancel my subscription?</h2>
    <p class="para1"> Our whole operation is based on cognitive behavioral therapy (CBT),
       which is one of the most commonly used psychotherapeutic approaches 
       for treating mental health problems. CBT helps you to identify, challenge
      and overcome your dysfunctional thoughts, behavior and emotions.</p> 
    
     <p class="para_1_1">By signing up for our services, you will have full access to our online therapy program,
       that is divided into 8 sections. Each section includes all the information and hands-on 
       tools that you need to identify, challenge and overcome your problems. The sections are
        available as video (guided by Dr. Elizabeth Lombardo, PhD), audio and/or text. 
        Your subscription also includes daily contact with your therapist (Monday-Friday), 
        your daily journal and activity plan, yoga & meditation videos and tests to see your progress.
      </p>

        <p class="para_1_1_1">You will have unlimited communication with your therapist through messages
           and the worksheets in each section. If you have a standard or premium subscription, 
           your membership also includes one 30-minute live session per week
            (two sessions per week if you have the premium subscription). The live sessions are available
             as video, voice only or text.
        </p>
             <a href="#" class="how_it_work">How does it work »</a>
      <p class="para2">
        There’s no hassle and no questions asked. You can view the details of your 
        subscription and cancel with a simple click of a button <a href="#">from here »</a>
      </p>
      <h2 class="FAQ_header3">How much time do I need to spend on the program?</h2>
    <h2 class="FAQ_header4">Can I read the previous comments made by my therapist in the worksheets?
    </h2>
    <p class="para4">
      You most certainly can. This is also one of the advantages with online therapy, 
      compared to traditional face-to-face therapy. At a physical appointment, 
      it might be difficult to take in and remember all of the advice and feedback 
      that the therapist gave you. With our services, you can easily read and process
       any previous feedback from your therapist as well as your comments. This is also 
       a great way for you to observe the improvements that you are making during the therapy process.
    </p>
    <p class="para3">
      This is a very individual choice that depends on your needs and preferences.
       Some clients spend several hours per day on their program, while others feel 
       that a few hours per week is sufficient. It is important to remember that you 
       have had your whole life to learn and unconsciously process negative behavior.
        It will take time and considerable practice to reprogram your frame of mind.
    </p>
    <h2 class="FAQ_header5">How many sessions are included?</h2>
    <p class="para5">
      If you have a standard or premium subscription, your membership includes one 30-minute
       live session per week (two sessions per week if you have the premium subscription) and 
       the unlimited use of messages. The live sessions are available as video, voice only or text chat.
    </p>
    <h2 class="FAQ_header6">How long will it take for my therapist to respond to the worksheets?</h2>
    <p class="para6">
      You will get feedback from your therapist within a maximum of 24 hours, Monday-Friday.
       However, your therapist will usually reply to you within a few hours (or even minutes).
        Since the communication through the worksheets is not in real-time, you do not have to schedule
         a session with your therapist. You only write down and read the comments, when it is convenient
          for you. You can schedule one real-time chat session per week with your therapist 
          (available as video, voice only or text), if you have a standard subscription and two per week
           if you have a premium subscription. If you need more live sessions, it can be arranged for a minor
            fee.
    </p>
    <h2 class="FAQ_header7">For how long should I use your services?</h2>
    <p class="para7">
      It really depends on your situation. However, we recommend that you use our services for at 
      least one month in order to have time to process everything. Some clients just need guidance 
      from the program and therapist for a few weeks to get back on the right track. However, others
       need more ongoing help and stay with us for about a year.
    </p>
    <h2 class="FAQ_header8">Need more help?</h2>
    <p class="para8">
      We're here to help you. Therefore, if you have any other questions, please feel free to <a href="#"
      >contact us »</a>
    </p>
    <h2 class="FAQ_header9">I am not able to complete the program right now - can I put my subscription on hold?</h2>
    <p class="para9">
      Whatever the reason, you may put your subscription on hold for as long as needed. Simply <a href="#"
      >contact us »</a>
    </p>
    <h2 class="FAQ_header10">What are the online hours for my therapist?</h2>
    <p class="para10">
      Your therapist is normally online eight hours per day (Monday-Friday). We always try to match you
       with a therapist with working hours that fit your time zone.

     The staff, including customer service, is online and ready to assist you virtually 24 hours per day 
     (Monday-Friday).
    </p>
    
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

<!-- <demo></demo> -->
</template>
<script>
 

import Nav from '../components/Nav_Only.vue'
// import Demo from '../components/demo.vue'
  export default{
    components :{
  'app-nav' : Nav,
  //  'demo' : Demo
      
    },
    
      
    data(){
      return{
  
      
      } 
    },
    methods : {
      goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
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
.header h3{
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 200px;
}
.overlay-left p{
  width: 40%;
  margin-top: 80px;
  font-size: 25px;
  font-family: 'Times New Roman', Times, serif;
}
.overlay-right {
  margin-left: 540px;
  margin-top: -270px;
 }
 .overlay-right video{
   height: 300px;
   margin-top: -10px;
   border-radius: 50px;
 }
 .playBtn{
   height: 100px;
   width: 100px;
   
}
fab fa-youtube{
  height: 200px;
  width: 200px;
  
}
.getStarted {
  margin-left: 300px;
  border-radius: 50px;

}
.get_started button{
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
}
#getStarted {
  border-radius: 50px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  color: black;
}

.iconBox{
  margin-top: 170px;
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
.therapist-header h3{
  font-size: 30px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  text-align: left;
  margin-left: 20px;

}
.therapist-text p{
  width: 45%;
  font-size: 25px;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 30px;
}
.therapist-img img{
  margin-top: -300px;
margin-left: 600px;
height: 500px;
border-radius: 50px;
width: 400px;
}
.sections-header h4{
  text-align: center;
  margin-top: 80px;
}
.sub-header h3{
  margin-top: 10px;
}
.sections-text p  {
  width: 40%;
  margin-top: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  margin-left: 700px;
}
.sections-header h3{
  text-align: right;
  margin-right: 200px;
  font-size: 30px;
}
.sections-img img{
  border-radius:30px;
  width: 60%;
  margin-left: -100px;
  margin-top: -300px;

}
.sections-img2 img{
  border-radius:30px;
  width: 40%;
  
  margin-left: 250px;
  margin-top: -200px;

}
.worksheet-text p  {
  width: 40%;
  margin-top: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  
}
.worksheet-header h3{
  text-align: left;
  margin-right: 200px;
  font-size: 30px;
}
.worksheet-img2 img{
  border-radius:30px;
  width: 80%;
  margin-left: 500px;
  margin-top: -350px;
  
}
.worksheet-img img{
  border-radius:30px;
  width: 40%;
  margin-left: 500px;
  
  }
.live_session_text p  {
  width: 40%;
margin-left: 600px;
  margin-top: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  
}
.live_session_header h3{
  text-align: right;
  margin-right: 200px;
  font-size: 30px;
}
.live_session_img2 img{
  border-radius:30px;
  width: 60%;
  margin-left: 100px;
  margin-top: -140px;
  
}
.live_session_img img{
  border-radius:30px;
  width: 70%;
  margin-left: -200px;
  margin-top: -530px;
  height: 700px;
  
  }
  .message_text p  {
  width: 40%;
  margin-top: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  
}
.message_header h3{
  text-align: left;
  margin-right: 200px;
  font-size: 30px;
}
.message_img2 img{
  border-radius:30px;
  width: 40%;
  margin-left: 400px;
  margin-top: -200px;
  
}
.message_img img{
  border-radius:30px;
  width: 50%;
  margin-left: 650px;
  margin-top: -250px;
  }
 .journal_text p  {
  width: 40%;
margin-left: 700px;
  margin-top: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  
}
.journal_header h3{
  text-align: right;
  margin-right: 150px;
  font-size: 30px;
}
.journal_img2 img{
  border-radius:30px;
  width: 50%;
  margin-left: 300px;
  margin-top: -140px;
  
}
.journal_img img{
  border-radius:30px;
  width: 60%;
  margin-left: -100px;
  margin-top: -300px;
  height: 500px;
  
  }
  .activity_text p  {
  width: 40%;
  margin-top: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  
}
.activity_header h3{
  text-align: left;
  margin-left: 100px;
  font-size: 30px;
}

.activity_img img{
  border-radius:30px;
  width: 60%;
  margin-left: 500px;
  margin-top: -270px;
  height: 400px;
  }
.yoga_text p  {
  width: 40%;
margin-left: 650px;
  margin-top: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  
}
.yoga_header h3{
  text-align: right;
  margin-right: 100px;
  font-size: 30px;
}
.yoga_img img{
  border-radius:30px;
  width: 50%;
  margin-left: -30px;
  margin-top: -300px;
  
}
.other_header{
  margin-left: 250px;
  margin-top: 200px;
}
.other_header h1{
  font-size: 60px;
  margin-left: -100px;
  text-align : center;
  width: 100%;
  font-family: 'Times New Roman', Times, serif;
}
.other_header p{
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  margin-left: -50px;
  margin-top: 40px;
}
.other_header button{
  margin-left: 220px;
  margin-top: 40px;
  width: 200px;
  text-align : center;
  height: 50px;
  border-radius: 40px;
}
.next_header h1{
  font-family: 'Times New Roman', Times, serif;
  font-size: 50px;
  margin-top: 150px;
  text-align : center;
}
.note{
  margin-top: 100px;
}
.note_header h1{
  font-family: 'Times New Roman', Times, serif;
  font-size: 60px;
  font-weight: bold;
  color: grey;
  display: inline-block;
 
}
.header2{
  margin-left: 400px;
}
.header3{

}
.header4{
  margin-left: 400px;
}
.header5{

}

.para1{
  width: 30%;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  margin-top: 20px;
}
.para2{
  margin-left: 450px;
  margin-top: -90px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  width: 30%;
}
.para3{
  width: 30%;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  margin-top: 20px;
}
.para4{
  margin-left: 450px;
  margin-top: -160px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  width: 30%;
}
.para5{
  width: 30%;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  margin-top: 20px;
}
 button{
  width: 200px;
  text-align : center;
  height: 50px;
  border-radius: 40px;
  margin-top: 20px;
}
.theaphy_img img{
  margin-left: 600px;
  margin-top: -400px;
  width: 60%;
}
.FAQ_container{
  width: 100%;
}
.FAQ_header h1{
  margin-left: 0px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;

}
.FAQ_header h2{
 
  font-family: 'Times New Roman', Times, serif;
  margin-top: 50px;
  font-weight: bold;
  
}
.FAQ_header .para1{
  margin-top: 20px;
  
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  width: 50%;
  
}
.FAQ_header .para_1_1  {
  margin-top: 20px;
  
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  width: 50%;
  
}
.FAQ_header .para_1_1_1{
  margin-top: 20px;
  
  font-family: 'Times New Roman', Times, serif;
  font-size: 25px;
  width: 50%;
  
}
.FAQ_header .FAQ_header2{
  margin-left: 600px;
  margin-top: -40px;
}
.FAQ_header .FAQ_header5{
  margin-left: 600px;
  margin-top: -720px;
}
.FAQ_header .FAQ_header6{
  margin-left: 600px;
  margin-top: 120px;
}
.FAQ_header .FAQ_header7{
 
  
}
.FAQ_header .FAQ_header8{
  margin-left: 600px;
  margin-top: -340px;
}
.FAQ_header .FAQ_header9{
  width: 50%;
  margin-top: 230px;

}
.FAQ_header .FAQ_header10{
  margin-left: 600px;
  margin-top: -160px;
 
}

.FAQ_header .FAQ_header3{
  
  margin-top: 900px;
  width: 40%;
}
.FAQ_header .FAQ_header4{
  margin-left: 600px;
  margin-top: -900px;
}
.FAQ_header .para2{
  margin-left: 600px;
  font-family: 'Times New Roman', Times, serif;
  margin-top: -980px;
  width: 50%;
  font-size : 25px;
}
.FAQ_header .para5{
  margin-left: 600px;
  font-family: 'Times New Roman', Times, serif;
  width: 50%;
  font-size : 25px;
  margin-top: -5px;
}
.FAQ_header .para6{
  margin-left: 600px;
  font-family: 'Times New Roman', Times, serif;

  width: 50%;
  font-size : 25px;
}
.FAQ_header .para7{
  
  font-family: 'Times New Roman', Times, serif;
  width: 50%;
  font-size : 25px;
  margin-top: 30px;
}
.FAQ_header .para8{
  margin-left: 600px;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 30px;
  width: 50%;
  font-size : 25px;
}
.FAQ_header .para9{
  
  font-family: 'Times New Roman', Times, serif;
  width: 50%;
  font-size : 25px;
  margin-top: 30px;
}
.FAQ_header .para10{
  margin-left: 600px;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 50px;
  width: 50%;
  font-size : 25px;
}
.FAQ_header .para3{

  font-family: 'Times New Roman', Times, serif;
 width: 50%;
  font-size : 25px;
  margin-top: 470px;
}
.FAQ_header .para4{
  margin-left: 600px;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 20px;
  width: 50%;
  font-size : 25px;
}
.how_it_work{
  font-family: 'Times New Roman', Times, serif;
  font-size : 25px;

}


  </style>

