<template>
    <div class="fab">
        <h1>我是品牌</h1>
        <div class="hehe">
            <!--<div class="fjj">
                <P>{{ headerPinPai.ms_names.pinyin}}</P>
            </div>-->
            <div class="Ah" v-for="s in headerPinPai.ms_names">
                <span>{{s.title}}</span>
            </div>
        </div>
    
    </div>
</template>

<script>

export default {
    props: ["headerPinPai"]

}
</script>

<style scoped>

.hehe{
    padding-left: 40px;
}
.Ah{
     /*background-color: darkcyan;*/
     height: 100px;
     font-size: 50px;
     border: 1px solid #D0D0D0;
     text-align: left;
}
</style>