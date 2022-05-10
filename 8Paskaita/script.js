const salaryCheckerForm = document.querySelector("form");

salaryCheckerForm.addEventListener("submit", handlSalaryCheckerForm);

function handlSalaryCheckerForm(event) {
    event.preventDefault();

    const field = document.querySelector("select[name=workingField").value;
    const gender = document.querySelector("input[name=gender]:checked").value;
    const experience = document.querySelector("input[name=experience]").value;
    
    // Management - 48000, IT - 91000, construction - 66000, pharmacy - 128000
    // women gets 17% less then men
    // 0-2 year min 50%, 2-5 year, +5 year plus 50%

    if(field === 'management') {
        const genderSalary = calculateGenderSalary(gender, 48000)
        const finalSalary = calculateExperienceSalary(experience, genderSalary);
        alert(`Average salary is $${finalSalary}`);
    } else if(field === 'it') {
        const genderSalary = calculateGenderSalary(gender, 91000)
        const finalSalary = calculateExperienceSalary(experience, genderSalary);
        alert(`Average salary is $${finalSalary}`);
    } else if(field === 'construction') {
        const genderSalary = calculateGenderSalary(gender, 66000)
        const finalSalary = calculateExperienceSalary(experience, genderSalary);
        alert(`Average salary is $${finalSalary}`);
    } else {
        const genderSalary = calculateGenderSalary(gender, 128000)
        const finalSalary = calculateExperienceSalary(experience, genderSalary);
        alert(`Average salary is $${finalSalary}`);
    }

}

function calculateGenderSalary(gender, salary) {
    if(gender === 'male'){
        return salary
    } else if(gender === 'female'){
        return salary * 0.83;
    } else{
        return salary * 0.91;
    }
}

function calculateExperienceSalary(experience, salary) {
    const flooredExperience = Math.floor(experience);

    if(flooredExperience >= 0 && flooredExperience <= 2){
        return salary * 0.5;
    } else if(flooredExperience >= 3 && flooredExperience <= 5){
        return salary;
    } else {
        return salary * 1.5;
    }
}