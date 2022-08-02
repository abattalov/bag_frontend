class Bag{
    constructor({name, id}){
        this.name = name
        this.id = id

        this.element = document.createElement('h2');
        this.element.id = `bag-${id}`;
        this.element.addEventListener('click', this.handleClick)
    }


    addToDropdown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.name
        bagDropdownValue.appendChild(option)
    }

    handleClick = (e) => {
        if(e.target.innerText === 'Delete Bag')
            bagService.deleteBag(e)
    }


}