<template>
  <div class="home-container">
    <mt-swipe :speed="300" :auto="3000">
      <mt-swipe-item v-for="(item , index) in banners" :key="index">
        <!-- 渲染图片 -->
       <a :href="item.url"> <img :src="item.img" alt></a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
// es6 导出语法
export default {
  data() {
    return {
      banners: []
    };
  },
  methods: {
    getBanner() {
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
        console.log(result.body);
        if (result.body.status == 0) {
          this.banners = result.body.message;
        }
      });
    }
  },
  created() {
    // 在组件加载时 发送http请求 获取轮播图数据
    this.getBanner();
  }
};
</script>

<style lang="less">
.home-container {
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      background-color: #f60;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
