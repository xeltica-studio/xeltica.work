interface ICharComponentSet {
	radioButton: HTMLInputElement;
	view: HTMLElement;
}

class Char {
	citrine: ICharComponentSet;
	kaho: ICharComponentSet;

	constructor() {
		this.getElements();
		this.register();
		switch (location.search.toLowerCase().substr(1)) {
			default:
			case "citrine":
				this.updateView(this.citrine);
				break;
			case "kaho":
				this.updateView(this.kaho);
				break;
		}
		console.log();
	}

	onPopState(e: PopStateEvent) {
		 
	}

	getElements() {
		this.citrine = {
			radioButton: document.getElementById("s_citrine") as HTMLInputElement,
			view: document.getElementById("v_citrine")
		};
		this.kaho = {
			radioButton: document.getElementById("s_kaho") as HTMLInputElement,
			view: document.getElementById("v_kaho")
		};
	}

	register() {
		window.onpopstate = this.onPopState;
		this.citrine.radioButton.onchange = e => {
			this.updateView(this.citrine);
		};
		this.kaho.radioButton.onchange = e => {
			this.updateView(this.kaho);
		}
	}

	updateView(char: ICharComponentSet) {
		if (char != this.citrine) this.citrine.view.classList.remove("show");
		if (char != this.kaho) this.kaho.view.classList.remove("show");
		
		char.view.classList.add("show");
	}

}

window.onload = _ => new Char();