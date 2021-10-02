<template >
    <div class="header">
        <a href="/" class="power_hour"><h2>Power Hour</h2></a>
        <button class="btn btn-outline-info" @click="notTherapist">THERAPIST?</button>
        <button class="btn btn-warning" id="login" @click="login">LOG IN</button>
        <hr>
     
    </div>
    <article>

        <div class="container">
            <div class="overlay-container" :class="{'sign-up-active' : signUp}">
               <div class="overlay">
                 <div class="overlay-left">
                      <div class="sign-up">
                            <form class="sign-up" action="#" @submit.prevent="submit">
                                <h1>Create Login</h1>
                                <div class="emailText"><p>Use your email for registration</p></div>
                                <div id="reg_student">
                               
                                <input type="text" placeholder="Student ID" v-model.trim="id" />
                               
                                <input type="text" placeholder="Name" v-model.trim="name"/>
                                <input type="email" placeholder="Email" v-model.trim="email"/>
                                <input type="password" placeholder="Password" v-model.trim="password"/>
                                <input type="password" placeholder="Confirm Password" v-model.trim="confirm_password"/>
                                </div>
                               
                                 
                            
                                <button @click="Register">Sign Up</button>
                            </form>
                        </div>
                    </div>
                    
            <div  class="sign-in">
                <form class="sign-in" action="#">
                    <h1>Sign In</h1>
                    <div>Use your account</div><br>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="error"><p>{{error}}</p></div>
                    <input data-test="email-login" type="email" placeholder="Email" v-model="email" />
                   
                 
                    <input data-test="password-login" type="password" placeholder="Password" v-model="password"/>
                    
                    <a href="#">Forget Your Password?</a>

                   <button data-test="sign-in" @click="goToHome">Sign In</button>
                
                </form>
            </div>
                    <div class="overlay-right">
                        <h2>Hello, Users!</h2>
                        <p v-if="!signUp" class="signup-title">Please enter your personal detail to create account</p>
                        <p v-else-if="signUp">Please enter your personal detail to login</p>
                        <button class="invert" id="signUp" @click="signUp = !signUp" v-if="!signUp">Sign Up</button>
                        <button class="invert" id="signUp" @click="signUp = !signUp" v-else-if="signUp">Sign In</button>
                    </div>
                  
                     
                
                </div>
                
            </div>
       <div class="submitted">
           <h3>Thanks for adding your post</h3>
       </div>
      
        </div>
        <router-view />
    </article>
  
</template>
<script>


//import axios from 'axios'
//import firebase from 'firebase'
import {email, required, minLength, maxLength, between} from 'vuelidate/lib/validators'
  export default{
    
    components :{
    
    },
    data(){
      return{
          signUp : false,
          success : "user logs in",
          error : "",
          req : "fill the required fields",
          
         name : "",
         email : "",
         password : "",
         confirm_password : ""
          
         
          
      }
    },
    validations : {
       student_id : {
         required,
         between : between(1, 100)
       },
       email :{
           required,
           email
       },
       name : {
           required,
           minLength : minLength(3),
           maxLength : maxLength(10)
       },
      
       password:{
           required,
           minLength : minLength(3),
           maxLength : maxLength(5)
       },
      confirm_password:{
           required,
           minLength : minLength(3),
           maxLength : maxLength(5)
       }
    

    },


    methods : {
       
         goToHome : function(e){
        e.preventDefault();
        
        if(this.email == "" && this.password == ""){
           this.error="Fill the required fields";
       }
       else if(this.password == ""){
           this.error = "Password is required";
        }
  
        else if(this.email == ""){
           this.error = "Email is required";
        }
        // else if(this.password.length < 8){
        //     this.error= "Invalid email or password";
        // }
        else{
            this.$router.push('/')  
        }
       
     },
     goToDashbord : function(){
         this.$router.push('/dashbord');
     },
     notTherapist : function(){
        this.$router.push('/therapist_to_hire');
        },
     login : function(){
        this.$router.push('/signup');
         
      },
    //   Register : function(){
    //     const data = {
    //          id: this.account.id,
    //          name : this.account.name,
    //          email : this.account.email,
    //          password : this.account.password,
    //          confirm_password : this.account.confirm_password

    //     };
    //     axios.post('https://jsonplaceholder.typicode.com/posts', data)
    //     .then(
    //         res=> {
    //             console.log(res)
    //         }
    //     ).catch(
    //         err => {
    //             console.log(err);  
    //         }
    //     )
    //   }
     
    }
    }     
</script>

<style lang="scss" scoped>
    .sign-in input{
        color : #000;
       
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
    }
    .error{
      
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
    }
    .error p{
        color : #cc020f;
        margin-left : 10px;
    }
    .sign-in input{
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
    }
    .sign-in a{
        font-family: 'Times New Roman', Times, serif;
        font-size: 18px;
    }
    .sign-in button{
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
    }
    .overlay-right .invert{
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
    }
    .overlay-right h2{
        font-family: 'Times New Roman', Times, serif;
        font-size: 30px;
    }
    .sign-up button{
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
    }
    #reg_student input{
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
    }
    .emailText {
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        color: #000;
        margin-left: 150px;
        width: 100%;
    }
    .emailText p{
        color: #000;
    }
     .header .power_hour{
        text-decoration: none;
        color: #000;
    }
            .header h2{
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 30px;
    margin-top: 20px;
    margin-left: 50px;  
}
.header button{
    margin-left: 800px;
    border-radius: 20px;
    margin-top: -60px;
    height: 40px;
    width: 220px;
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

    .container{
    position: relative;
    margin: auto;
    margin-top: 50px;
      width: 768px;
        height: 480px;
        border-radius: 50px;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0,0,0,.2),
                    0 10px 10px rgba(0,0,0,.2);
        background: linear-gradient(to bottom, #efefef, #ccc);            

    }
   
    .overlay-container{
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
       
        transition: transform .5s ease-in-out;
        z-index: 100;
}
.sign-in{
    width: 50%;
    height: 100%;
}
.overlay{

     position: relative;
     left: -100%;
     height: 100%;
     width: 200%;
     background: linear-gradient(to bottom right, red, blue);
     color: #fff;
     transform: translate(0);
     transition: transform .5s ease-in-out;

}


.overlay-left{
    position: absolute ;
    top: 0 ;

    display: flex ;
    align-items: center ;
    justify-content: space-around ;
    flex-direction: column ;
    padding: 70px 20px ;
    width: calc(50% - 80px);
    height: calc(100% - 140%) ;
    text-align: center ;
    transform: translateX(0) ;
    transition : transform .5s ease-in-out ;
}
.overlay-left .sign-up form{
    margin-top: -80px;
  
   
    height: 500px;
}
.overlay-right button{
    margin-left: -120px;
}

.overlay-right{
    position: absolute;
    top: 150px;
    right:50px;
     display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 100%);
    text-align: center;
    transform: translateX(20%);
    transition : transform .5s ease-in-out;
   
}

h2{
  margin-left: -100px;
   
}
P{
   margin-left: -100px;
    color: #fff;
    margin-top: 50px;
    font-size: 20px;
    font-weight: bold;
}
a{
    color: #222;
    text-decoration: none;
    margin: 15px 0;
    font-size: 1rem;

}
h1{
    font-weight: bold;
    color: #000;
    font-size: 30px;
}
#reg_psychiatry input{
    width: 300px;
}
button{
    border-radius: 20px;
    border: 1px solid blue;
    background-color:blue;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform .1s ease-in-out;


&:active{
    transform: scale(.9);
}
&.focus{
    outline: none;
}}

button.invert{
    background-color: transparent;
    border-color: #fff;
}
select{
    margin-left: -130px;
    border-radius: 10px;
    border: 1px solid #fff;
    margin-top: 10px;
    background : linear-gradient(to bottom, #efefef, #ccc);
    height: 150px;
    width: 120px;
    


}
select option{
    background-color: #ddd;
}
form{
    position:absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    width: 300px;
    height: 300px;
    text-align: center;
    background : linear-gradient(to bottom, #efefef, #ccc);
    transition: all .5s ease-in-out;
    }
    .sign-up div{
        font-size: 1rem;
        color: black;
    }
    .sign-in div{
      
        font-size: 20px;
        color: black;
    }
    input{
        background-color: #eee;
        border: none;
        padding: 8px 15px;
        height: 30px;
        margin: 6px 0;
        width: 250px;
        border-radius: 15px;
        border-bottom: 1px solid #ddd;
        box-shadow: inset 0 1px 2px rgba(0,0,0,.4), 0 -1px 1px #fff, 0 1px 0 #fff;
        overflow: hidden;
        &.focus{
            outline: none;
            background-color : #fff;
        }
    
    }
    
    div.sign-in{
        margin-left: -30px;
        z-index: 2;
    
    }
   
    .sign-up button{
        margin-right: -180px;
    }
    div.sign-up{
     margin-left: -100px;
        z-index: 1;
        opacity: 0;
    }
    .sign-up button{
        margin-top: 30px;
    }
    .sign-up {
        height: 400px;
    }
    sign-up{
        top: 100px;
    }
    
    .sign-up-active{
        
  
        .sign-up{
        transform: translateX(200%);
        opacity: 1;
        z-index: 5;
    }
    .sign-in{
         
         transform: translateX(-100%);
         width: 100%;
       
        
         }
   .overlay{
        transform: translateX(-40%);
        opacity: 1;
        margin-left: 20px;
        width: 160%;
        

        p{
          margin-left: -160px;
        }
        h2{
            margin-left: -160px;
        }
        button{
           margin-left: -180px;
        }
    }
    }
    .sign-in input{
        margin-top: 20px;
        padding: 15px;
  

    }
    .social-container{
      margin: 20px 0;
    }
    .social-container a{
        border: 1px solid #ddd;
        
        font-size: 20px;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        height: 20px;
        width: 40px;
        
    }
   form{
       height: 380px;
   }
</style>
