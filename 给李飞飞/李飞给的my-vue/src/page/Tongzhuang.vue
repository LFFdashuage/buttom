<template>
<div>
    <NaverN><b>童装</b></NaverN>
    <Tongzhuangzutu :headerTongzhuang='headerTongzhuang' style=" margin-top: 200px;"></Tongzhuangzutu>
</div>
</template>

<script>
    import NaverN from "../components/NaverN.vue";
    import Tongzhuangzutu from "../components/Tongzhuangzutu.vue";
export default {
    components: {
    NaverN,
    Tongzhuangzutu
  },
  data: function () {
        return {
            headerTongzhuang: [],

        }
    },
    mounted: function () {
        this.requestTongzhuang()
    },
    methods: {
        // 上图
        requestTongzhuang: function () {
            this.$ajax.get("mizhe/temai/tongzhuang---1-20---1.html", {
 
                params: {
                     callback:'MizheTemaiGet2'
                }
            }).then(res => {

                this.headerTongzhuang = JSON.parse(res.data.substring(15, res.data.length - 1))
                // console.dir(this.headerTongzhuang)
            })

        },
    }

}
</script>

<style scoped>


</style>