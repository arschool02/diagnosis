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
		midasi = 'あなたはコーラタイプです！';
		gazo = 'img/sample/ko-ra.jpg';
		setumei = 'あなたがマクドナルドに行くなら、ハンバーガーと一緒にコーラを飲むと美味しいですよ！';

	}
	//結果が2だった場合
	else if(kekka == 2){
		midasi = 'あなたはおぞうにタイプです！';
		gazo = 'img/sample/zouni.jpg';
		setumei = 'お正月の朝には、おぞうにがあいますよ！';
	}
	//結果が3だった場合
	else if(kekka == 3){
		midasi = 'あなたはパンタイプです！';
		gazo = 'img/sample/pann.jpg';
		setumei = '忙しい朝には、パンがあいますよ！';
	}
	//結果が４だった場合
	else if(kekka == 4){
		midasi = 'あなたはカプレーゼタイプです！';
		gazo = 'img/sample/sarada.jpg';
		setumei = '脂っこい味にはスッキリするカプレーゼ！';
	}

//結果が5だった場合
	if(kekka == 5){
		midasi = 'あなたはケチャップタイプです！';
		gazo = 'img/sample/ketyappu.jpeg';
		setumei = 'あなたがマクドナルドに行くなら、ハンバーガーにケチャップをかけて食べると美味しいですよ！';

	}
	//結果が6だった場合
	else if(kekka == 6){
		midasi = 'あなたはピザタイプです！';
		gazo = 'img/sample/piza.jpg';
		setumei = '忙しい時には、ピザがあいますよ！';
	}
	//結果が7だった場合
	else if(kekka == 7){
		midasi = 'あなたはパンプディングタイプです！';
		gazo = 'img/sample/pannpudyinngu.jpg';
		setumei = 'おやつには、パンプディングがあいますよ！';
	}
	//結果が8だった場合
	else if(kekka == 8){
		midasi = 'あなたはサラダタイプです！';
		gazo = 'img/sample/sarada.jpeg';
		setumei = '脂っこい味にはスッキリするサラダ！';
	}

	//結果を画面に表示する

	// 診断結果の見出しを表示
	ars.miseruMidasi(midasi);

	// 診断結果の画像を表示
	ars.miseruGazo(gazo);

	// 診断結果の詳細を表示
	ars.miseruSetumei(setumei);

};