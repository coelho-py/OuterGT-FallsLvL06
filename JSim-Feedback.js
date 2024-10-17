import sqlite3 from 'sqlite';
import { open } from 'sqlite';

// try catch para revisar erros
try {
    //variaveis de todos os feedbacks
    var review = document.getElementById('txtFeed').value;

    var nome = document.getElementById('nomeFeed').value;

    var serie = document.getElementById('serieFeed').value;

    var classe = document.getElementById('classeFeed').value;

    //funcao do botao enviar na pagina

    async function enviar(review, nome, serie, classe) {
        const db = await open ({
            filename: 'banco.db',
            driver: sqlite3.Database,
        });

        db.run(`CREATE TABLE IF NOT EXISTS review (id INTEGER PRIMARY KEY, nome TEXT, serie INTEGER, classe TEXT, feedback TEXT)`);

        db.run(`INSERT INTO review (nome, serie, classe, feedback) VALUES( ?,?,?,?)`, [
            review,
            nome,
            serie,
            classe])
    }
} catch (error) {
    //ao encontrar um erro, irá dar um alert falando qual e onde é o erro
    alert(error);
}