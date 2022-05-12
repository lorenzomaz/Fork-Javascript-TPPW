function saluta(): void{
    console.log("Ciao");
}

function somma():number{
    let a: number = 2;
    let b = 3;

    return a + b;
}

console.log(somma());

//utilizzo dei parametri
function moltiplica(a: number, b: number): number{
    return a * b;
}

function saluta2(nome: string, cognome: string): string{
    return nome +  ' ' + cognome;
}

function stampa(value: any): any{
    return value;
}

console.log(stampa(false));


function stampa2(value: any): string{
    return value;
}

console.log(stampa2(false));

