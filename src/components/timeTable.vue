<!-- 列车时刻表 -->
<script setup lang="ts">
import { isTemplateNode } from '@vue/compiler-core';
import { ref, computed, onMounted, onUnmounted } from 'vue';
let currentTimeNum = ref(0);
let currentMin = ref(0);
// 获取当前时间 去
const getTimeInf = () => {
  timeData.value.forEach((item: any) => {
    item.currentTrain = null;
  });
  const currentTime = new Date(); // 获取当前时间

  // 如果不在运营范围内
  currentTimeNum.value = currentTime.getHours();
  currentMin.value = currentTime.getMinutes();
  // currentTimeNum.value = 9;
  // currentMin.value = 0;
  // 判断当前时刻 比
  let test = false;

  timeData.value.forEach((item: any, index) => {
    if (test) {
      item.currentTrain = 0;
      test = false;
    }
    if (currentTimeNum.value === item.label) {
      let i = 0;
      while (
        parseInt(item.list[i]) < currentMin.value &&
        i < item.list.length - 1
      ) {
        i++;
      }

      if (i <= item.list.length - 1) {
        item.currentTrain = i;
      }

      if (currentMin.value > parseInt(item.list[item.list.length - 1])) {
        item.currentTrain = null;
        test = true;
      }
      console.log('当前选中的下标是', i);
    }

    // } else {
    //   timeData.value[index + 1].currentTrain = 0;
    // }
  });
  // 获取到当前时刻
  // {
  //   for (var k = 0; k < item.length; k++) {
  //     if (parseInt(item[k]) > currentMin.value) {
  //       return
  //     } else {

  //     }

  //   }
  // item.list.forEach((item2, index2) => {

  //   // 每次都更 当前行的 最左测的数字比

  //   // 如果我当前时间 比第一个小 活等于第一个
  //   // 如果最后一个还 那我就去下一行的第一个
  //   if (currentMin.value <= parseInt(item.list[0]) && index2 === 0) {
  //     item.currentTrain = 0;
  //     console.log('比最小的小');
  //   } else if (
  //     currentMin.value > parseInt(item.list[item.length - 1]) &&
  //     index2 === item.length - 1
  //   ) {
  //     console.log('比最大的大');
  //     timeData.value[index + 1].currentTrain = 0;
  //   } else if (
  //     parseInt(item.list[index2 - 1] || '0') <= currentMin.value &&
  //     parseInt(item2) >= currentMin.value
  //   ) {
  //     item.currentTrain = index2;
  //     console.log('中间');
  //   }

  // }
  // });
  // console.log(arr);
};

let timer: number | undefined = 123; // 定时器

onMounted(() => {
  getTimeInf();
  timer = setInterval(() => {
    getTimeInf();
  }, 1000 * 30);
});

onUnmounted(() => {
  clearInterval(timer);
});

// 只显示 5行数据

const calcTimeList = computed(() => {
  let pointer = 0;
  timeData.value.forEach((item, index) => {
    if (item.label === currentTimeNum.value) {
      pointer = index;
    }
  });
  // 中
  if (pointer < 2) {
    return timeData.value.slice(0, 5);
  } else if (pointer > 12) {
    return timeData.value.slice(-5);
  } else {
    return timeData.value.slice(pointer - 2, pointer + 3);
  }
});

const timeData = ref([
  {
    label: 6,
    list: ['10', '15', '21', '26', '32', '37', '43', '48', '54', '59'],
    currentTrain: null
  },
  {
    label: 7,
    list: ['05', '10', '16', '21', '27', '32', '38', '44', '49', '54'],
    currentTrain: null
  },
  {
    label: 8,
    list: ['00', '05', '11', '16', '22', '27', '33', '38', '44', '49', '55'],
    currentTrain: null
  },
  {
    label: 9,
    list: ['00', '06', '11', '17', '22', '28', '33', '39', '44', '50', '55'],
    currentTrain: null
  },
  {
    label: 10,
    list: ['01', '06', '12', '17', '23', '28', '34', '39', '45', '50', '56'],
    currentTrain: null
  },
  {
    label: 11,
    list: ['01', '07', '12', '18', '23', '29', '35', '40', '46', '51', '56'],
    currentTrain: null
  },
  {
    label: 12,
    list: ['02', '07', '13', '18', '24', '29', '35', '41', '46', '51', '57'],
    currentTrain: null
  },
  {
    label: 13,
    list: ['02', '08', '13', '19', '24', '30', '35', '41', '46', '52', '57'],
    currentTrain: null
  },
  {
    label: 14,
    list: ['03', '08', '14', '19', '25', '30', '36', '41', '47', '52', '58'],
    currentTrain: null
  },
  {
    label: 15,
    list: ['03', '09', '14', '20', '25', '31', '36', '42', '47', '53', '58'],
    currentTrain: null
  },
  {
    label: 16,
    list: ['04', '09', '15', '20', '26', '31', '37', '42', '48', '53', '59'],
    currentTrain: null
  },
  {
    label: 17,
    list: ['04', '10', '15', '21', '26', '32', '37', '43', '48', '54', '59'],
    currentTrain: null
  },
  {
    label: 18,
    list: ['05', '10', '16', '21', '27', '32', '38', '43', '49', '54'],
    currentTrain: null
  },
  {
    label: 19,
    list: ['00', '05', '11', '16', '22', '27', '33', '38', '44', '49', '55'],
    currentTrain: null
  },
  {
    label: 20,
    list: ['00', '06', '11', '17', '23', '28', '34', '39', '45', '50', '55'],
    currentTrain: null
  },
  {
    label: 21,
    list: ['00', '06', '12', '17', '23', '28', '34', '39', '45', '50', '56'],
    currentTrain: null
  },
  {
    label: 22,
    list: ['03', '10'],
    currentTrain: null
  }
]);
</script>

<template>
  <div class="container">
    <h2 class="info-title">
      列车时刻表 Timetable
      <span class="fr-text">
        本次列车：{{
          $store.state.trainInfo.train1.train_state.arrival_time
        }}分钟

        <!-- {{ calcTimeList }} -->
      </span>
    </h2>
    <ul class="time-table-list">
      <li>
        <span class="table-title">时</span>
        <span>分</span>
      </li>
      <!-- {{
        calcTimeList
      }} -->
      <li v-for="(item, index2) in calcTimeList" :key="item.label">
        <!-- <i v-if="currentTimeNum === item.label" class="point-arrow"></i> -->
        <span class="table-title">{{ item.label }}</span>
        <span
          v-for="(item2, index) in item.list"
          :key="index"
          :class="{
            active: index2 % 2 === 0,
            'active-2': item.currentTrain !== null && item.currentTrain == index
          }"
        >
          <!-- ({{ item.currentTrain }}:{{ index }}) -->
          {{ item2 }}
          <!-- {{ parseInt(item.list[index + 1] ) }} -->
        </span>
      </li>
      <li>
        <!-- <span class="table-title">首末班车时刻</span> -->
        <span class="active" style="width: 140px; margin-right: 4px">
          首班6:10
        </span>
        <span class="active" style="width: 140px">末班22:10</span>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.time-table-list {
  list-style: none;
  margin-top: 4px;
  li {
    text-align: left;
    line-height: 26px;
    padding-bottom: 4px;
    position: relative;
  }
  .table-title {
    background-color: #345298;
    text-align: center;
    margin-right: 4px;
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
  .active-2 {
    background-color: rgb(83, 216, 94);
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
