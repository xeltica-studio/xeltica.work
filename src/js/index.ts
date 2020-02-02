addEventListener("scroll", () => {
	// navbar を出したり出さなかったりしろ
	const navbar = document.getElementById("navbar");
	const threshold = document.getElementById("buttons").offsetHeight;

	// メニューが出ているときは無視
	if ((window as any).miscIsShowing)
		return;

	if (window.pageYOffset > threshold) {
		navbar.classList.add("show");
	} else {
		navbar.classList.remove("show");
	}
});