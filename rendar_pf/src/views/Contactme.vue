<template>
    <div>
       <div id="contact-img">
         <div id="contact-center">
           <h1 class="anton-font">Contact me</h1>
           <span id="skill-font">저의 스킬이 마음에 드셨다면 연락주세요!</span><br>
            <form class="body">
               <a class="contact-btn" href="https://www.facebook.com/seongweek.cho" target="_blank">
                   <i class="fab fa-facebook-f"></i>
               </a>
                <a class="contact-btn" href="https://github.com/RendarCP" target="_blank">
                   <i class="fab fa-github"></i>
               </a>
                <a class="contact-btn" href="mailto:tjddnr0217@gmail.com">
                   <i class="fab fa-google"></i>
               </a>
           </form>
         </div>
       </div>
       <!--<div class="body">
           <div class="middle">
               <a class="contact-btn" href="https://www.facebook.com/seongweek.cho" target="_blank">
                   <i class="fab fa-facebook-f"></i>
               </a>
               <a class="contact-btn" href="https://github.com/RendarCP" target="_blank">
                   <i class="fab fa-github"></i>
               </a>
               <a class="contact-btn" href="mailto:tjddnr0217@gmail.com">
                   <i class="fab fa-google"></i>
               </a>
           </div>
       </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}
#contact-img{
    margin-top:-100px;
    background-image: url("../images/desk_me.jpg");
    height:800px;
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    left: 0px;
    top: 80px;
}
#contact-center{
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}
#skill-font{
    font-size:20px;
}
.anton-font{
    margin-top:100px;
    font-family: 'Anton', sans-serif;
}
.body{
    padding: 0;
    margin:0;
}
.middle{
    position: absolute;
    top: 60%;
    transform:  translateY(-50%);
    width:100%;
    text-align:center;
}
.contact-btn{
    display: inline-block;
    width:90px;
    height: 90px;
    background: #f1f1f1;
    margin:10px;
    border-radius: 30%;
    box-shadow: 0 5px 15px -5px #00000070;
    color:#3498db;
    overflow: hidden;
    position: relative;
}
.contact-btn i{
    line-height:90px;
    font-size: 26px;
    transition: 0.2s linear;
}
.contact-btn:hover i{
    transform: scale(1.3);
    color: #f1f1f1;
}
.contact-btn::before{
    content:"";
    position: absolute;
    width: 120%;
    height: 120%;
    background: #3498db;
    transform: rotate(45deg);
    left: -110%;
    top: 90%;
}
.contact-btn:hover::before{
    animation: aaa 0.7s 1;
    top: -10%;
    left: -10%;
}
@keyframes aaa{
    0%{
        left: -110%;
        top: 90%;
    }
    50%{
        left: 10%;
        top: -30%;
    }
    100%{
        left: -10%;
        top: -10%;
    }
}
</style>
