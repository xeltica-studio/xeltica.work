interface ICharComponentSet {
	radioButton: HTMLInputElement;
	view: HTMLElement;
}

class Char {
	citrine: ICharComponentSet;
	kaho: ICharComponentSet;

	readonly self = this;

	constructor() {
		this.getElements();
		this.register();

		this.syncView();
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
		window.addEventListener("popstate", () => this.syncView());
		this.citrine.radioButton.addEventListener("change", _ => {
			this.setView(this.citrine);
			history.pushState(null, null, "/char.html?citrine");

		});
		this.kaho.radioButton.addEventListener("change", _ => {
			this.setView(this.kaho);
			history.pushState(null, null, "/char.html?kaho");
		});
	}

	private setView(char: ICharComponentSet) {
		if (!char) return;

		if (char !== this.citrine) this.citrine.view.classList.remove("show");
		else if (char !== this.kaho) this.kaho.view.classList.remove("show");
		
		char.view.classList.add("show");
	}

	private syncView() {
		switch (location.search.toLowerCase().substr(1)) {
			default:
			case "citrine":
				this.setView(this.citrine);
				break;
			case "kaho":
				this.setView(this.kaho);
				break;
		}
		console.log(location.search);
	}

}

window.onload = _ => new Char();