/**
 * const, let
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let上書き";
console.log(val2);

// // letは再宣言不可能
// let val2 = "let再宣言";

// // const
// const val3 = "const変数";
// console.log(val3);

// // constは上書き、再宣言不可能
// val3 = "const上書き";
// const val3 = "const再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "hoge",
  age: 10,
};
console.log(val4);

val4.name = "fuga";
console.log(val4);

val4.address = "aaabbb";
console.log(val4);

// 配列も可能
const val5 = ["dog", "cat"];
console.log(val5);

val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const fullname = "なまえ";
const age = 11;
// 「私の名前はなまえです。年齢は11歳です。」

// 従来の方法
const message1 = "私の名前は" + fullname + "です。年齢は" + age + "です。";
console.log("message1:" + message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${fullname}です。年齢は${age}です。`;
console.log("message2:" + message2);

/**
 * アロー関数
 */

// 従来の関数 上と下同じ
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log("func1:" + func1("func1です"));

// アロー関数 上と下同じ
// const func2 = (str) => {
//   return str;
// };
const func2 = (str) => str;

console.log("func2:" + func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log("func3:" + func3(10, 20));
