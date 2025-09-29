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