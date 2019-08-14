var akanArray = [
    {
        Sunday:"Kwasi",
        Monday:"Kwadwo",
        Tuesday:"Kwabena",
        Wednesday:"Kwaku",
        Thurday:"Yaw",
        Friday:"Kofi",
        Saturday:"Kwame"
    }, 
    {
        Sunday:"Akosua",
        Sunday:"Adwoa",
        Monday:"Abenaa",
        Tuesday:"Kwabena",
        Wednesday:"Akua",
        Thurday:"Yaa",
        Friday:"Afua",
        Saturday:"Ama"
    }
]

//get user date input
function getUserDetails(){
    var date = document.getElementById("dob").value;
    var gender = document.getElementsByName("gender");

    for(i = 0; i < gender.length; i++) { 
        if(gender[i].checked) 
        var myGenderValue = gender[i].value; 
    } 
    // alert(myGenderValue +" "+date);

}


//verify the date the user entered
function verifyUserBirthday(){

}
//finds the akan name that matches the day and gender
function findUserAkanName(){

    return akanName;
}
//prints user akan name to the DOM
function printUserAkanName(akanName){

}  
//clears the user input form 
function clearInput(){

}