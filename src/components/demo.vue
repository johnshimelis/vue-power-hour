    <template >
<div class="container">
    <div class="yoga">
        <div class="yoga_title">
            <h3>Yoga and Meditation</h3>
            <div class="yoga_video">
                <video poster="@/img/intro_to_yoga.jpg" width="500" controls class="intro">
                    <source src="@/video/yoga.mp4" type="video/mp4">
                 
                  </video>
                  <video poster="@/img/benefits-of-yoga.jpg" width="500" controls class="benefit">
                    <source src="@/video/benefitOfYoga.mp4" type="video/mp4">
                   
                  </video>
                  <video poster="@/img/yoga_for_anxiety.jpg" width="500" controls class="anxiety">
                    <source src="@/video/anxiety.mp4" type="video/mp4">
                 
                  </video>
                  <video poster="@/img/depression.jpg" width="500" controls class="depression">
                    <source src="@/video/Depression.mp4" type="video/mp4">
                   
                  </video>
                  <video poster="@/img/gratitude.jpg" width="500" controls class="gratitude">
                    <source src="@/video/anxiety.mp4" type="video/mp4">
                   
                  </video>
                  
            </div>
                  <div class="video_title">
                    <h5>Introduction to Yoga</h5>
                    
                </div>
                <div class="video_title1">
                    <h5>Benefits of Yoga</h5>
                    
                </div>
                <div class="video_title2">
                    <h5>Yoga class : Yoga class for Anxiety</h5>
                </div>
                <div class="video_title3">
                    <h5>Yoga class : Yoga class for Depression</h5>
                    
                </div>
                <div class="video_title4">
                    <h5>Yoga class : Gratitude wake-up body flow</h5>
                    
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
        } 
        },
        methods : {
        }
        }
    </script>

    <style lang="scss" scoped>
.container{
   
    width: 100%;

    height: 300px;
}
 video{
   height: 200px;
   border-radius: 50px;
  margin-left: -200px;
  
 }
 .yoga_title{
    
     font-weight: bold;
     font-family: 'Times New Roman', Times, serif;
     font-size: 30px;
     text-align: center;
 }
 .yoga_title h3{
  
 }

 
.video_title{
    margin-left: -420px;
    margin-top: -300px;
   
}
.video_title h5{
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    
}
.video_title1{
    margin-left: 550px;
    margin-top: -30px;
   
}
.video_title1 h5{
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
}
.video_title2{
    
    margin-left: -920px;
    margin-top: 270px;
}
.video_title2 h5{
    
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
}
.video_title3{
    
    margin-left: -100px;
    margin-top: -30px;
}
.video_title3 h5{
    
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
}
.video_title4{
    
    margin-left: 800px;
    margin-top: -35px;
}
.video_title4 h5{
    
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
}
.intro{
     
     margin-left: 50px;
     width: 400px;
 }

.benefit{
    margin-left: 100px;
    width: 400px;
}
.anxiety{
   
   margin-left: -89px;
   width: 350px;
   
}
.depression{
  margin-left: 55px;
    width: 350px;
    padding-left: 20px;
}.gratitude{
    width: 350px;
    margin-left: 100px;
}
</style>