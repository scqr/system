

// function test(x,y){
//     arguments
// }

function add(x:number,y:number=9):number{
    return x + y
}


console.log(add(1,3));

//无法确定参数列表的个数

function buildName(firstname:string,...args:string[]){
    console.log(args)
}

buildName("hennery","a","b","c","d")