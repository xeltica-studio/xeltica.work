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
			selectedIndex: 0,
		},
		methods: {
			clicked(index: number, image: ImageDefinition) {
				this.selectedIndex = index;
				this.isModalVisible = true;
			},
			close() {
				this.isModalVisible = false;
			},
			goPrevious() {
				this.selectedIndex--;
				if (this.selectedIndex < 0)
					this.selectedIndex = this.images.length - 1;
			},
			goNext() {
				this.selectedIndex++;
				if (this.selectedIndex > this.images.length - 1)
					this.selectedIndex = 0;
			},
			selectedImage: function () { return this.images[this.selectedIndex]; },
		}
	});
})();

interface ImageDefinition {
	file: string;
	author: string;
	authorUrl?: string;
	description?: string;
	isToggled: boolean,
	tags?: string[]
}