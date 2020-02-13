require('@babel/polyfill');

export async function dosomething(){
    const a = 1
    let b = 2
    return new Promise(reslove =>{
        reslove({a,b})
    })
}