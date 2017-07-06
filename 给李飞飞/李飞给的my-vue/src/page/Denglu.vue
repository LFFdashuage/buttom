<template>
    <div class="root">
        <div class="rt">
            <span class="fa fa-chevron-left menu-btn" @click="menuClick"></span>
    
            <span class="title">
                <slot>
                    <b>个人中心</b>
                </slot>
            </span>
            <span class="fa fa-university  user-btn" @click="menuClick"></span>
        </div>
        <div class="huangtou" style="margin-top: 140px;">
            <router-link to="/Ddd" class="clear-fix">
                <button class="bai">立即登录</button>
            </router-link>
    
            <button class="hei">新人注册</button>
        </div>
    
        <div class="quanding">
            <div class="dingimg">
                <img src="../assets/denglu/01.png" /> &#x3000;
                <span>全部订单</span>
            </div>
            <div>
                <img src="../assets/denglu/QQ12.png" class="situ" />
            </div>
        </div>
        <div class="yue">
            <div class="yueimg">
                <img src="../assets/denglu/02.png" /> &#x3000;
                <span>我的钱包</span>
            </div>
            <div>
                <img src="../assets/denglu/QQ13.png" class="situ" />
            </div>
        </div>
    
    </div>
</template>

<script>
// import NaverN from "../components/NaverN.vue";

export default {
    methods: {
        menuClick: function () {
            history.back();
            // bus.$emit("openMenu")

        }
    }

}
</script>

<style scoped>
.root {
    background-color: #F2F2F2;
}

.rt {
    height: 100px;
    width: 100%;
    background-color: #F9F9F9;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0px;
    top: 0px;
    padding-top: 40px;
    z-index: 20;
}

.title {
    font-size: 3rem;
    color: #FF6600;
}

.menu-btn {
    margin-top: 10px;
    font-size: 3rem;
}

.user-btn {
    margin-top: 10px;
    font-size: 3rem;
}

.huangtou {
    background-color: #FE7B11;
    height: 12rem;
    padding-top: 7rem;
    margin-bottom: 30px;
    /*display: flex;*/
    /*justify-content: space-around;*/
}

.bai {
    width: 15rem;
    height: 6rem;
    font-size: 2.5rem;
    background-color: #FFFFFF;
    color: #FE7B11;
    margin-right: 20px;
}

.hei {
    width: 15rem;
    height: 6rem;
    font-size: 2.5rem;
    background-color: #FE7B11;
    color: #FFFFFF;
    border: solid 1px #FFFFFF;
    margin-left: 20px;
}

.quanding {
    /*background-color: darkgray;*/
    height: 15rem;
    margin-bottom: 40px;
}

.dingimg {
    height: 5rem;
    background-color: #FFFFFF;
    border-bottom: solid 1px #F8F8F8;
    text-align: left;
    padding-left: 15px;
    padding-top: 15px;
}

.dingimg img {
    width: 40px;
    height: 40px;
}

.dingimg span {
    font-size: 43px;
}

.situ {
    width: 49rem;
    height: 10rem;
}


.yue {
    /*background-color: darkgray;*/
    height: 16rem;
}

.yueimg {
    height: 5rem;
    background-color: #FFFFFF;
    border-bottom: solid 1px #F8F8F8;
    text-align: left;
    padding-left: 15px;
    padding-top: 15px;
}

.yueimg img {
    width: 40px;
    height: 40px;
}

.yueimg span {
    font-size: 43px;
}

.situ img {
    width: 49rem;
    height: 14rem;
}
</style>