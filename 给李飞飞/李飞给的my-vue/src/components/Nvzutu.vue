<template>
    <div class="root">
        <div class="ambas">
            <div class="ggh">&nbsp;每天九点更新</div>
        </div>
    
        <div v-if='headernvtou'>
          <div class="fenzu" v-for='h in headernvtou' >
                <div class="category" v-for="c in h.tuan_items" >
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
</template>

<script>

export default {
    props: ["headernvtou"],

}
</script>

<style scoped>
.root {
    margin-top: 20px;

    /*justify-content: space-around;*/
}



.ambas {
    font-size: 35px;
    /*border: solid 1px forestgreen;*/
  
}

.ggh {
    width: 17rem;
    border-left: solid 10px orange;
}

.fenzu {
    display: flex;
    flex-wrap: wrap;
}
.category {
    height: 30rem;
    width: 22rem;
    /*background-color: antiquewhite;*/
    /*margin-bottom: 10px;*/
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
    margin: 20px auto 20px;;
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



/*.nei{
    height: 100px;
    width: 50px;
}*/
</style>