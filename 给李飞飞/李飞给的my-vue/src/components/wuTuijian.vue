<template>
    <!--首页导航栏图-->
    <div class="rr">
        <div class="root">
            <router-link to="/Muying">
                <div class="page-img">
                    <img src="static/tou/a1.png">
                </div>
            </router-link>
            <router-link to="/Muying">
                <div class="page-img">
                    <img src="static/tou/a2.png">
                </div>
            </router-link>
            <router-link to="/Muying">
                <div class="page-img">
                    <img src="static/tou/a3.png">
                </div>
            </router-link>
            <router-link to="/Muying">
                <div class="page-img">
                    <img src="static/tou/a4.png">
                </div>
            </router-link>
            <router-link to="/Muying">
                <div class="page-img">
                    <img src="static/tou/a5.png">
                </div>
            </router-link>
        </div>
        <div class="ro">
            <div class="page-item" v-for="i in headerWutu.mizhe_shortcuts">
                <span>{{i.title}}</span>
            </div>
        </div>
    
        <div class="page">
    
            <div class="page-ii">
                <router-link to="/Nvzhuang">
                    <img src="static/tou/cef9a.jpg">
                </router-link>
            </div>
    
            <div class="page-ii">
                <router-link to="/Meizhuang">
                    <img src="static/tou/cef.jpg">
                </router-link>
            </div>
    
        </div>
    </div>
</template>

<script>

export default {
    props: ["headerWutu"],

}
</script>

<style scoped>
.root {
    height: 90px;
    width: 100%;
    display: flex;
    /*border: 1px solid seagreen;*/
    padding-left: 15px;
}

.ro {
    height: 40px;
    width: 100%;
    display: flex;
    /*border: 1px solid seagreen;*/
}

.page-img {
    width: 7.6rem;
    margin-left: 17px;
    margin-right: 17px;
    /*margin-top: 20px;*/
    height: 80px;
    /*border: 1px solid black;*/
}

.page-item {
    width: 10rem;
    margin-left: 30px;
    /*margin-top: 20px;*/
    height: 30px;
    /*border: 1px solid black;*/
    font-size: 26px;
}

a {
    text-decoration: none;
}

.page {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow: hidden;
    /*border: 2px solid skyblue;*/
}

.page-ii {
    width: 50%;
    /*border: 2px solid black;*/
}

.page-ii img {
    height: 400px;
    width: 100%;
}
</style>

</style>