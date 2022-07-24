class BagService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getBag(){
        fetch(`${this.endpoint}/bags`)
        .then(resp => resp.json())
        .then(bags => { 
            for(const bag of bags){
                let b = new Bag(bag)
                b.addToDropdown()
            }
        })
    }
}