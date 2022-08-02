class Bag{
    static all = [];
    static bagCont = document.getElementById('bags-container')
    constructor({name, id}){
        this.name = name
        this.id = id

        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
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

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2>${this.name}</h2>
        </div>
        <button>Delete Bag</button>`

        return this.element
    }

    slapOnDom(){
        Bag.bagCont.appendChild(this.render())
    }


}