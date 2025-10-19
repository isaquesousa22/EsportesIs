import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));


app.post("/register", async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        
        const hash = await bcrypt.hash(senha, 10);

        const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
        db.query(sql, [nome, email, hash], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao cadastrar");
            }
            res.send("Usuário cadastrado com sucesso");
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao processar senha");
    }
});


app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    const sql = "SELECT * FROM usuarios WHERE email = ?";

    try {
        db.query(sql, [email], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro no servidor");
            }
            if (results.length === 0) return res.status(400).send("Usuário não encontrado");

            const user = results[0];
            const senhaCorreta = await bcrypt.compare(senha, user.senha);

            if (!senhaCorreta) return res.status(401).send("Senha incorreta");

            res.send(`Bem-vindo, ${user.nome}!`);
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao processar login");
    }
});

app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));
