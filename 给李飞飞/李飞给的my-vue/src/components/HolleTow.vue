<template>
<div>

    <div class="pp">
        <div v-for="i in de.martshow_items">
            <img :src="i.img">
            <p>{{i.title}}</p>
        </div>
    </div>

</div>
</template>

<script>

export default {
    props: ["de"] ,
    // mounted(){
    //     console.log(this.de);
    // }

}
</script>

<style scoped>
a{
    text-decoration: none;
}

</style>