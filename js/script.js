//test out script on web-page
	console.log("Information has been annotated on Page")

//setup values to modify 
	var firstName, lastName, emailAddress, phoneNumber, confirmNote;

//Modify function
	function signUpForm() {
    event.preventDefault();

//get values from the form
    firstName = document.custSignUpForm.fName.value;
    lastName = document.custSignUpForm.lName.value;
    emailAddress = document.custSignUpForm.email.value;
    phoneNumber = document.custSignUpForm.phone.value;
    confirmNote = "Thank You" + firstName + " ,You're On our Mailing List!";

    //info from logged
    console.log(confirmNote);
    console.log(firstName);
    console.log(lastName);
    console.log(emailAddress);
    console.log(phoneNumber);
    console.log("form submitted");

    //Render confirmation 
    var confirmInfo = document.getElementById("confirmNote");
    confirmInfo.innerHTML = confirmNote;
    var fullName = document.getElementById("infoLine1");
    fullName.innerHTML = "Full name: " + firstName + " " + lastName;
    var customerPhone = document.getElementById("infoLine2");
    customerPhone.innerHTML = "Phone number: " + phoneNumber;
    var customerEmail = document.getElementById("infoLine3");
    customerEmail.innerHTML = "Email address: " + emailAddress;
    var modifySection = document.getElementById("modify");
    modifySection.style.display = "block";
    document.getElementById("emailForm").reset();
};


