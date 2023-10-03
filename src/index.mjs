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
