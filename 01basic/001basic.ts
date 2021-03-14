
//./node_modules/.bin/ts-node 001basic.ts 

//型アノテーション 　:型　の形式で型を指定することができる
function hello(name: string): void {
    console.log("Hello " + name + "!");
}
let your_name: string = "Yamada";


console.log(hello(your_name));

//プリミティブ型
let v_bool: boolean = true;
let v_num: number = 123;
let v_str: string = "ABCDEFG";
let v_null: null = null;
let v_undef: undefined = undefined;

console.log(v_bool, v_num, v_str, v_null, v_undef);

//リストやタプル
let v_arr1: string[] = ["Red", "Green", "Blue"];
let v_arr2: Array<string> = ["Red", "Green", "Blue"];
let v_tuple: [string, number] = ["Yamada", 26];

console.log(v_arr1, v_arr2, v_tuple);

//オブジェクト型
let v_obj: object = {"name": "Yamada", "age": 26};
console.log(v_obj);

//Enum型
enum Color {Red, Green, Blue};
let v_enm: Color = Color.Green;
console.log(v_enm);

//クラス
class MyClass {
    //変数名に!をつけると厳密なコンストラクタでの初期化を回避できる
    name!: string;

    constructor() {
        this.initialize();
    }

    initialize() {
        this.name = "";
    }


}
var val_class: MyClass = new MyClass();
console.log(val_class);
