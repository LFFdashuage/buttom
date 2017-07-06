<template>
	<div>
		<!--<NaverN>-->
			<!--<b>llll</b>-->
		<!--</NaverN>-->
<HolleTow :de='de' ></HolleTow> 


	</div>
</template>

<script>
// import NaverN from "../components/NaverN.vue";
import HolleTow from "../components/HolleTow.vue";

export default {
	components: {
		// NaverN,
		HolleTow
	},
	data: function () {
		return {
			de: []

		}
	},
	mounted: function () {
		this.requestDe()

	},
	methods: {
		// 韩都衣舍
		requestDe: function () {
			this.$ajax.get("/mishop/martshow/item/" + this.$route.params.event_id + "-1-40--0--0-0-0.html", {
				params: {
					package: "mizhe",
					callback: "BeibeiMartshowItemGet1"
				}
			}).then(res => {
				this.de = JSON.parse(res.data.substring(23, res.data.length - 1))
				console.dir(this.de)
			})
		},
	}

}
</script>

<style scoped>
a {
	text-decoration: none;
}





/*// import bus from "../utils.js";*/
</style>
 
