import Vue from "vue";
import axios from "axios";

(async () => {
	const data = (await axios.get<ImageDefinition[]>("/assets/gallery/images.json")).data;

	data.forEach((def) => def.isToggled = false);

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