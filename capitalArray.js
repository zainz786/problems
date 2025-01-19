function isAllCaps(array) {
    return array.every(item => typeof item === "string" && item === item.toUpperCase());
  }
console.log(isAllCaps(["c" , "C" , "hello I AM DONALD" , "HELLO I AM DONALD" , "ACSKLDFJSgSKLDFJSKLDFJ" , "ACSKLDFJSGSKLDFJSKLDFJ"]));  