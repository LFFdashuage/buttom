<template>
<div>
    <NaverN><b>居家</b></NaverN>
    <Jujiatou :headerJujia='headerJujia' style=" margin-top: 200px;"></Jujiatou>
    <Jujiazutu :headerJujia='headerJujia'></Jujiazutu>
</div>
</template>

<script>
    import NaverN from "../components/NaverN.vue";
    import Jujiatou from "../components/Jujiatou.vue";
    import Jujiazutu from "../components/Jujiazutu.vue";
export default {
    components: {
    NaverN,
    Jujiatou,
    Jujiazutu
  },
  data: function () {
        return {
            headerJujia: [],

        }
    },
    mounted: function () {
        this.requestJujia()
    },
    methods: {
        // 上图
        requestJujia: function () {
            this.$ajax.get("mizhe/temai/jujia---1-20---1.html", {
 
                params: {
                     callback:'MizheTemaiGet2'
                }
            }).then(res => {

                this.headerJujia = JSON.parse(res.data.substring(15, res.data.length - 1))
                // console.dir(this.headerJujia)
            })

        },
    }

}
</script>

<style scoped>


</style>