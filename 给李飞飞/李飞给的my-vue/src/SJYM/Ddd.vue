<template>
    <div class="root">
        <div class="bt">
            <span class="fa fa-chevron-left menu-btn" @click="menuClick"></span>
    
            <span class="title">
                <slot>
                    <b>登录</b>
                </slot>
            </span>
            <span class="fa fa-university  user-btn" @click="menuClick"></span>
        </div>
        <div class="input">
            <div class="df">
                <label>账号</label>
                <input type="text" placeholder="请输入账号" />
            </div>
            <div class="df">
                <label>密码</label>
                <input type="password" placeholder="请输入密码(6到10个字符)" />
            </div>
        </div>
    
        <div class="buttn">
            <div class="bt_top">
                <buttn>立即登录</buttn>
            </div>
            <div class="bt_bottm">
                <buttn>新用户注册</buttn>
            </div>
        </div>
    
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
    height: 70rem;
    background-color: #FFFFFF;
}

.bt {
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

.input {
    height: 10rem;
    margin-top: 150px;
    /*background-color: darkblue;*/
    background-color: #F9F9F9;
}

.df {
    /*background-color: navajowhite; */
    height: 5rem;
    display: flex;
    justify-content: space-around;
}

input {
    height: 4.5rem;
    width: 35rem;
    font-size: 2rem;
    border: snow;
}

label {
    font-size: 2rem;
    line-height: 90px;
}

.buttn {
    height: 10rem;
    margin-top: 2rem;
    /*background-color: darkblue;*/
    background-color: #F9F9F9;
}

.bt_top {
    height: 5rem;
    width: 43rem;
    background-color: #FE7B11;
    border-radius: 0.5rem;
    color: snow;
    font-size: 2.5rem;
    line-height: 80px;
    margin: 0 auto;
}

.bt_bottm {
    height: 5rem;
    width: 43rem;
    background-color: snow;
    border-radius: 0.5rem;
    color: #FE7B11;
    font-size: 2.5rem;
    line-height: 80px;
    margin: 23px auto;
    border: solid 1px #FE7B11;
}
</style>