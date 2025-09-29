function activeMenu(nouveau){
    const active = document.querySelector('.active');
    active.classList.remove('active');
    nouveau.classList.add('active');
}

//Active Accueil/Presentation
const accueilB = document.querySelector('.menu.accueilB');
accueilB.addEventListener('click', boutonAccueil)

function boutonAccueil(event){
    event.preventDefault();
    activeMenu(document.querySelector('#presentation'))
}

//Active Competences
const competencesB = document.querySelector('.menu.competencesB');
competencesB.addEventListener('click', boutonCompetences)

function boutonCompetences(event){
    event.preventDefault();
    activeMenu(document.querySelector('#competences'))
}

//Active Diplomes
const diplomesB = document.querySelector('.menu.diplomesB');
diplomesB.addEventListener('click', boutonDiplomes)

function boutonDiplomes(event){
    event.preventDefault();
    activeMenu(document.querySelector('#diplomes'))
}

//Active Portfolio
const portfolioB = document.querySelector('.menu.portfolioB');
portfolioB.addEventListener('click', boutonPortfolio)

function boutonPortfolio(event){
    event.preventDefault();
    activeMenu(document.querySelector('#portfolio'))
}