
class Programmer {

    //属性的写法 : 成员变量:对像的方式来访问
    name:string="";
    age:number;
    sex:string;
    hobby:string[];


    //成员方法 : 实例方法
    writeCode():void{
        console.log(`${this.name} is writing code!`)
    }


    writeBug():void{
        console.log(`${this.name} is writing bug!`)
    }
}

//程序员:
//写代码 写bug, 方法
//name,age,sex,hobby, 属性

let zhangsan = new Programmer()
zhangsan.name = "张三";
zhangsan.age = 21;
zhangsan.sex = "male";
zhangsan.hobby = ["movie","book","music"];

zhangsan.writeCode();
zhangsan.writeBug()

