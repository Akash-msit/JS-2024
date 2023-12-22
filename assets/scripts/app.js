const backdropElement = document.getElementById('backdrop');
const modelLinkElement = document.querySelectorAll('.info-model');
let infoModel;

function toggleBackdrop(){
    backdropElement.classList.toggle('visible')
}

function presentInfoModel(event){
    const text = event.target.dataset.text;
    toggleBackdrop();
    infoModel = document.createElement('div');
    infoModel.classList.add('model');
    infoModel.innerHTML = `
    <h2>More Details</h2>
    <p>${text}</p>
    `
    ;
    const closeButton = document.createElement('button');
    closeButton.addEventListener('click', hideInfoModel);
    closeButton.textContent = 'Okey';
    infoModel.appendChild(closeButton);
    document.body.appendChild(infoModel);
}
function hideInfoModel(){
    toggleBackdrop();
    document.body.removeChild(infoModel);
}
for(const linkElement of modelLinkElement){
    linkElement.addEventListener('click', presentInfoModel);
}
backdropElement.addEventListener('click', hideInfoModel);