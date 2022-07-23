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
        Disc.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="disc-name">${this.name}</h2>
        <p class="brand">${this.brand}</p>
        </div>
        `
        return this.element
    }
    
    
    slapOnDom(){
        Disc.cont.appendChild(this.render())
    }
}