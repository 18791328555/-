<template>
  <div>
    <div class="top">
            <div style="display: flex; align-items: center">
                    <span @click="chage" class="spanStyle" ><i class="el-icon-s-fold" v-if="isCollapse"></i></span>
                     <span @click="chage" class="spanStyle" ><i class="el-icon-s-unfold"  v-if="!isCollapse"></i></span>
              <span style=" margin-left: 20px;">
                  
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/NewContact' }"
                    >首页</el-breadcrumb-item
                  >
                  <el-breadcrumb-item
                    >活动管理
                    </el-breadcrumb-item
                  >
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
  </div>
</template>
<script>
export default {
  name: "NewContact",
  data(){
    return {
   
   
     
   
      
    }
  },
   methods: {
     chage() {
      this.isCollapse = !this.isCollapse;
    },
  }
}
</script>
<style>

</style>