class Studente{
    //creo proprietà e metodi di classe
    private nome: string;
    private cognome: string;
    private eta: number;
    private corsi: string[];

    //posso avere anche il costruttore, il quale viene lanciato nel momento in cui istanzio
    //un nuovo oggetto di tipo Studente

    constructor(nome: string, cognome: string, eta: number, corsi: string[]){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi
    }

    //creo dei metodi
    partecipa(nomeCorso: string){
        this.corsi.push(nomeCorso);
    }

    //Getters
    getCorsi(){
        return this.corsi;
    }

    getInfo(): string{
        let info = "Lo studente si chiama " + this.nome + " " + this.cognome + ". Età: " + this.eta;
        return info;
    }

    //SETTERS
    setNome(nome: string){
        if(nome == "Carlo"){
            console.log("Mi spiace ma questo utente già esiste, cambia nome");
        }else{
            this.nome = nome;
        }
    }

}

//costruisco un'istanza della mia classe
let studente = new Studente("Dario", "Mennillo", 33, ["Javascript", "Spring"]);

studente.partecipa('Sass');
studente.setNome('Carlo')


console.log(studente.getInfo());
console.log(studente.getCorsi());



