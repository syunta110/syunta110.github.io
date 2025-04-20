<template>
    <div class="all">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>時限</th>
            <th v-for="day in days" :key="day" class="title-holizen">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="slot in timetable" :key="slot.period">
            <td>{{ slot.period }}</td>
            <td
              v-for="day in days"
              :key="day"
              :class="cellClass(day, slot)"
            >
              {{ getClass(day, slot.period) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="sentences">
        <div class="schedule-checker">
    <h2>{{ nowTime }}</h2>
    <h3 v-if="isInClass" class="now-lesson">現在：授業中です</h3>
    <h3 v-else class="now-nolesson">現在：空き時間です</h3>
  </div>
      </div>
    </div>
  </template>
  <style scoped>
  .all {
    width: 100vw;
    height: calc(100vh - 160px);
    padding-top: 60px;
    display: flex;
  }
  .schedule-table {
    width: 40%;
    height: 70vh;
    margin: 20px;
    border-collapse: collapse;
    text-align: center;
  }
  .schedule-table td,
  .schedule-table th {
    border: 1px solid #ccc;
    padding: 10px;
    min-width: 80px;
  }
  .title-holizen {
    background-color: #eeeeee;
    font-weight: bold;
  }
  .highlight {
    background-color: #005898;
    color: white;
    font-weight: bold;
  }
  .filled {
    background-color: #b3424a;
    opacity: 0.95;
    padding: 0.1px;
  }
  .empty {
  }
  .schedule-checker {
    width: 60%;
    margin-left: 200px;
    padding-top: 50%;
  }
  .now-lesson {
    color: #005898;
    font-size: 30px;
    font-weight: bold;
    font-family: "Zen Kaku Gothic New", sans-serif;
  }
  .now-nolesson {
    font-size: 30px;
    font-weight: bold;
    font-family: "Zen Kaku Gothic New", sans-serif;
    }
    @media screen and (max-width: 768px) {
      .all {
        flex-direction: column;
        width: 100%;
        height: 65vh;
        overflow-y: auto;
        padding-top: 120px;
      }
      .schedule-table {
        width: 80vw;
        height: auto;
        margin: 0;
      }
      .schedule-checker {
        width: 100%;
        margin-left: 0;
        padding-top: 20px;
      }
        
    }
  </style>
  
  
  <script>
  export default {
    data() {
      return {
        now: new Date(),
        days: ['月', '火', '水', '木', '金'],
        timetable: [
          { period: 1, start: '08:50', end: '10:30' },
          { period: 2, start: '10:40', end: '12:20' },
          { period: 3, start: '13:10', end: '14:50' },
          { period: 4, start: '15:05', end: '16:45' },
          { period: 5, start: '17:00', end: '18:40' },
          { period: 6, start: '18:55', end: '20:35' }
        ],
        classes: {
          月: { 1: '', 2: '', 3: 'データサイエンス', 4: '仏語', 5: '' },
          火: { 1: '開発経済学Ⅰ', 2: '公共政策', 3: '金融論', 4: '', 5: '' },
          水: { 1: '日本経済論', 2: '',3: 'English', 4: 'English', 5: '仏語' },
          木: { 1: '', 2: '', 3: '', 4: '', 5: '' },
          金: { 1: '', 2: '', 3: 'マクロ経済学', 4: '', 5: '' }
        }
      }
    },
    mounted() {
      setInterval(() => {
        this.now = new Date()
      }, 1000)
    },
    computed: {
    nowTime() {
      return this.now.toLocaleTimeString()
    },
    isInClass() {
      return this.days.some(day => {
        return this.timetable.some(slot => this.isNow(day, slot.start, slot.end) && this.getClass(day, slot.period))
      })
    }
  },
    methods: {
      getClass(day, period) {
        return this.classes[day]?.[period] || ''
      },
      isNow(day, start, end) {
        const now = this.now
        const daysMap = ['日', '月', '火', '水', '木', '金']
        const today = daysMap[now.getDay()]
        if (day !== today) return false
  
        const nowMin = now.getHours() * 60 + now.getMinutes()
        const [sh, sm] = start.split(':').map(Number)
        const [eh, em] = end.split(':').map(Number)
        const startMin = sh * 60 + sm
        const endMin = eh * 60 + em
  
        return nowMin >= startMin && nowMin < endMin
      },
      cellClass(day, slot) {
        const hasClass = !!this.getClass(day, slot.period)
        const isCurrent = this.isNow(day, slot.start, slot.end)
  
        return {
          highlight: isCurrent,
          filled: hasClass && !isCurrent,
          empty: !hasClass && !isCurrent
        }
      }
    }
    
  }
  
  </script>
  
  