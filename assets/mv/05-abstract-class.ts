
//HTML5 1 abstract
//1.abstract 抽象的类,用来定义标准模板,是用来让其它的子类的完成方法的实现的,自已不需要实现
//多态
//抽象类不可以实例化
//抽象类的中的方法,可以有实现的方法,
abstract class DoSomething {

    //opendoor 方法只需要定义,不需要实现,实现让子类来完成
    abstract openDoor():void  ;

    closeDoor():void{
        console.log("close door");
    }


}

//programmer->javaprogrammer phpprgrammer



class Elephone extends DoSomething {

    openDoor(): void {
        console.log("open doore");
    }

    closeDoor():void{
        console.log("elephone close door");
    }

}


let littleel = new Elephone()
littleel.openDoor();
littleel.closeDoor()