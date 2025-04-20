<template>
    <div class="timeline-container">
      <div class="slide" v-for="item in history" :key="item.id">
        <SectionTitle>{{ item.title }}</SectionTitle>
        <p class="contents" v-html="item.description"></p>
        
      </div><div class="images">        
            <img :src="item.image" alt="画像" class="image"/>
            <img :src="item.image" alt="画像" class="image"/>
        </div>

    </div>
  </template>
  

<style>
.timeline-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; 
  width: 100vw;
  height: calc(100vh - 160px);
  padding-top: 60px;
}
.SectionTitle {
  width: 100%;
}
.slide {
  flex: 0 0 95%;
  scroll-snap-align: start;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
}
.image {
    margin-left: 10px;
    width: 300px;
}
.images {
    display: flex;
    width: 10%;
    margin-left: 50%;
}
.contents {
  margin: 0;
  padding: 0;
  font-size: px;
  line-height: 1.5;
  width: 30vw;
}
@media (max-width: 600px) {
  .slide {
    padding: 16px;
    font-size: 14px;
  }

  .slide img {
    width: 90%;
    height: auto;
  }
}

</style>  

  <script>
import SectionTitle from '@/components/SectionTitle.vue'
import BaseButton from '@/components/BaseButton.vue'
import img1 from '@/assets/images/saikun-23.jpeg'
import img2 from '@/assets/images/saikun-23.jpeg'

  export default {
    data() {
      return {
        history: [
          { id: 1, title: '小学生時代', description: '出身は福岡県春日市です。<br>  ままま<br>  ままま<br>  ままま<br>  ままま<br>  ままま<br>  ままま', image: img1 },
          { id: 2, title: '中学生時代', description: '〜でした', image: img2 },
          { id: 1, title: '小学生時代', description: 'カカ閣下かかkでした', image: img1 },
          { id: 2, title: '中学生時代', description: '〜でした', image: img2 },
        ]
      }
    },
    components: {
    SectionTitle,
    BaseButton
  }
  }

  </script>