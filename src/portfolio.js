function activePortfolio(nouveau){
    const active = document.querySelector('.portfolio.activeP');
    if(active != null){
        active.classList.remove('activeP');
    }
    if(nouveau != null){
        nouveau.classList.add('activeP');
    }
}

//Activer projets Univ

let univOpen = false;

const univB = document.querySelector('.univB')

univB.addEventListener('click', openUniv);

function openUniv(event){
    event.preventDefault();
    const univ = document.querySelector('.univ');
    if(univOpen){
        activePortfolio(null);
        univOpen = false;
    }else{
        activePortfolio(univ);
        univOpen = true;
        persoOpen = false;
    }
}


//Activer projets Perso
const perso = document.querySelector('.perso');
const persoB = document.querySelector('.persoB')
let persoOpen = false;

persoB.addEventListener('click', (e) => {
    e.preventDefault();
    if(persoOpen){
        activePortfolio(null);
        persoOpen = false;
    }else{
        activePortfolio(perso);
        persoOpen = true;
        univOpen = false;
    }
})

function activeStage(nouveau){
    const active = document.querySelector('.stage.activeP');
    if(active != null){
        active.classList.remove('activeP');
    }
    if(nouveau != null){
        nouveau.classList.add('activeP');
    }
}

// Activer stage 2025
const fichorga = document.querySelector('.stage.fichorga');
const stage2025B = document.querySelector('.stage2025B');
let stage2025Open = false;

stage2025B.addEventListener('click', (e) => {
    e.preventDefault();
    if(stage2025Open){
        activeStage(null);
        stage2025Open = false;
    }else{
        activeStage(fichorga);
        stage2025Open = true;
        stage2026Open = false;
    }
});

// Activer stage 2026
const emothep = document.querySelector('.stage.emothep');
const stage2026B = document.querySelector('.stage2026B');
let stage2026Open = false;

stage2026B.addEventListener('click', (e) => {
    e.preventDefault();
    if(stage2026Open){
        activeStage(null);
        stage2026Open = false;
    }else{
        activeStage(emothep);
        stage2026Open = true;
        stage2025Open = false;
    }
});