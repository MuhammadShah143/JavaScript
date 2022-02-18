const convertTros= (dollar)=>{
    if (typeof dollar==='number') {
        return dollar*64
    }else{
        throw Error('Amount needs to be in number')
    }
}

// const myValue = convertTros(5)
// console.log(myValue);

try {
    const myValue= convertTros('five')
} catch (e) {
    console.log(e);
}