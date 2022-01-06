// Singleton - GoF // Factory Method - GoF
export class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private password: string,
    ) {}

    static getDatabase(host: string, user: string, password: string): Database {
        if (Database.database) {
            console.log("Returning already created database");
            return Database.database;
        }
        console.log("Creating new database");
        Database.database = new Database(host, user, password);
        return Database.database;
    }

    connect(): void {
        console.log(`Connecting: ${this.host}`);
    }
}

const db1 = Database.getDatabase(
    "http://localhost:3306",
    "root",
    "2rt$ws@!5fk93$",
);
db1.connect();

const db2 = Database.getDatabase(
    "http://localhost:3306",
    "root",
    "2rt$ws@!5fk93$",
);
db2.connect();

const db3 = Database.getDatabase(
    "http://localhost:3306",
    "root",
    "2rt$ws@!5fk93$",
);
db3.connect();

const db4 = Database.getDatabase(
    "http://localhost:3306",
    "root",
    "2rt$ws@!5fk93$",
);
db4.connect();
