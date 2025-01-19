
let dollars: number = 10
//conversion of dollars to chinese yuan
let conversion: number = 6.75

function converted (a: number, b: number) : String {
    let yuan: number = a*b;
    const str: string = yuan.toFixed(2).toString() + " Chinese Yuan";
    return str;
      
}

console.log(converted(dollars,conversion));