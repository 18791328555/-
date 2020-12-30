<template>
  <div>
    <div class="bg">
      <el-dropdown trigger="click">
        <el-button type="primary" class="caidan" placement="bottom">
          <div class="text">
            <p>{{ check }}</p>
            <p><i class="el-icon-arrow-down el-icon--right"></i></p>
          </div>
        </el-button>
        <el-dropdown-menu slot="dropdown" class="xiala">
          <el-dropdown-item
            class="xialaContent"
            @click.native="checkes(i)"
            v-for="(item, i) in day"
            :key="i"
            >{{ item.day }}
            </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      
    <div class="Zbutton"><i class="el-icon-search"></i> <p>查看</p></div>
 
    </div>
  </div>
</template>
<script>
export default {
  name: "serverTwo",
  
  data() {
    return {
      day: [{ day: "一个月" }, { day: "半年" }],
      check: "一个月",
    };
  },

  methods: {
    checkes(i) {
      this.check = this.day[i].day;
      this.$emit('chages',this.check) 
      console.log(this.check);
    },
 

  },
};
</script>
<style>
h1 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.bg{
    display: flex;
    align-items: center;
}
.caidan {
  background: transparent;
  color: #333;
  width: 220px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}
.text {
  width: 150px;
  display: flex;
  justify-content: space-between;
}

.xiala {
  width: 220px;
  height: 200px;
}
.xialaContent {
  font-size: 20px;
  margin-top: 20px;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #fff;
  color: #000;
}

.Zbutton {
  width: 100px;
  height: 43px;
  padding: 0 20px;
  border-radius: 5px;
  color: #fff;
  background: cornflowerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0 10px;

}
.Zbutton p{
    margin-left: 10px;
}
.Zbutton:hover{
  background: #85a9eb;
 
}
</style>