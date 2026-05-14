# JS-Interpreter

JavaScriptで記述された、サンドボックス型のJavaScriptインタープリタです。任意のJavaScriptコードを、隔離された安全な環境で1行ずつ実行できます。

## デモ
ライブデモ: https://code4fukui.github.io/JS-Interpreter/

## 機能
- サンドボックス環境でのJavaScriptコードの実行
- コードの1行ずつのステップ実行
- コード実行の一時停止と再開
- インタープリタ状態のシリアライズとデシリアライズ

## 要件
- なし（モダンなWebブラウザで動作します）

## 使い方
1. インタープリタのモジュールをインポートします:
   ```javascript
   import { Interpreter } from "https://code4fukui.github.io/JS-Interpreter/interpreter.js";
   ```
2. JavaScriptコードを渡してインタープリタのインスタンスを作成します:
   ```javascript
   const myCode = `
   var result = [];
   function fibonacci(n, output) {
     // ...
   }
   fibonacci(16, result);
   alert(result.join(', '));
   `;
   const myInterpreter = new Interpreter(myCode);
   ```
3. コードをステップ実行します:
   ```javascript
   while (myInterpreter.step()) {
     // 1ステップ実行
   }
   ```

## ライセンス
Apache License 2.0
