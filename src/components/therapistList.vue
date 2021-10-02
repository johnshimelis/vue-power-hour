<template >
    <div class="header">
        <a href="/" class="power_hour"><h2>Power Hour</h2></a>
        <button class="btn btn-outline-info" @click="notTherapist">A THERAPIST?</button>
        <button class="btn btn-warning" id="login" @click="login">LOG IN</button>
        <hr>
     
    </div>
  <div class="container" >
    
      <div class="therapist" :class="{'interview-active' : isShow}">
          <div class="therapist_header" v-if="showHeader">
              <h2>Help us match you to the right online therapist.</h2>
              <p>Please fill out this short questionnaire to provide some general and anonymous 
                  background information about you and the issues you'd like to deal with in online therapy.
                   It would help us match you with the most suitable therapist for you. Your answers will also give this therapist a good starting point in getting to know you.</p>
          </div>
          
          <div class="interview_questions"  id="interview" >
              <h2>What type of therapy are you looking for?</h2>
              <button class="btn btn-primary" @click="isShow = !isShow">Individual(for myself)</button><br>
              <button class="btn btn-primary">Couples(for myself and my partner)</button><br>
              <button class="btn btn-primary">Teen(for my child)</button><br>
              <div class="therapist_info">
              <p>Let's walk through the process of finding the best therapist for you!
                  We'll start off with some basic quesions.
                </p>
                </div>
            </div>
     
     <div :class="{'gender_active' : showAge}" @click="showAge = !showAge">
        <div class="gender" v-if="isShow" id="gender" >
            <h2>What is your gender?</h2>
            <button class="btn btn-primary" >Male</button><br>
            <button class="btn btn-primary">Female</button><br>
        </div>
        
     <div class="collapse" id="collapsable_btn" :class="{'collapse_active' : isActive}" @click="isActive = !isActive">
    
            <button class="btn btn-primary">Transgender : male to female</button><br>
            <button class="btn btn-primary">Transgender : male to female</button><br>
            <button class="btn btn-primary">Non-binary</button><br>
            <button class="btn btn-primary">Gender fluid</button><br>
            <button class="btn btn-primary">Other</button><br>
            <button class="btn btn-primary">I don't know</button><br>
        </div>
        
    </div>
        <div class="see_more" v-if="isShow">
            <a href="#collapsable_btn" class="see_more" data-toggle="collapse" v-if="!showBtn" 
            @click="showBtn =!showBtn">Show more</a>
        </div>
        <div :class="{'age_active' : showStatus}">
        <div class="age" v-if="showAge" >
            <h2>How old are you?</h2>
            <select name='ages' id='dropdown' @change="onChange($event)">
               <option  selected>Select yor age</option>
               <option v-for="age in ages" v-bind:key='age'>{{age}}</option>
           </select>
       
         <div class="age_info">
             <h3>Did you know?</h3>
             <p>Almost a fifth of older adults it the world have experienced depression. 
                 (Geriatric Mental Health Foundation, 2008)</p>
         </div>
       </div>
       </div>
    </div>
    <div :class="{'status_active' : isStatus}" >
    <div class="status" v-if="showStatus" :class="{'collapse_relation' : isActive}" @click="changeActive">
        <h2>How do you identify?</h2>
        <button class="btn btn-primary" @click="showState">Straight</button><br>
        <button class="btn btn-primary">Gay</button><br>
        <button class="btn btn-primary" >Lesbian</button><br>
        <button class="btn btn-primary">Prefer not to say</button><br>
  </div>
  <div class="collapse" id="collapsable_status_btn" :class="{'collapse_relation' : isActive}" @click="changeActive">
    
    <button class="btn btn-primary" @click="changeActive">Bisexual</button><br>
    <button class="btn btn-primary">Questioning</button><br>
    <button class="btn btn-primary">Pansexual</button><br>
    <button class="btn btn-primary">Queer</button><br>
    <button class="btn btn-primary">Asexual</button><br>
    <button class="btn btn-primary">Other</button><br>
    <button class="btn btn-primary">I don't know</button><br>
</div>
</div>
<div class="see_more" v-if="showStatus">
    <a href="#collapsable_status_btn" class="see_more" data-toggle="collapse" 
    v-if="!showSeemore" @click="showSeemore = !showSeemore">Show more</a>
</div>

<div :class="{'relation_active' : showRelation}">
<div class="relation_ship" v-if="showRelation">
    <h2>What is your relationship status?</h2>
    <button class="btn btn-primary" @click="showReligions">Single</button><br>
    <button class="btn btn-primary">In relationship</button><br>
    <button class="btn btn-primary" >Married</button><br>
    <button class="btn btn-primary">Divorced</button><br>
    <button class="btn btn-primary" >Widowed</button><br>
    <button class="btn btn-primary">Other</button><br>
</div>
</div>

<div :class="{'religion_active' : showReligion}">
    <div class="religion" v-if="showReligion">
        <h2>Do you consider yourself to be religious?</h2>
        <button class="btn btn-primary" @click="showReligionTypes">Yes</button><br>
        <button class="btn btn-primary">No</button><br>
     </div>
</div> 


<div :class="{'religionType_active' : showReligionType}">
    <div class="religionType" v-if="showReligionType">
        <h2>Which religion do you identify with?</h2>
        <button class="btn btn-primary" @click="Christanity">Christanity</button><br>
        <button class="btn btn-primary">Judaism</button><br>
        <button class="btn btn-primary" >Islam</button><br>
        <button class="btn btn-primary">Other</button><br>
    </div>
</div> 
<div :class="{'therapist_history_active' : showHistory}">
    <div class="therapist_history" v-if="showHistory">
        <h2>Have you ever been in therapy before?</h2>
        <button class="btn btn-primary" @click="therapyHistory">Yes</button><br>
        <button class="btn btn-primary">No</button><br>
     </div>
</div> 

    <div class="current_health" v-if="showCurrentHealth">
        <h2>How would you rate your current physical health?</h2>
        <button class="btn btn-primary" @click="GoodHealth">Good</button><br>
        <button class="btn btn-primary">Fair</button><br>
        <button class="btn btn-primary" >Poor</button><br>
        <div class="current_health_info">
            <p>Studies show that exercise can help with depression as effectively as antidepressant medication.
                (Psychosmatic Medicine 2007).
             </p>
        </div>
    </div> 

    <div class="current_eating" v-if="showCurrentEating">
        <h2>How would you rate your current eating habit?</h2>
        <button class="btn btn-primary" @click="GoodEating">Good</button><br>
        <button class="btn btn-primary">Fair</button><br>
        <button class="btn btn-primary" >Poor</button><br>
     </div>
     <div class="are_you_depressed" v-if="showResult">
        <h2>Are you currently experiencing overwhelming sadness, grief or depression?</h2>
        <button class="btn btn-primary" @click="showResults">Yes</button><br>
        <button class="btn btn-primary">No</button><br>
        
        <div class="are_you_depressed_info">
            <p>Psychotherapy can serve as an effective treatment for clinical depression.
             </p>
        </div>
    </div> 

    <div class="problems" v-if="showProblems1">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>Little interest or pleasure in doing things.</h2>
        <button class="btn btn-primary" @click="Problem1">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>
     <div class="problems" v-if="showProblems2">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>Moving or speaking so slowly that other people could have notice?
            Or the opposite - being so fidgety or restless that you have been 
            moving around a lot more than usual.</h2>
        <button class="btn btn-primary" @click="Problem2">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>
     <div class="problems" v-if="showProblems3">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>Feeling down, depressed or hopeless.</h2>
        <button class="btn btn-primary" @click="Problem3">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>
     <div class="problems" v-if="showProblems4">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>Trouble falling asleep, staying asleep, or sleeping too much.</h2>
        <button class="btn btn-primary" @click="Problem4">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>
     <div class="problems" v-if="showProblems5">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>Feeling tired or having little energy</h2>
        <button class="btn btn-primary" @click="Problem5">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>
     <div class="problems" v-if="showProblems6">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>Poor appetite or overeating.</h2>
        <button class="btn btn-primary" @click="Problem6">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>
     <div class="problems" v-if="showProblems7">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>Feeling bad about yourself - or that you are a failure or have let yourself or family down.</h2>
        <button class="btn btn-primary" @click="Problem7">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>
     <div class="problems" v-if="showProblems8">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>Trouble concentrating on things, such as reading the newspapper or wathcing television</h2>
        <button class="btn btn-primary" @click="Problem8">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>
     <div class="problems" v-if="showProblems9">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>Thoughts that you would be better off dead or of hurting yourself in some way</h2>
        <button class="btn btn-primary" @click="Problem9">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>
     <div class="problems" v-if="showProblems10">
        <P>Over the past 2 weeks, how often have you been bothered by any of the following problems:</P>
        <h2>How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people.</h2>
        <button class="btn btn-primary" @click="Problem10">Not at all</button><br>
        <button class="btn btn-primary">Several days</button><br>
        <button class="btn btn-primary" >More than half the days</button><br>
        <button class="btn btn-primary" >Nearly every day</button><br>
     </div>

     <div class="intimacy" v-if="showIntimacy">
        <h2>Do you have any problem or worries about intimacy?</h2>
        <button class="btn btn-primary" @click="Intimate">Yes</button><br>
        <button class="btn btn-primary">No</button><br>
     </div>

     <div class="drink" v-if="showDrink">
        <h2>How often do you drink alchol?</h2>
        <button class="btn btn-primary" @click="drinks ">Never</button><br>
        <button class="btn btn-primary">Infrequently</button><br>
        <button class="btn btn-primary">Monthly</button><br>
        <button class="btn btn-primary">Weekly</button><br>
        <button class="btn btn-primary">Daily</button><br>
     </div>

     <div class="succide" v-if="showSuccide">
        <h2>When was the last time you thought about suicide?</h2>
        <button class="btn btn-primary" @click="succides ">Never</button><br>
        <button class="btn btn-primary">Over a year ago</button><br>
        <button class="btn btn-primary">Over 3 months ago</button><br>
        <button class="btn btn-primary">Over months ago</button><br>
        <button class="btn btn-primary">Over 2 weeks ago</button><br>
        <button class="btn btn-primary">In the last 2 weeks</button><br>
     </div>
     <div class="disorder" v-if="showDisorder" id="disorder" @click= "showTherapist">
        <h2>Choose areas that you are experiencing difficulties with.
            We are here to help you and make your life better, starting today.</h2>
        <button class="btn btn-primary" >Anxiety</button><br>
        <button class="btn btn-primary">Depression</button><br>
        <button class="btn btn-primary" >Family Issue</button><br>
        <button class="btn btn-primary">Procrastination</button><br>
        <button class="btn btn-primary" >Self Esteem</button><br>
        <button class="btn btn-primary">Stress</button><br>
    </div>
    <div class="collapse sub_disorder" id="collapsable_disorder_btn" :class="{'disorder' : isActive}" 
    @click="isActive = !isActive" v-if="showDisorder">

        <button class="btn btn-primary">Weight Loss</button><br>
        <button class="btn btn-primary">Panic Attack</button><br>
        <button class="btn btn-primary">PTSD</button><br>
        <button class="btn btn-primary">OCD</button><br>
        <button class="btn btn-primary">Relationship Issue</button><br>
        <button class="btn btn-primary">Phobias</button><br>
        <button class="btn btn-primary">Sex and Sexuality</button><br>
        <button class="btn btn-primary">Trauma and Abuse</button><br>
    </div>
    <div class="see_more" v-if="showDisorderSeeMore">
        <a href="#collapsable_disorder_btn" class="see_more" data-toggle="collapse" v-if="show_disorders" 
        @click="showDisorderSeeMore =!showDisorderSeeMore">Show more</a>
    </div>

     <div id="checkbox" class="which_therapist" v-if="whichTherapist">
         <h2>Are there any specific preferences for your therapist?</h2>
        
    <input type="radio" id="html" name="fav_language" value="HTML" class="radioBtn">
    <label for="html">Male therapist</label><br>
    <input type="radio" id="css" name="fav_language" value="CSS" class="radioBtn">
    <label for="css">Female therapist</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript" class="radioBtn">
    <label for="javascript">Christaian-based therapist</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript" class="radioBtn">
    <label for="javascript">Older therapist</label><br>
       <input type="radio" id="javascript" name="fav_language" value="JavaScript" class="radioBtn">
    <label for="javascript">Non-religious therapist</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript" class="radioBtn">
    <label for="javascript">Therapist of color</label><br>
    <button type="button"  @click="whichTherapists" class="btn btn-success">Next</button>
    </div>

    <div class="who_recommend" v-if="whoRecommend">
        <h2>Who referred you to Power Hour?</h2>
        <button class="btn btn-primary" @click="whoRecommends ">Celebrity</button><br>
        <button class="btn btn-primary">Streaming</button><br>
        <button class="btn btn-primary">Tv ad</button><br>
        <button class="btn btn-primary">Goggle search</button><br>
        <button class="btn btn-primary">Podcast</button><br>
        <button class="btn btn-primary">Social media post</button><br>
        <button class="btn btn-primary">Family or friends</button><br>
        <button class="btn btn-primary">Radio</button><br>
        <button class="btn btn-primary">Tik Tok</button><br>
        <button class="btn btn-primary">Magazine or newspapper</button><br>
        <button class="btn btn-primary">Snapchat</button><br>
        <button class="btn btn-primary">Youtube</button><br>
        <button class="btn btn-primary">Other</button><br>
     </div>
   
     <div class="final" v-if="showFinal">
        <h2>You've completed the questionnaire!</h2>
        <button class="btn btn-primary" @click="finals ">Next</button><br>
        </div> 

    <div class="account" v-if="showAccount">
        <h2>Create your private account</h2>
        <button class="btn btn-success" id="facebook"><img src="@/img/facebook.png" />
           <span>Continue with Facebook</span> </button>
        <button class="btn btn-info" id="google"><img src="@/img/google.png" />
            <span>Continue with Google</span></button>
            <div class="forms">
                <form>
                    <label>First Name(or nickname)</label><br>
                    <input type="text" /><br>
                    <label>First Name(or nickname)</label><br>
                    <input type="text" /><br>
                    <label>First Name(or nickname)</label><br>
                    <input type="text" /><br>
                    <label>First Name(or nickname)</label><br>
                    <input type="text" /><br>
                    <input type="checkbox" class="checkbox"/> 
                    <p>I agree to the <a href="#">terms and conditions</a></p>
                    <button class="btn btn-danger" id="btn" @click = "submitAccount">Get started</button>
                </form>
            </div>
    </div>

    <div class="notification" v-if="showNotification">
        <div class="alert alert-success" id="alert">
            <P><strong>We just sent a verfication code to johnshimelis009@gmail.com</strong></P>
        </div>
        <div class="notification_items">
            <p>You should have received an email from Power Hour containing a 3 digit  verfication code. 
                If it isn't in your inbox, please check your spam folder.
            </p>
            <h2>Please enter your verfication <code></code></h2>
            <input type="text" />
            <button class="btn btn-success" @click="submit">Submit</button><br>
            <button class="btn btn-warning" id="resend">Resend verfication code</button>
            <button class="btn btn-warning" id="change">Change email</button>
        </div>
    </div>

    <div class="announce" v-if=showAnnounce>
        <h2>John, welcome to Power Hour</h2>
        <div class="announce_info">
            <p>Thanks for telling us your preference! As we search for your therapist,
                please read the following guide and begin your membership
            </p>
        </div>
         <div class="announce_items">
             <h2>What is the therapy process?</h2>
             <p>You indicated that you have never had therapy before, 
                 here is some information that might be helpful as you get ready to begin.</p>

                 <h2>What happen next?</h2>
                 <ul>
                     <li>A licensed therapist with the proper qualifications will be matched to you.</li>
                     <li>Your therapist will review the information you shared.</li>
                     <li>You and your therapist start communicating online - the therapy process begins!</li>
                 </ul>

                 <h2>How do I talk to my therapist?</h2>
                 <p>You have many options for how you choose to communicate with your therapist. 
                     You can send audio, video, or text messages to your therapist at any time in 
                     the messaging room. You can also schedule weekly live sessions (30 to 45 min) 
                     with your therapist to communicate via phone, video or real-time chat.</p>
             </div>
    </div> 
    <div id="view_therapists" v-if="showViewTherapists">
    <button  class="btn btn-warning" @click="viewTherapists">SEE ALL THERAPISTS</button>
    </div>

   </div>

</template>
<script>
 export default{
    components :{
     
    },
    
      
    data(){
      return{
     isShow : false,
     showBtn : false,
     showAge : false,
     isActive : false,
     ages : [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37.38,39,40,41,42,43,44,45,46,
            47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70],
    showStatus : false,
    isStatus : false,
    key : '',
    showSeemore : false,
    showRelation : false,
    showReligion : false,
    showReligionType : false,
    showHistory : false,
    showCurrentHealth : false,
    showCurrentEating : false,
    showResult : false,
    showProblems1 : false,
    showProblems2 : false,
    showProblems3 : false,
    showProblems4: false,
    showProblems5 : false,
    showProblems6 : false,
    showProblems7 : false,
    showProblems8 : false,
    showProblems9 : false,
    showProblems10 : false,
    showIntimacy : false,
    showDrink : false,
    showSuccide : false,
    whichTherapist : false,
    whoRecommend : false,
   showFinal : false,
   showAccount : false,
   showNotification : false,
   showAnnounce :   false,
   showDisorder : false,
   show_disorders : false,
   showDisorderSeeMore : false,
   showViewTherapists : false,
   showTherapistLists : false,
   showHeader : true





 } 
    },
    methods : {
        login : function(){
        this.$router.push('/signup');
         
      },
      notTherapist : function(){
        this.$router.push('/therapist_to_hire');
        },
      
        onChange(event) {
            console.log(event.target.value);
            this.showStatus = true;
            this.showBtn = true;
        },
     
        viewTherapists: function(){
            this.showAnnounce = false;
            this.showTherapistLists = true;
            this.$router.push('/Therapists_Lists');
         
        },
        showState : function(){
            this.isStatus = true;
            this.showRelation = true
        },
        changeActive : function(){
            this.isActive = true;
        },
        showReligions : function(){
            this.showRelation = false;
            this.showReligion = true;
            this.showSeemore = true
        },
        showReligionTypes : function(){
            this.showReligionType = true;
            this.showReligion = false;
        
     
        },
     
        Christanity : function(){
            this.showReligionType = false;
            this.showHistory = true;
           
        },
        therapyHistory : function(){
            this.showHistory = false;
            this.showCurrentHealth = true;
        },
        GoodHealth: function(){
            this.showCurrentHealth = false
            this.showCurrentEating = true;
        },
      
        GoodEating : function(){
            this.showCurrentEating = false;
            this.showResult = true;
        },
        showResults : function(){
            this.showResult = false;
            this.showProblems1 = true;
        },
        Problem1 : function(){
            this.showProblems1 = false;
            this.showProblems2 = true;
        },
        Problem2 : function(){
            this.showProblems2 = false;
            this.showProblems3 = true;
        },
        Problem3 : function(){
            this.showProblems3 = false;
            this.showProblems4 = true;
        },
        Problem4 : function(){
            this.showProblems4 = false;
            this.showProblems5 = true;
        },
        Problem5 : function(){
            this.showProblems5 = false;
            this.showProblems6 = true;
        },
        Problem6 : function(){
            this.showProblems6 = false;
            this.showProblems7 = true;
        },
        Problem7 : function(){
            this.showProblems7 = false;
            this.showProblems8 = true;
        },
        Problem8 : function(){
            this.showProblems8 = false;
            this.showProblems9 = true;
        },
        Problem9 : function(){
            this.showProblems9 = false;
            this.showProblems10 = true;
        },
        Problem10 : function(){
            this.showProblems10 = false;
            this.showIntimacy = true;
            
        },
        Intimate : function(){
            this.showIntimacy = false;
            this.showDrink = true;
        },
        drinks : function(){
            this.showDrink = false;
            this.showSuccide = true;
        },
        succides :function(){
            this.showSuccide = false;
            this.showDisorder  = true
            this.show_disorders = true
            this.showDisorderSeeMore = true;
        },
        showTherapist : function(){
            this.showDisorder = false;
            this.show_disorders = false;
            this.whichTherapist = true;
        },
        whichTherapists : function(){
            this.whichTherapist = false;
            this.whoRecommend = true;
        },
        whoRecommends : function(){
            this.whoRecommend = false;
            this.showFinal = true;  
        },
        finals :function(){
            this.showFinal = false;
            this.showAccount = true;
        },
        submitAccount : function(){
            this.showAccount = false;
            this.showNotification = true;
            
        },
        submit : function(){ 
            this.showNotification = false;
            this.showAnnounce = true;
            this.showViewTherapists = true
            this.showHeader = false
        },
        viewSchedule : function(){
            this.$router.push('/Therapists_Lists');
        }
 }
    }
</script>

<style lang="scss" scoped>
     .header .power_hour{
        text-decoration: none;
        color: #000;
    }
    #view_shedule{
     font-family: 'Times New Roman', Times, serif;
     font-weight: bold;
     font-size: 20px;
     width: 20%;
     height: 50px;
     border-radius: 20px;
     margin-left: 490px;
     margin-top: 20px;
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
    margin-top: 00px;
    font-size: 25px;
  }
  .therapist_sample h2{
      font-family: 'Times New Roman', Times, serif;
      font-size: 30px;
      font-weight: bold;
      margin-left: 700px;
      margin-top: 50px;
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
    #view_therapists button{
        margin-top: 50px;
        width:30%;
        margin-left: 450px;
        height: 50px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 20px;
        border-radius: 20px;
    }
    .container{
        margin-top: -70px;
    }
    
    #collapsable_disorder_btn{
        margin-top: -200px;
        margin-left: 100px;
        width: 1030px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;
    }
    ul{
        margin-left: 200px;
    }
    li{
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        
    }
    .announce{
        margin-top: -300px;
    }
    .announce h2{
        margin-top: 40px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
        margin-left: 200px;
    }
    .announce p{
        margin-top: 20px;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
        margin-left: 200px;
    }
    .announce_info p{
    height:100px;
    width:50%;
    padding: 10px;
    margin-top: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    border-radius: 10px;
    margin-left: 200px;
    background: #0855d1;;
    }
    .notification{
        margin-top: -300px;
    }
    .notification p{
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        text-align: center;
    }
    .notification input{
        margin-left: 480px;
        height: 40px;
        width: 70px;
        border-radius: 5px;
        margin-top: 10px;
    }
    .notification button{
        height: 40px;
        margin-top: -5px;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
        width: 80px;
    }
    .notification #resend{
        margin-top: 40px;
        width: 300px;
        margin-left: 200px;
        padding-right: 20px;
        border-radius: 10px;
    }
    .notification #change{
        margin-left: 600px;
        padding-left: 20px;
        margin-top: -55px;
        width: 300px;
        border-radius: 10px;
    }
    
    .notification h2{
        margin-left: 400px;
        margin-top: 40px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 28px;
    }
    #alert p{ 
     
        margin-left: 200px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
    }

    form{
        margin-top: -10px;
        padding-top: 50px;
 }
 .forms input[type = "checkbox"]{
     margin-left: -225px;
     margin-top: 25px;
    
     height: 25px;
 }
 .forms p{
     margin-left: 50px;
     font-family: 'Times New Roman', Times, serif;
     font-size: 20px;
     margin-top: -30px;

 }
 .forms a{
     margin-left: 10px;
 }
    .forms label{
        padding-top: 10px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;

    }
    .forms button{
        margin-top: -100px;
    }
    .forms #btn{
        margin-top: 10px;
        width: 60%;
    }
    .forms input{
        width: 60%;
        padding-top: 40px;
        height: 40px;
        border-radius: 20px;
    }
    .account h2{
        margin-left: 110px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
    }
    #facebook{
        margin-left: -70px;
        background-color: #0855d1;
    }
    #google{
        margin-left: 70px;
        background-color: white;
    }
    .account{
        margin-left: 300px;
        margin-top: -300px;

    }
    .account button{
        margin-top: 50px;
        font-size : 20px;
        font-family: 'Times New Roman', Times, serif;
        padding-right: 40px;
        height: 45px;
        border-radius: 10px;
       }
       .account span{
           margin-left: 30px;
       }
    .account img{
        width: 30px;
        height: 20px;
        margin-top: -5px;
      
    }
    .disorder{
         padding-top: 200px;
        margin-top:-500px;
        margin-left: 100px;
    }
  .disorder button{
    margin-top: 10px;
        margin-left: 200px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        width: 50%;

  }
  .disorder h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -100px;
  }
 .final{
         padding-top: 200px;
        margin-top:-500px;
        margin-left: 100px;
    }
  .final button{
    margin-top: 10px;
        margin-left: 200px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        width: 50%;

  }
  .final h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -100px;
  }
       .who_recommend{
         padding-top: 200px;
        margin-top:-500px;
        margin-left: 100px;
    }
  .who_recommend button{
    margin-top: 10px;
        margin-left: 200px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .who_recommend h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -100px;
  }
    .which_therapist{
        margin-top: -300px;
        width: 50%;
        margin-left: 350px;
    }
    .which_therapist h2{
        padding-top: 20px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
        font-weight: bold;
    }
    .which_therapist label{
        padding: 10px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
    }
    .which_therapist button{
        width: 20%;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
        height: 40px;
        background-color: #1a07ed;
        border-radius: 10px;
    }
    .checkbox h2{
        mask-origin: -200px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
        font-weight: bold;

    }
 
      .succide{
         padding-top: 200px;
        margin-top:-500px;
        margin-left: 100px;
    }
  .succide button{
    margin-top: 10px;
        margin-left: 200px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .succide h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -100px;
  }
    .drink{
         padding-top: 200px;
        margin-top:-500px;
    }
  .drink button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .drink h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -20px;
  }
.intimacy{
         padding-top: 200px;
        margin-top:-500px;
    }
  .intimacy button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .intimacy h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -20px;
  }
 .problems{
         padding-top: 200px;
        margin-top:-500px;
    }
    .problems p{
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        width: 50%;
        font-weight: bold;
        margin-left: 290px;
    }
  .problems button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .problems h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        width: 50% ;
        margin-left: 280px;
  }
 .current_eating{
         padding-top: 200px;
        margin-top:-500px;
    }
  .current_eating button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .current_eating h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -20px;
  }
 .current_health{
         padding-top: 200px;
        margin-top:-500px;
    }
  .current_health button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .current_health h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -20px;
  }

    .current_health_info p{
    height:100px;
    width:44.5%;
    padding: 10px;
    margin-top: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    border-radius: 10px;
    margin-left: 300px;
    background: #37ed5e;
    }
  .are_you_depressed{
         padding-top: 200px;
        margin-top:-500px;
    }
  .are_you_depressed button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .are_you_depressed h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        width: 60%;
        margin-left: 200px;
  }

    .are_you_depressed_info p{
    height:100px;
    width:44.5%;
    padding: 10px;
    margin-top: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    border-radius: 10px;
    margin-left: 300px;
    background: #37ed5e;
    }
 .therapist_history{
         padding-top: 200px;
        margin-top:-500px;
    }
  .therapist_history button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .therapist_history h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -20px;
  }
 .religionType{
         padding-top: 200px;
        margin-top:-500px;
    }
  .religionType button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .religionType h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -20px;
  }
     .religion{
         padding-top: 300px;
        margin-top:-550px;
    }
  .religion button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .religion h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -50px;
  }
     .relation_ship{
         padding-top: 300px;
        margin-top: -650px;
    }
  .relation_ship button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .relation_ship h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -50px;
  }
    .status{
        margin-top: -200px;
    }
  .status button{
    margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
        text-align: left;

  }
  .status h2{
    
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -50px;
  }
  #collapsable_status_btn button{
        margin-top: 10px;
        text-align: left;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
    }
  
    .age_info{
        background: #1a07ed;
        color : #fff;
        width: 47%;
        padding: 20px;
        border-radius: 20px;
        margin-left: 280px;
        margin-top: 30px;
    }
    .age_info h3{
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;

    }
    .age_info p{
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        
    }
    .age{
        
    }
    .age h2{
        margin-top: -170px;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-left: -300px;
    }
   
    select{
    margin-left: 300px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    border-radius: 10px;
    border: 1px solid #fff;
    margin-top: 10px;
    background : linear-gradient(to bottom, #efefef, #ccc);
    height: 40px;
    width: 500px;
    


}
select option{
    background-color: #ddd;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;

}

  a{
      margin-left: 300px;
      padding-top: -200px;
      font-size: 20px;
      text-decoration: none;
      font-weight: bold;
      font-family: 'Times New Roman', Times, serif;
      color: #1a07ed
  }
    .therapist_header{
        margin-top: 100px;
        font-family: 'Times New Roman', Times, serif;
        
       
    }
 
    .therapist_header h2{
        text-align: center;
        font-weight: bold;
        font-size : 40px;
    }
    .therapist_header p{
        width: 90%;
        margin-left: 40px;
        font-size: 20px;
        text-align: center;
    }
    .interview_questions h2{
        margin-top: 100px;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        
    }
    .interview_questions button{
        margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
    }
    #collapsable_btn button{
        margin-top: 10px;
        text-align: left;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
    }
    
    .gender button{
        text-align: left;
        margin-top: 10px;
        margin-left: 300px;
        width: 500px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 24px;
    }
    .gender h2{
        margin-top: -400px;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
    }
  

    .interview_questions button:hover{
        background: chocolate;
    }
    .interview_questions p{
        margin-left: 300px;
        margin-top: 20px;
     
        height: 50px;
        font-size: 18px;
        padding: 20px;
        border-radius: 10px;
       
        font-family: 'Times New Roman', Times, serif;
        width: 40%;
    }
    .therapist_info p{
    height:100px;
    width:45%;
    background: #37ed5e;
    }
    .interview-active{
        .interview_questions{
            transform: translateX(-120%);
            transition: all .5s ease-in-out;
            width: 100%;
            
        }
      
     
    }
    .gender_active{
      
        .gender{
            transform: translateX(-120%);
            transition: all .5s ease-in-out;
        }
        #collapsable_btn{
            transform: translateX(-120%);
            transition: all .5s ease-in-out;
         
           }
           
        .see_more{
            transform: translateX(-120%);
            transition: all .5s ease-in-out;
       
        }
    }
   .collapse_active{
       .age{
           margin-top: -200px;
       }
   }
   .age_active{
       .age{
        transform: translateX(-120%);
        transition: all .5s ease-in-out;
       }
       .see_more{
        transform: translateX(-120%);
        transition: all .5s ease-in-out;
       }
   }
   .status_active{
       .status{
        transform: translateX(-120%);
        transition: all .5s ease-in-out;
       }
       #collapsable_status_btn{
            transform: translateX(-120%);
            transition: all .5s ease-in-out;
       }
    }
       .collapse_relation{
           .relation_ship{
               margin-top: 2000px;
           }
     
        }
        .religion_active{
            .relation_ship{
                transform: translateX(-120%);
                 transition: all .5s ease-in-out;
            }
          
        }
        .religionType_active{
            .religion{
               transform: translateX(-120%);
                 transition: all .5s ease-in-out;
                
     
            }
        }
        .religion_active{
            .religionType{
                transform: translateX(-120%);
                 transition: all .5s ease-in-out;  
            }
        }
        .header h2{
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 30px;
    margin-top: 20px;
    margin-left: 50px;
}
.header button{
    margin-left: 900px;
    border-radius: 20px;
    margin-top: -60px;
    height: 40px;
    width: 180px;
    font-size: 15px;
    font-weight: bold;
    color: #000;
    font-family: 'Times New Roman', Times, serif;
}
#login{
    margin-left: 50px;
    font-size: 15px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
}

</style>
