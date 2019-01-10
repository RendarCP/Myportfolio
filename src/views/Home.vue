<template>
    <div>
      <div>
        <!--<img src="../assets/space_home.jpg" class="img">-->
        <div id="home-img"></div>
        <div id="home-img-center">
            <div id="home-title">Seong Wook Jo</div>
                <div class="home-pf">Portfolio</div>
                    <div>안녕하세요 조성욱의 포트폴리오사이트입니다.</div>
                    <div>제 사이트에 오신걸 환영합니다.</div>
                    <div></div>
                <div><b-button @click="Portfolio" variant="primary" class="main-btn">View My Portfolio</b-button>
                <b-button @click="Contactme" class="main-btn">Contact me</b-button>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
export default {
    methods:{
        Portfolio(){
            this.$router.push('/portfolio')
        },
        Contactme(){
            this.$router.push('/contactme')
        }
    }
}
</script>

<style>
/*#Home-img{
  background-image: url("../assets/space_home.jpg");
  background-color: #cccccc;
  height: 1000px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  left: 0px;
  top: 0px;
  z-index: -1;
} 
.img{
  width:1920px;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 1000px;
} */
.main-btn{
    margin:5px;
}
#home-img{
  margin-top:-100px;
  background-image: url("../images/space_home.jpg");
  background-color: #cccccc;
  height: 1000px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  left: 0px;
  top: 0px;
  z-index: -1;
}
#home-img-center{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
#home-title{
    font-family: 'Shrikhand', cursive;
    font-size:40px;
    font-weight: bold;
}
.home-pf{
    font-family: 'Shrikhand', cursive;
    font-size:30px;
}
</style>
