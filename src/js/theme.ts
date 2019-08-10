const themes = {
	dark: {	
		"--fore": "#f0f0f0",
		"--fore-light": "#ffffff",
		"--fore-dark": "#c8c8c8",
		"--back": "#242424",
		"--back-light": "#363636",
		"--back-dark": "#000000",
		"--back-navbar": "rgba(24, 24, 24, 0.7)",
		"--accent": "#FF5722",
		"--accent-light": "#FF8A65",
		"--accent-dark": "#E64A19",
	},
	light: {
		"--back": "#f0f0f0",
		"--back-light": "#ffffff",
		"--back-dark": "#c8c8c8",
		"--fore": "#242424",
		"--fore-light": "#363636",
		"--fore-dark": "#000000",
		"--back-navbar": "rgba(250, 250, 250, 0.7)",
		"--accent": "#2196F3",
		"--accent-light": "#64B5F6",
		"--accent-dark": "#1976D2",
	}
};

const colorObserver = window.matchMedia('(prefers-color-scheme: dark)');
let themeMode = localStorage.getItem("theme");
let icons: NodeListOf<Element>;

updateTheme();

addEventListener("load", () => {
	colorObserver.addListener(onOSColorModeChanged); 
	icons = document.querySelectorAll(".theme-icon");
	updateTheme();
	document.body.attributes.removeNamedItem("v-cloak");
});

(window as any).toggleTheme = () => {
	themeMode = themeMode == "dark" ? "light" : "dark";
	localStorage.setItem("theme", themeMode);
	updateTheme();
};

function onOSColorModeChanged(this: MediaQueryList, ev: MediaQueryListEvent) {
	if (localStorage.getItem("theme"))
		return;
	themeMode = colorObserver.matches ? "dark" : "light";
	updateTheme();
}

function updateTheme() {
	switch (themeMode) {
		case "light":
		case "dark":
			applyTheme(themeMode);
			break;
		default:
			applyTheme(colorObserver.matches ? "dark" : "light");
			break;
	}
	if (icons) {
		icons.forEach((icon, key, p) => {
			icon.classList.remove("fa-moon", "fa-sun");
			icon.classList.add(themeMode == "dark" ? "fa-moon" : "fa-sun");
		});
	}
}

function applyTheme(theme: string) {
	for (var prop in themes[theme]) {
		document.body.style.setProperty(prop, themes[theme][prop]);
	}
}

(window as any).resetTheme = () => {
	localStorage.removeItem("theme");
	themeMode = null;
	updateTheme();
};

(window as any).showHelpOfResetTheme = () => {
	alert(`テーマを既定値にリセットします。これを行うと、お使いの端末がダークテーマ、ライトテーマの切り替えをサポートしている場合、それに合わせてテーマが切り替わるようになります。`);
};