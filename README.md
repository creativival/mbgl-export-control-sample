# @geolonia/mbgl-export-controlのサンプル

## 概要

- node.js
- express
- express-generator
- ejs
- geolonia/mbgl-export-control

を使って、地図画像を出力するサンプルです。

## 使い方

1. このリポジトリをクローンする
2. `npm install` で必要なモジュールをインストールする
3. `npm start` でサーバーを起動する
4. `http://localhost:3000` にアクセスする
5. 左上のダウンロードボタンをクリックして地図画像を出力する
6. 地図画像がダウンロードされる
7. 画像のサイズを変更するには、style.cssの`#map`の`width`と`height`を変更する
8. おわり

## WebPack

- ./src/js/app.jsがエントリーポイントです。

```app.js
import ExportControl from '@geolonia/mbgl-export-control'

const map = new geolonia.Map( '#map' )

// Add the control to download png.
map.addControl(new ExportControl({
  dpi: 300,
  attribution: "© OpenStreetMap Contributors",
}), 'top-left');
```

- `npm run build`で`public/javascripts/bundle.js`を生成できます。

