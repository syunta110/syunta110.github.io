<template>
    <div class="allbox">
      <div class="left-menu">
        <SectionTitle>一覧</SectionTitle>
          <div class="calenders">
            <button
                v-for="post in posts"
                :key="post.date"
                @click="selectDate(post.date)"
                :class="{ active: selectedDate === post.date }"
              >
                {{ post.date }}
      </button>
          </div>
      </div>
      <div class="right-content">
        <h2>{{ currentPost.title }}</h2>
        <p v-html="currentPost.content.replace(/\\n/g, '<br>')"></p>

      </div>
    </div>
</template>

<style scoped>
.allbox {
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
}
.left-menu {
  width: 30vw;
  height: calc(100vh - 100px);
  position: relative;
  padding-top: 70px;
  flex-direction: column;
}
.left-menu::after {
  content: '';
  position: absolute;
  top: 10%;
  bottom: 25%;
  right: -1px;
  width: 1px;
  background-color: #ccc; 
  z-index: -1;
}
.calenders {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
button {
  width: 60%;
  height: 50px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transform: translateX(35%);
}
button:hover {
  background-color: #e0e0e0;
}
button.active {
  background-color: #005898;
  color: white;
  font-weight: bold;
}
.section-title {
  width: 100% ;
  height: 70px;
}
.right-content {
  width: 70vw;
  height: calc(100vh - 100px);
  position: relative;
  padding-top: 70px;
  padding-left: 10px;
  z-index: -1;
  overflow-y: scroll
}
h2 {
  font-size: 40px;
  font-family: "Zen Kaku Gothic New", sans-serif;
}
p {
  font-size: 18px;
  line-height: 1.8;
  font-family: "Zen Kaku Gothic New", sans-serif;
}
@media screen and (max-width: 768px) {
h2 {
  font-size: 30px;
}
p {
  font-size: 15px;
}
button {
  font-size: 15px;
  width: 80%;
  transform: translateX(10%);
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
  },
  data() {
    return {
      selectedDate: null, 
      // 改行用\n<br>
      posts: [
        { date: '4月20日', title: '時間割機能の追加', content: '今日は時間割を現在時刻と組み合わせて今の状況がわかるようにしてみました。\n<br>デザインの参考にしたのは早稲コマという校内の有志が運営している時間割アプリです。\n<br>tableを使ってみたのは初めてでしたが、必要な工程が思っていたよりも少なく、\n<br>それでいて自由度が高く、おかげで参考デザインに寄せやすかったです。\n<br>早稲田祭公式サイトでもタイムテーブルなどを作成する際にtableを使用すると思うので、\n<br>より理解を深めていこうと思います。' },
        { date: '4月17日', title: 'ポートフォリオページの作成', content: 'ポートフォリオのページを作成しました。\n<br>各サイトのイメージを伝えたかったため、og;image風の画像を作成しました。\n<br>その画像をタッチしてもらうとサイトに飛ぶようにしました。\n<br>しかし、タッチできることに気づいてもらえない可能性もあったため、文章側からも飛べるようにしました。' },
        { date: '4月16日', title: 'ブログ作成開始', content: 'ブログを持っていなかったため、作成することにしました。\n<br>短期間で作成したいため、コンポーネントを作成することのできるvue.jsでプロジェクトを作成することにします。\n<br>view routerを用いたページ遷移は読み込みのストレスがほぼないため、\n<br>htmlとcssのみでサイトを作成するよりも他のページを見てもらえそうだと感じました。\n<br>一週間で５ページ程度のボリュームで作成しようと考えています。' },
      ]
    }
  },
  computed: {
    currentPost() {
      if (this.selectedDate) {
        return this.posts.find(post => post.date === this.selectedDate) || this.posts[0]
      }
      return this.posts[0]
    }
  },
  methods: {
    selectDate(date) {
      this.selectedDate = date
    }
  }
}

</script>
  