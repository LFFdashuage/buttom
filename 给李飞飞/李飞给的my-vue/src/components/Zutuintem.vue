<template>
    <div class="root">
        <div class="ambas">
            <div class="ggh">每天九点更新</div>
        </div>
                                                       
        <router-link v-for="r in Tuji.tuan_items" :to="'/home/intem/'+r.event_id">
            <!--+r.id-->
            <ZuTu :res="r"> </ZuTu>
        </router-link>
    
    </div>
</template>


<script>

import ZuTu from "./ZuTu.vue";

export default {
    components: {
        ZuTu
    },
    props: ["Tuji"]
}
</script>

<style scoped>
.root {
    display: flex;
    flex-wrap: wrap;
    /*width: 23rem;*/
}

.ambas {
    font-size: 35px;
    /*border: solid 1px forestgreen;*/
    padding: 10px;
    width: 100%;
}

.ggh {
    width: 17rem;
    border-left: solid 10px orange;
}
a{
    text-decoration: none;
}
</style>