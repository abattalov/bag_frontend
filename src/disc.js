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
        this.bagId = bag_id,
        this.bag = bag

        this.element = document.getElementById('disc-table').insertRow();
        this.element.dataset['id'] = id;
        this.element.id = `disc-${id}`;
        this.element.addEventListener('click', this.handleClick)
        Disc.all.push(this)
    }

    // render(){
    //     this.element.innerHTML = `
    //     <div data-id="${this.id}">
    //     <p class="disc-name">${this.name}</p>
    //     <p class="brand">${this.brand}</p>
    //     <p class="bagId">${this.bag.id}</p>
    //     </div>
    //     <button class="delete" data-id=${this.id}>Delete Disc</button>
    //     `
    //     return this.element
    // }

    render(){
        this.element.innerHTML = `
        
        <td>${this.name}</td>
        <td>${this.brand}</td>
        <td>${this.speed}</td>
        <td>${this.glide}</td>
        <td>${this.turn}</td>
        <td>${this.fade}</td> 
        <td>${this.plastic}</td>
        <td>${this.weight}</td>
        
        <button class="delete" data-id=${this.id}>Delete Disc</button>
    
        `
        return this.element
    }

    handleClick = (e) => {
        if(e.target.innerText === 'Edit Disc'){
            e.target.innerText = "Save Disc"
            this.createEditForm()
        }else if(e.target.innerText === 'Delete Disc'){
            discSerivce.deleteDisc(e)
        }else if(e.target.innerText === 'Save Disc'){
            e.target.innerText = "Edit Disc"
            // this.updateItemInfo()

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

    // updateItemInfo(){
    //     this.name = this.element.querySelector(".edit-disc-name").value;
    //     this.brand = this.element.querySelector(".edit-brand").value;
    //     discSerivce.updateDisc()
    // }

      
    
    slapOnDom(){
        Disc.cont.appendChild(this.render())
    }

    static filteredByBag(filteredBag){
        if(filteredBag){
            for(const i of Disc.all){
                if(i.bag.id === parseInt(filteredBag.id)){
                    i.element.style.display = ""
                }else{
                    i.element.style.display = "none"
                }
            }
        }else{
            for(const i of Disc.all){
                // i.element.style.display = ""
            }
        }
    }
}