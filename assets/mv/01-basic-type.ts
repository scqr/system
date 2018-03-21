//ios swift
// var istrue= false;
// 1,0 true false
//true false : 变量:类型
//boolean
let istrue:boolean = false;
istrue = true
console.log(istrue);

//数字类型 float
let num:number = 90.00;


//字符串
let str:string="hello world";
let str1:string = 'hello str1';
// template string
let str2:string =`${str1} is a string `;
console.log(str2);

//数组
let list:number[] = [1,2,3,4];
let list3:Array<number> =[1,2,3,4]; //c# java generic
let list2:string[] = ["1","2","3","hello"]
let list4:Array<string> = ["1","2","3","hello"]

console.log(list[0]);

//元组 tuple
//元组是一种特别的类型的数组:已知大小和类型
let x:[string,number];
x = ["hello",2]
console.log(x[1]);

//语义化的说明，编程
//枚举 let a= 1/2/3 : 1:管理员,2 用户 3, user
//let a= admin/user/super
let c:number = 0;// 0:Red 1:green 2: blue
enum Color {Red=1,Green=1,Blue};
let y:Color = Color.Blue;
let y1:Color = Color.Green;
console.log(y);

//当我们无法确定值的类型的时候,any类型
let xx:any = 1;
xx ="hello";

let dd:any[] = [1,"hello",["gekki"]]

//void never function

//void 函数返回值
function test(a:string,b:number):void{
    console.log(1);
}

//throw error
function error(message: string): never {
    throw new Error(message);
}


//boolean
//number
//string
//array
//tuple
//enum
//any
//void
//never
