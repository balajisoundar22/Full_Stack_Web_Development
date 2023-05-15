function fun1() {
    console.log('fun1');
}

function fun2() {
        console.log('fun2');
}

function main() {
    console.log('main');

    new Promise((resolve,reject)=>
    resolve('success')).then((resolve)=>console.log(resolve));

    setTimeout(fun1,0);

    fun2();
}

main();