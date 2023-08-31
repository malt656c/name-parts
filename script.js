/* definitioner */
const formInput = document.querySelector("input");
const fornavnOutput = document.querySelector("output[name='fornavn']");
const mellemnavnOutput = document.querySelector("output[name='mellemnavn']");
const efternavnOutput = document.querySelector("output[name='efternavn']");

function splitName(){
    let fullNameArr = formInput.value.split(" ");
    let firstName = fullNameArr[0];
    let middleName = fullNameArr.slice(1, fullNameArr.length - 1).join(" ");
    let lastName = fullNameArr[fullNameArr.length-1];
    
    fornavnOutput.textContent= firstName;
    mellemnavnOutput.textContent = middleName;
    efternavnOutput.textContent=lastName;
}
