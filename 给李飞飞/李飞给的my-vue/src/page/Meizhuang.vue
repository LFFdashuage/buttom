<template>
<div>
    <NaverN><b>美妆</b></NaverN>
    <Meizhuangtou :headerMeizhuang='headerMeizhuang' style=" margin-top: 200px;" ></Meizhuangtou>
    <Meizhuangzutu :headerMeizhuang='headerMeizhuang'></Meizhuangzutu>
</div>
</template>

<script>
    import NaverN from "../components/NaverN.vue";
    import Meizhuangtou from "../components/Meizhuangtou.vue";
    import Meizhuangzutu from "../components/Meizhuangzutu.vue";
export default {
    components: {
    NaverN,
    Meizhuangtou,
    Meizhuangzutu
     
  },
  data: function () {
        return {
            headerMeizhuang: [],

        }
    },
    mounted: function () {
        this.requestMeizhuang()
    },
    methods: {
        // 上图
        requestMeizhuang: function () {
            this.$ajax.get("mizhe/temai/meizhuang---1-20---1.html", {
 
                params: {
                     callback:'MizheTemaiGet4'
                }
            }).then(res => {

                this.headerMeizhuang = JSON.parse(res.data.substring(15, res.data.length - 1))
                // console.dir(this.headerMeizhuang)
            })

        },
    }

}
</script>

<style scoped>


</style>