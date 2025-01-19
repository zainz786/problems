function passValidate(pass:string): boolean{
    let valid: boolean = true
    const upperCase = new RegExp(/(?=.*[A-Z])/g)
    const lowerCase = new RegExp(/(?=.*[a-z])/g)
    const numeric = new RegExp(/(?=.*[0-9])/g)
    //Simple check before validating contents of password
    if (pass.length < 8){
        valid = false;
    }
    else if (pass.match(upperCase) && pass.match(lowerCase) && pass.match(numeric)) {
        valid= true;
    }
    else{
        valid= false;
    }

    return valid
}

console.log(passValidate("hello"))