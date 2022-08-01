<!-- 展示男女比例 -->
<!-- 展示年龄分布 -->

<template>
  <div class="echart-container">
    <div id="echatsBox"></div>
    <div id="echatsBox2"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, watch, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { useStore } from 'vuex';
// 基于准备好的dom，初始化echarts实例
const echartsData: EchartsData = reactive({
  myChart: 123,
  myChart2: 123,
  timer: null
});
interface EchartsData {
  myChart: any;
  myChart2: any;
  timer: any;
}
let store = useStore();
watch([() => store.state.passenger_records_data.man_num], (newVal, oldVal) => {
  console.log(newVal, oldVal);
  init();
});

const init = () => {
  clearInterval(echartsData.timer);
  echartsData.myChart = echarts.init(
    document.getElementById('echatsBox'),
    'dark'
  );
  echartsData.myChart.setOption({
    backgroundColor: '#17172c',
    tooltip: {
      trigger: 'item'
    },
    // title: {
    //   text: '性别比例'
    // },
    legend: {
      bottom: '0%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        minAngle: 20,
        radius: ['50%', '70%'],
        center: ['50%', '40%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '24',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: store.state.passenger_records_data.man_num,
            name: '男性'
          },
          {
            value: store.state.passenger_records_data.girl_num,
            name: '女性'
          }
        ]
      }
    ]
  });
  echartsData.myChart2 = echarts.init(
    document.getElementById('echatsBox2'),
    'dark'
  );
  let option = {
    backgroundColor: '#17172c',
    tooltip: {
      trigger: 'item'
    },
    title: {
      text: '年龄分布',
      bottom: '0%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        minAngle: 20,
        radius: ['50%', '70%'],
        center: ['50%', '40%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: store.state.passenger_records_data.age_a,
            name: '10-20岁'
          },
          {
            value: store.state.passenger_records_data.age_b,
            name: '20-30岁'
          },
          {
            value: store.state.passenger_records_data.age_c,
            name: '30-40岁'
          },
          {
            value: store.state.passenger_records_data.age_d,
            name: '40-50岁'
          },
          {
            value: store.state.passenger_records_data.age_e,
            name: '50岁以上'
          }
        ]
      }
    ]
  };
  echartsData.myChart2.setOption(option);
  let currentIndex = -1;
  echartsData.timer = setInterval(() => {
    var dataLen = option.series[0].data.length;

    // 取消之前高亮的图形
    echartsData.myChart2.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: currentIndex
    });

    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    echartsData.myChart2.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: currentIndex
    });
    // 显示 tooltip
    echartsData.myChart2.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: currentIndex
    });
  }, 1000 * 2);
};

onMounted(() => {
  init();
});
onUnmounted(() => {
  clearInterval(echartsData.timer);
});
// export default {
//   name: 'screen4',
//   data() {
//     return {
//       tiemr: null,
//       myChart: null,
//       myChart2: null
//     };
//   },

//   methods: {
//     ...mapMutations(['setShowItme']),

//   },
//   mounted() {
//     this.init();
//   },
//   destroyed() {
//     clearInterval(this.timer);
//     this.myChart.clear();
//     this.myChart2.clear();
//   },

//   unmounted() {
//     clearInterval(this.timer);
//     this.myChart.clear();
//     this.myChart2.clear();
//   }
// };
</script>
<style>
.echart-container {
  height: 200px;
  width: 100%;
}
#echatsBox {
  height: 200px;
  width: 200px;
  display: inline-block;
  margin: 0 20px;
  vertical-align: top;
}
#echatsBox2 {
  height: 200px;
  width: 200px;
  display: inline-block;
  margin: 0 20px;
  vertical-align: top;
}
</style>
