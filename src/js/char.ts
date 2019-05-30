import Vue from "vue";
import Axios from "axios";

(async () => {
	var chars = (await Axios.get("/assets/chars.json")).data;
	console.log(chars);
	new Vue({
		el: "#app",
		data: {
			selected: location.hash ? location.hash.substring(1) : "citrine",
			chars,
			isMobile: window.innerWidth < 400,
		},
		methods: {
			handleResize() {
				this.isMobile = window.innerWidth < 400;
			}
		},
		created() {
			window.addEventListener('resize', this.handleResize)
			this.handleResize();
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize)
		},
		watch: {
			selected(val) {
				location.hash = `#${val}`;
			}
		},
		computed: {
			profile() {
				return chars[this.selected] ? chars[this.selected] : chars.citrine
			},
			description() {
				let r = (this.profile.birthday ? this.profile.birthday + "生まれ" : "生年月日不詳") + "の" + (this.profile.age ? this.profile.age + "歳" : "年齢不詳") + "。";
				return r;
			},
			realName() {
				return `本名は${this.profile.realName ? `「${this.profile.realName}」` : "不明"}。`;
			},
		}
	});
})();