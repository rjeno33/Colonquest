/// ==============
//  Profiles
///===============

const defaultProfile = {

    name: "SouthYorkshire Bowel Cancer Screening",

    hospitalSites: [
            "Northern General Hospital",
            "Royal Hallamshire Hospital",
            "Doncaster Royal Infirmary",
             "Barnsley Hospital",
             "Rotherham Hospital"
           ],


    regimens: {

                       am: {

                              fixedPrepTimes: false,
                              dietStartDays: 5,
                              sennaStartDays: 5,
                              fastingTime: "15:00",

                               medications: [

                                {
                                  id: "iron",
                                  name: "iron tablets (if prescribed)",
                                  stopDays: 7
                                 }

                                 ],
                                 waterTasks: true,
                                  waterStartDays: 5,
                                 sennaTasks: true,
                                   waterAfterPrep: true,
                                fastingHoursBefore: 2,
                                 prepDoses: 2,
                                 firstDoseDay: 1,
                                  firstDoseTime: "19:00"

},

        pm: {
            fixedPrepTimes: false,
            dietStartDays: 5,
            sennaStartDays: 5,
            waterStartDays: 5,
            fastingTime: "15:00",
            medications: [
                        {
                         id: "iron",
                         name: "iron tablets (if prescribed)",
                         stopDays: 7
                         } 
                         ],
           
            waterTasks: true,
            sennaTasks: true,
            waterAfterPrep: true,
            fastingTime: "15:00",
            fastingHoursBefore: 2,
            prepDoses: 2,
            firstDoseDay: 1,
            firstDoseTime: "19:00"
        },

        evening: {
            fixedPrepTimes: false,
            sennaStartDays: 5,
            dietStartDays: 5,
           waterStartDays: 5,
           fastingTime: "15:00",
                        medications: [
                        {
                         id: "iron",
                         name: "iron tablets (if prescribed)",
                         stopDays: 7
                         } 
                         ],
            waterTasks: true,
            sennaTasks: true,
            waterAfterPrep: true,
            fastingTime: "21:00",
            fastingHoursBefore: 2,
            prepDoses: 2,
            firstDoseDay: 0,
            firstDoseTime: "07:00"
        }

    }

};

//========================
// SHEFFIELD PROFILE ///
//========================

const sheffieldProfile = {

    name: "Sheffield",

    hospitalSites: ["Northern General Hospital",
            "Royal Hallamshire Hospital"
           ],

    regimens: {

        am: {

            fixedPrepTimes: true,

            dietStartDays: 2,

                        medications: [
                        {
                         id: "iron",
                         name: "iron tablets (if prescribed)",
                         stopDays: 7
                         } 
                         ],

            waterTasks: false,

            sennaTasks: false,

            waterAfterPrep: true,

            fastingTime: "15:00",

            prepSchedule: [

                {
                    dayBefore: 1,
                    time: "18:00",
                    text: "Mix and drink your first dose of Plenvu"
                },

                {
                    dayBefore: 0,
                    time: "04:00",
                    text: "Mix and drink your second dose of Plenvu"
                }

            ]

        },

        pm: {

            fixedPrepTimes: true,

            dietStartDays: 2,

                        medications: [
                        {
                         id: "iron",
                         name: "iron tablets (if prescribed)",
                         stopDays: 7
                         } 
                         ],

            waterTasks: false,

            sennaTasks: false,

            waterAfterPrep: true,

            fastingTime: "09:00",

            prepSchedule: [

                {
                    dayBefore: 1,
                    time: "21:00",
                    text: "Mix and drink your first dose of Plenvu"
                },

                {
                    dayBefore: 0,
                    time: "07:00",
                    text: "Mix and drink your second dose of Plenvu"
                }

            ]

        },

        evening: {

            fixedPrepTimes: true,

            dietStartDays: 2,

                        medications: [
                        {
                         id: "iron",
                         name: "iron tablets (if prescribed)",
                         stopDays: 7
                         } 
                         ],

            waterTasks: false,

            sennaTasks: false,

            waterAfterPrep: true,

            fastingTime: "21:00",

            prepSchedule: [

                {
                    dayBefore: 0,
                    time: "09:00",
                    text: "Mix and drink your first dose of Plenvu"
                },

                {
                    dayBefore: 0,
                    time: "13:00",
                    text: "Mix and drink your second dose of Plenvu"
                }

            ]

        }

    }

};


/// Chesterfield Profile ///

const chesterfieldProfile = {

    name: "Chesterfield",

    hospitalSites: [
    "Chesterfield Royal Hospital"
],

    regimens: {

        am: {

            fixedPrepTimes: true,

            dietStartDays: 3,

                        medications: [
                        {
                         id: "iron",
                         name: "iron tablets (if prescribed)",
                         stopDays: 7
                         },
                         {
                          id: "nsaid",
                          name: "NSAID medication",
                          stopDays: 1
                          } 
                         ],

            waterTasks: false,

            sennaTasks: false,

            waterAfterPrep: true,

            fastingTime: "15:00",

            prepSchedule: [

                {
                    dayBefore: 1,
                    time: "18:00",
                    text: "Mix and drink your first dose of Plenvu"
                },

                {
                    dayBefore: 0,
                    time: "04:00",
                    text: "Mix and drink your second dose of Plenvu"
                }

            ]

        },

        pm: {

            fixedPrepTimes: true,

            dietStartDays: 3,

                        medications: [
                        {
                         id: "iron",
                         name: "iron tablets (if prescribed)",
                         stopDays: 7
                         },
                         {
                          id: "nsaid",
                          name: "NSAID medication",
                          stopDays: 1
                          }  
                         ],

            waterTasks: false,

            sennaTasks: false,

            waterAfterPrep: true,

            fastingTime: "09:00",

            prepSchedule: [

                {
                    dayBefore: 1,
                    time: "21:00",
                    text: "Mix and drink your first dose of Plenvu"
                },

                {
                    dayBefore: 0,
                    time: "07:00",
                    text: "Mix and drink your second dose of Plenvu"
                }

            ]

        },

        evening: {

            fixedPrepTimes: true,

            dietStartDays: 3,

                        medications: [
                        {
                         id: "iron",
                         name: "iron tablets (if prescribed)",
                         stopDays: 7
                         },
                         {
                          id: "nsaid",
                          name: "NSAID medication",
                          stopDays: 1
                          }  
                         ],

            waterTasks: false,

            sennaTasks: false,

            waterAfterPrep: true,

            fastingTime: "21:00",

            prepSchedule: [

                {
                    dayBefore: 0,
                    time: "09:00",
                    text: "Mix and drink your first dose of Plenvu"
                },

                {
                    dayBefore: 0,
                    time: "13:00",
                    text: "Mix and drink your second dose of Plenvu"
                }

            ]

        }

    }

};


let activeProfile = sheffieldProfile;

// =========================
// Variables
// =========================

const siteSelect = document.getElementById("siteSelect");

let perfectTenUnlocked = false;
let championUnlocked = false;
let score = 0;
let completedTasks = 0;
let waterUnlocked = false;
let sennaUnlocked = false;
let dietUnlocked = false;
let prepUnlocked = false;
let fastUnlocked = false;
let explorerUnlocked = false;
let faqExplorerUnlocked = false;


let colonCadetUnlocked = false;
let bowelBaronUnlocked = false;
let prepPaladinUnlocked = false;
let grandPoobahUnlocked = false;

let dietGuideViewed = false;
let colonoscopyVideoViewed = false;

let rating = 0;

let faqQuestionsViewed = 0;
let totalFAQQuestions = 0;

const achievementPopup = document.getElementById("achievementPopup");
const achievementTitle = document.getElementById("achievementTitle");
const achievementText = document.getElementById("achievementText");
const achievementIcon = document.getElementById("achievementIcon");
const scoreDisplay = document.getElementById("score");
const createPlanButton = document.getElementById("createPlanButton");
const appointmentDate = document.getElementById("appointmentDate");
const clearDateButton = document.getElementById("clearDateButton");
const plan = document.getElementById("plan");
const progressFill = document.getElementById("progressFill");
const faqHeader = document.getElementById("faqHeader");
const faqContent = document.getElementById("faqContent");
const faqArrow = document.getElementById("faqArrow");
const ratingText = document.getElementById("ratingText");

const achievementHeader =
document.getElementById("achievementHeader");

const achievementCabinet =
document.getElementById("achievementCabinet");

const achievementArrow =
document.getElementById("achievementArrow");

const achievementCount =
document.getElementById("achievementCount");

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function(){

    document.getElementById("welcomeScreen")
        .style.display = "none";

    document.getElementById("mainApp")
        .style.display = "block";

    localStorage.setItem("welcomeSeen","true");

});

let maxPossibleScore = 0;

const taskProgress = {
    water: 0,
    senna: 0,
    diet: 0,
    prep: 0,
    fast: 0,
    medication: 0,
    end: 0
};
const taskTotals = {
    water: 0,
    senna: 0,
    diet: 0,
    prep: 0,
    fast: 0,
    medication: 0,
    end: 0
};




// =========================
// Functions
// =========================



/// Populate Sites ///

function populateSites() {

    siteSelect.innerHTML = "";

    activeProfile.hospitalSites.forEach(function(site) {

        const option = document.createElement("option");

        option.value = site;
        option.textContent = site;

        siteSelect.appendChild(option);

    });

    const savedSite = localStorage.getItem("site");

    if (
        savedSite &&
        activeProfile.hospitalSites.includes(savedSite)
    ) {

        siteSelect.value = savedSite;

    }

}


// Diet Guide //

function openDietGuide() {

    dietGuideViewed = true;

    localStorage.setItem("dietGuideViewed", "true");

    checkAchievements();

    window.open(
        "https://publicdocuments.sth.nhs.uk/pil5472%20(1).pdf",
        "_blank"
    );

}

// Colon Video //

function openColonoscopyVideo() {

    colonoscopyVideoViewed = true;

    localStorage.setItem("colonoscopyVideoViewed", "true");

    checkAchievements();

    window.open(
        "https://www.youtube.com/watch?v=wK2imf6w8Pw",
        "_blank"
    );

}

// Text rating //

function updateRatingText(value){

    switch(value){

        case 1:
            ratingText.innerHTML ="<p> Needs Improvement</p>";
            break;

        case 2:
            ratingText.innerHTML = "Fair 🙂";
            break;

        case 3:
            ratingText.innerHTML = "Good 👍";
            break;

        case 4:
            ratingText.innerHTML = "Very Good 😄";
            break;

        case 5:
            ratingText.innerHTML = "Excellent! 🌟";
            break;

        default:
            ratingText.textContent = "Tap a star to rate the app";

    }

}

//Star Rating //

function initialiseStarRating() {

    const stars = document.querySelectorAll(".star");

    stars.forEach(function(star) {

        // Hover preview
        star.addEventListener("mouseenter", function() {

            const hoverValue = Number(star.dataset.value);
            updateRatingText(hoverValue);

            stars.forEach(function(s) {

                if (Number(s.dataset.value) <= hoverValue) {

                    s.innerHTML = "<i class='fa-solid fa-star'></i>";

                } else {

                    s.innerHTML = "<i class='fa-regular fa-star'></i>";

                }

            });

        });

        // Save rating
        star.addEventListener("click", function() {

            rating = Number(star.dataset.value);
            updateRatingText(rating);

        });

    });

    // Restore saved rating when leaving the star area
    document.getElementById("starRating")
        .addEventListener("mouseleave", function() {
            
            updateRatingText(rating);
            stars.forEach(function(s) {

                if (Number(s.dataset.value) <= rating) {

                    s.innerHTML = "<i class='fa-solid fa-star'></i>";

                } else {

                    s.innerHTML = "<i class='fa-regular fa-star'></i>";

                }

            });

        });

}

// Submit Feedback //

function submitFeedback() {

    const helpful =
        document.querySelector("input[name='helpful']:checked");

    const firstTime =
        document.querySelector("input[name='firstTime']:checked");

    const anxiety =
        document.querySelector("input[name='anxiety']:checked");

    const recommend =
        document.querySelector("input[name='recommend']:checked");

    fetch("https://script.google.com/macros/s/AKfycbyTeEy1a2m1AK0P5qxrLNLW1d6ZZ5QDyCP5lY8Aepb7PalY5DDQfe2AnPJ_htL-JRgWHA/exec", {

        method: "POST",

                            body: JSON.stringify({

    trust: activeProfile.name,

    site: document.getElementById("siteSelect").value,

    ageGroup: document.getElementById("ageGroup").value,

    gender: document.getElementById("gender").value,

    firstTime: firstTime ? firstTime.value : "",

    rating: rating,

    helpful: helpful ? helpful.value : "",

    anxiety: anxiety ? anxiety.value : "",

    recommend: recommend ? recommend.value : "",

    device: document.getElementById("device").value,

    comments: document.getElementById("comments").value


})
})

    .then(function() {

        document.getElementById("feedbackForm").innerHTML =

            "<h2>❤️ Thank You!</h2>" +

            "<p>Your feedback has been submitted.</p>";

    });

}

// Feedback Form //

function showFeedback(){

    document.getElementById("completion").style.display = "none";

    document.getElementById("feedbackForm").style.display = "block";

}

// Show Completion page //

function checkCompletion() {

    const totalTasks =
        document.querySelectorAll("input[type='checkbox']").length;

    if (completedTasks === totalTasks) {

        showCompletionPage();

    }

}

// Competion Page //

function showCompletionPage() {

    const completion = document.getElementById("completion");

    completion.innerHTML =

    "<h2><i class='fa-solid fa-trophy'></i> Congratulations!</h2>" +

    "<p>You have completed every preparation task.</p>" +

    "<p>Good luck with your procedure.</p>" +

    "<hr>" +

    "<h3>Remember to:</h3>" +

    "<p>✔ Bring your appointment letter</p>" +

    "<p>✔ Bring your medication list</p>" +

    "<p>✔ Arrange transport home if you're having sedation</p>" +

    "<p>✔ Arrive a little early</p>" +

    "<br>" +

    "<button id='feedbackButton'>Leave Feedback</button>";

    document
        .getElementById("feedbackButton")
        .addEventListener("click",showFeedback);

}


// Level Ups //

function checkLevelUps() {

if(maxPossibleScore === 0){
    return;
}

    const completion =
    (score / maxPossibleScore) * 100;


    if (completion >= 25 && !colonCadetUnlocked) {

        showAchievement(
            "Level Up!",
            "You are now a Colon Cadet. You've made a great start!",
            "<i class='fa-solid fa-angles-up'></i>"
        );

        colonCadetUnlocked = true;
    }


    if (completion >= 50 && !bowelBaronUnlocked) {

        showAchievement(
            "Level Up!",
            "You are now a Bowel Baron! Keep this consistency going!",
            "<i class='fa-solid fa-chess-rook'></i>"
        );

        bowelBaronUnlocked = true;
    }


    if (completion >= 75 && !prepPaladinUnlocked) {

        showAchievement(
            "Level Up!",
            "You are now a Prep Paladin! You are on your way to a successful colonoscopy!",
            "<i class='fa-solid fa-shield-halved'></i>"
        );

        prepPaladinUnlocked = true;
    }


    if (completion >= 100 && !grandPoobahUnlocked) {

        showAchievement(
            "Level Up!",
            "You are now the Grand Poobah of Prep! You are doing amazing!",
            "<i class='fa-solid fa-crown'></i>"
        );

        grandPoobahUnlocked = true;
    }

}
// Update level //

function updateLevel(){

    let level = "Prep Padawan";

if(maxPossibleScore === 0){
    return;
}


    const completion =
    (score / maxPossibleScore) * 100;


    if(completion >= 25){
        level = "Colon Cadet";
    }


    if(completion >= 50){
        level = "Bowel Baron";
    }


    if(completion >= 75){
        level = "Prep Paladin";
    }


    if(completion >= 100){
        level = "Grand Poobah of Prep";
    }


    document.getElementById("level").textContent = level;

}

function toggleAchievements(){

    achievementCabinet.classList.toggle("closed");

    if(achievementCabinet.classList.contains("closed")){

        achievementArrow.innerHTML="<i class='fa-regular fa-square-caret-down'></i>";

    }else{

        achievementArrow.innerHTML="<i class='fa-regular fa-square-caret-up'></i>";

    }

}

function saveAchievements(){

localStorage.setItem("perfectTenUnlocked", perfectTenUnlocked);
localStorage.setItem("championUnlocked", championUnlocked);
localStorage.setItem("waterUnlocked", waterUnlocked);
localStorage.setItem("sennaUnlocked", sennaUnlocked);
localStorage.setItem("dietUnlocked", dietUnlocked);
localStorage.setItem("prepUnlocked", prepUnlocked);
localStorage.setItem("fastUnlocked", fastUnlocked);
localStorage.setItem("explorerUnlocked", explorerUnlocked);
localStorage.setItem("faqExplorerUnlocked", faqExplorerUnlocked);


    localStorage.setItem("dietGuideViewed", dietGuideViewed);
 localStorage.setItem("colonoscopyVideoViewed", colonoscopyVideoViewed);

}


// Load Achievements //

function loadAchievements(){

perfectTenUnlocked = localStorage.getItem("perfectTenUnlocked") === "true";
championUnlocked = localStorage.getItem("championUnlocked") === "true";
waterUnlocked = localStorage.getItem("waterUnlocked") === "true";
sennaUnlocked = localStorage.getItem("sennaUnlocked") === "true";
dietUnlocked = localStorage.getItem("dietUnlocked") === "true";
prepUnlocked = localStorage.getItem("prepUnlocked") === "true";
fastUnlocked = localStorage.getItem("fastUnlocked") === "true";
explorerUnlocked = localStorage.getItem("explorerUnlocked") === "true";
faqExplorerUnlocked = localStorage.getItem("faqExplorerUnlocked") === "true";

dietGuideViewed =
    localStorage.getItem("dietGuideViewed") === "true";

colonoscopyVideoViewed =
    localStorage.getItem("colonoscopyVideoViewed") === "true";


}

// Render Achievements //

function renderAchievements() {

const cabinet = document.getElementById("achievementCabinet");

let html = "";

let totalAchievements = 0;
let unlocked = 0;


// Always available achievements

html += "<p>" + (faqExplorerUnlocked ? "<i class='fa-solid fa-book-open'></i>" : "<i class='fa-solid fa-lock'></i>") + " Prep Scholar</p>";
totalAchievements++;

if(faqExplorerUnlocked){
    unlocked++;
}


html += "<p>" + (explorerUnlocked ? "<i class='fa-solid fa-compass'></i>" : "<i class='fa-solid fa-lock'></i>") + " Explorer</p>";
totalAchievements++;

if(explorerUnlocked){
    unlocked++;
}


html += "<p>" + (perfectTenUnlocked ? "<i class='fa-solid fa-star'></i>" : "<i class='fa-solid fa-lock'></i>") + " Perfect Ten</p>";
totalAchievements++;

if(perfectTenUnlocked){
    unlocked++;
}


html += "<p>" + (championUnlocked ? "<i class='fa-solid fa-trophy'></i>" : "<i class='fa-solid fa-lock'></i>") + " Colonoscopy Champion</p>";
totalAchievements++;

if(championUnlocked){
    unlocked++;
}


// Only show water achievement if required

if(taskTotals.water > 0){

    html += "<p>" + (waterUnlocked ? "<i class='fa-solid fa-droplet'></i>" : "<i class='fa-solid fa-lock'></i>") + " Hydration Hero</p>";

    totalAchievements++;

    if(waterUnlocked){
        unlocked++;
    }

}


// Only show Senna achievement if required

if(taskTotals.senna > 0){

    html += "<p>" + (sennaUnlocked ? "<i class='fa-solid fa-pills'></i>" : "<i class='fa-solid fa-lock'></i>") + " Senna Superstar</p>";

    totalAchievements++;

    if(sennaUnlocked){
        unlocked++;
    }

}


// Diet is always likely relevant, but keep it dynamic

if(taskTotals.diet > 0){

    html += "<p>" + (dietUnlocked ? "<i class='fa-solid fa-utensils'></i>" : "<i class='fa-solid fa-lock'></i>") + " Low Residue Legend</p>";

    totalAchievements++;

    if(dietUnlocked){
        unlocked++;
    }

}


// Prep achievement

if(taskTotals.prep > 0){

    html += "<p>" + (prepUnlocked ? "<i class='fa-solid fa-flask'></i>" : "<i class='fa-solid fa-lock'></i>") + " Prep Professional</p>";

    totalAchievements++;

    if(prepUnlocked){
        unlocked++;
    }

}


// Fasting achievement

if(taskTotals.fast > 0){

    html += "<p>" + (fastUnlocked ? "<i class='fa-solid fa-truck-fast'></i>" : "<i class='fa-solid fa-lock'></i>") + " The Fasting and the Furious</p>";

    totalAchievements++;

    if(fastUnlocked){
        unlocked++;
    }

}


cabinet.innerHTML = html;


achievementCount.textContent =
"(" + unlocked + "/" + totalAchievements + ")";

}

/// Reset plan ///

function resetPlan() {

    score = 0;
    completedTasks = 0;

    updateLevel();
    
    perfectTenUnlocked = false;
    championUnlocked = false;
    waterUnlocked = false;
    sennaUnlocked = false;
    dietUnlocked = false;
    prepUnlocked = false;
    fastUnlocked = false;
    explorerUnlocked = false;
    faqExplorerUnlocked = false;
    colonCadetUnlocked = false;
bowelBaronUnlocked = false;
prepPaladinUnlocked = false;
grandPoobahUnlocked = false;
dietGuideViewed = false;
colonoscopyVideoViewed = false;

 

    Object.keys(taskProgress).forEach(function(key) {
        taskProgress[key] = 0;
    });

    Object.keys(taskTotals).forEach(function(key) {
        taskTotals[key] = 0;
    });

    scoreDisplay.textContent = score;
    progressFill.style.width = "0%";
    

}


function loadProgress() {

    // Start fresh
    score = 0;
    completedTasks = 0;

    Object.keys(taskProgress).forEach(function(key) {
        taskProgress[key] = 0;
    });

    achievementCabinet.classList.add("closed");

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(function(checkbox) {

        const taskId = checkbox.dataset.id;

        if (localStorage.getItem(taskId) === "completed") {

            checkbox.checked = true;
            checkbox.parentElement.classList.add("completed");

            const taskType = checkbox.dataset.type;

            completedTasks++;
            taskProgress[taskType]++;
            score += 10;

        } else {

            checkbox.checked = false;
            checkbox.parentElement.classList.remove("completed");

        }

    });

    scoreDisplay.textContent = score;
    updateLevel();

    const percentage = checkboxes.length > 0
        ? (completedTasks / checkboxes.length) * 100
        : 0;

    progressFill.style.width = percentage + "%";

    if (localStorage.getItem("welcomeSeen") === "true") {

        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("mainApp").style.display = "block";

    } else {

        document.getElementById("welcomeScreen").style.display = "block";
        document.getElementById("mainApp").style.display = "none";

    }

}

const savedProfile = localStorage.getItem("profile");

if (savedProfile === "sheffield") {

    activeProfile = sheffieldProfile;
    profileSelect.value = "sheffield";

} else if (savedProfile === "chesterfield") {

    activeProfile = chesterfieldProfile;
    profileSelect.value = "chesterfield";

} else {

    activeProfile = defaultProfile;
    profileSelect.value = "default";

}

const savedSite = localStorage.getItem("site");

if (savedSite) {

    siteSelect.value = savedSite;

}


// sub faq listeners //

function addSubFAQListeners(){

    const buttons = document.querySelectorAll(".subFAQQuestion");

    buttons.forEach(function(button){

        button.addEventListener("click",function(){

            const answer = button.nextElementSibling;

            if(answer.style.display === "block"){

                answer.style.display = "none";

            } else {

                answer.style.display = "block";

            }

        });

    });

}



function addCheckboxListeners() {

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(function (checkbox) {

        checkbox.addEventListener("change", function () {

            const taskType = checkbox.dataset.type;
            const taskId = checkbox.dataset.id;

            if (checkbox.checked) {

                checkbox.parentElement.classList.add("completed");
                score += 10;
                completedTasks++;
                taskProgress[taskType]++;
                localStorage.setItem(taskId, "completed");

            } else {
 
                checkbox.parentElement.classList.remove("completed");
                score -= 10;
                completedTasks--;
                taskProgress[taskType]--;
                localStorage.removeItem(taskId);

            }

            scoreDisplay.textContent = score;

            const percentage = (completedTasks / checkboxes.length) * 100;
            progressFill.style.width = percentage + "%";

            checkAchievements();
            checkLevelUps();
            updateLevel();
            checkCompletion();
           completion.style.display="block";
        });

    });

}





// Check Achievements //

function checkAchievements() {



// FAQ Explorer

if (faqQuestionsViewed === totalFAQQuestions && !faqExplorerUnlocked) {

    faqExplorerUnlocked = true;

    showAchievement(
        "Prep Scholar",
        "You discovered all the information to prepare for your colonoscopy!",
        "<i class='fa-solid fa-book-open'></i>"
    );

}

// Explorer Achievement

if (dietGuideViewed && colonoscopyVideoViewed && !explorerUnlocked) {

    explorerUnlocked = true;

    showAchievement(
        "Explorer",
        "You viewed the educational video and diet information",
        "<i class='fa-solid fa-compass'></i>");

}

    // Perfect Ten
    if (completedTasks >= 10 && !perfectTenUnlocked) {

        showAchievement("Perfect 10",
                        "You completed 10 tasks! Keep going!",
                        "<i class ='fa-solid fa-star'></i>");
        perfectTenUnlocked = true;

    }

// Colonoscopy Champion

const totalTasks =
document.querySelectorAll("#plan input[type='checkbox']").length;


if (totalTasks > 0 &&
    completedTasks === totalTasks &&
    !championUnlocked) {

    showAchievement(
        "Colonoscopy Champion!",
        "You're Colonoscopy ready! Amazing work!",
        "<i class='fa-solid fa-trophy'></i>"
    );

    championUnlocked = true;

}

    // Water Master
    if (  taskTotals.water > 0 &&
         taskProgress.water === taskTotals.water && !waterUnlocked) {


         waterUnlocked = true;
    }

    // Senna Success
    if (    taskTotals.senna > 0 &&
            taskProgress.senna === taskTotals.senna && !sennaUnlocked) {

 
        sennaUnlocked = true;
    }

    // Diet Hero
    if (   taskTotals.diet > 0 &&
           taskProgress.diet === taskTotals.diet && !dietUnlocked) {

 
        dietUnlocked = true;
    }

    // Fasting and the furious
if (  taskTotals.fast > 0 &&
      taskProgress.fast === taskTotals.fast && !fastUnlocked) {


    fastUnlocked = true;
}

// Prep Professional
if (taskTotals.prep > 0 &&
    taskProgress.prep === taskTotals.prep &&
    !prepUnlocked) {

    showAchievement("Prep Professional!",
                    " You defeated the prep! Well done!",
                    "<i class='fa-solid fa-flask'></i>");
    prepUnlocked = true;


  
}
  renderAchievements();
  saveAchievements();
}


// show Achievement //

function showAchievement(title, text, icon) {

    achievementTitle.textContent = title;
    achievementText.textContent = text;
    achievementIcon.innerHTML = icon;


achievementArrow.innerHTML = "<i class='fa-regular fa-square-caret-up'></i>";
    achievementPopup.classList.remove("popupHidden");
    achievementPopup.classList.add("show");


    setTimeout(function(){

        achievementPopup.classList.remove("show");
        achievementPopup.classList.add("popupHidden");

    },4000);

}

// Add Task //

function addTask(task) {

    const icons = {

        senna: "<i class='fa-solid fa-pills'></i>",
        water: "<i class='fa-solid fa-droplet'></i>",
        diet: "<i class='fa-solid fa-utensils'></i>",
        prep: "<i class='fa-solid fa-flask'></i>",
        fast: "<i class='fa-solid fa-hourglass-half'></i>",
        end: "<i class='fa-solid fa-flag-checkered'></i>",
        medication: "<i class='fa-solid fa-prescription-bottle-medical'></i>"

    };

    return `
        <label class="task">
            <input
                type="checkbox"
                data-id="${task.id}"
                data-type="${task.type}">
            ${icons[task.type]}
            <span>${task.text}</span>
        </label>
    `;

}

/// ADD TASK LIST ///

function addTaskList(tasks){

    let html = "";

    tasks.forEach(function(task){

        html += addTask(task);

    });

    return html;

}





// Get Prep Tasks //

function getPrepTasks(dayId, dayBefore, appointmentHour, appointmentDate) {


    let tasks = [];


    // =========================
    // Fixed hospital schedules
    // =========================

    if (activeProfile.currentRegimen.fixedPrepTimes) {


        activeProfile.currentRegimen.prepSchedule.forEach(function(prep, index) {


            if (prep.dayBefore === dayBefore) {


                tasks.push({

                    id: dayId + "-prep" + index,

                    text: prep.time + " " + prep.text,

                    type: "prep"

                });

            }

        });


    }


    // =========================
    // Flexible schedules
    // =========================

    else {


        // First dose
          if (dayBefore === activeProfile.currentRegimen.firstDoseDay) {

         tasks.push({

        id: dayId + "-prep1",

        text:
            activeProfile.currentRegimen.firstDoseTime +
            " Mix and drink your first dose of bowel preparation",

        type: "prep"

    });

}


        // Second dose
        if (dayBefore === 0) {


            const secondDose = new Date(appointmentDate);

            secondDose.setHours(appointmentHour - 5,
0,
0,
0,
);


            tasks.push({

                id: dayId + "-prep2",

                text:
                    secondDose.toLocaleTimeString([], {
                        hour:"2-digit",
                        minute:"2-digit"
                    }) +
                    " Mix and drink your second dose of bowel preparation",

                type:"prep"

            });

        }


    }


    return tasks;

}

// Standard Day //

function addStandardDay(date, day) {

    const dayId =
        date.getFullYear() + "-" +
        String(date.getMonth() + 1).padStart(2,"0") + "-" +
        String(date.getDate()).padStart(2,"0");

    const isToday =
        date.toDateString() === new Date().toDateString();

    let tasks = [];

    activeProfile.currentRegimen.medications.forEach(function(medication) {

        if (day === medication.stopDays) {

            tasks.push({

                id: dayId + "-" + medication.id,

                text: "Stop taking " + medication.name,

                type: "medication"

            });

        }

    });

    

    // 5, 4, 3 and 2 days before
    if (day > 1) {

if (
    activeProfile.currentRegimen.sennaTasks &&
    day <= activeProfile.currentRegimen.sennaStartDays
) {

    tasks.push({
        id: dayId + "-senna",
        text: "Take Senna (2 tablets at night)",
        type: "senna"
    });

}

if  (
    activeProfile.currentRegimen.waterTasks &&
    day <= activeProfile.currentRegimen.waterStartDays
) {

    tasks.push({
        id: dayId + "-water",
        text: "Drink at least 1L of water",
        type: "water"
    });

}
             if (day <= activeProfile.currentRegimen.dietStartDays) {

        tasks.push({
        id: dayId + "-diet",
        text: "Follow a low residue diet",
        type: "diet"
    });

}
}
 if (tasks.length === 0) {
    return;
}

    let html = "";

    html += "<div class='daySection";

    if (isToday) {
        html += " todaySection";
    }

    html += "' data-date='" + dayId + "'>";

    html += "<h3>" + date.toDateString() + "</h3>";

    if (isToday) {

        html +=
        "<h2 style='color:#d89b00;'>" +
        "<i class='fa-solid fa-star'></i> TODAY" +
        "</h2>";

    }

html += addTaskList(tasks);

html += "</div>";

plan.innerHTML += html;


}


// Day before //

function addDayBefore(date, appointmentHour) {

    const dayId =
        date.getFullYear() + "-" +
        String(date.getMonth() + 1).padStart(2, "0") + "-" +
        String(date.getDate()).padStart(2, "0");


    const isToday =
        date.toDateString() === new Date().toDateString();


    let tasks = [];

activeProfile.currentRegimen.medications.forEach(function(medication) {

    if (medication.stopDays === 1) {

        tasks.push({

            id: dayId + "-" + medication.id,

            text: "Stop taking " + medication.name,

            type: "medication"

        });

    }

});

    // Daytime appointments
    if (appointmentHour >= 8 && appointmentHour < 17) {

        tasks.push({

            id: dayId + "-diet",

            text: "Low residue diet until " + activeProfile.currentRegimen.fastingTime,

            type: "diet"

        });


        tasks.push({

            id: dayId + "-fast",

            text: activeProfile.currentRegimen.fastingTime + " No further food or milky drinks. Only clear fluids",

            type: "fast"

        });


        tasks.push(...getPrepTasks(dayId,1,appointmentHour,date));


        if(activeProfile.currentRegimen.waterAfterPrep){

            tasks.push({

                id: dayId + "-prep-water",

                text:"Drink at least 500ml of water after your prep dose",

                type:"water"

            });

        }


    } else {


        if(activeProfile.currentRegimen.sennaTasks){

            tasks.push({

                id: dayId + "-senna",

                text:"Take Senna (2 tablets at night)",

                type:"senna"

            });

        }


        if(activeProfile.currentRegimen.waterTasks){

            tasks.push({

                id: dayId + "-water",

                text:"Drink at least 1L of water",

                type:"water"

            });

        }


        tasks.push({

            id: dayId + "-diet",

            text:"Low residue diet until " + activeProfile.currentRegimen.fastingTime,

            type:"diet"

        });


        tasks.push({

            id: dayId + "-fast",

            text:activeProfile.currentRegimen.fastingTime + " No further food or milky drinks. Only clear fluids",

            type:"fast"

        });


        tasks.push(...getPrepTasks(dayId,1,appointmentHour,date));

    }



    let html = "";

    html += "<div class='daySection";


    if(isToday){

        html += " todaySection";

    }


    html += "'>";

    html += "<h3>" + date.toDateString() + "</h3>";

    html += addTaskList(tasks);

    html += "</div>";

    plan.innerHTML += html;

}
// Appointment day //

function addAppointmentDay(date, appointmentHour) {

    const dayId =
        date.getFullYear() + "-" +
        String(date.getMonth() + 1).padStart(2, "0") + "-" +
        String(date.getDate()).padStart(2, "0");

    const secondDose = new Date(date);
    secondDose.setHours(appointmentHour - 5,
0,
0,
0,
);

    const stopDrinking = new Date(date);
    stopDrinking.setHours(appointmentHour - 2);

    const isToday =
        date.toDateString() === new Date().toDateString();

    let tasks = [];

tasks = getPrepTasks(dayId,0,appointmentHour,date);


if(activeProfile.currentRegimen.waterAfterPrep){

    tasks.push({
        id: dayId + "-prep-water",
        text:"Drink at least 500ml of water after your prep dose",
        type:"water"
    });

}


tasks.push({

    id: dayId + "-final",

    text:
        stopDrinking.toLocaleTimeString([], {
            hour:"2-digit",
            minute:"2-digit"
        }) +
        " Stop drinking. Do not eat or drink anything else until your appointment.",

    type:"end"

});


let html = "";

html += "<div class='daySection";

if(isToday){

    html += " todaySection";

}

html += "'>";

html += "<h3>" + date.toDateString() + "</h3>";

html += addTaskList(tasks);

html += "</div>";

plan.innerHTML += html;

}

// Create Plan //



function createPlan() {

    const newDate = appointmentDate.value;
    const savedDate = localStorage.getItem("appointmentDate");

    const isNewAppointment =
        savedDate !== null && savedDate !== newDate;

    if (isNewAppointment) {

        resetPlan();
        localStorage.clear();

    }

    localStorage.setItem("appointmentDate", newDate);

    const appointment = new Date(newDate);
    const appointmentHour = appointment.getHours();

    // Select regimen
    let regimen;

    if (appointmentHour < 13) {

        regimen = activeProfile.regimens.am;

    } else if (appointmentHour < 17) {

        regimen = activeProfile.regimens.pm;

    } else {

        regimen = activeProfile.regimens.evening;

    }

    // Save selected regimen
    activeProfile.currentRegimen = regimen;

   createPlanSummary(appointment, activeProfile);

    plan.innerHTML = "<h2>Your 7 Day Plan</h2>";

    for (let day = 7; day >= 0; day--) {

        const currentDate = new Date(appointment);
        currentDate.setDate(currentDate.getDate() - day);

        if (day > 1) {

            addStandardDay(currentDate, day);

        }
        else if (day === 1) {

            addDayBefore(currentDate, appointmentHour);

        }
        else {

            addAppointmentDay(currentDate, appointmentHour);

        }

    }

    // totals here...

taskTotals.water =
document.querySelectorAll("[data-type='water']").length;

taskTotals.senna =
document.querySelectorAll("[data-type='senna']").length;

taskTotals.diet =
document.querySelectorAll("[data-type='diet']").length;

taskTotals.prep =
document.querySelectorAll("[data-type='prep']").length;

taskTotals.fast =
document.querySelectorAll("[data-type='fast']").length;

maxPossibleScore =
document.querySelectorAll("input[type='checkbox']").length * 10;

    if (!isNewAppointment) {
    loadProgress();
}

    

    addCheckboxListeners();

    checkAchievements();

    renderAchievements();
}


// plan summary //

function createPlanSummary(appointment, profile) {

    const summary = document.getElementById("planSummary");

    summary.innerHTML = `

    <div class="summaryBox">

        <h2>Your Preparation Plan</h2>

    <p>
        <strong>Hospital Site:</strong>
        ${siteSelect.value}
    </p>

        <p>
        <strong>Appointment:</strong>
        ${appointment.toLocaleDateString()}
        </p>

        <p>
        <strong>Time:</strong>
        ${appointment.toLocaleTimeString([], {
            hour:"2-digit",
            minute:"2-digit"
        })}
        </p>

        <p>
        <strong>Preparation:</strong>
        Split dose bowel preparation
        </p>

        <p>
        Your plan starts:
        ${new Date(
            appointment.getTime() - (7 * 24 * 60 * 60 * 1000)
        ).toLocaleDateString()}
        </p>

        <small>
        Please follow your hospital's instructions.
        </small>

    </div>

    `;

}

//Toggle Faq//

function toggleFAQ(){

    faqContent.classList.toggle("closed");

    if(faqContent.classList.contains("closed")){

        faqArrow.innerHTML="<i class='fa-regular fa-square-caret-down'></i>";

    }else{

        faqArrow.innerHTML="<i class='fa-regular fa-square-caret-up'></i>";

    }

}

function addFAQListeners() {

    const questions = document.querySelectorAll(".faqQuestion");

    totalFAQQuestions = questions.length;


    questions.forEach(function(question) {

        question.addEventListener("click", function() {


            // Achievement tracking
            if (!question.dataset.viewed) {

                question.dataset.viewed = "true";

                faqQuestionsViewed++;

                checkAchievements();

            }


            const answer = question.nextElementSibling;


            // Close all other FAQ answers
            document.querySelectorAll(".faqAnswer").forEach(function(item){

                if(item !== answer){

                    item.classList.remove("open");

                }

            });


            // Open clicked answer
            answer.classList.toggle("open");


        });

    });

}


// FAQ Event Listener //

faqHeader.addEventListener("click",toggleFAQ);

// =========================
// Create Plan Button
// =========================

createPlanButton.addEventListener("click", function () {

    if (appointmentDate.value === "") {

        alert("Please select an appointment date.");
        return;
    }

    createPlan();

});

    
achievementHeader.addEventListener("click",toggleAchievements);
   

// =========================
// Clear Date Button
// =========================

clearDateButton.addEventListener("click", function () {

    if (confirm("Are you sure you want to clear the appointment date?")) {

        appointmentDate.value = "";
        plan.innerHTML = "";


       resetPlan();

localStorage.clear();

renderAchievements();

updateLevel();

scoreDisplay.textContent = score;


    }

});

window.addEventListener("load", function () {

    loadAchievements();
    updateLevel();

    initialiseStarRating();
    addFAQListeners();
    addSubFAQListeners();

    document
    .getElementById("submitFeedback")
    .addEventListener("click", submitFeedback);



    const profileSelect = document.getElementById("profileSelect");

    const savedProfile = localStorage.getItem("profile");

    if (savedProfile === "default") {

        activeProfile = defaultProfile;
        profileSelect.value = "default";

    } else if (savedProfile === "sheffield") {

        activeProfile = sheffieldProfile;
        profileSelect.value = "sheffield";

    } else if (savedProfile === "chesterfield") {

        activeProfile = chesterfieldProfile;
        profileSelect.value = "chesterfield";

    }

    populateSites();

    profileSelect.addEventListener("change", function () {

        if (profileSelect.value === "default") {

            activeProfile = defaultProfile;

        } else if (profileSelect.value === "sheffield") {

            activeProfile = sheffieldProfile;

        } else if (profileSelect.value === "chesterfield") {

            activeProfile = chesterfieldProfile;

        }

        populateSites();

        localStorage.setItem("profile", profileSelect.value);
        const siteSelect = document.getElementById("siteSelect");

        siteSelect.addEventListener("change", function () {

    localStorage.setItem("site", siteSelect.value);

});


        if (appointmentDate.value !== "") {

            createPlan();

        }

    });


    const savedDate = localStorage.getItem("appointmentDate");

    if (savedDate) {

        appointmentDate.value = savedDate;

        createPlan();

    }

});

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js");

}
