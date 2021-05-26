const submit = document.getElementById("submit");


submit.addEventListener("click",function formAlert(){
    const firstName = document.getElementById("fName");
    const lastName = document.getElementById("lName");
    const age = document.getElementById("age")
    const gender = document.getElementsByClassName("gender");
    const location = document.getElementById("travel-location");

    const diet = [];



    if (document.getElementById("vegan").checked === true) {
        diet.push(document.getElementById("vegan").value);
    }
    else if (document.getElementById("gluten").checked === true) {
        diet.push(document.getElementById("gluten").value);
    }
    else if (document.getElementById("paleo").checked === true) {
        diet.push(document.getElementById("paleo").value);
    }
    
    alert("First Name: " + firstName.value + "\nLast Name: " + lastName.value + "\nAge: " + age.value + "\nGender: " + gender.value + "\nTravel Location: " + location.value + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..")
})

// gender not working
