<template >
   
    <div class="header">
        <a href="/" class="power_hour"><h2>Power Hour</h2></a>
        <button class="btn btn-outline-info" @click="notTherapist">NOT A THERAPIST?</button>
        <button class="btn btn-warning" id="login">LOG IN</button>
     
    </div>
  <div class="create_account">
      <div class="account_header">
        <img src="@/img/account1.png" @click="createAccount">
          <h2>Create Therapist Account</h2>
          <a href="therapist_list" @click="findTherapist">Not a therapist? Sign up as a client here »</a>
      </div>
    </div>

    <div class="account">
        <h1>Contact Details</h1>
        <h2 class="name">Name</h2>
    <div class="FN">
        <label>First Name: *</label><br>
        <input type="text">
    </div>
    <div class="LN">
        <label>Last Name: *</label><br>
        <input type="text"><br>
    </div>
    <div class="titles">
        <label>Title:</label><br>
        <select class="title">
            <option>Title</option>
            <option>Dr.</option>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
            <option>Miss.</option>
            <option>Prof.</option>
            <option>Sister</option>
        </select>
    </div>
    <div class="initials">
        <label>Initials of your credentials:</label><br>
        <input type="text" placeholder="E.g. PhD, MA, LCSW"><br>
    </div>
    <div class="genders">
        <label>Gender</label><br>
        <select class="gender">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Non-Binary</option>
        </select>
    </div>
    <div class="DOB">
        <label>Date of birth: *mm/dd/yyyy</label><br>
        <input type="text" placeholder="mm/dd/yyyy">
    </div>
      
    <div class="address">
    <h2 class="address">Address</h2>
    <div class="FN">
        <label>Street address:</label><br>
        <input type="text">
    </div>
    <div class="LN">
        <label>City: *</label><br>
        <input type="text"><br>
    </div>

    <div class="titles">
        <label>Country: *</label><br>
        <select class="title">
            <option>Ethiopia</option>
            <option>Dr.</option>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
            <option>Miss.</option>
            <option>Prof.</option>
            <option>Sister</option>
        </select>
    </div>
    <div class="initials">
        <label>Zip/postal code: *</label><br>
        <input type="text" ><br>
    </div>
 
    <div class="FN">
        <label>State/province:</label><br>
        <input type="text">
    </div>
    <div class="DOB">
        <label>Telephone number:</label><br>
        <input type="text" >
    </div>
</div>
    <div class="websites">
        <h2 class="address">Websites</h2>
        <h3>Start with "http://" or "https://"</h3>
    <div class="FN">
        <label>Facebook:</label><br>
        <input type="text">
    </div>
    <div class="LN">
        <label>Twitter:</label><br>
        <input type="text"><br>
    </div>
    <div class="FN">
        <label>Instagram:</label><br>
        <input type="text">
    </div>
 
    <div class="initials">
        <label>YouTube:</label><br>
        <input type="text"><br>
    </div>
 
    <div class="FN">
        <label>LinkedIn:</label><br>
        <input type="text">
    </div>
    <div class="DOB">
        <label>Website:</label><br>
        <input type="text" placeholder="mm/dd/yyyy">
    </div>
    </div>

     <div class="loginDetails">
        <h2 class="address">Login Details</h2>
        
    <div class="FN">
        <label>Log-in email: *</label><br>
        <input type="text">
    </div>
    <div class="LN">
        <label>Confirm email: *
        </label><br>
        <input type="text"><br>
    </div>
    <div class="FN">
        <label>Choose a password: *
        </label><br>
        <input type="text">
    </div>
    <div class="initials">
        <label>Confirm password: *</label><br>
        <input type="text"  ><br>
    </div>
</div>

<div class="agree">
    <form>
    <input type="checkbox" class="checkbox">
</form>
    <p>I understand that all content on this website is copyright-protected bt international law. 
        Yes I'm over 18 years old and I agree to the <a href="#">terms and conditions</a> and i
         have read the <a href="#">privacy policy</a></p>
</div>
<button class="btn btn-warning" id="create" @click="create_account">CREATE ACCOUNT</button>

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

  export default{
    components :{

      
    },
    
      
    data(){
      return{
  
      
      } 
    },
    methods : {
    notTherapist : function(){
        this.$router.push('/');
        },
     createAccount : function(){
        this.$router.push('/login');
     },
     create_account : function(){
        this.$router.push('/login');
     },
     findTherapist : function(){
        this.$router.push('/therapist_list');
     }
    }
    }
</script>

<style lang="scss" scoped>
    .header .power_hour{
        text-decoration: none;
        color: #000;
    }
    .footer{
    width: 100%;
    margin-left: -500px;
    height: 20%;
    background-color: black;
  }
  .footer_title{
    margin-left: 550px;
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
    margin-left: 0px;
  }
  .footer_content_2 h3{
    font-size : 40px;
    margin-left: -10px;
    margin-top: 15px;
  }
  .footer_content_1 h4{
    font-size : 30px;
    
  }

  .footer_content_2 p{
    font-size : 30px;
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
    width: 80%;
    color: white;
  margin-left: 150px;
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
    .account_header img{
        cursor: pointer;
    }
    #create{
        width: 300px;
        height: 60px;
        border-radius: 20px;
        margin-top: 30px;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;

    }
    .agree p{
        width: 60%;
        margin-left: -170px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
        margin-top: -30px;
    }
    .checkbox{
     margin-left: -200px;
     margin-top: 60px;
     height: 20px;
     width: 20px;
 }
    .loginDetails{
        margin-top: 150px;
    }
    h3{
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
        margin-top: 50px;
        margin-left: -250px;
    }
    .address{
        margin-top: 150px;
    }
    .websites{
        margin-top: 150px;
    }
    .titles select{
        margin-left: -260px;
    }
    .street input{
        margin-left: -43px;
    }
    .state input{
        margin-left: -55px;
    }
    .city{
        margin-left: 550px;
        margin-top: -85px;
    }
    .city input{
        margin-left: 40px;
        
    }
    .countries{
        margin-left: 550px;
        margin-top: -80px;
    }
    .countries select{
        margin-left: 20px;

    }
    .phone{
        margin-left: 550px;
        margin-top: -80px;
    }
    .account{
        width: 100%;
        margin-left: 500px;
        
    }
    ::placeholder{
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
    }
    select{
        width: 400px;
        border-radius: 10px;
        height: 35px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
    }
    .account h1{
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 35px;
        margin-top: 100px;
        margin-left: 50px;
    }
    .account h2{
        font-family: 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 30px;
        margin-top: 50px;
        margin-left: -250px;
    }
    .FN input{
     
        font-size: 20px;
        margin-left: -260px;
        font-family: 'Times New Roman', Times, serif;
    }
    .LN{
        margin-left: 450px;
        margin-top: -127px;
    }
    .LN input{
        margin-left: -250px;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
    }
    .initials{
        margin-left: 450px;
        margin-top: -115px;
    }
    .initials input{
        
        font-size: 20px;
        margin-left: -250px;
        font-family: 'Times New Roman', Times, serif;
    }
    .DOB{
        margin-left: 450px;
        margin-top: -115px;
    }
    .DOB input{
        margin-left: -250px;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
    }
    .genders select{
        margin-left: -260px;
    }
    label{
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
        margin-left: -250px;
        margin-top: 50px;
        padding-right: 100px;
    }
    input{
        margin-left: -70px;
        height: 35px;
        width: 400px;
        border-radius: 10px;
    }

.create_account{
    width: 100%;
    height: 400px;
    background-image: url("../img/profile1.jpeg");
}
.account_header img{
    width: 15%;
    height: 150px;
    margin-top: 100px;
    margin-left: 550px;
}
.account_header h2{
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    margin-top: 10px;
    margin-left: 530px;
    color: #fff;
    padding-top: 30px;
}
.account_header a{
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    margin-left: 500px;
    padding-top: 120px;
    color: #fff;
    text-decoration: none;
}
.account_header a:hover{
    text-decoration: underline;
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
