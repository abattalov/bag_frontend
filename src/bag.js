class Bag{
    constructor({name, id}){
        this.name = name
        this.id = id
    }


    addToDropdown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.name
        dropdown.appendChild(option)
    }
}