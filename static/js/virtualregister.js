// TEAM CAPTAIN INFO
function teamNameFunction() {
    var x = document.getElementById("teamName").value;
    document.getElementById("cap_name_question").innerHTML = "Who is the Team Captain of " + x + "?";
    document.getElementById("name_question_1").innerHTML = "Who is the next Team Member of " + x + "?";
    document.getElementById("name_question_2").innerHTML = "Who is the next Team Member of " + x + "?";
    document.getElementById("name_question_3").innerHTML = "Who is the next Team Member of " + x + "?";
}

function capNameFunction() {
    var y = document.getElementById("capName").value;
    document.getElementById("cap_email_question").innerHTML = "What is " + y + "'s email address?";
    document.getElementById("cap_parent_email_question").innerHTML = "What is " + y + "'s parent's email address?";
    document.getElementById("cap_grade_question").innerHTML = "What grade is " + y + " in?";
    document.getElementById("cap_gender_question").innerHTML = "What is " + y + "'s gender?";
    document.getElementById("cap_school_question").innerHTML = "What school does " + y + " go to?"
}

function capSchoolFunction() {
    var z = document.getElementById("capSchool").value;
    document.getElementById("cap_school_us_question").innerHTML = "Is " + z + " located in the US?";
    document.getElementById("cap_school_state_question").innerHTML = "Which state is " + z + " located in?";
    document.getElementById("cap_school_country_question").innerHTML = "Which country is " + z + " located in?";
}

// TEAM MEMBER 1 INFO

function oneNameFunction() {
    var b = document.getElementById("Name1").value;
    document.getElementById("email_question_1").innerHTML = "What is " + b + "'s email address?";
    document.getElementById("parent_email_question_1").innerHTML = "What is " + b + "'s parent's email address?";
    document.getElementById("grade_question_1").innerHTML = "What grade is " + b + " in?";
    document.getElementById("gender_question_1").innerHTML = "What is " + b + "'s gender?";
    document.getElementById("school_question_1").innerHTML = "What school does " + b + " go to?"
}

function oneSchoolFunction() {
    var c = document.getElementById("School1").value;
    document.getElementById("school_us_question_1").innerHTML = "Is " + c + " located in the US?";
    document.getElementById("school_state_question_1").innerHTML = "Which state is " + c + " located in?";
    document.getElementById("school_country_question_1").innerHTML = "Which country is " + c + " located in?";
}

// TEAM MEMBER 2 INFO

function twoNameFunction() {
    var e = document.getElementById("Name2").value;
    document.getElementById("email_question_2").innerHTML = "What is " + e + "'s email address?";
    document.getElementById("parent_email_question_2").innerHTML = "What is " + e + "'s parent's email address?";
    document.getElementById("grade_question_2").innerHTML = "What grade is " + e + " in?";
    document.getElementById("gender_question_2").innerHTML = "What is " + e + "'s gender?";
    document.getElementById("school_question_2").innerHTML = "What school does " + e + " go to?"
}

function twoSchoolFunction() {
    var f = document.getElementById("School2").value;
    document.getElementById("school_us_question_2").innerHTML = "Is " + f + " located in the US?";
    document.getElementById("school_state_question_2").innerHTML = "Which state is " + f + " located in?";
    document.getElementById("school_country_question_2").innerHTML = "Which country is " + f + " located in?";
}

// TEAM MEMBER 3 INFO

function threeNameFunction() {
    var h = document.getElementById("Name3").value;
    document.getElementById("email_question_3").innerHTML = "What is " + h + "'s email address?";
    document.getElementById("parent_email_question_3").innerHTML = "What is " + h + "'s parent's email address?";
    document.getElementById("grade_question_3").innerHTML = "What grade is " + h + " in?";
    document.getElementById("gender_question_3").innerHTML = "What is " + h + "'s gender?";
    document.getElementById("school_question_3").innerHTML = "What school does " + h + " go to?"
}

function threeSchoolFunction() {
    var i = document.getElementById("School3").value;
    document.getElementById("school_us_question_3").innerHTML = "Is " + i + " located in the US?";
    document.getElementById("school_state_question_3").innerHTML = "Which state is " + i + " located in?";
    document.getElementById("school_country_question_3").innerHTML = "Which country is " + i + " located in?";
}

// Next/Previous Button Things
const steps = Array.from(document.querySelectorAll ('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');
const form = document.querySelectorAll('form');

nextBtn.forEach(button=>{
    button.addEventListener('click', () => {
        changeStep('next');
    })
})

prevBtn.forEach(button => {
    button.addEventListener('click', () => {
        changeStep('prev');
    })
})

function changeStep(btn){
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    if(btn === 'next'){
        index ++;
    }
    else if(btn === 'prev'){
        index --;
    }
    steps[index].classList.add('active')
}


// Hidden Question (jQuery Based)
$(document).ready(function () {
    $("#caphiddenQuestion").hide();
    var input = document.getElementById('school-div');
    document.getElementById('capSchoolUS_yes').addEventListener('click', function () {
        showQuestion();
    });
    document.getElementById('capSchoolUS_no').addEventListener('click', function () {
        hideQuestion();
    });

    function showQuestion(){
        $("#caphiddenQuestion").show();
    }

    function hideQuestion(){
        $("#caphiddenQuestion").hide();
    }
});

$(document).ready(function () {
    $("#hidden-question-1").hide();
    var input = document.getElementById('school-div');
    document.getElementById('SchoolUS1_yes').addEventListener('click', function () {
        showQuestion1();
    });
    document.getElementById('SchoolUS1_no').addEventListener('click', function () {
        hideQuestion1();
    });

    function showQuestion1(){
        $("#hidden-question-1").show();
    }

    function hideQuestion1(){
        $("#hidden-question-1").hide();
    }
});

$(document).ready(function () {
    $("#hidden-question-2").hide();
    var input = document.getElementById('school-div');
    document.getElementById('SchoolUS2_yes').addEventListener('click', function () {
        showQuestion2();
    });
    document.getElementById('SchoolUS2_no').addEventListener('click', function () {
        hideQuestion2();
    });

    function showQuestion2(){
        $("#hidden-question-2").show();
    }

    function hideQuestion2(){
        $("#hidden-question-2").hide();
    }
});

$(document).ready(function () {
    $("#hidden-question-3").hide();
    var input = document.getElementById('school-div');
    document.getElementById('SchoolUS3_yes').addEventListener('click', function () {
        showQuestion3();
    });
    document.getElementById('SchoolUS3_no').addEventListener('click', function () {
        hideQuestion3();
    });

    function showQuestion3(){
        $("#hidden-question-3").show();
    }

    function hideQuestion3(){
        $("#hidden-question-3").hide();
    }
});

$(document).ready(function () {
    $("#capCountryHiddenQuestion").hide();
    var input = document.getElementById('school-div');
    document.getElementById('capSchoolUS_yes').addEventListener('click', function () {
        hideQuestion();
    });
    document.getElementById('capSchoolUS_no').addEventListener('click', function () {
        showQuestion();
    });

    function showQuestion(){
        $("#capCountryHiddenQuestion").show();
    }

    function hideQuestion(){
        $("#capCountryHiddenQuestion").hide();
    }
});

$(document).ready(function () {
    $("#country_hidden_question_1").hide();
    var input = document.getElementById('school-div');
    document.getElementById('SchoolUS1_yes').addEventListener('click', function () {
        hideQuestion();
    });
    document.getElementById('SchoolUS1_no').addEventListener('click', function () {
        showQuestion();
    });

    function showQuestion(){
        $("#country_hidden_question_1").show();
    }

    function hideQuestion(){
        $("#country_hidden_question_1").hide();
    }
});

$(document).ready(function () {
    $("#country_hidden_question_2").hide();
    var input = document.getElementById('school-div');
    document.getElementById('SchoolUS2_yes').addEventListener('click', function () {
        hideQuestion();
    });
    document.getElementById('SchoolUS2_no').addEventListener('click', function () {
        showQuestion();
    });

    function showQuestion(){
        $("#country_hidden_question_2").show();
    }

    function hideQuestion(){
        $("#country_hidden_question_2").hide();
    }
});

$(document).ready(function () {
    $("#country_hidden_question_3").hide();
    var input = document.getElementById('school-div');
    document.getElementById('SchoolUS3_yes').addEventListener('click', function () {
        hideQuestion();
    });
    document.getElementById('SchoolUS3_no').addEventListener('click', function () {
        showQuestion();
    });

    function showQuestion(){
        $("#country_hidden_question_3").show();
    }

    function hideQuestion(){
        $("#country_hidden_question_3").hide();
    }
});

// Back-end Shenanigans
let team_member_count = 1;

document.querySelectorAll('.new-teammate').forEach(button => {
    button.addEventListener('click', () => {
        team_member_count++;
        if (team_member_count > 4) {
            team_member_count = 4;
        }
        document.getElementById("team_member_count").value = team_member_count;
    })
})

document.querySelectorAll('.remove-teammate').forEach(button => {
    button.addEventListener('click', () => {
        team_member_count--;
        if (team_member_count < 1) {
            team_member_count = 1;
        }
        document.getElementById("team_member_count").value = team_member_count;
    })
})


// Next Button Disabling
const nextButtonOne = document.getElementById("next-btn-1");
document.getElementById("teamName").addEventListener("input", inputOneValidationFunction);

function inputOneValidationFunction() {
    var teamNameInput = document.getElementById("teamName").value;
    if (teamNameInput === "") {
        nextButtonOne.disabled = true;
    }

    else {
        nextButtonOne.disabled = false;
    }
}

const nextButtonTwo = document.getElementById("next-btn-2");
document.getElementById("capName").addEventListener("input", inputTwoValidationFunction);

function inputTwoValidationFunction() {
    var capNameInput = document.getElementById("capName").value;
    if (capNameInput === "") {
        nextButtonTwo.disabled = true;
    }

    else {
        nextButtonTwo.disabled = false;
    }
}

const nextButtonThree = document.getElementById("next-btn-3");
document.getElementById("cap_email").addEventListener("input", inputThreeValidationFunction);
document.getElementById("capParentEmail").addEventListener("input", inputThreeValidationFunction);
document.getElementById("capGrade").addEventListener("input", inputThreeValidationFunction);

function inputThreeValidationFunction() {
    var capEmail = document.getElementById("cap_email").value;
    var capParentEmail = document.getElementById("capParentEmail").value;
    var capGrade = document.getElementById("capGrade").value;

    console.log(capEmail);
    console.log(capParentEmail);
    console.log(capGrade);
    if (capEmail === "") {
        nextButtonThree.disabled = true;
    }

    else if (capParentEmail === "") {
        nextButtonThree.disabled = true;
    }

    else if (capGrade === "") {
        nextButtonThree.disabled = true;
    }

    else {
        nextButtonThree.disabled = false;
    }
}

const nextButtonFour = document.getElementById("next-btn-4");
document.getElementById("capGender_male").addEventListener("click", inputFourValidationFunction);
document.getElementById("capGender_female").addEventListener("click", inputFourValidationFunction);
document.getElementById("capGender_other").addEventListener("click", inputFourValidationFunction);
document.getElementById("capSchool").addEventListener("input", inputFourValidationFunction);

function inputFourValidationFunction() {
    var capGenderMale = document.getElementById("capGender_male");
    var capGenderFemale = document.getElementById("capGender_female");
    var capGenderOther = document.getElementById("capGender_other");
    var capSchool = document.getElementById("capSchool").value;

    if (capSchool === "") {
        nextButtonFour.disabled = true
    }

    else if (capGenderMale.checked) {
        nextButtonFour.disabled = false;
    }

    else if (capGenderFemale.checked) {
        nextButtonFour.disabled = false;
    }

    else if (capGenderOther.checked) {
        nextButtonFour.disabled = false;
    }

    else {
        nextButtonFour.disabled = true;
    }
}

const nextButtonFive = document.getElementById("next-btn-5");
document.getElementById("capSchoolUS_yes").addEventListener("click", inputFiveValidationFunction);
document.getElementById("capSchoolUS_no").addEventListener("click", inputFiveValidationFunction);

function inputFiveValidationFunction() {
    var capSchoolUsYes = document.getElementById("capSchoolUS_yes");
    var capSchoolUsNo = document.getElementById("capSchoolUS_no");

    if (capSchoolUsYes.checked){
        nextButtonFive.disabled = false;
    }

    else if (capSchoolUsNo.checked) {
        nextButtonFive.disabled = false;
    }

    else {
        nextButtonFive.disabled = true;
    }
}

const nextButtonSix = document.getElementById("next-btn-6");
document.getElementById("Name1").addEventListener("input", inputSixValidationFunction);

function inputSixValidationFunction() {
    var NameOneInput = document.getElementById("Name1").value;
    if (NameOneInput === "") {
        nextButtonSix.disabled = true;
    }

    else {
        nextButtonSix.disabled = false;
    }
}

const nextButtonSeven = document.getElementById("next-btn-7");
document.getElementById("Email1").addEventListener("input", inputSevenValidationFunction);
document.getElementById("ParentEmail1").addEventListener("input", inputSevenValidationFunction);
document.getElementById("Grade1").addEventListener("input", inputSevenValidationFunction);

function inputSevenValidationFunction() {
    var EmailOne = document.getElementById("Email1").value;
    var ParentEmailOne = document.getElementById("ParentEmail1").value;
    var GradeOne = document.getElementById("Grade1").value;

    if (EmailOne === "") {
        nextButtonThree.disabled = true;
    }

    else if (ParentEmailOne === "") {
        nextButtonThree.disabled = true;
    }

    else if (GradeOne === "") {
        nextButtonThree.disabled = true;
    }

    else {
        nextButtonSeven.disabled = false;
    }
}

const nextButtonEight = document.getElementById("next-btn-8");
document.getElementById("Gender_1_male").addEventListener("click", inputEightValidationFunction);
document.getElementById("Gender_1_female").addEventListener("click", inputEightValidationFunction);
document.getElementById("Gender_1_other").addEventListener("click", inputEightValidationFunction);
document.getElementById("School1").addEventListener("input", inputEightValidationFunction);


function inputEightValidationFunction() {
    var GenderOneMale = document.getElementById("Gender_1_male");
    var GenderOneFemale = document.getElementById("Gender_1_female");
    var GenderOneOther = document.getElementById("Gender_1_other");
    var SchoolOne = document.getElementById("School1").value;

    if (SchoolOne === "") {
        nextButtonEight.disabled = true
    }

    else if (GenderOneMale.checked) {
        nextButtonEight.disabled = false;
    }

    else if (GenderOneFemale.checked) {
        nextButtonEight.disabled = false;
    }

    else if (GenderOneOther.checked) {
        nextButtonEight.disabled = false;
    }

    

    else {
        nextButtonEight.disabled = true;
    }
}

const nextButtonNine = document.getElementById("next-btn-9");
document.getElementById("SchoolUS1_yes").addEventListener("click", inputNineValidationFunction);
document.getElementById("SchoolUS1_no").addEventListener("click", inputNineValidationFunction);

function inputNineValidationFunction() {
    var SchoolOneUsYes = document.getElementById("SchoolUS1_yes");
    var SchoolOneUsNo = document.getElementById("SchoolUS1_no");

    if (SchoolOneUsYes.checked){
        nextButtonNine.disabled = false;
    }

    else if (SchoolOneUsNo.checked) {
        nextButtonNine.disabled = false;
    }

    else {
        nextButtonNine.disabled = true;
    }
}

const nextButtonTen = document.getElementById("next-btn-10");
document.getElementById("Name2").addEventListener("input", inputTenValidationFunction);

function inputTenValidationFunction() {
    var NameTwoInput = document.getElementById("Name2").value;
    if (NameTwoInput === "") {
        nextButtonTen.disabled = true;
    }

    else {
        nextButtonTen.disabled = false;
    }
}

const nextButtonEleven = document.getElementById("next-btn-11");
document.getElementById("Email2").addEventListener("input", inputElevenValidationFunction);
document.getElementById("ParentEmail2").addEventListener("input", inputElevenValidationFunction);
document.getElementById("Grade2").addEventListener("input", inputElevenValidationFunction);

function inputElevenValidationFunction() {
    var EmailTwo = document.getElementById("Email2").value;
    var ParentEmailTwo = document.getElementById("ParentEmail2").value;
    var GradeTwo = document.getElementById("Grade2").value;

    if (EmailTwo === "") {
        nextButtonEleven.disabled = true;
    }

    else if (ParentEmailTwo === "") {
        nextButtonEleven.disabled = true;
    }

    else if (GradeTwo === "") {
        nextButtonEleven.disabled = true;
    }

    else {
        nextButtonEleven.disabled = false;
    }
}

const nextButtonTwelve = document.getElementById("next-btn-12");
document.getElementById("Gender_2_male").addEventListener("click", inputTwelveValidationFunction);
document.getElementById("Gender_2_female").addEventListener("click", inputTwelveValidationFunction);
document.getElementById("Gender_2_other").addEventListener("click", inputTwelveValidationFunction);
document.getElementById("School2").addEventListener("input", inputTwelveValidationFunction);

function inputTwelveValidationFunction() {
    var GenderTwoMale = document.getElementById("Gender_2_male");
    var GenderTwoFemale = document.getElementById("Gender_2_female");
    var GenderTwoOther = document.getElementById("Gender_2_other");
    var SchoolTwo = document.getElementById("School2").value;

    if (SchoolTwo === "") {
        nextButtonTwelve.disabled = true
    }
    
    else if (GenderTwoMale.checked) {
        nextButtonTwelve.disabled = false;
    }

    else if (GenderTwoFemale.checked) {
        nextButtonTwelve.disabled = false;
    }

    else if (GenderTwoOther.checked) {
        nextButtonTwelve.disabled = false;
    }

    else {
        nextButtonTwelve.disabled = true;
    }
}

const nextButtonThirteen = document.getElementById("next-btn-13");
document.getElementById("SchoolUS2_yes").addEventListener("click", inputThirteenValidationFunction);
document.getElementById("SchoolUS2_no").addEventListener("click", inputThirteenValidationFunction);

function inputThirteenValidationFunction() {
    var SchoolTwoUsYes = document.getElementById("SchoolUS2_yes");
    var SchoolTwoUsNo = document.getElementById("SchoolUS2_no");

    if (SchoolTwoUsYes.checked){
        nextButtonThirteen.disabled = false;
    }

    else if (SchoolTwoUsNo.checked) {
        nextButtonThirteen.disabled = false;
    }

    else {
        nextButtonThirteen.disabled = true;
    }
}

const nextButtonFourteen = document.getElementById("next-btn-14");
document.getElementById("Name3").addEventListener("input", inputFourteenValidationFunction);

function inputFourteenValidationFunction() {
    var NameThreeInput = document.getElementById("Name3").value;
    if (NameThreeInput === "") {
        nextButtonFourteen.disabled = true;
    }

    else {
        nextButtonFourteen.disabled = false;
    }
}

const nextButtonFifteen = document.getElementById("next-btn-15");
document.getElementById("Email3").addEventListener("input", inputFifteenValidationFunction);
document.getElementById("ParentEmail3").addEventListener("input", inputFifteenValidationFunction);
document.getElementById("Grade3").addEventListener("input", inputFifteenValidationFunction);

function inputFifteenValidationFunction() {
    var EmailThree = document.getElementById("Email3").value;
    var ParentEmailThree = document.getElementById("ParentEmail3").value;
    var GradeThree = document.getElementById("Grade3").value;

    if (EmailThree === "") {
        nextButtonFifteen.disabled = true;
    }

    else if (ParentEmailThree === "") {
        nextButtonFifteen.disabled = true;
    }

    else if (GradeThree === "") {
        nextButtonFifteen.disabled = true;
    }

    else {
        nextButtonFifteen.disabled = false;
    }
}

const nextButtonSixteen = document.getElementById("next-btn-16");
document.getElementById("Gender_3_male").addEventListener("click", inputSixteenValidationFunction);
document.getElementById("Gender_3_female").addEventListener("click", inputSixteenValidationFunction);
document.getElementById("Gender_3_other").addEventListener("click", inputSixteenValidationFunction);
document.getElementById("School3").addEventListener("input", inputSixteenValidationFunction);

function inputSixteenValidationFunction() {
    var GenderThreeMale = document.getElementById("Gender_3_male");
    var GenderThreeFemale = document.getElementById("Gender_3_female");
    var GenderThreeOther = document.getElementById("Gender_3_other");
    var SchoolThree = document.getElementById("School3").value;


    if (SchoolThree === "") {
        nextButtonSixteen.disabled = true
    }

    else if (GenderThreeMale.checked) {
        nextButtonSixteen.disabled = false;
    }

    else if (GenderThreeFemale.checked) {
        nextButtonSixteen.disabled = false;
    }

    else if (GenderThreeOther.checked) {
        nextButtonSixteen.disabled = false;
    }

   

    else {
       nextButtonSixteen.disabled = true;
    }
}

// Register Button Disabling
const submitButtonOne = document.getElementById("submit-btn-1");
document.getElementById("capSchoolUS_yes").addEventListener("click", submitOneValidationFunction);
document.getElementById("capSchoolUS_no").addEventListener("click", submitOneValidationFunction);

function submitOneValidationFunction() {
    var capSchoolUsYes = document.getElementById("capSchoolUS_yes");
    var capSchoolUsNo = document.getElementById("capSchoolUS_no");

    if (capSchoolUsYes.checked){
        submitButtonOne.disabled = false;
    }

    else if (capSchoolUsNo.checked) {
        submitButtonOne.disabled = false;
    }

    else {
        submitButtonOne.disabled = true;
    }
}

const submitButtonTwo = document.getElementById("submit-btn-2");
document.getElementById("SchoolUS1_yes").addEventListener("click", submitTwoValidationFunction);
document.getElementById("SchoolUS1_no").addEventListener("click", submitTwoValidationFunction);

function submitTwoValidationFunction() {
    var SchoolUsOneYes = document.getElementById("SchoolUS1_yes");
    var SchoolUsOneNo = document.getElementById("SchoolUS1_no");

    if (SchoolUsOneYes.checked){
        submitButtonTwo.disabled = false;
    }

    else if (SchoolUsOneNo.checked) {
        submitButtonTwo.disabled = false;
    }

    else {
        submitButtonTwo.disabled = true;
    }
}

const submitButtonThree = document.getElementById("submit-btn-3");
document.getElementById("SchoolUS2_yes").addEventListener("click", submitThreeValidationFunction);
document.getElementById("SchoolUS2_no").addEventListener("click", submitThreeValidationFunction);

function submitThreeValidationFunction() {
    var SchoolUsTwoYes = document.getElementById("SchoolUS2_yes");
    var SchoolUsTwoNo = document.getElementById("SchoolUS2_no");

    if (SchoolUsTwoYes.checked){
        submitButtonThree.disabled = false;
    }

    else if (SchoolUsTwoNo.checked) {
        submitButtonThree.disabled = false;
    }

    else {
        submitButtonThree.disabled = true;
    }
}

const submitButtonFour = document.getElementById("submit-btn-4");
document.getElementById("SchoolUS3_yes").addEventListener("click", submitFourValidationFunction);
document.getElementById("SchoolUS3_no").addEventListener("click", submitFourValidationFunction);

function submitFourValidationFunction() {
    var SchoolUsThreeYes = document.getElementById("SchoolUS3_yes");
    var SchoolUsThreeNo = document.getElementById("SchoolUS3_no");

    if (SchoolUsThreeYes.checked){
        submitButtonFour.disabled = false;
    }

    else if (SchoolUsThreeNo.checked) {
        submitButtonFour.disabled = false;
    }

    else {
        submitButtonFour.disabled = true;
    }
}