<template>
<div>
    <NaverN><b>母婴</b></NaverN>
     <Muyingtou :headerMuying='headerMuying' style=" margin-top: 200px;"></Muyingtou>
    <Muyingzutu :headerMuying='headerMuying'></Muyingzutu>
</div>
</template>

<script>
    import NaverN from "../components/NaverN.vue";
    import Muyingtou from "../components/Muyingtou.vue";
    import Muyingzutu from "../components/Muyingzutu.vue";
export default {
    components: {
    NaverN,
    Muyingtou,
    Muyingzutu
  },
  data: function () {
        return {
            headerMuying: [],

        }
    },
    mounted: function () {
        this.requestMuying()
    },
    methods: {
        // 上图
        requestMuying: function () {
            this.$ajax.get("mizhe/temai/muying---1-20---1.html", {
 
                params: {
                     callback:'MizheTemaiGet2'
                }
            }).then(res => {

                this.headerMuying = JSON.parse(res.data.substring(15, res.data.length - 1))
                // console.dir(this.headerMuying)
            })

        },
    }

}
</script>

<style scoped>


</style>