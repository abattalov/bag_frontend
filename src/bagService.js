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
                b.slapOnDom()
            }
        })
    }

    createBag(){
        const bagInfo = {
            bag: {
                name: bagNameValue.value
            }
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(bagInfo)
        }


        fetch(`${this.endpoint}/bags`, configObj)
        .then(resp => resp.json())
        .then(data => {
            const b = new Bag(data)
            b.slapOnDom()
        })
    }

    deleteBag(e){
        const id = e.target.dataset.id

        e.target.parentElement.remove()
    }
}