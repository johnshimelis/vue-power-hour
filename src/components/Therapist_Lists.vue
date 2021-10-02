<template >
  <div>
    <div class="header">
      <a href="/" class="power_hour"><h2>Power Hour</h2></a>
      <button class="btn btn-outline-info" @click="notTherapist">NOT A THERAPIST?</button>
      <button class="btn btn-warning" id="login" @click="login">LOG IN</button>
      <hr>
   
  </div>
  <div class="therapist_sample" v-if="showTherapistLists">
        <h2>Therapist Lists</h2>
      
        <div class="therapists">
        <div class="therapist_one ">
        <img id="img" src="@/img/online_therapist1.jpg" />
        <h4>Dr. Eilzabeth Lombardo, PhD, Licensed Clinical Therapist</h4>
        <h5>Dr Eilzabeth Lombardo is frequently interviewed by today's top media outlets
          including, The Today Show, Dr Oz, The Steve Harvey Show, CNN, Fox News, Forbes, Wall Street Journal,
          Money Magazine and USA Today.
        </h5>
        <button class="btn btn-warning" id="view_shedule" @click="viewTherapistOneSchedule">VIEW SCHEDULE</button>
      </div>
      </div>

      <div class="therapists">
      <div class="therapist_two ">
        <img id="img" src="@/img/online_therapist2.jpg" />
        <h4>Dr. Steven Gans Lombardo, MD, Harvard Medical School, McLean Hospital</h4>
        <span><i class="fas fa-quote-left" id="leftQ"></i></span><h5 id="two">It's exciting to be 
          associated with Power Hour Online-Therapy System and 
          its misson to bring high quality therapy access throughout the world, to those 
          who might otherwise not be able to obtain necessary emotional support.
        </h5><span><i id="rightQ" class="fas fa-quote-right"></i></span>
        <button class="btn btn-warning" id="view_shedule" @click="viewTherapistTwoSchedule">VIEW SCHEDULE</button>
      </div>
    </div>

    <div class="therapists">
        <div class="therapist_three">
          <img id="img" src="@/img/online_therapist4.jpg" />
          <h4>Dr. Melody LI, MS. LPC, Licensed Professional Counseler </h4>
          <span><i class="fas fa-quote-left" id="leftQ"></i></span><h5 id="two">I help people that feel
               anxious in relationship stop feeling anxious in relationship
              Every journey starts with the first step, so you just make yours, so don't waste your time.
          </h5><span><i id="rightQ" class="fas fa-quote-right"></i></span>
          <button class="btn btn-warning" id="view_shedule" @click="viewTherapistThreeSchedule">VIEW SCHEDULE</button>
        </div>
      </div>

      <div class="therapists">
        <div class="therapist_four">
          <img id="img" src="@/img/online_therapist6.jpg" />
          <h4>Dr. Hannah Bright, Therapist, PhD</h4>
          <span><i class="fas fa-quote-left" id="leftQ"></i></span><h5 id="two">Have you ever wondered single experience in your life most
               affects how you feel? If your answer is "relationships" then we should talk. I specialized in relationships- 
               your partner, your children, your family.
          </h5><span><i id="rightQ" class="fas fa-quote-right"></i></span>
          <button class="btn btn-warning" id="view_shedule" @click="viewTherapistFourSchedule">VIEW SCHEDULE</button>
        </div>
      </div>
</div>
<div class="view_schedule" v-if="showSchedule">
  <div class="therapist_samples">
  <h2>Therapist's Schedule</h2>
  
  <div class="therapists">
      <div class="therapist_one " v-if="showTherapistOne">
      <img id="img" src="@/img/online_therapist1.jpg" />
      <h4>Dr. Eilzabeth Lombardo</h4>
      <h5>Therapist, Life Coach</h5>
      </div>
      <div class="therapist_two" v-if="showTherapistTwo">
        <img id="img" src="@/img/online_therapist2.jpg" />
        <h4> Dr. Steven Gans Lombardo</h4>
        <h5>Therapist, Life Coach</h5>
        </div>
        <div class="theapist_three" v-if="showTherapistThree">
          <img id="img" src="@/img/online_therapist4.jpg" />
          <h4> Dr. Melody LI</h4>
          <h5>Licensed Professional Counseler</h5>
          </div>
          <div class="therapist_four" v-if="showTherapistFour">
            <img id="img" src="@/img/online_therapist6.jpg" />
            <h4>Dr. Hannah Bright</h4>
            <h5>Therapist, PhD</h5>
            </div>
      <div class="calender">
        <select class="year"> 
          <option>Year</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
  
        </select>
        <select class="months">
          <option>Months</option>
          <option>September</option>
          <option>October</option>
          <option>November </option>
          <option>December </option>
          <option>January</option>
          <option>February </option>
          <option>March</option>
          <option>April </option>
          <option>May</option>
          <option>June </option>
          <option>July </option>
          <option>August</option>
       </select>
       <select class="weeks">
         <option>Weeks</option>
         <option>Monday</option>
         <option>Tuesday</option>
         <option>Wednesday</option>
         <option>Thursday</option>
         <option>Friday</option>
         <option>Saturday</option>
         <option>Sunday</option>
      </select>
  
     <input type="number" placeholder="Eneter the specific day" class="days">
      </div>
  
  
    <button class="btn btn-warning" id="view_schedule" @click="showTherapistSchedule" v-if="!showTable">View Schedule</button>
      </div>
    </div>
   
  <div class="therapists_schedule">
    <table id="firstTable" v-if="showTable">
      <thead>
        <tr>
          <th>Working Hours</th>
          <th>Status</th>
          <th>Action</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" v-bind:key="row">
          <td>{{row.working_hour}}</td>
          <td>{{row.status}}</td>
          <td>
      
            <button @click="schedule(row)" :class="{'shceduled' : row.status== 'You Scheduled'}">{{button}}</button>
          </td>
       
        </tr>
      </tbody>
    </table>
    <p>{{displayStatus}}</p>
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
        showTherapistLists : true,
        showSchedule : false,
        rows: [
      { working_hour: "3:00 -4:30", status: "Scheduled", action: '' },
      { working_hour: "4:30 -6:00", status: "Scheduled", action: '' },
      { working_hour: "7:30 -9:00", status: "Free", action: '' },
      { working_hour: "9:00 -10:30", status: "Scheduled", action: '' },
      { working_hour: "10:30 -12:00", status: "Free", action: '' },
      ],
      showTherapistOne : true,
      showTherapistTwo : false,
      showTherapistThree : false,
      showTherapistFour : false,
      showTable : false,
      result : "",
      button : "Shcedule",
      displayStatus : "",
      isScheduled : false,

  
      
      } 
    },
    methods : {
      notTherapist : function(){
        this.$router.push('/');
        },
      login : function(){
        this.$router.push('/login');
         
      },
      viewTherapistOneSchedule : function(){
        this.showSchedule = true;
        this.showTherapistLists = false;
    
      },
      viewTherapistTwoSchedule : function(){
        this.showSchedule = true;
        this.showTherapistTwo = true;
        this.showTherapistLists = false;
        this.showTherapistOne = false;
      },
      viewTherapistThreeSchedule : function(){
        this.showSchedule = true;
        this.showTherapistThree = true;
        this.showTherapistLists = false;
        this.showTherapistOne = false;
      },
      viewTherapistFourSchedule : function(){
        this.showSchedule = true;
        this.showTherapistFour = true;
        this.showTherapistLists = false;
        this.showTherapistOne = false;
      },
      showTherapistSchedule : function(){
        this.showTable = true;

      },
      schedule : function(row){
           
         if(row.status== "Scheduled"){
           alert("This time is already taken. see other options!!!")
         }
         else if(row.status == "Free"){
          this.isScheduled = true;
           this.displayStatus = row.action;
         
           row.status = "You Scheduled"
            
       
         }
        
       
        
      }

     
    }
    }
</script>

<style lang="scss" scoped>
  .header .power_hour{
        text-decoration: none;
        color: #000;
    }
  .shceduled {
    background-color: orange;
    content:  "john";
  }
  .therapists_schedule button{
    width: 160px;
    height: 40px;
    font: bold;
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    margin-left: 50px;
    border-radius: 20px;
  }
  .therapists{
    margin-top: -70px;
  }
 .view_schedule{
   margin-top: -50px;
 }
   table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
 margin-left: 300px;
 margin-top: 50px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
}

table td {
  text-align: left;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
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
  #view_schedule {
    margin-top: -70px;
    width: 200px;
    height: 40px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    border-radius: 20px;
    font-weight: bold;
    
    margin-left: 1150px;

  }
  .calender{
    margin-left: 100px;
    margin-top: 100px;
    padding-right: 20px;
  }
  .year {
  width: 10% ;
  
  }
  .months{
    margin-left: 20px;
  }
  .weeks{
    margin-left: 20px;
  }
  
  select{
    padding-left: 10px;
    height: 40px;
    width: 20%;
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    border-radius: 20px;
  }
  input{
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    margin-left: 20px;
    height: 37px;
    font-weight:lighter;
    padding-left: 10px;
    border-radius: 20px;
  }
  .year{
   
  }
     .therapist_samples{
    margin-top: 100px;
    font-size: 20px;
  }
  .therapist_samples h2{
      font-family: 'Times New Roman', Times, serif;
      font-size: 30px;
      font-weight: bold;
      margin-left: 500px;
      margin-top: 50px;
  }
  .therapist_samples h3{
    font-size: 40px;
    text-align: center;
    font-family: 'Times New Roman', Times, seri25
  }
  .therapist_samples h5{
    font-size: 25px;
    margin-left: 320px;
    margin-top: 20px;
    font-family: 'Times New Roman', Times, serif;
    width: 50%;
  }
 
  .therapist_samples h4{
    
    font-size: 30px;
    margin-left: 320px;
    margin-top: -120px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
  }

  .therapist_samples #img{
    width: 13%;
    margin-left: 100px;
    margin-top: 120px;
    border-radius: 100%;
     overflow: hidden;
    height: 150px;

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
    margin-top: -20px;
    font-size: 25px;
  }
  .therapist_sample h2{
      font-family: 'Times New Roman', Times, serif;
      font-size: 30px;
      font-weight: bold;
      margin-left: 600px;
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
</style>
