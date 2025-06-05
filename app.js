function validateForm() {
    const nameInput = document.getElementById("name");
    const commentsInput = document.getElementById("comments");
    const maleInput = document.getElementById("male");

    const name = nameInput.value.trim();
    const comments = commentsInput.value.trim();
    const genderMale = maleInput.checked;
    const genderFemale = document.getElementById("female").checked;

    if (name === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return false;
    }

    if (comments === "") {
        alert("Please enter your comments.");
        commentsInput.focus();
        return false;
    }

    if (!genderMale && !genderFemale) {
        alert("Please select your gender.");
        maleInput.focus();
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}