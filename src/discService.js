class DiscService{

    constructor(endpoint){
        this.endpoint = endpoint
    }

    getDiscs(){
        fetch(`${this.endpoint}/discs`)
        .then(resp => resp.json())
        .then(discs => {
            for(const disc of discs){
                let d = new Disc(disc)
                d.slapOnDom()
            }
        })
    }

    createDiscs(){
        const discInfo = {
            disc: {
                name: nameValue.value,
                brand: brandValue.value,
                speed: speedValue.value,
                glide: glideValue.value,
                turn: turnValue.value,
                fade: fadeValue.value,
                plastic: plasticValue.value,
                weight: weightValue.value,
                bag_id: bagDropdownValue.value
            }
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify(discInfo)
        }


        fetch(`${this.endpoint}/discs`, configObj)
        .then(resp => resp.json())
        .then(data => {
            const d = new Disc(data)
            d.slapOnDom()
        })

    }
}