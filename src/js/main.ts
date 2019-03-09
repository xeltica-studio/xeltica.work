// Reference: https://www.tomotanuki.com/entry/web-top-of-page
// Thank you!

//スクロール量を取得する関数
function getScrolled() {
	return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById( "page-top" );

//ボタンの表示・非表示
window.onscroll = function() {
	( getScrolled() > 30 ) ? topButton.classList.add( "show" ): topButton.classList.remove( "show" );
};

//トップに移動する関数
function scrollToTop() {
	var scrolled = getScrolled();
	window.scrollTo( 0, Math.floor( scrolled / 1.8 ) );
	if ( scrolled > 0) {
		window.setTimeout( scrollToTop, 30 );
	}
};

//イベント登録
topButton.onclick = function() {
	scrollToTop();
};