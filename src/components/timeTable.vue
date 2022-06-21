<!-- 列车时刻表 -->
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
let tableStatus = ref('工作日 Weekdays');
let currentTimeNum = ref(0);
// 获取当前时间 去
const getTimeInf = () => {
  const currentTime = new Date(); // 获取当前时间
  if (currentTime.getDay() === 0 || currentTime.getDay() === 6) {
    tableStatus.value = '双休日 Weekends';
  } else {
    tableStatus.value = '工作日 Weekdays';
  }
  // 如果不在运营范围内
  currentTimeNum.value = currentTime.getHours();
};

let timer: number | undefined = 123; // 定时器

onMounted(() => {
  getTimeInf();
  timer = setInterval(() => {
    getTimeInf();
  }, 1000 * 60);
});

onUnmounted(() => {
  clearInterval(timer);
});

// 只显示 5行数据

const calcTimeList = computed(() => {
  let pointer = 0;
  timeData.forEach((item, index) => {
    if (item.label === currentTimeNum.value) {
      pointer = index;
    }
  });
  // 中
  if (pointer < 2) {
    return timeData.slice(0, 5);
  } else if (pointer > 12) {
    return timeData.slice(-5);
  } else {
    return timeData.slice(pointer - 2, pointer + 3);
  }
});

const timeData = [
  {
    label: 6,
    list: ['10', '15', '21', '26', '32', '37', '43', '48', '54', '59']
  },
  {
    label: 7,
    list: ['05', '10', '16', '21', '27', '32', '38', '44', '49', '54']
  },
  {
    label: 8,
    list: ['00', '05', '11', '16', '22', '27', '33', '38', '44', '49', '55']
  },
  {
    label: 9,
    list: ['00', '06', '11', '17', '22', '28', '33', '39', '44', '50', '55']
  },
  {
    label: 10,
    list: ['01', '06', '12', '17', '23', '28', '34', '39', '45', '50', '56']
  },
  {
    label: 11,
    list: ['01', '07', '12', '18', '23', '29', '35', '40', '46', '51', '56']
  },
  {
    label: 12,
    list: ['02', '07', '13', '18', '24', '29', '35', '41', '46', '51', '57']
  },
  {
    label: 13,
    list: ['02', '08', '13', '19', '24', '30', '35', '41', '46', '52', '57']
  },
  {
    label: 14,
    list: ['03', '08', '14', '19', '25', '30', '36', '41', '47', '52', '58']
  },
  {
    label: 15,
    list: ['03', '09', '14', '20', '25', '31', '36', '42', '47', '53', '58']
  },
  {
    label: 16,
    list: ['04', '09', '15', '20', '26', '31', '37', '42', '48', '53', '59']
  },
  {
    label: 17,
    list: ['04', '10', '15', '21', '26', '32', '37', '43', '48', '54', '59']
  },
  {
    label: 18,
    list: ['05', '10', '16', '21', '27', '32', '38', '43', '49', '54']
  },
  {
    label: 19,
    list: ['00', '05', '11', '16', '22', '27', '33', '38', '44', '49', '55']
  },
  {
    label: 20,
    list: ['00', '06', '11', '17', '23', '28', '34', '39', '45', '50', '55']
  },
  {
    label: 21,
    list: ['01', '06', '12', '17', '23', '28', '34', '39', '45', '50', '56']
  },
  {
    label: 22,
    list: ['03', '10']
  }
];
</script>

<template>
  <div class="container">
    <h2 class="info-title">
      列车时刻表 Timetable
      <span class="fr-text">{{ tableStatus }}</span>
    </h2>
    <ul class="time-table-list">
      <li>
        <span class="table-title">时</span>
        <span>分</span>
      </li>
      <li v-for="(item, index2) in calcTimeList" :key="item.label">
        <i v-if="currentTimeNum === item.label" class="point-arrow"></i>
        <span class="table-title">{{ item.label }}</span>
        <span
          v-for="(item2, index) in item.list"
          :key="index"
          :class="{ active: index2 % 2 === 0 }"
        >
          {{ item2 }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.time-table-list {
  list-style: none;
  margin-top: 6px;
  li {
    text-align: left;
    line-height: 28px;
    padding-bottom: 5px;
    position: relative;
  }
  .table-title {
    background-color: #345298;
    text-align: center;
    margin-right: 10px;
  }
  .point-arrow {
    width: 560px;
    border-top: 3px dashed rgb(83, 216, 94);
    display: block;
    position: absolute;
    top: 13px;
    left: -20px;
    z-index: 1;
  }
  span {
    font-size: 18px;
    color: #fff;
    width: 40px;
    display: inline-block;
    vertical-align: top;
    background-color: #345298;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  .active {
    background-color: #5b7cc8;
  }
}
.info-title {
  font-size: 20px;
  color: #fff;
  font-weight: normal;
  margin: 0;
  background: #345298;
  padding: 0 4px;
  line-height: 44px;
  border: 2px solid #3a3a5a;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
}
.fr-text {
  float: right;
}
</style>
