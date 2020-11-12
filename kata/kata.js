var hasValue = true;
var cout = 10;
var single = 'hello';
var hogehoge = 'string';
hogehoge = 'data';
var frutits = ['Apple', 'Banna'];
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
Object.create(person);
//タプル
var book = ['business', 1500, false];
console.log(book);
var CoffeSize;
(function (CoffeSize) {
    CoffeSize[CoffeSize["SHORT"] = 0] = "SHORT";
    CoffeSize[CoffeSize["TALL"] = 1] = "TALL";
    CoffeSize[CoffeSize["GRANDE"] = 2] = "GRANDE";
    CoffeSize[CoffeSize["VENTI"] = 3] = "VENTI";
})(CoffeSize || (CoffeSize = {}));
var coffee = {
    hot: true,
    size: CoffeSize.TALL
};
var anything = true;
anything = 'Hello';
var uniuni = 10;
uniuni = 'a';
//Literal
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
cloth.size = 'large';
var clothSizeA = 'large';
//型注釈つき
function add(num1, num2) {
    return num1 + num2;
}
//関数を保持する変数
var anotherAdd = add;
//型注釈を書く
var anotherAdd2 = add;
//無名関数(冗長)
var anotherAdd3 = function (num1, num2) {
    return num1 + num2;
};
//アロー関数
var doubleNumber = function (number) { return number * 2; };
console.log(doubleNumber(1));
//型注釈つき
var doubleNumber2 = function (num) { return num * 2; };
//コールバック関数に型注釈
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
//unknown型
var unknownInput;
var anyInput;
var text;
//anyに似てる
text = anyInput;
if (typeof unknownInput == 'string') {
    //typeofで型を推論すれば使っていい
    text = unknownInput;
}
//never型？throwみたいなもの
function error(message) {
    throw new Error(message);
}
console.log(error('This is error'));
