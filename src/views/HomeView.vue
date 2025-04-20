<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <!-- 諸事情で左右逆です -->
  <div class="home">
    <div class="rigit-side">
        <img src="../assets/images/jigazou.jpg" alt="" class="myphoto">
    </div>
    <div class="left-side">    
      <SectionTitle>自己紹介</SectionTitle>
      <p>
        こんにちは。<br>
        私は叶竣太です。<br>
        出身は福岡県春日市です。<br class="sp"> 
        現在は大学で政治と経済について学んでいます。<br>
        また、学祭運営のサークルに参加しており、<br>
        私はその中でWebサイト制作チームのサブチーフをしています。<br>
        11月の学祭に向けて、<br>
        必要な技術を習得できるように準備を進めています。<br>
      </p>
    </div>

  </div>
</template>

<style scoped>
.home {
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: 60px;
  height: calc(100vh - 160px);
  display: flex;
}
p {
  font-size: 20px;
  line-height: 1.5;
  margin-top: 10%;
  
}
.left-side {
  width: 50%;
  margin-top: 10%;
  margin-left: -20%;
}
.rigit-side {
  width: 50%;
  margin-top: 10%;
  margin-left: 15%;
}
.SectionTitle {
margin-top: 10%;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  width:40%;
}
.myphoto {
  width: 300px;
  height: auto;
}
.sp {
  display: none;
}

@media screen and (max-width: 768px) {
  .SectionTitle {
    width: auto;
  }
  .home {
    flex-direction: column;
    width: 90%;
    height: auto;
    overflow-y: auto;
  }
  p {
    font-size: 15px;
  }
  .left-side, .rigit-side {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-top: 30px;
  }
  .myphoto {
    width: 80%;
    height: auto;
    padding: 0;
    margin: 0;
  }
  .sp {
    display: inline;
  }
}


</style>
<script>
import SectionTitle from '@/components/SectionTitle.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    SectionTitle,
    BaseButton
  }
}
</script>
