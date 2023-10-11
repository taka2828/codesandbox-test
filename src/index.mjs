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

/**
 * 分割代入
 */
const myProfile1 = {
  fullName: "ほげ",
  age: "10",
};
const message3 = `名前は${myProfile1.fullName}です。年齢は${myProfile1.age}歳です。`;
console.log(message3);

// const { fullName, age } = myProfile1;
// const message4 = `名前は${fullName}です。年齢は${age}歳です。`;
// console.log(message4);

// 配列
const myProfile2 = ["ほげ", 10];
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message5);

// const [fullName, age] = myProfile2;
// const message6 = `名前は${fullName}です。年齢は${age}歳です。`;
// console.log(message5);

/**
 * デフォルト値、引数など
 */
const sayHello = (fullName = "ゲスト") =>
  console.log(`こんにちは${fullName}さん`);
sayHello("ほげ");
// 引数なし：undefined
//「ゲスト」と初期値を設定したのでゲストになる
sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log("...", ...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
arr6[0] = 200;
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);

// 参照元が同じなのでarr8を変えるとarr4にも影響が出る
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "ほげ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index}番目は${name}`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "ほげ") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時：条件がfalseの時
const val10 = 1 > 0 ? "trueです" : "falseです";
console.log(val10);

const num = 1300;
// 三桁ごとにカンマ区切り
//console.log(num.toLocaleString());

const formattedNum =
  typeof num == "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100オーバー" : "許容範囲内";
};
console.log(checkSum(50, 60));
console.log(checkSum(50, 40));

/**
 * 論理演算子
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す
const num3 = null;
const fee = num3 || "金額未設定です";
console.log(fee);

const num4 = 100;
const fee2 = num4 || "金額未設定です";
console.log(fee2);

const num5 = null;
const fee3 = num5 && "なにか設定されました";
console.log(fee3);

const num6 = 100;
const fee4 = num6 && "なにか設定されました";
console.log(fee4);
