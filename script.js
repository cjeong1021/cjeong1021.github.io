const skillButton1 = document.getElementById('skill-button-1');
const skillButton2 = document.getElementById('skill-button-2');
const skillButton3 = document.getElementById('skill-button-3');
const projectButton1 = document.getElementById('project-button-1');
const projectButton2 = document.getElementById('project-button-2');
const projectButton3 = document.getElementById('project-button-3');

skillButton1.addEventListener("click", skillOne);
function skillOne() {
    var skill1 = document.getElementById('skill-1');
    if (skill1.style.display === 'none') {
        skill1.style.display = 'block';
    }
    else {
        skill1.style.display = 'none';
    }
}

skillButton2.addEventListener("click", skillTwo);
function skillTwo() {
    var skill1 = document.getElementById('skill-2');
    if (skill1.style.display === 'none') {
        skill1.style.display = 'block';
    }
    else {
        skill1.style.display = 'none';
    }
}

skillButton3.addEventListener("click", skillThree);
function skillThree() {
    var skill1 = document.getElementById('skill-3');
    if (skill1.style.display === 'none') {
        skill1.style.display = 'block';
    }
    else {
        skill1.style.display = 'none';
    }
}

projectButton1.addEventListener("click", projectOne);
function projectOne() {
    var project1 = document.getElementById('project-1');
    if (project1.style.display === 'none') {
        project1.style.display = 'block';
    }
    else {
        project1.style.display = 'none';
    }
}
projectButton2.addEventListener("click", projectTwo);
function projectTwo() {
    var project2 = document.getElementById('project-2');
    if (project2.style.display === 'none') {
        project2.style.display = 'block';
    }
    else {
        project2.style.display = 'none';
    }
}
projectButton3.addEventListener("click", projectThree);
function projectThree() {
    var project3 = document.getElementById('project-3');
    if (project3.style.display === 'none') {
        project3.style.display = 'block';
    }
    else {
        project3.style.display = 'none';
    }
}