<template>
  <div class="news-list-container">
    <h1>新闻列表 newsList</h1>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link to="/">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          >
          <div class="mui-media-body">
              <h4>{{ item.title }}</h4>
            <p class="mui-ellipsis">
              <span>发表时间:{{ item.add_time }}</span>
              <span>点击:{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui"

export default {
    data(){
        return{
            newsList:[]
        }
    },
    methods:{
        getNewList(){
            this.$http.get("http://www.lovegf.cn:8899/api/getnewslist").then(result => {
                if(result.body.status == 0){
                    this.newsList = result.body.message
                    console.log(result.body)
                }else{
                    Toast('数据获取失败')
                }
            })
        }
    },
    created(){
        this.getNewList()
    }
};
</script>

<style lang="less">
.mui-table-view{
    li{
        font-size: 14px;
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>

