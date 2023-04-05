(async () => {
  const database = require('./db');
  const Produto = require('./product');

  try {
    const resultado = await database.sync();
    console.log(resultado);

    // await database.sync();
    const novoProduto = await Produto.create({
      nome: 'Fundação',
      preco: 100,
      descricao: 'Banco do Brasil'
    })

    console.log(novoProduto);
  } catch (error) {
    console.log(error)
  }

})();