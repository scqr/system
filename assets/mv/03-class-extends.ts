

class Person {
    name:string;
    sex:string;
    age:number;

    say(){
      console.log(`${this.name} is saying`)
    }
}

//java | c# student:person
class Student extends Person{
    major:string;
}


class Teacher extends Person{
    cource:string;

}


let lisi = new Student()
lisi.name= "lisi";
lisi.age = 20;
lisi.sex = "male";

lisi.say();