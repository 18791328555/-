<template>
  <div>
   
    <serverOne></serverOne>
    <div class="content">
      <serverTwo @chages="checkes"></serverTwo>
     
    </div>
    <serverThree :listProp="qwe"></serverThree>
  </div>
</template>
<script>
import serverOne from "../components/serverOne";
import serverThree from '../components/serverThree';
import serverTwo from "../components/serverTwo";

export default {
  components: { serverOne, serverTwo,serverThree },
  data() {
    return {
      qwe:0
    };
  },
  methods:{
    checkes(payload){
     if(payload=='一个月'){
       this.qwe=0
     }else if(payload=='半年'){
      this.qwe=1
     }
    }
  }
};
</script>
<style scoped>
.content{
    padding: 40px 10px;
    text-align: left;
}
</style>