<template>
    <div class="root">
        <div class="rt">
            <span class="fa fa-chevron-left menu-btn" @click="menuClick"></span>
    
            <span class="title">
                <slot>
                    <b>购物车</b>
                </slot>
            </span>
            <span class="fa fa-university  user-btn" @click="menuClick"></span>
        </div>
    
        <img src="../assets/denglu/QQ14.png" />
        <span class="dlz">你还没有登录，请先登录！</span>
        <router-link to="/Ddd" class="clear-fix">
            <a class="btn">登录米折</a>
        </router-link>


        
    
    </div>
</template>

<script>

export default {
    methods: {
        menuClick: function () {
            history.back();
        }
    }

}
</script>

<style scoped>
.root {
    height: 90rem;
    background-color: #F2F2F2;
}
a{
    text-decoration: none;
}
.rt {
    width: 100%;
    background-color: #F9F9F9;
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0px;
    top: 0px;
    height: 90px;
    padding-top: 40px;
    z-index: 20;
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

img {
    margin-top: 300px;
    width: 48rem;
}

.dlz {
    font-size: 2rem;
    color: #ABABAB;
}

.btn {
    display: block;
    width: 15rem;
    padding: .2rem 0;
    margin: 3rem auto 0;
    font-size: 2rem;
    text-align: center;
    color: #f60;
    border: 1px solid #ff9046;
    border-radius: .5rem;
    background-color: #fff;
}
</style>