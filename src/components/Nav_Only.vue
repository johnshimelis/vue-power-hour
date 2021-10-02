<template>
  <div class="navigation-nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <a class="navbar-brand" href="#" @click="goToHome">Power Hour</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" @click="goHome">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " href="" @click="findTherapist">Find a Therapist</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="howDoesItWork">How Does it Works</a>
            </li>
        
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Mentoring</a>
                <a class="dropdown-item" href="#">Coaching</a>
               
                <a class="dropdown-item" href="#">counselling</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Blog</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Help
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">FAQ</a>
                  <a class="dropdown-item" href="#">Help for Members</a>

                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">Contact</a>
              </li>
           
            
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            </form>
          <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button> -->
          <button class="btn btn-outline-warning" id="therapist_btn" @click="goToUser">Not a Therapist ?</button>
          <button class="btn btn-warning" id="login_btn" @click="login">Login</button>
        </div>
      </nav>
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
      goToHome : function(){
        this.$router.push('/');
      },
      findTherapist : function(){
        this.$router.push('/therapist_list');
      },
      howDoesItWork : function(){
        this.$router.push('./how_it_work')
      },
      login : function(){
        this.$router.push('/login');
      },
      goToUser : function(){
        this.$router.push('/')
      }
     
    }
    }
</script>
    
<style lang="scss" scoped>
body{
  background: blue;
}
.navigation-nav{
  width: 100px;
  position: fixed;
 
  top:0;

}
#login_btn{
 padding-left: 20px;
 font-family: 'Times New Roman', Times, serif;
 font-weight: bold;
 font-size: 20px;
 height: 40px;
}
#therapist_btn{
  margin-left: 200px;
  font-size : 20px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  width: 200px;

}
.navbar{
  height: 100px;
  width: 1400px;
}
form{
 margin-left: 380px;
}
form input{
  width: 180px;
  margin-top: 5px;
  margin-left: -80px;
  border-radius: 30px;
}
button {
  margin-left: 20px;
  color: black;
  border : 2px solid balck;
  width: 130px;
  border-radius: 30px;

}
.navbar-brand{
  font-size: 25px;
  margin-top: 10px;
  font-family: 'Times New Roman', Times, serif;
}
.nav-link{
  font-size: 18px;
  margin-top: -15px;
 
  color: #fff;
  font-family: 'Times New Roman', Times, serif;
}


</style>
