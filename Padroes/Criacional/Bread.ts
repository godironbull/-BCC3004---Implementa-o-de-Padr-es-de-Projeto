abstract class Bread{
    prepararIngredientes(): void {
        console.log("Preparando os ingredientes para o pão.");
        this.fazerPao();
        this.assarPao();
        this.servirPao();
        this.embalarPao();
    }
    abstract fazerPao(): void;
    abstract assarPao(): void;
    abstract servirPao(): void;
    abstract embalarPao(): void;
}

class PaoDeForma extends Bread{
    fazerPao(): void {
        console.log("Fazendo pão de forma.");
    }
    assarPao(): void {
        console.log("Assando pão de forma.");
    }
    servirPao(): void {
        console.log("Servindo pão de forma.");
    }
    embalarPao(): void {
        console.log("Embalando pão de forma.");
    }
}

class PaoItaliano extends Bread{
    fazerPao(): void {
        console.log("Fazendo pão italiano.");
    }
    assarPao(): void {
        console.log("Assando pão italiano.");
    }
    servirPao(): void {
        console.log("Servindo pão italiano.");
    }
    embalarPao(): void {
        console.log("Embalando pão italiano.");
    }
}

// Uso
const paoDeForma = new PaoDeForma();
paoDeForma.prepararIngredientes();
console.log("-----");
const paoItaliano = new PaoItaliano();
paoItaliano.prepararIngredientes();