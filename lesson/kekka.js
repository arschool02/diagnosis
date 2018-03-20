/****************
 * 診断結果ページで使うJavaScript
 ****************/

/**
 * 診断結果ページで最初に呼ばれる処理
 */
let kaisi = () => {
	//今までの回答から、診断結果を取得
	let kekka = ars.toruKekka();

	// 診断結果を表示する
	miseruKekka(kekka);
};


/**
 * 診断結果を表示する処理
 * @param kekka 診断結果
 */

let miseruKekka = (kekka) => {
	// 診断結果の見出し
	let midasi = '';

	// 診断結果の画像
	let gazo = '';

	// 診断結果の説明文
	let setumei = '';

	//結果が1だった場合
	if(kekka == 1){
		midasi = 'あなたはファンタタイプです！';
		gazo = 'img/sample/fannta.jpg';
		setumei = 'あなたがマクドナルドに行くなら、ハンバーガーと一緒にファンタを飲むと美味しいですよ！';

	}
	//結果が2だった場合
	else if(kekka == 2){
		midasi = 'あなたはペリエタイプです！';
		gazo = 'img/sample/perie.jpg';
		setumei = 'イタリア料理には、ペリエがあいますよ！あなたはスマートに、シュワっと弾けるクールな人でしょう';
	}
	//結果が3だった場合
	else if(kekka == 3){
		midasi = 'あなたは水タイプです！';
		gazo = 'img/sample/mizu.jpg';
		setumei = '味の濃いスパゲッティには、水があいますよ！あなたは模範的な人でしょう';
	}
	//結果が4だった場合
	else if(kekka == 4){
		midasi = 'あなたは烏龍茶タイプです！';
		gazo = 'img/sample/uronntya.jpg';
		setumei = '脂っこい味にはスッキリする烏龍茶！あなたは自分なりの気持ちがある自分の意思を貫く人でしょう';
	}

	//結果を画面に表示する

	// 診断結果の見出しを表示
	ars.miseruMidasi(midasi);

	// 診断結果の画像を表示
	ars.miseruGazo(gazo);

	// 診断結果の詳細を表示
	ars.miseruSetumei(setumei);

};