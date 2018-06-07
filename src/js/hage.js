const notHage = name => `${name} はハゲていません`;
const hage = name => `${name} はハゲています`;

const app = new Vue({
	el: "#main",
	data: {
		name: "ねこ",
		result: ""
	},
	methods: {
		click: async function (e) {
			let res = await (await fetch(`http://api.citringo.net/hage/${encodeURI(this.name)}`)).json();
			this.result = `${this.name} はハゲて${res.is_hage ? "います" : "いません"}`;
		}
	}
});