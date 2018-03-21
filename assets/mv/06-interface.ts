

//接口是用来规定一套做事情的标谁，
//所有在接口中定义的方法都只有方法的申明，没有实现
//接口中定义的方法，子类必须全部实现

interface IDoSomeThing {
    a?:string; //在一个属性后面加上一个?,属性就是一个可选属性

    stepFirst():void;

    stepSecond():void;

    stepThird():void;
}

class PushElemphent implements IDoSomeThing {

    a:string = "hello"

    stepFirst(): void {
        throw new Error("Method not implemented.");
    }

    stepSecond(): void {
        throw new Error("Method not implemented.");
    }

    stepThird(): void {
        throw new Error("Method not implemented.");
    }

}


//intefact vs abstract


function printLabel(obj?:{title:string}){
    console.log(obj);
}

//typescript:只要是定义一种标准
printLabel({title:"hello"})

printLabel()