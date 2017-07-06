<template>
<div>
    <NaverN><b>鞋包</b></NaverN>
    <xiebaotou :headerXiebao='headerXiebao' style=" margin-top: 200px;"></xiebaotou>
    <Xiebaozutu :headerXiebao='headerXiebao'></Xiebaozutu>
</div>
</template>

<script>
    import NaverN from "../components/NaverN.vue";
    import xiebaotou from "../components/xiebaotou.vue";
     import Xiebaozutu from "../components/Xiebaozutu.vue";
export default {
    components: {
    NaverN,
    xiebaotou,
    Xiebaozutu
  },
  data: function () {
        return {
            headerXiebao: [],

        }
    },
    mounted: function () {
        this.requestXiebao()
    },
    methods: {
        // 上图
        requestXiebao: function () {
            this.$ajax.get("mizhe/temai/xiebao---1-20---1.html", {
 
                params: {
                     callback:'MizheTemaiGet2'
                }
            }).then(res => {

                this.headerXiebao = JSON.parse(res.data.substring(15, res.data.length - 1))
                // console.dir(this.headerXiebao)
            })

        },
    }

}
</script>

<style scoped>


</style>