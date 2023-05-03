// モード値を production に設定すると最適化された状態で、
// development に設定するとソースマップ有効でJSファイルが出力される
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
	// モード値を production に設定すると最適化された状態で、
	// development に設定するとソースマップ有効でJSファイルが出力される
	mode: MODE,

	// メインとなるJavaScriptファイル（エントリーポイント）
	entry: "./src/js/index.ts",
	// ファイルの出力設定
	output: {
		//  出力ファイルのディレクトリ名
		path: `${__dirname}/dist`,
		// 出力ファイル名
		filename: "main.js",
	},
	module: {
		rules: [
			{
				// 拡張子 .ts の場合
				test: /\.ts$/,
				// TypeScript をコンパイルする
				use: "ts-loader",
			},
			// Sassファイルの読み込みとコンパイル
			{
				test: /\.scss/, // 対象となるファイルの拡張子
				use: [
					// linkタグに出力する機能
					"style-loader",
					// CSSをバンドルするための機能
					{
						loader: "css-loader",
						options: {
							// オプションでCSS内のurl()メソッドの取り込みを禁止する
							url: false,
							// ソースマップの利用有無
							sourceMap: enabledSourceMap,

							// 0 => no loaders (default);
							// 1 => postcss-loader;
							// 2 => postcss-loader, sass-loader
							importLoaders: 2,
						},
					},
					{
						loader: "sass-loader",
						options: {
							// ソースマップの利用有無
							sourceMap: enabledSourceMap,
						},
					},
				],
			},
		],
	},
	// import 文で .ts ファイルを解決するため
	resolve: {
		extensions: [".ts", ".js"],
	},

	// ローカル開発用環境を立ち上げる
	// 実行時にブラウザが自動的に localhost を開く
	devServer: {
		static: "dist",
		open: true,
	},
};
