<template>
    <div>
        <div v-if='headerFenlei'>
            <div class="fenzu" v-for='h in headerFenlei.main_categorys'>
                <div class="heard">
                    <span>&#x3000;{{h.category_name}}</span>
                </div>
                <div class="for">
                    <div class="category" v-for="c in h.subdivision_categorys">
                        <img :src="c.img" />
                        <span>{{c.title}}</span>
                        <!--<div class="nei">
                                        <img :src="c.img" />
                                    </div>
                                    <div class="title">{{c.title}}</div>
                                    <div class="price">
                                        <span style="font-size: 30px; color: #FF3D02;">￥{{c.price/100}}</span>
                                        <span style="font-size: 25px;">{{c.clicks}}人在抢</span>
                                    </div>-->
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>

export default {
    props: ["headerFenlei"]

}
</script>

<style scoped>
.fenzu {
  
}

.heard {
    height: 3rem;
    background-color: #FAFAFA;
    width: 100%;
    font-size: 30px;
    margin: 5px;
    text-align: left;
}

.for {
    display: flex;
    /*justify-content: space-between;*/
    flex-wrap: wrap;
}

.category {
    /*border: solid 1px skyblue;*/
    width: 140px;
    font-size: 25px;
    margin:10px 5px 10px 10px;
}

.category img {
    width: 140px;
}
</style>