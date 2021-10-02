<template >
  <div class="login">
    <div class="header">
        <a href="/" class="power_hour"><h2>Power Hour</h2></a>
        <button class="btn btn-outline-info" @click="notTherapist">NOT A THERAPIST?</button>
        <button class="btn btn-warning" id="login">LOG IN</button>
        <hr>
    </div>
    <form>
    <h2>Welcome Back</h2>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button class="btn btn-warning" @click="therapistLogin">Log In</button>
    <p>Not yet registered? <a href="#" class="notYet" @click="createAccount">Join Us Today!</a></p>
    <a href="#">Forgotten your password?</a>
</form>
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
     createAccount : function(){
        this.$router.push('/create_account');
     },
     notTherapist : function(){
        this.$router.push('/therapist_list');
        },
        therapistLogin : function(){
            this.$router.push('./therapist')
        }
    }
    }
</script>

<style lang="scss" scoped>
      .header .power_hour{
        text-decoration: none;
        color: #000;
    }
    form h2{
        font-family: 'Times New Roman', Times, serif;
        font-size: 40px;
        margin-left: -50px;

    }
    form input{
        padding: 15px;
        margin-top: 20px;
        width: 400px;
        margin-left: -100px;
        border-radius: 20px;
    }
    ::placeholder{
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
    }
    input[type=password]{
        margin-top: 20px;
    
    }
    form{
        margin-left: 600px;
        margin-top: 100px;
    }
    form button{
        margin-top: 30px;
        margin-left: -20px;
        width: 200px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
        border-radius: 20px;

    }
    form p{
        margin-top: 40px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
        margin-left: -70px;

    }
    form a{
        font-family: 'Times New Roman', Times, serif;
        font-size: 23px;
        margin-left: -30px;
    }
    form .notYet{
        margin-left: 0px;
        font-size: 25px;
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
