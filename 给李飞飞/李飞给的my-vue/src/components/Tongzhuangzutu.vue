<template>
    <div>
        <div class="tou">
            <div class="tou2">&nbsp;热卖品牌</div>
        </div>
        <div class="rt">
            <div class="root">
                <div class="fenzu">
                    <div v-for="c in headerTongzhuang.tuan_items" class="category">
                        <div class="nei">
                            <img :src="c.img" />
                        </div>
                        <div class="title">{{c.title}}</div>
                        <div class="price">
                            <span style="font-size: 30px; color: #FF3D02;">￥{{c.price/100}}</span>
                            <span style="font-size: 25px;">{{c.clicks}}人在抢</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>

export default {
    props: ["headerTongzhuang"],

}
</script>

<style scoped>
.tou {
    /*background:  darkcyan;*/
    height: 3rem;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.tou2 {
    height: 3rem;
    border-left: solid 10px orange;
    text-align: left;
    font-size: 33px;
}

.rt {
    margin-top: 20px;

    /*justify-content: space-around;*/
}

.fenzu {
    display: flex;
    flex-wrap: wrap;
}



.category {
    height: 30rem;
    width: 22rem;
    /*background-color: antiquewhite;*/
    margin-bottom: 10px;
    margin-top: 20px;
    padding: 15px;
}

.title {
    width: 16rem;
    height: 3.2rem;
    /*border: solid 2px darkorange;*/
    font-size: 33px;
    margin: 0 auto;
    overflow: hidden;
}

.price {
    margin: 20px auto 20px;
    ;
    width: 22rem;
    height: 3.2rem;
    /*border: solid 2px cyan;*/
    display: flex;
    justify-content: space-around;
}

img {
    height: 22rem;
    width: 22rem;
}
</style>