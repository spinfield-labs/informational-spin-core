
function simularDiagnostico() {
  const texto = document.getElementById("inputTexto").value;
  const idioma = document.getElementById("idioma").value;
  const estilo = document.getElementById("estilo").value;

  const score = Math.random();  // simulação
  let interpretacao = "⨯ Colapso de Significado";
  let assinatura = "🜏 Void";
  let estado = "🌀 Reavaliar Contexto";

  if (score > 0.95) {
    interpretacao = "∞ Singularidade do Sentido";
    assinatura = "🜂 Logos";
    estado = "🧘 Consciência Expansiva";
  } else if (score > 0.80) {
    interpretacao = "✨ Fluxo Sagrado";
    assinatura = "🜁 Dharma";
    estado = "🎯 Foco Total";
  } else if (score > 0.60) {
    interpretacao = "⧉ Mente Harmonizada";
    assinatura = "🜃 Sphinx";
    estado = "🔍 Leitura Atenta";
  } else if (score > 0.40) {
    interpretacao = "⋈ Limiar";
    assinatura = "🜄 Janus";
    estado = "📘 Diálogo de Clarificação";
  } else if (score > 0.20) {
    interpretacao = "⚠️ Tempestade Entrópica";
    assinatura = "𓂀 Anomalia";
    estado = "🧭 Reorientação";
  }

  document.getElementById("interpretacao").textContent = `💬 Interpretação (${idioma}, ${estilo}): ${interpretacao}`;
  document.getElementById("assinatura").textContent = `🔮 Assinatura Mítica: ${assinatura}`;
  document.getElementById("estado").textContent = `🧭 Estado Sugerido: ${estado}`;
}
