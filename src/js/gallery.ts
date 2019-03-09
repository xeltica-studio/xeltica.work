import Vue from "vue";
import axios from "axios";

const citrine = document.getElementById("citrine");
const kaho = document.getElementById("kaho");


(async () => {
	const data = (await axios.get<Images>("/assets/gallery/images.json")).data;

	data.citrine.forEach((def) => def.isToggled = false);
	data.kaho.forEach((def) => def.isToggled = false);

	new Vue({
		el: "#app",
		data: {
			images: data,
			isModalVisible: false,
			selectedImage: null,
		},
		methods: {
			clicked(image: ImageDefinition) {
				this.selectedImage = image;
				this.isModalVisible = true;
			},
			close() {
				this.isModalVisible = false;
			}
		}
	});
})();

interface Images {
	citrine: ImageDefinition[];
	kaho: ImageDefinition[];
}

interface ImageDefinition {
	file: string;
	author: string;
	authorUrl?: string;
	description?: string;
	isToggled: boolean
}