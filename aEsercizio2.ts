// Vediamo quindi : la classe Prodotto con le sue chiavi, e la classe inventario che si compone con un array di Prodotto e una funzione per aggiungere un prodotto all'array.

// Compito per voi :
// Creare una funzione per visualizzare il contenuto dell'array Inventario (tramite console.log() va benissimo)
// Creare una funzione main() per aggiungere un paio di prodotti nell'inventario, e sfruttare la funzione per mostrare in console i prodotti.
//============================================================================
    
// Итак, давайте посмотрим: класс Product с его ключами и класс inventory, который состоит из массива Products и функции для добавления продукта в массив.

// Задача для вас :
// Создайте функцию для отображения содержимого массива Inventory (можно через console.log()).
// Создайте функцию main() для добавления пары продуктов в инвентарь и используйте функцию для отображения продуктов в консоли. 

class Prodotto {    
    constructor(
        public nome: string,
        public descrizione: string,
        public prezzo: number,
        public quantitaDisponibile: number) {
        
}

    toString() {
        return `Nome: ${this.nome}, descrizione: ${this.descrizione}, prezzo: ${this.prezzo}, disponibile quantita: ${this.quantitaDisponibile}`
}
}
class Inventario {
    private prodotti: Prodotto[] = [];

    aggiungiProdotto(prodotto: Prodotto): void {
        this.prodotti.push(prodotto);
    }

    main(prodotto1: Prodotto, prodotto2: Prodotto): void {
        this.prodotti.push(prodotto1);
        this.prodotti.push(prodotto2);
    }

    toStringAllProducts() {
        for (let index = 0; index < this.prodotti.length; index++) {
    console.log(this.prodotti[index]);
        }
    }
}

const testInventario = new Inventario()
testInventario.aggiungiProdotto(new Prodotto("Nome1", "descrizione1", 100, 10))
testInventario.aggiungiProdotto(new Prodotto("Nome2", "descrizione2", 200, 20))
testInventario.aggiungiProdotto(new Prodotto("Nome3", "descrizione3", 300, 30))
testInventario.aggiungiProdotto(new Prodotto("Nome4", "descrizione4", 400, 40))

let prodotto1 = new Prodotto("Primo Paio", "descrizione1", 500, 50)
let prodotto2 = new Prodotto("Secondo Paio", "descrizione2", 600, 60)

testInventario.main(prodotto1, prodotto2)

testInventario.toStringAllProducts()
