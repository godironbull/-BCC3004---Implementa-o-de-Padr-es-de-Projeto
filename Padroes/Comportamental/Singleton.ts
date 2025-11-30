class DBConection {
    private static instance: DBConection;
    private constructor() {
        // Inicialização da conexão com o banco de dados
        console.log("Conexão com o banco de dados estabelecida.");
    }

    public static getInstance(): DBConection {
        if (!DBConection.instance) {
            DBConection.instance = new DBConection();
        }
        return DBConection.instance;
    }

    public query(sql: string): void {
        // Executa uma consulta SQL
        console.log(`Executando consulta: ${sql}`);
    }
}

// Uso
const db1 = DBConection.getInstance();
db1.query("SELECT * FROM users");
const db2 = DBConection.getInstance();
console.log(db1 === db2); // true, ambas as variáveis apontam para a mesma instância