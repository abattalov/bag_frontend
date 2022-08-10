const endpoint = "http://localhost:3000/"
const discSerivce = new DiscService(endpoint);
const bagService = new BagService(endpoint);

const discForm = document.getElementById("disc-form");
const bagForm = document.getElementById('bag-form');
const nameValue = document.getElementById('disc-name');
const bagNameValue = document.getElementById('bag-name');
const brandValue = document.getElementById('disc-brand');
const speedValue = document.getElementById ('disc-speed');
const glideValue = document.getElementById ('disc-glide');
const turnValue = document.getElementById ('disc-turn');
const fadeValue = document.getElementById ('disc-fade');
const plasticValue = document.getElementById ('disc-plastic');
const weightValue = document.getElementById ('disc-weight');
const bagDropdownValue = document.getElementById('bag-dropdown');

discSerivce.getDiscs()
bagService.getBag()

discForm.addEventListener('submit', handleSubmit)
bagForm.addEventListener('submit', handleBagSubmit)

function handleSubmit(e){
    e.preventDefault();
    discSerivce.createDiscs()
    discForm.reset()
}

function handleBagSubmit(e){
    e.preventDefault();
    bagService.createBag();
    bagForm.reset()
}

function showForm(){
    const discForm = document.getElementById('disc-form')

    if (discForm.style.display === "block") {
        discForm.style.display = "none";
    } else {
        discForm.style.display = "block";
    }
}