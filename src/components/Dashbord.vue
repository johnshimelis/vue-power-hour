<template >
    <div>
        <div  class="user">
            <img src="@/img/user.jpg"   alt="image is loading">
        </div>
  <div class="container" :class="{'hide' : active}">
      <div class="navigation" >
          <ul>
         
              <li>
                  <a href="#">
                  <span class="icon"><i class="fas fa-power-off"></i></span>
                  <span class="title"><h2><strong> Power Hour</strong></h2></span>
                  </a>
              </li>
              <li>
                  <a href="#">
                  <span class="icon"><i class="fas fa-home"></i></span>
                  <span class="title">Dashbord</span>
                  </a>
              </li>
             <li>
              <a href="#">
                  <span class="icon"><i class="fas fa-user-cog"></i></span>
                  <span class="title">Admin</span>
              </a>
              </li>
         
          
              <li>
                  <a href="#">
                  <span class="icon"><i class="fas fa-user-md"></i></span>
                  <span class="title">Therapist</span>
                 </a>
              </li>
         
        
              <li>
                  <a href="#">
                  <span class="icon"><i class="fas fa-user-nurse"></i></span>
                  <span class="title">Psychologist</span>
              </a>
              </li>
         
          
              <li>
                  <a href="#">
                  <span class="icon"><i class="fas fa-user-injured"></i></span>
                  <span class="title">Patients</span>
              </a>
              </li>
         
         
              <li>
                  <a href="#">
                  <span class="icon"><i class="fas fa-comment-dots"></i></span>
                  <span class="title">Message</span>
              </a>
              </li>
          
          
              <li>
                  <a href="#">
                  <span class="icon"><i class="fas fa-question"></i></span>
                  <span class="title">Help</span>
              </a>
              </li>
        
        
              <li>
                  <a href="#">
                  <span class="icon"><i class="fas fa-cog"></i></span>
                  <span class="title">Setting</span>
              </a>
              </li>
         
          
              <li>
                  <a href="#">
                  <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                  <span class="title">Sign Out</span>
              </a>    
              </li>
          
          </ul>
          
      </div>
      <div class="main">
          <div class="topbar">
              <div class="toggle" >
                  <span class="icon" @click="active = !active"><i class="fas fa-bars"></i></span>
              </div>
              <div class="search">
                  <label>
                      <input type="text" placeholder="Search here"/>
                      <span class="search-icon"><i class="fas fa-search"></i></span>
                  </label>
                  
              </div>
             
          </div>
          <div class="cardBox">
              <div class="card">
                   <div>
                       <div class="numbers">50</div>
                       <div class="cardName">Peoples In Queue</div>   
                   </div>
                   <div class="iconBox">
                       <i class="fas fa-person-booth"></i> 
                   </div>
              </div>
              <div class="card">
                  <div>
                      <div class="numbers">20</div>
                      <div class="cardName">Psychologist on Board</div>   
                  </div>
                  <div class="iconBox">
                      <i class= "fas fa-user-nurse"></i>
                  </div>
             </div>
             <div class="card">
              <div>
                  <div class="numbers">200</div>
                  <div class="cardName">Peoples Got Treated</div>   
              </div>
              <div class="iconBox">
                  <i class="fas fa-user-check"></i> 
              </div>
         </div>
         <div class="card">
          <div>
              <div class="numbers">30</div>
              <div class="cardName">Therapist On Board</div>   
          </div>
          <div class="iconBox">
              <i class="fas fa-user-md"></i>
          </div>
     </div>
          </div>
          <div class="details">
              <div class="recentCustomers">
                  <div class="cardHeader">
                      <h2>Recent Customers</h2>
                      <a href="#" class="btn">View All</a>
                  </div>
                  <table>
                      <thead>
                          <tr>
                              <td>Name</td>
                              <td>Age</td>
                              <td>Gender</td>
                              <td>Case</td>
                              <td>Status</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>John Shimelis</td>
                              <td>23</td>
                              <td>Male</td>
                              <td>Sleep</td>
                              <td class="status pending">Pending</td>
                          </tr>
                          <tr>
                              <td>John Assbe</td>
                              <td>23</td>
                              <td>Male</td>
                              <td>Tension</td>
                              <td class="status in-progress">In Progress</td>
                          </tr>
                          <tr>
                              <td>Daniel Admasu</td>
                              <td>23</td>
                              <td>Male</td>
                              <td>Depression</td>
                              <td class="status treated">Treated</td>
                          </tr>
                          <tr>
                              <td>Kaleb Solomon</td>
                              <td>23</td>
                              <td>Male</td>
                              <td>Sleep</td>
                              <td class="status pending">Pending</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="recentClient">
                  <div class="cardHeader">
                      <h2>Recently Treated</h2>
                  </div>
                  <table>
                      <tbody>
                          <tr>
                              <td width="60px"><div class="imgBx"><img src="@/img/user.jpg" ></div></td>
                              <td><h4>John<br><span>Addis Ababa</span></h4></td>
                          </tr>
                          <tr>
                              <td width="60px"><div class="imgBx"><img src="@/img/jo.jpg"></div></td>
                              <td><h4>John jo<br><span>Sebeta</span></h4></td>
                          </tr>
                          <tr>
                              <td width="6px"><div class="imgBx"><img src="@/img/jo1.jpg"></div></td>
                              <td><h4>Yohannes<br><span>USA</span></h4></td>
                          </tr>
                          <tr>
                              <td width="6px"><div class="imgBx"><img src="@/img/jo2.jpg"></div></td>
                              <td><h4>Jahhny<br><span>Adama</span></h4></td>
                          </tr>
                          <tr>
                              <td width="6px"><div class="imgBx"><img src="@/img/jo3.jpg"></div></td>
                              <td><h4>Yooo<br><span>Hawassa</span></h4></td>
                          </tr>
                   
                         
                      </tbody>
                  </table>
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
            title : "Admin Dashbord",
            active:false
    
        
        } 
      },
      methods : {
      
      }
      }
  </script>
  
  <style scoped lang="scss">
      *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'poppins', sans-serif;
  }
  
  .hide {
  .navigation{
    
      width: 60px;
  
  }
  .main .search{
     
   transform: translateX(-60%);
   transition: all .5s ease-in-out;
  }
  .main .cardBox{
      transform: translateX(-2%);
      transition: all .5s ease-in-out;
  }
  .main .details{
      transform: translateX(-2%);
      transition: all .5s ease-in-out;
  }
  .main {
      transform: translateX(-20%);
      transition: all .5s ease-in-out;
  }

  }
  .toggle .icon {
      font-size: 30px;
      margin-left: 10px;
  }
  ul li{
   list-style-type: none;
  }
  body{
      overflow-x: hidden;
  }
  .container{
      position: relative;
      width: 100%;
      margin-left: -31px;
      margin-top: -60px;
     
  
  }
  .navigation{
      width: 280px;
      height: 150%;
      background: #003147;
      transition: 0.5s;
      overflow: hidden;
  }
  .navigation ul{
    
      top: 0;
      left: 0;
      width: 100%;
      
  }
  .navigation ul li{
      position: relative;
      width: 100%;
      list-style: none;
  }
  .navigation ul li:hover{
      background: #03a9f4;
  
  }
  .navigation ul li:nth-child(1){
      margin-bottom: 20px;
  }
  .navigation ul li:nth-child(1):hover{
      background: transparent;
  }
  .navigation ul li a{
      position: relative;
      display: block;
      width: 100%;
      display: flex;
      text-decoration: none;
      color: #fff;
    
  }
  .navigation ul li a .icon{
      
      display: block;
      min-width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
     }
     .navigation ul li a.icon .fa{
         color: #fff;
         font-size: 24px;
     }
     .navigation ul li a .title{
         position: relative;
         display: block;
         padding: 0 10px;
         height: 60px;
         line-height: 60px;
         white-space: nowrap;
     }
     .main{
         position: absolute;
         width: calc(100% - 300px);
         left: 300px;
         margin-top: -620px;
     }
     .main .topbar{
         width: 100%;
         background: #fff;
         height: 60px;
         display:flex;
         justify-content: space-between;
         align-items: center;
     }
     .toggle{
         position: relative;
         width: 60px;
         height: 60px;
       
         cursor: pointer;
     }
  .search{
      position: relative;
      width: 400px;
      margin-left: 600px;
  }
  .search label{
      position: relative;
      width: 300px;
  }
  .search label input{
      width: 100%;
      height: 40px;
      border-radius: 40px;
      padding: 5px 20px;
      padding-left: 35px;
      outline: none;
      border: 1px solid black;
  }
  .search label .search-icon{
      position:absolute;
      left: 15px;
      margin-top: 10px;
  }
 .user img{
     height: 60px;
     width: 60px;
     border-radius: 100%;
     overflow: hidden;
     margin-left: 1280px;
 }
  .cardBox{
      position: relative;
      width: 100%;
      padding: 50px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 70px;
  }
  .cardBox .card{
      position: relative;
      border: none;
      background: lightcyan;
    
      width: 200px;
      padding-right: 100px;
      display:flex;
      justify-content: space-between;
      cursor: pointer; 
  }
  .cardBox .card .numbers{
      position: relative;
     margin-left: 40px;
      font-size: 2em;
      font-weight: 500;
  }
  .cardBox .card .cardName{
      color: #999;
      margin-left: 40;
      
  }
  .cardBox .card .iconBox{
      font-size: 3em;
      color: #03a9f4;
  }
  .details{
      position: relative;
      width: 100%;
      padding: 20px;
      padding-top: 0;
      display : grid;
      grid-gap: 20px;
      grid-template-columns: 2fr, 1fr;
  }
  .recentClient .cardHeader{
      margin-left: 800px;
      margin-top: -350px;
  }
  .recentClient table tbody tr td{
      margin-top: 400px;
  }
  .details .recentCustomers{
      position: relative;
      display: grid;
      min-height: 200px;
      background: #fff;
      padding: 20px;
      margin-top: 120px;
      width: 700px;
  }
  .recentClient .imgBx{
      width: 50px;
  }
  .recentClient{
      position: relative;
      display: grid;
      min-height: 20px;
      background: #fff;
      padding: 20px;
      margin-top: 120px;
      width: 700px;
  }
  .cardHeader{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
  }
  .cardHeader h2{
      font-weight: 600;
      margin-top: -150px;
  }
  .btn{
      position: relative;
      padding: 5px 10px;
      background: #03a9f4;
      color: #fff;
      text-decoration: none;
      border-radius: 6px;
      margin-top: -150px;
  }
  .details table{
      width: 100%;
      border-collapse: collapse;
      margin-top: -160px;
  }
  .details table thead td{
      font-weight : 600;
  }
  .details .recentCustomers table tr{
      border-bottom : 1px solid rgba(0,0,0,0.1);
  }
  .details .recentCustomers table tbody tr:last-child{
      border-bottom: none;
  }
  .details .recentCustomers table tbody tr:hover{
      background: #03a9f4;
      color: #fff;
  }
  .details .recentCustomers table tr td{
      padding: 9px 5px;
  }
  .details .recentCustomers table thead tr td:last-child,
  .details .recentCustomers table tbody tr td:last-child
  {
      text-align:right;
  }
  .details .recentCustomers table thead tr td:last-child(2),
  .details .recentCustomers table tbody tr td:last-child(2)
  {
      text-align: right;
      padding-right: 20px;
  }
  .details .recentCustomers table thead tr td:last-child(3),
  .details .recentCustomers table tbody tr td:last-child(3)
  {
      text-align: center;
  }
  td .status{
      position: relative;
      
      background: #f00;
      color: #fff;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 1px;
     
     
  }
  .pending{
      background: #f9ca3f;
  
  }
  .treated{
      background: #8de02c;
  }
  .in-progress{
     background:#1795ce; 
  }
  
  .details .recentClient{
      position: relative;
      min-height: 30px;
      background: #fff;
      padding: 20px;
      margin-left: 700px;
      margin-top: -200px;
  }
  .recentClient .cardHeader h2{
      margin-top: 180px;
      margin-left: -750px;
  }
  .details .recentClient .imgBx{
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
  }
  
  .details .recentClient .imgBx img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin-left: 10px;
      object-fit: cover;
  }
  .details .recentClient  tr{
     
      color: #fff;
  
  }
  .details .recentClient table tr td{
      padding: 7px 10px;
      color: #000;
  }
  .details .recentClient table tr td h4{
      font-size: 16px;
      font-weight: 500;
      line-height: 1.2em;
  }
  .details .recentClient table tr td h4 span{
      font-size: 14px;
      color: #999;
  }
  .details .recentClient table tr:hover,
  .details .recentClient table tr:hover td h4 span{
      background: #03a9f4;
      color: #fff;
  }
  @media(max-width: 992px){
      .navigation{
          left: -300px;
      }
      .navigation .active{
          left: 0;
      }
      .main{
          width: 100%;
          left: 0;
      }
      .main-active{
          width: calc(100% - 60%);
          left: 60px;
      }
      .cardBox{
          grid-template-columns: repeat(2, 1fr);
      }
  }
  @media (max-width:768px){
      .details{
          grid-template-columns: repeat(1, 1fr);
      }
      .cardHeader h2{
          font-weight: 600;
          font-size: 18px;
      }
  }
  @media(max-width: 480px)
  {
      .cardBox{
          grid-template-columns: repeat(1,1fr);
      }
      .details .recentClient table{
          width: 600px;
      }
      .navigation{
          width: 100%;
          left: -100%;
          z-index:1000;
      }
      .navigation .active{
          width: 100%;
          left: 0;
      }
      .toggle .active{
          z-index: 10000;
          position: fixed;
          right: 0;
          left: initial;
      }
      .toggle .active::before{
          color: #fff;
      }
      .main,
      .main .active{
          width: 100%;
          left: 0;
      }
  }
  </style>
  