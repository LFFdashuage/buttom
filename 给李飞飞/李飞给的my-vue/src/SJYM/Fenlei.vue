<template>
    <div class="root">
        <div class="bt">
            <span class="fa fa-chevron-left menu-btn" @click="menuClick"></span>
            
            <div class="lia" style="height: 90px;">
            <Tab>
                <TabItem style="font-size: 3rem;" selected @on-item-click="type='Fens'">分类</TabItem>
                <TabItem style="font-size: 3rem;" @on-item-click="type='Pins'">品牌</TabItem>
            </Tab>
            </div>
    
            <router-link to="/" class="clear-fix">
                <span class="fa fa-university  user-btn"></span>
            </router-link>
        </div>
    
        <!--<Fens style=" margin-top: 100px;" :headerFenlei='headerFenlei'></Fens>-->
        <!--<PinPai></PinPai>-->
        <!--{{headerFenlei.main_categorys}}-->

        <div class="box">
            <component :is="type" :headerFenlei='headerFenlei' :headerPinPai='headerPinPai'></component>
        </div>
        
    
    </div>
</template>

<script>
import Pins from "./PinPai.vue";
import Fens from "./Fens.vue";
import { Tab, TabItem } from "vux";

export default {
    components: {
        Pins,
        Fens,
        Tab,
        TabItem
    },
    data: function () {
        return {
            type: "Fens",
            headerFenlei: [],
            headerPinPai: []
        }
    },
    mounted: function () {
        this.requestFenlei();
        this.requestPinPai();
   
    },
    methods: {
        commentCL: function () { 
            this.type = 'Pins'
        },
        // 返回
        menuClick: function () {
            history.back();
        },
        // 分类
        requestFenlei: function () {
            this.$ajax.get("mishop/item/category.html", {
                params: {
                    package: 'mizhe',
                    callback: 'BeibeiItemCategoryGet0'
                }
            }).then(res => {
                this.headerFenlei = JSON.parse(res.data.substring(23, res.data.length - 1))
                // console.dir(this.headerFenlei)
            })

        },
        // 品牌
        requestPinPai: function () {
            this.$ajax.get("mishop/martshow/all_names.html", {
                params: {
                    package:'mizhe',
                    callback:'BeibeiMartshowNameGet0'          
                }
            }).then(res => {
                this.headerPinPai = JSON.parse(res.data.substring(23, res.data.length - 1))
                console.dir(this.headerPinPai)
            })

        },
    }

}
</script>

<style scoped>
.root {
    /*height: 70rem;*/
    width: 100%;
    background-color: #FFFFFF;
    /*background-color: navajowhite;*/
}

.bt {
    background-color: #F9F9F9;
    /*background-color: slateblue;*/
    display: flex;
    justify-content: space-between;
    height: 90px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
}

.title {
    font-size: 3rem;
    color: black;
}

.menu-btn {
    margin-top: 10px;
    font-size: 3rem;
}

.user-btn {
    margin-top: 10px;
    font-size: 3rem;
}
.lia{
    width: 300px;
  
}
.dz{
        font-size: 10rem;
}
</style>