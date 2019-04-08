import Vue from "vue";
import axios from "axios";
import { ImageDefinition } from "./ImageDefinition";

(async () => {
	const data = (await axios.get<ImageDefinition[]>("/assets/gallery/images.json")).data;

	data.forEach((def) => def.isToggled = false);

	new Vue({
		el: "#app",
		data: {
			images: data,
			isModalVisible: false,
			selectedIndex: 0,
			query: ""
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
					this.selectedIndex = this.currentImages.length - 1;
			},
			goNext() {
				this.selectedIndex++;
				if (this.selectedIndex > this.currentImages.length - 1)
					this.selectedIndex = 0;
			},
			selectedImage: function () { return this.currentImages[this.selectedIndex]; },
		},
		computed: {
			currentImages: function() {
				return this.images.filter(img => isMatch(this.query, img));
			}
		}
	});
})();

function isMatch(query: string, image: ImageDefinition) {
	if (!query)
		return true;
	return query.toLowerCase().split(/\s/g).every(s => 
		image.tags.some(tag => tag.toLowerCase().includes(s)) ||
		image.author.toLowerCase().includes(s) ||
		(image.description && image.description.toLowerCase().includes(s))
	);
}

