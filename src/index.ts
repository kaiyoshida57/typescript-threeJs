// import 文を使ってstyle.cssファイルを読み込む。
import "./common/common.scss";

import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// ページの読み込みを待つ
window.addEventListener("DOMContentLoaded", init);

function init() {

	// サイズを指定
	const width = 960;
	const height = 540;

	// レンダラーを作成
  const canvasElement = document.querySelector(
    "#myCanvas"
  ) as HTMLCanvasElement;
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
  });

	// シーンを作成
	const scene = new THREE.Scene();

	// カメラを作成
	const camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 0, +1000);

	// 箱を作成
	// *箱などのメッシュという表示オブジェクトを作るには、ジオメトリ（形状）とマテリアル（素材）の二種類を用意する必要がある。
	const geometry = new THREE.BoxGeometry(400, 400, 400);
	const material = new THREE.MeshNormalMaterial();
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);


	tick();

	// 毎フレーム時に実行されるループイベントです
	function tick() {
		// 	// アニメーション処理をここに書く
		box.rotation.y += 0.01;
		renderer.render(scene, camera); // レンダリング

		requestAnimationFrame(tick);
	}

}
