<template>
  <div class="app-container">
    <!-- 头部 header 区域 -->
    <mt-header fixed title="Vue cms"></mt-header>
		111
    <!-- 中间 路由 router-view 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" to="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" to="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" to="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" to="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
    <!-- 底部tabbar 区域 -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
</style>
