export class ShoppingCart {
    private readonly items: Item[] = [];

    insertItems(...items: Item[]): void {
        for (const item of items) {
            this.items.push(item);
        }
    }

    quantityItems(): number {
        return this.items.length;
    }

    totalValue(): number {
        return Math.round(
            this.items.reduce((sum, item) => sum + item.price, 0),
        );
    }
}

export class Item {
    constructor(public name: string, public price: number) {}
}

const item1 = new Item("T-shirt", 49.9);
const item2 = new Item("Mug", 36.9);
const item3 = new Item("Cap", 27.9);

const shoppingCart = new ShoppingCart();
shoppingCart.insertItems(item1, item2, item3);
console.log(shoppingCart.totalValue());
console.log(shoppingCart.quantityItems());
