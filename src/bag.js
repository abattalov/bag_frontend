class Bag{
    static all = [];
    static bagCont = document.getElementById('bags-container')
    constructor({name, id}){
        this.name = name
        this.id = id
        this.active = false

        this.element = document.createElement('button');
        this.element.dataset['id'] = id;
        this.element.id = `bag-${id}`;
        this.element.addEventListener('click', this.setActiveBag)

        Bag.all.push(this)
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
        this.element.innerHTML = this.name

        return this.element
    }

    slapOnDom(){
        Bag.bagCont.appendChild(this.render())
    }

    setActiveBag = (e) => {
        let filteredBag

        Bag.all.forEach(b => {
            if(b.element === this.element && !this.active){
                b.element.classList.add('activated')
                b.active = true
                filteredBag = b
                Disc.filteredByBag(filteredBag)            
            }else{
                b.element.classList.remove('activated')
                b.active = false
            }
            
        })
    }


}