function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const birthdate = new Date(birthdateInput);
    const today = new Date();

    if(!birthdate.getTime() || birthdate > today ) {
        document.getElementById('result').innerText  = "Please enter a valid date.";
        return;
    }

    if (today.getDate() < birthdate.getDate()) {
        months--;
    }

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }


    if (months < 0) {
        years--;
        months += 12
    }

}