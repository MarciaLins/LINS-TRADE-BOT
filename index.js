import express from "express";
import { createClient } from "@supabase/supabase-js";

const app = express();
const PORT = process.env.PORT || 8080;

// Variáveis do Render
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Função para registrar log
async function registrarLog(mensagem) {
  const { error } = await supabase.from("logs").insert([{ mensagem }]);
  if (error) {
    console.error("Erro ao registrar log:", error.message);
  } else {
    console.log("📌 Log registrado:", mensagem);
  }
}

// Função para registrar operação fictícia
async function registrarOperacaoFake() {
  const { error } = await supabase.from("operacoes").insert([{
    usuario_id: null,       // por enquanto null
    corretora_id: null,     // por enquanto null
    ativo: "AAPL",
    tipo: "COMPRA",
    quantidade: 1,
    preco: 180.50,
    resultado: null
  }]);

  if (error) {
    console.error("Erro ao registrar operação:", error.message);
  } else {
    console.log("📌 Operação fictícia registrada no Supabase!");
  }
}

// Rota principal
app.get("/", async (req, res) => {
  res.send("🤖 Lins Trade Bot oficial conectado ao Supabase!");
});

// Inicia servidor
app.listen(PORT, async () => {
  console.log(Servidor do Lins Trade rodando na porta ${PORT});
  await registrarLog("Robô iniciado oficialmente 🚀");
  await registrarOperacaoFake();
});
