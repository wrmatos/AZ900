module.exports = async function (context, req) {
    const produtos = ["Produto A", "Produto B", "Produto C"];
    const venda = {
        produto: produtos[Math.floor(Math.random() * produtos.length)],
        valor: (Math.random() * 100).toFixed(2),
        timestamp: new Date().toISOString()
    };
    
    context.bindings.outputTable = venda; // Envia para o Table Storage
    
    context.res = {
        body: venda
    };
};