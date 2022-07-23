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
}