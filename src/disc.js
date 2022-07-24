class Disc {
    static all = [];
    static cont = document.getElementById('discs-container')
    constructor({id, name, brand, speed, glide, turn, fade, plastic, weight, bag_id, bag}){
        this.id = id,
        this.name = name, 
        this.brand = brand,
        this.speed = speed,
        this.glide = glide,
        this.turn = turn,
        this.fade = fade, 
        this.plastic = plastic,
        this.weight = weight,
        this.bag_id = bag_id,
        this.bag = bag

        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `disc-${id}`;
        this.element.addEventListener('click', this.handleClick)
        Disc.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="disc-name">${this.name}</h2>
        <p class="brand">${this.brand}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Disc</button>
        <button class="delete" data-id=${this.id}>Delete Disc</button>
        `
        return this.element
    }

    handleClick = (e) => {
        if(e.target.innerText === 'Edit Disc'){
            this.createEditForm()
        }else if(e.target.innerText === 'Delete Disc'){

        }else if(e.target.innerText === 'Save Disc'){

        }
    }

    createEditForm(){
        const div = this.element.querySelector('div');

        for(const element of div.children){
            let inputValue = element.innerText;
            let name = element.classList[0];
            element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}">` 
        }
    }
    
    
    slapOnDom(){
        Disc.cont.appendChild(this.render())
    }
}