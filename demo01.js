function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(()=> {
            return resolve("LONG_TIME_VALUE")
        },3000);
    })
}

async function test() {
    const v = await takeLongTime();
    console.log(v);
}

test();

// function getSome() {
//     return 'something'
// }

// async function testAsync() {
//     return 'hello async'
// }

// async function test() {
//     const v1 = await getSome()
//     const v2 = await testAsync()
//     console.log(v1)
//     console.log(v2)
// }
// test();
// const result = testAsync();
// console.log(result)

