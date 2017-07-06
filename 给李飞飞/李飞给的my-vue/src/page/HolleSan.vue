<template>
    <div>
        <h1>hhhh</h1>
        <div v-for="c in rar.fightgroup_items">
            <div class="nei">
                <img :src="c.img" />
            </div>
            <div class="title">{{c.title}}
    
            </div>
            <div class="price">
                <span style="font-size: 30px; color: #FF3D02;">￥{{c.group_price/100}}</span>
                <span style="font-size: 25px;">{{c.buying_info}}</span>
            </div>
    
        </div>
    </div>
</template>

<script>

export default {
    props: ["rar"]

}
</script>

<style scoped>
a{
    text-decoration: none;
}
</style>