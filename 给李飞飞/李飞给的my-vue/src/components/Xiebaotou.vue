<template>
    <div>
        <div class="tou">
            <div class="tou2">&nbsp;热卖品牌</div>
        </div>
        <div class="root">
    
            <div class="wai">
                <div v-for="c in headerXiebao.martshows" class="category">
                    <img :src="c.logo" />
                    <p>{{c.title}}</p>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script>

export default {

    props: ["headerXiebao"],


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

.wai{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
    background-color: #FFFFFF;
    overflow: scroll;
}

.category {
    width: 60%;
    margin-left: 15px;
    font-size:24px;
}

img {
    height: 10rem;
    width: 15rem;
    border: 1px solid black;
}
</style>