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

        this.element = document.createElement('tr');
        this.element.dataset['id'] = id;
        // this.element.id = `disc-${id}`;
        Disc.all.push(this)
    }

    render(){
        let discDetails = this.element.innerHTML = `
        
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
        let discTable = document.getElementById('disc-table')
        let newRow = discTable.insertRow()
        newRow.id = `disc-${this.id}`
        newRow.innerHTML += discDetails
        newRow.addEventListener('click', this.handleClick)
        return discTable
        
    }

    handleClick = (e) => {
        if(e.target.innerText === 'Delete Disc'){
            discSerivce.deleteDisc(e)
            let filteredDiscArray = Disc.all.filter(disc => disc.id != parseInt(e.target.dataset.id))
            Disc.all = filteredDiscArray
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

    static filteredByBag(filteredBag){
        if(filteredBag){
            for(const i of Disc.all){
                if(i.bag.id === parseInt(filteredBag.id)){
                    // i.element.style.display = ""
                    let a = document.getElementById(`disc-${i.id}`)
                    a.style.display = ''
                }else{
                    // i.element.style.display = "none"
                    let a = document.getElementById(`disc-${i.id}`)
                    a.style.display = 'none'
                }
            }
        }else{
            for(const i of Disc.all){
                // i.element.style.display = ""
            }
        }
    }
}