<template>
  <div>
    <el-container direction="horizontal">
      <el-aside
        :class="[isCollapse?'aside':'assides']"
        style="background-color: #fafafa"
      >
   
      <!-- 侧边导航 -->
        <el-menu
          :default-active="this.$route.path" 
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="padding: 30px 0;"
        >
          
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" @click="showbread(i)">
            <i class="el-icon-setting"></i>
            <span slot="title">{{ item.navItem }}</span> 

          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container style="background-color: #fafafa;min-width:650px">
        <el-header>
          <div class="top">
            <div style="display: flex; align-items: center">
                    <span @click="chage" class="spanStyle" ><i class="el-icon-s-fold" v-if="isCollapse"></i></span>
                     <span @click="chage" class="spanStyle" ><i class="el-icon-s-unfold"  v-if="!isCollapse"></i></span>
              <span style=" margin-left: 20px;">
                  
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/server' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
              </span>
            </div>
            <div class="right">
              <el-tooltip
                class="item"
                effect="dark"
                content="666"
                placement="bottom"
              >
                <i class="el-icon-s-grid"></i>
              </el-tooltip>

              <el-tooltip
                class="item"
                effect="dark"
                content="Bottom Center 提示文字"
                placement="bottom"
              >
                <i class="el-icon-s-opportunity"></i>
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                content="Bottom Center 提示文字"
                placement="bottom"
              >
                <i class="el-icon-s-help"></i>
              </el-tooltip>
              <span>
                  <el-dropdown>
  <span class="el-dropdown-link">
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
              </span>
            </div>
          </div>
        </el-header>
        <el-main> 
          <router-view></router-view>
           </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isCollapse: false,
         navList:[ 
            {name:'/server',navItem:'服务大厅'}, 
            {name:'/guanli',navItem:'权限管理'},
            {name:'/use',navItem:'用户管理'}, 
            {name:'/login',navItem:'人员数据'}, 
            {name:'/baojing',navItem:'报警中心'}, 
            ]
   
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    chage() {
      this.isCollapse = !this.isCollapse;
    },
   showbread(i){
 
    let that = this
    
   }
  
  },
};
</script>
<style>
*{
  margin: 0;
}
h1 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.el-menu-vertical-demo{
  position: fixed;
  left: 0;
  height: 100%;

}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  
  width: 200px;

}
.aside {
  width: 80px !important;
  transition: width 0.5s;
}
.assides {
  width: 220px !important;
  transition: width 0.5s;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.spanStyle {
  font-size: 36px;
}

.right {
  font-size: 28px;
 
}
.expand-transition {
  transition: all 0.3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
</style>