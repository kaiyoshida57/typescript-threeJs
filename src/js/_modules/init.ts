// ※TypeScript解説コメントには★を付けています。

// import 文を使ってscssファイルを読み込む。
import "../../sass/common/common.scss";

import * as THREE from "three";

export default function init() {
	// サイズを指定
	// ★TSでは変数宣言に型を宣言させられる。以下の場合number型。
	const width: number = 800;
	const height: number = 500;

	// レンダラーを作成
	// ★TSではas構文や<型>表記とのような型アサーションの指定方法がある。JSXとの混同避ける為に基本的に前者を使うのが良さそう。
	const canvasElement = document.querySelector(
		"#myCanvas"
	) as HTMLCanvasElement;
	const renderer = new THREE.WebGLRenderer({
		canvas: canvasElement,
	});
	// サイズ指定。デフォルトは300,150
	renderer.setSize(width, height);

	// シーンを作成
	const scene = new THREE.Scene();

	// カメラを作成
	const camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 250, +1000);
	camera.lookAt(new THREE.Vector3(0, 0, 0)); // 指定座標に強制的に向かせる

	// 箱を作成
	// *箱などのメッシュという表示オブジェクトを作るには、ジオメトリ（形状）とマテリアル（素材）の二種類を用意する必要がある。
	const geometry = new THREE.BoxGeometry(400, 400, 400);
	const material = new THREE.MeshNormalMaterial();
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);

	//let id: number = 0; // キャンセルするためのID（数字）
	let isStop: boolean = true; // 止めるor動かす為の真偽値
	let isReverse: boolean = false; // 逆に動かす為の真偽値

	tick();

	// 毎フレーム時に実行されるループイベントです
	function tick() {
		// アニメーション処理をここに書く
		if (isReverse) {
			box.rotation.y += -0.05;
		} else {
			box.rotation.y += 0.05;
		}
		// box.rotation.z += 0.01;
		renderer.render(scene, camera); // レンダリング
		if (!isStop) {
			requestAnimationFrame(tick);
		}
	}

	// ★TSでは、以下のようにtypeで型命名し、関数などに適用すると分かりやすい。似たものとしてinterfaceというオブジェクトの型として命名できる方法もある。
	type animOpt = (
		message: string, // 出力文言
		applyNumber: number // 回転数
	) => void;

	// 早める/遅らす場合に実行されるイベント
	const tickFastSlowly: animOpt = (mes, num) => {
		if (num > 0) {
			box.rotation.y += num;
			isReverse = false;
		} else {
			box.rotation.y += num;
			isReverse = true;
		}
		// console.log(box.rotation.y);
		const voiceElm = document.querySelector(".voice") as HTMLElement;
		voiceElm.style.display = "block";
		voiceElm.innerHTML = mes;
		renderer.render(scene, camera); // レンダリング
		if (!isStop) {
			requestAnimationFrame(tick);
		}
	};

	// | ここからボタン操作処理 |
	const btnStopStart = document.querySelector(
		".stopOrStart"
	) as HTMLButtonElement;
	const btnFast = document.querySelector(".fast") as HTMLButtonElement;
	const btnSlowly = document.querySelector(".slowly") as HTMLButtonElement;

	// *** 止めるボタン ***
	if (btnStopStart) {
		btnStopStart.addEventListener("click", (e) => {
			const target = e.target as HTMLButtonElement;
			if (target.classList.contains("is-stop")) {
				// 文字のclass付け替え
				target.classList.toggle("is-stop");
				target.innerHTML = "回転を止める";
				// 動かす処理
				isStop = false;
				requestAnimationFrame(tick);
			} else {
				// 文字のclass付け替え
				target.classList.toggle("is-stop");
				target.innerHTML = "回転させる";
				// 止める為の変数代入
				isStop = true;
			}
		});
		// cancelAnimationFrame(id);
	}

	// *** 早めるボタン ***
	if (btnFast) {
		btnFast.addEventListener("click", () => {
			tickFastSlowly("早めました！", 0.05);
		});
	}

	// *** 遅らすボタン ***
	if (btnSlowly) {
		btnSlowly.addEventListener("click", () => {
			tickFastSlowly("逆に早めました！", -0.05);
		});
	}
}
