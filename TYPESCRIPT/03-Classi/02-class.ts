//Modo alternativo per la dichiarazione di una classe
class Utente{
    
    constructor(private nome: string, private email: string, private password?: string){
        //? quella propr non è obbligatoria
    }

    getInfo(){
        return "Nome: " + this.nome + " Email: " +this.email; 
    }

    setPassword(value: any){
        if(this.password == undefined){
            console.log("L'utente non ha ancora settato la password");
        }else{
            this.password = value;
            console.log("L'utente ha appena settato la password");
    }
    }
}

const utente1 = new Utente("Pippo", "pippo@mail.com");

console.log(utente1.getInfo());
utente1.setPassword(undefined);
