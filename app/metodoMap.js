function aplicarDesconto(livros){
    const desoconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desoconto)}
    })

    return livrosComDesconto
}