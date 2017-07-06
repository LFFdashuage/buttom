<template>
<!--俩图-->
    <div class="root">
        <div v-for="c in headerWutu.promotion_shortcuts" class="item">
            <img :src="c.img"/>
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
    height: 24rem;
    background-color:  #F2F2F2;                                                                
    display: flex;
    justify-content: space-around;
   
}

.item {
    height: 22rem;
    border: solid 1px cornflowerblue;
}
img{
    height: 22rem;
    width: 15rem;
}
</style>