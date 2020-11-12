let hasValue: boolean = true;
let cout: number = 10;
let single: string = 'hello'
let hogehoge = 'string'
hogehoge = 'data'

const frutits: string[] = ['Apple', 'Banna']

const person = {
    name : {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
}
Object.create(person)
//タプル

const book: [string, number, boolean] = ['business',1500,false]

console.log(book)

enum CoffeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}
const coffee = {
    hot: true,
    size: CoffeSize.TALL
}

let anything: any = true;
anything = 'Hello'

let uniuni: string | number = 10;

uniuni = 'a'

//Literal
const apple = 'apple'
let clothSize: 'small' | 'medium' | 'large' = 'large';

const cloth: {
    color: string;
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: 'medium'
}
cloth.size = 'large'


type ClothSize = "small" | "medium" | "large"
let clothSizeA: ClothSize = 'large';

//型注釈つき
function add(num1: number, num2: number): number {
    return num1 + num2
}

//関数を保持する変数

const anotherAdd = add;

//型注釈を書く
const anotherAdd2: (n1: number, n2:number) => number = add;

//無名関数(冗長)
const anotherAdd3: (n1: number, n2:number) => number = function (num1: number, num2: number): number {
    return num1 + num2
}

//アロー関数
const doubleNumber = number => number * 2;
console.log(doubleNumber(1))

//型注釈つき
const doubleNumber2 = (num:number): number => num * 2;

//コールバック関数に型注釈
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2)
    console.log(doubleNum)
}

doubleAndHandle(21, doubleNum => {
    return doubleNum
})

//unknown型
let unknownInput: unknown;
let anyInput: any;
let text: string;
//anyに似てる

text = anyInput;
if (typeof unknownInput == 'string'){
    //typeofで型を推論すれば使っていい
    text = unknownInput;
}

//never型？throwみたいなもの

function error(message: string): never {
    throw new Error(message);
}
console.log(error('This is error'));
