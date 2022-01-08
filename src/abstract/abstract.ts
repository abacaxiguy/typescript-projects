export abstract class Character {
    protected abstract emoji: string;

    constructor(
        protected name: string,
        protected strength: number,
        protected health: number,
    ) {}

    attack(character: Character): void {
        this.catchphrase();
        character.looseHealth(this.strength);
    }

    looseHealth(strengthAttack: number): void {
        this.health -= strengthAttack;
        console.log(
            `${this.emoji} - ${this.name} now has ${this.health} of health...`,
        );
    }

    abstract catchphrase(): void;
}

export class Warrior extends Character {
    protected emoji = "\u{1F9DD}";

    catchphrase(): void {
        console.log(this.emoji + " DEMACIAAAAAAAAAAAA!!!!!!!!");
    }
}

export class Monster extends Character {
    protected emoji = "\u{1F9DF}";

    catchphrase(): void {
        console.log(this.emoji + " GRHUAAAAAGH!!!!!!!!");
    }
}

const warrior = new Warrior("Warrior", 100, 1000);
const monster = new Monster("Monster", 87, 1000);

warrior.attack(monster);
warrior.attack(monster);
warrior.attack(monster);
monster.attack(warrior);
monster.attack(warrior);
monster.attack(warrior);
