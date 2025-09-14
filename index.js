import express from "express";
import { createClient } from "@supabase/supabase-js";

const app = express();
const PORT = process.env.PORT || 8080;

// Pega as variáveis de ambiente do Render
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Cria cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Rota principal
app.get("/", async (req, res) => {
  try {
    // Testa conexão com Supabase
    const { data, error } = await supabase.from("teste").select("*").limit(1);

    if (error) {
      throw error;
    }

    res.send(🤖 Lins Trade Bot ativo e conectado ao Supabase!<br>Exemplo de dados: ${JSON.stringify(data)});
  } catch (err) {
    res.send(🤖 Lins Trade Bot ativo, mas erro ao conectar no Supabase: ${err.message});
  }
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(Servidor do Lins Trade rodando na porta ${PORT});
});
