<template>
  <div style="width: 100%">
    <el-row :gutter="20">
      <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="12">
        <div class="card">
          <div>
            <img src="/static/icon/user.png" alt="" class="box animated bounceInDown" />
          </div>
          <div class="cardNumber">
            <p>用户数量</p>
            <p>81</p>
          </div>
        </div>
      </el-col>

      <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="12">
        <div class="card">
          <div>
            <img src="/static/icon/message.png" alt="" class="box animated bounceInLeft"/>
          </div>
          <div class="cardNumber">
            <p>商品数量</p>
            <p>81</p>
          </div>
        </div>
      </el-col>

      <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="12">
        <div class="card">
          <div>
            <img src="/static/icon/message2.png" alt="" class="box animated bounceInUp"/>
          </div>
          <div class="cardNumber">
            <p>货品数量</p>
            <p>81</p>
          </div>
        </div>
      </el-col>

      <el-col :xl="6" :lg="6" :md="12" :sm="12" :xs="12">
        <div class="card">
          <div>
            <img src="/static/icon/money.png" alt="" class="box animated bounceInRight"/>
          </div>
          <div class="cardNumber">
            <p>订单信息</p>
            <p>81</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "serverOne",
  data() {
    return {};
  },
  methods:{

  }
};
</script>
<style>
h1 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.bg {
  display: flex;
  width: 100%;
}
.card {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  overflow: hidden;
  min-width: 150px;
}
.cardNumber {
  line-height: 50px;
  white-space: nowrap;
  min-width: 135px;
}
.cardNumber p:first-child {
  font-size: 24px;
}
.cardNumber p:last-child {
  font-size: 20px;
  color: #666666;
}
</style>