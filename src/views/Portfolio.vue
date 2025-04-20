<template>
<div class="home">
    <div class="left-side">
        <a href="https://wasedasai.net/inquiry/">
            <div class="image-hover-box">
            <img src="../assets/images/wasedasai.net_inquiry.png" alt="サンプル画像" class="image1" />
            <div class="overlay">
                <p>サイトにアクセス</p>
            </div>
        </div>
        </a>
        <a href="https://wasedasai.github.io/2025-OfficialWelcomeWebsite/">
         <div class="image-hover-box">
            <img src="../assets/images/wasedasai-shinkan.jpg" alt="サンプル画像" class="image1" />
            <div class="overlay">
                <p>サイトにアクセス</p>
            </div>
        </div>   
        </a>
        
    </div>
    <div class="right-side">    
        <div class="sectiontitle-ire">
        <SectionTitle>ポートフォリオ</SectionTitle>
        <p class="right-p">
            こちらはポートフォリオになります。<br>
            最新の制作物は
            <a href="https://wasedasai.github.io/2025-OfficialWelcomeWebsite/"><span class="url">
              早稲田祭運営スタッフ新歓サイトTopページです</span></a>
            。<br>
            また、早稲田祭2024では <span class="url"><a href="https://wasedasai.net/inquiry/">よくある質問ページ</a></span> の作成を担当しました。
        </p>
    </div></div>

    
</div>
</template>
<style scoped>
.sectiontitle-ire {
    margin-top: 10%;
    margin-left: 0;
    height: 600px;
    width: 100%;
}
.home {
    margin-top: 60px;
    height: calc(100vh - 160px);
    display: flex;
}
.left-side {
    width: 50%;
    padding-top: 15%;
    margin-left: 0;
    display: flex;
}
.right-side {
    width: 50%;
    text-align: center;
    padding-top: 12%;
}
.Sectiontitle {
}
.image1 {
    width: 300px;
    height: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.image-hover-box {
  position: relative;
  overflow: hidden;
  margin-left: 2%;
  
}

.image-hover-box img {
  display: block;
  height: auto;
  transition: 0.4s ease;
}

/* オーバーレイ（上にかぶせる黒背景＋文字） */
.image-hover-box .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5); /* 半透明の黒 */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.4s ease;
  font-size: 1.2rem;
  backdrop-filter: blur(2px); /* ぼかし効果（対応ブラウザのみ） */
}

/* ホバー時に表示する */
.image-hover-box:hover img {
  transform: scale(1.05);
}

.image-hover-box:hover .overlay {
  opacity: 1;
}
.right-p {
    text-align: left;
    font-size: 20px;
    line-height: 1.5;
}
a {
  text-decoration: none;
  color: #b3424a;
}
@media screen and (max-width: 768px) {
    .home {
        flex-direction: column;
        height: auto;
        padding-top: 60px;
    }
    .left-side, .right-side {
        width: 100%;
        padding-top: 0;
        margin-left: 0;
        margin-bottom: 50px;
        font-size: 15px;

    }
    .left-side {
      margin-top: 50px;
    }
    .sectiontitle-ire {
        margin-top: 0;
        height: auto;
    }

   .Sectiontitle {
    width: 100%;
   }
    .image1 {
        width: 100%;
        height: auto;
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
