function passValidate(pass:string): boolean{
    let valid: boolean = true
    //creates an expression to show there is atleast 1 uppercase 
    const upperCase = new RegExp(/(?=.*[A-Z])/)
    //creates an expression to show there is atleast 1 lowercase
    const lowerCase = new RegExp(/(?=.*[a-z])/)
    //creates an expression to show there is atleast 1 number
    const numeric = new RegExp(/(?=.*[0-9])/)
    //Simple check before validating contents of password
    if (pass.length < 8){
        valid = false;
    }
    //validating the contents of the password
    else if (pass.match(upperCase) && pass.match(lowerCase) && pass.match(numeric)) {
        valid= true;
    }
    //to catch cases that are out of scop of the question
    else{
        valid= false;
    }

    return valid
}

console.log(passValidate("hellor"))