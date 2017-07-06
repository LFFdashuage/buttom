<template>
  <div>
  
    <Naver>
      <b>米折</b>
    </Naver>


    <WTj :headerWutu='headerWutu' style=" margin-top: 200px;"></WTj>
    
    <Zutuintem :Tuji='headerTuji'></Zutuintem>
  
    <div class="gouwuche">
      <router-link to="/Gouwuche" class="clear-fix">
        <span class="fa fa-calendar"></span>
      </router-link>
    </div>
  
  </div>
</template>

<script>
import Naver from "../components/Naver.vue";
import WTj from "../components/wuTuijian.vue";

import Zutuintem from "../components/Zutuintem.vue";


export default {
  components: {
    Naver,
    WTj,
    // LiaTu,
    Zutuintem
  },
  data() {
    return {
      headerWutu: [],
      headerTuji: {},
    }
  },
  mounted: function () {
    this.requestWutu();
    this.requestTuji();

  },
  methods: {

    // 导航栏图
    requestWutu: function () {
      this.$ajax.get("mizhe/resource/h5-ads-1_2_4_6.html", {
        params: {
          callback: 'ads'
        }
      }).then(res => {
        this.headerWutu = JSON.parse(res.data.substring(4, res.data.length - 1))
        //  console.dir(this.headerWutu)
      })
    },
    
    // 图集
    requestTuji: function () {
      this.$ajax.get("mizhe/temai/all---1-20---1.html", {
        params: {
          callback: 'MizheTemaiGet1'
        }
      }).then(res => {
        this.headerTuji = JSON.parse(res.data.substring(15, res.data.length - 1));
      })

    },

  }

}
</script>


<style scoped>

 
router-link {
  text-decoration: underline;
}
a{
    text-decoration: none;
}

.gouwuche {
  width: 7rem;
  height: 7rem;
  background-color: #FF6500;
  border-radius: 50%;
  position: fixed;
  left: 60px;
  top: 900px;
  z-index: 20;
}

.gouwuche span {
  color: white;
  font-size: 60px;

  padding: 20px;
}
</style>
