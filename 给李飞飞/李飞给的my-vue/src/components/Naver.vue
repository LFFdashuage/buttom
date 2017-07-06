<template>
    <div class="root">
        <div class="rt">
            <router-link to="/Denglu" class="clear-fix">
                <span class="fa  fa-user menu-btn"></span>
            </router-link>

            <span class="title">
                <slot></slot>
            </span>
             <router-link to="/Fenlei" class="clear-fix">
            <span class="fa fa-align-justify user-btn"></span>
            </router-link>
        </div>
        <div class="daohang">
            <router-link to="/" class="clear-fix">
                <span>上新</span>
            </router-link>
    
            <router-link to="/Nvzhuang" class="clear-fix">
                <span>女装</span>
            </router-link>
    
            <router-link to="/Xiebao" class="clear-fix">
                <span>鞋包</span>
            </router-link>
    
            <router-link to="/Jujia" class="clear-fix">
                <span>居家</span>
            </router-link>
    
            <router-link to="/Meizhuang" class="clear-fix">
                <span>美妆</span>
            </router-link>
    
            <router-link to="/Tongzhuang" class="clear-fix">
                <span>童装</span>
            </router-link>
    
            <router-link to="/Muying" class="clear-fix">
                <span>母婴</span>
            </router-link>
    
        </div>
    </div>
</template>

<script>

export default {


}
</script>

<style scoped>
a{
    text-decoration: none;
}
.root {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
}
.clear-fix{
    color: black;

}

.rt {
    height: 80px;
    background-color: #F9F9F9;
    display: flex;
    justify-content: space-between;
    padding: 20px;
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

.daohang {
    height: 50px;
    font-size: 2rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
}
</style>