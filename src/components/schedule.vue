<template >
  <div class="header">
    <h2>Power Hour</h2>
    <button class="btn btn-outline-info">NOT A THERAPIST?</button>
    <button class="btn btn-warning" id="login">LOG IN</button>
    <hr>
 
</div>
 <div class="view_schedule">
<div class="therapist_sample">
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


  <button class="btn btn-warning" id="view_schedule">View Schedule</button>
    </div>
  </div>
 
<div class="therapists_schedule">
  <table id="firstTable">
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
        <td>{{row.action}}</td>
     
      </tr>
    </tbody>
  </table>
</div>
</div>
</template>
<script>


  export default{
    components :{

      
    },
    
      
    data(){
      return{
        rows: [
      { working_hour: "3:00 -4:30", status: "Scheduled", action: '305-917-1301' },
      { working_hour: "4:30 -6:00", status: "Scheduled", action: '305-917-1301' },
      { working_hour: "7:30 -9:00", status: "Free", action: '305-917-1301' },
      { working_hour: "9:00 -10:30", status: "Scheduled", action: '305-917-1301' },
      { working_hour: "10:30 -12:00", status: "Free", action: '305-917-1301' },
      ],
      showTherapistOne : true,
      showTherapistTwo : false,
      showTherapistThree : false,
      showTherapistFour : false,

    
  }

      
    },
    methods : {
     
    }
    }
</script>

<style lang="scss" scoped>
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
    margin-top: 50px;
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
     .therapist_sample{
    margin-top: 00px;
    font-size: 20px;
  }
  .therapist_sample h2{
      font-family: 'Times New Roman', Times, serif;
      font-size: 30px;
      font-weight: bold;
      margin-left: 500px;
      margin-top: 50px;
  }
  .therapist_sample h3{
    font-size: 40px;
    text-align: center;
    font-family: 'Times New Roman', Times, seri25
  }
  .therapist_sample h5{
    font-size: 25px;
    margin-left: 320px;
    margin-top: 30px;
    font-family: 'Times New Roman', Times, serif;
    width: 50%;
  }
  .therapist_sample h4{
    
    font-size: 30px;
    margin-left: 320px;
    margin-top: -120px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
  }
  .therapist_sample #img{
    width: 13%;
    margin-left: 100px;
    margin-top: 100px;
    border-radius: 100%;
     overflow: hidden;
    height: 150px;

  }
</style>
