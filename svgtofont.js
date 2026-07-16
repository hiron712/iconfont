// svgtofont を使って、icon ディレクトリ内の SVG から Web フォント一式を生成するスクリプト例
// 実行コマンド例: node svgtofont.js

import svgtofont from "svgtofont";
import path from "node:path";

// svgtofont のメイン処理
svgtofont({
  // フォント化したい SVG アイコンを置いたディレクトリ
  // 例: icon/A.svg, icon/B.svg ... など
  src: path.resolve(process.cwd(), "icon"), // SVGファイルパス

  // 生成されたフォントファイルやサンプル HTML を出力するディレクトリ
  // なければ自動的に作られる
  dist: path.resolve(process.cwd(), "fonts"), // 出力用パス

  // 生成されるフォントの font-family 名
  // CSS で font-family: 'nagata'; のように指定して使う
  fontName: "nagata", // フォント名

  // CSS ファイル（.css）を自動生成するかどうか
  // true にすると、クラス指定・@font-face 付きの CSS が出力される
  css: true, // CSS出力

  // SVG ファイル名を Unicode として使うオプション
  // 例: A.svg → 文字 'A' (U+0041)、0.svg → 文字 '0' (U+0030) に割り当てられる
  // 「キーボードで A を押したら A.svg のグリフを出したい」場合に便利
  useNameAsUnicode: true,

  // 内部で使用されている svgicons2svgfont への詳細設定
  svgicons2svgfont: {
    // フォント全体の高さ（EM 高）
    // ここで指定した値を基準に、各 SVG がスケーリングされる
    fontHeight: 1000,

    // SVG ごとにサイズがバラバラな場合に高さをそろえるためのオプション
    // true にすると、一番背の高いアイコンに合わせて他のアイコンもスケールされる
    normalize: true,
  },

  // デモ用のウェブページを自動生成するための設定
  website: {
    // 生成されるデモページのタイトル
    title: "nagata",

    // <meta> タグに出力される SEO 用の説明文など
    meta: {
      // デモページの description
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      // 検索キーワード
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG",
    },

    // 生成されるリンク集（ナビゲーション）設定
    // fonts/ 以下に index.html / unicode.html が出力される想定
    links: [
      {
        // クラス名（.icon-home など）で使うサンプルページへのリンク名
        title: "Font Class",
        // 出力される HTML ファイル名
        url: "index.html",
      },
      {
        // Unicode 直接入力（&#xEA01; など）で使うサンプルページへのリンク名
        title: "Unicode",
        // 出力される HTML ファイル名
        url: "unicode.html",
      },
    ],
  },
}).then(() => {
  // 処理が正常に完了したときに呼ばれる
  console.log("done!");
});
