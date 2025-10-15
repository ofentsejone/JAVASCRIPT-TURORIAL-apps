//random pass generator

function generatePassword(length,includeLowerCase,includeNumbers,includeUpperCase,incluedSymbols){
 const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allowdChars="";
    let password="";
    
    allowdChars += includeLowerCase?lowercaseChars:"";
    allowdChars += includeUpperCase?uppercaseChars:"";
      allowdChars += includeNumbers?numberChars:"";
      allowdChars+=incluedSymbols?symbolChars:"";


     // console.log(allowdChars);
     if(length<=0){
        return `(password length must be at least 1)`;
     }
     if(allowdChars.length===0)
     {
        return `(AT leats one set opf chars need to eb selected)`;
     }
     for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowdChars.length);
        password += allowdChars[randomIndex]
     }
    return password;

}
const passwordLength=12;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const incluedSymbols=true;
const password=generatePassword(passwordLength,
                                    includeLowerCase
                                    ,includeNumbers
                                    ,includeUpperCase
                                    ,incluedSymbols);
console.log(`Generated Password is ${password}`)
