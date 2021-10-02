<template >
<div class="container">
  <div class="jumbotron">
    <div class="elements">
      <div class="header">
    <h1>{{title}}</h1>
      </div>
      <div class="questions">
    <div id="checkbox" class="quesion_1" v-if="question_1">
    <p>1. What is your name</p>
    <input type="radio" id="html" name="fav_language" value="HTML" class="radioBtn">
<label for="html">John Shimelis</label><br>
<input type="radio" id="css" name="fav_language" value="CSS" class="radioBtn">
<label for="css">Yohannes Assebe</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript" class="radioBtn">
<label for="javascript">Daniel Admasu</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript" class="radioBtn">
<label for="javascript">Kaleb Solomon</label><br>
<button type="button"  @click="button_one" class="btn btn-success">Next</button>
</div>
<div id="checkbox" class="quesion_1" v-if="question_2">
  <p>2. What is your fav food</p>
  <input type="radio" id="html" name="fav_language" value="HTML">
<label for="html">Meet</label><br>
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">Vegitable</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">Fruit</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">Fasting Foods</label>
<br>
<button type="button" class="btn btn-primary btn-lg" @click="prev_two">Prev</button>
<button type="button"  class="btn btn-success" @click="button_two">Next</button>
</div>

<div id="checkbox" class="quesion_1" v-if="question_3">
  <p>3. What is your education level</p>
  <input type="radio" id="html" name="fav_language" value="HTML">
<label for="html">Diploma</label><br>
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">Degree</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">Masters</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">Phd</label>
<br>
<button type="button" class="btn btn-primary btn-lg" @click="prev_three">Prev</button>
<button type="button"  class="btn btn-success" @click="button_three">Next</button>
</div>

<div id="checkbox" class="quesion_1" v-if="question_4">
  <p>4. What is your relationship status</p>
  <input type="radio" id="html" name="fav_language" value="HTML">
<label for="html">In relationship</label><br>
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">Engaged</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">Married</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">Divorced</label>
<br>
<button type="button" class="btn btn-primary btn-lg" @click="prev_four">Prev</button>
<button type="button"  class="btn btn-success" @click="button_four">Next</button>
</div>
  
<div id="checkbox" class="quesion_1" v-if="question_5">
  <p>5. What is your political view</p>
  <input type="radio" id="html" name="fav_language" value="HTML">
<label for="html">Feudal</label><br>
<input type="radio" id="css" name="fav_language" value="CSS">
<label for="css">Democrat</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">Dictator</label><br>
<input type="radio" id="javascript" name="fav_language" value="JavaScript">
<label for="javascript">Free</label>
<br>
<button type="button" class="btn btn-primary btn-lg" @click="prev_five">Prev</button>
<button type="button"  class="btn btn-success" @click="button_five">Submit</button>
</div> 
  
</div>
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
        title : "Questionnaires For Therapists",
       question_1 : true,
       question_2 : false,
       question_3 : false,
       question_4 : false,
       question_5 : false,

  
      
      } 
    },
    methods : {
      button_one:function(){
        this.question_1 = false;
        this.question_2 = true;
      },
      button_two:function(){
        this.question_2 = false;
        this.question_3 = true;
      },
      button_three:function(){
        this.question_3 = false;
        this.question_4 = true;
      },
      button_four:function(){
        this.question_4 = false;
        this.question_5 = true;
      },
      button_five:function(){
       this.$router.push('/nav')
        
      },
      prev_two:function(){
        this.question_1 = true;
        this.question_2 = false;
      },
      prev_three:function(){
        this.question_2 = true;
        this.question_3 = false;
      },
      prev_four:function(){
        this.question_3 = true;
        this.question_4 = false;
      },
      prev_five:function(){
        this.question_4 = true;
        this.question_5 = false;
      }

      
     
    }
    }
</script>

<style lang="scss" scoped>

  .container{
    margin-left: 120px;
    padding: 40px;
    margin-top: 20px;
    background-color: black;
  }
  .jumbotron{
    border-radius: 50px;
    background-color: lightgrey;
    padding: 50px;
   
    height: 450px;
  }
  .elements{
    margin-left:100px;
  }
  label{
    margin-left: 20px;
  }
  .header{
    font-family: 'Times New Roman', Times, serif;
  }
  .questions{
    margin-left: 40px;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
  }
#checkbox input{
  display:inline-block;
  margin-bottom: 30px;
}
button{
  width: 100px;
  border-radius: 10px;
  margin-left: 20px;
  color: blue;
  font-size: 20px;
}
li{
  
  list-style-type: none;
}
</style>
