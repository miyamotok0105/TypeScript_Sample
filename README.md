# TypeScript_Sample



```
初期ファイル作成
npm init
グローバルエリアにインストール
npm install -g ts-node
ローカルエリアにインストール
npm install -D typescript
バージョン確認
./node_modules/.bin/tsc --version
コンパイラオプションファイルを作る(tsconfig.json)
　コンパイル時の設定ができるファイル
./node_modules/.bin/tsc --init
```

### 実行

```
hoge.tsからhoge.jsを生成する
./node_modules/.bin/tsc hoge.ts
hoge.jsを実行
node hoge.js

ts-nodeを使う
npm i -D ts-node
//npm i -D tsconfig-paths

./node_modules/.bin/ts-node hoge.ts
```


[コーディング規約](https://typescript-jp.gitbook.io/deep-dive/styleguide)


