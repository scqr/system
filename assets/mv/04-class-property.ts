
class Animal {

    //成员属性 公共，私有与受保护的修饰符
    //public:公有,private:私有的 protected:受保护
    //private属性,只能在当前的类的内部访问,不可以在其它类或者子类中访问

    public name:string;
    public category:string;

    //私有的:只可以在类内部使用,子类都不可以调用
    private isMarry:boolean=true;

    //子类可以访问,内部,其它的地方不可以访问
    protected sex:string;

    //只读属性,不可以修改
    readonly height:number;
    readonly weight:number;

    //当有些属性我们可以人为设置访问性
    // zhangsan,lisi,wangwu->A
    // tian,wang,zhao ->B
    // friends->C
    //setters getters
    private _photos:any[]=[{"A":["1.jpg","2.jpg"]},{"B":["3.jpg"]},{"C":["4.jpg"]}];

    //获取方法
    get photos(){
        console.log(this.name);
        if(this.name == "zhangsa"){
            return this._photos;
        }else{
            return "您无权访问"
        }

    }

    //设置方法
    set photos(val:any){
        this._photos = val;
    }

    //用static来修饰的属性，静态属性，可以通过类名直接访问
    //不需要通过类的对象的引用来的访问
    static color:string="red color";

    //public protected private  static
    public eat(food:any){
        console.log(`${this.name} is eating ${food}`)
    }

    private drink(){

    }

    public pee(){
        this.drink()
    }

    protected sleep(){

    }

    static play(){

    }

    constructor(){
        console.log("anmial constructor is called");
    }


}

class Cat extends Animal{

    constructor(){
        super() //调用父类的构造方法
        console.log("Cat constructor is called");
    }

    say(){
        this.sex = "";
        this.sleep()
    }
}

//
// let cat = new Animal()
// cat.name="cat";
// // cat.sex = "female"


let littlecat = new Cat();
littlecat.name="lisi"
// littlecat.sex = "no"
console.log(littlecat.height)
console.log(littlecat.photos);

console.log(Cat.color)
littlecat.eat("fish")
Cat.play()






