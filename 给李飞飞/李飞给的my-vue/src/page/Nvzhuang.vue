<template>
    <div @scroll='didScroll($event)' class="nvzhuang">
        <NaverN>女装</NaverN>
        <Nvtou :Lunbotu='Lunbotu' style=" margin-top: 200px;"></Nvtou>
    
        <Nvzutu :headernvtou='headernvtou'></Nvzutu>
    
    </div>
</template>

<script>
import NaverN from "../components/NaverN.vue";
import Nvtou from "../components/Nvtou.vue";
import Nvzutu from "../components/Nvzutu.vue";

export default {
    components: {
        NaverN,
        Nvtou,
        Nvzutu
    },
    data: function () {
        return {
            Lunbotu: [],
            headernvtou: [],

            isShow: false

        }
    },
    mounted: function () {
        this.requestnvtou(1);
        this.NvzhuangLunbotu();
    },
    methods: {
        // 下拉加载
        didScroll: function (e) {
            //   console.dir(e)
            //元素本身高度
            var sh = e.srcElement.clientHeight
            //元素的内容高度
            var ch = e.srcElement.scrollHeight
            //滚动偏移量
            var os = e.srcElement.scrollTop
            // console.log(cs)
            if (os + sh + 200 >= ch) {
                console.log("到底了")
                this.requestnvtou(this.headernvtou.length * 1 + 1)

            }

        },
        // 轮播图
        NvzhuangLunbotu: function (e) {
            this.$ajax.get("mizhe/temai/nvzhuang---1-20---1.html", {
                params: {
                    callback: 'MizheTemaiGet1'
                }
            }).then(res => {

                this.Lunbotu = JSON.parse(res.data.substring(15, res.data.length - 1))
                console.dir(this.Lunbotu)
            })
        },
        // 下图
        requestnvtou: function (e) {
            // 不重复请求
            if (this.isShow) {
                return
            }
            this.isShow = true
            this.$ajax.get("mizhe/temai/nvzhuang---" + e + "-20---1.html", {
                params: {
                    callback: 'MizheTemaiGet1'
                }
            }).then(res => {

                this.headernvtou.push(JSON.parse(res.data.substring(15, res.data.length - 1)))
                console.dir(this.headernvtou)
                this.isShow = false
            })
        },
    }

}
</script>

<style scoped>
.nvzhuang {
    height: calc(100vh - 50px);
    overflow: scroll;
}
a{
    text-decoration: none;
}
</style>