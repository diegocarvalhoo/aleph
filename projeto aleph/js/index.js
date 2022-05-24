let DADOS_CLIENTE

function tipoEntrega(){
    const SELECAO = document.getElementById('entrega')
    const OPCAO = SELECAO.options [SELECAO.selectedIndex].value

    if( OPCAO =='entrega') {
        document.getElementById('modal-entrega').style.display='block'
    }else{
        document.getElementById('modal-entrega').style.display='block'
    }
}

function salvarEndereco(){
    const RUA =document.getElementById('rua').value
    const NUMERO =document.getElementById('numero').value
    const BAIRRO =document.getElementById('bairro').value
    const COMPLEMENTO =document.getElementById('complemento').value
console.log(RUA,NUMERO,BAIRRO,COMPLEMENTO)
    const PEDIDO = document.getElementById('pedido')

    DADOS_CLIENTE = `Pedito número #001\n` +
    `Rua: ${RUA}, Nº: ${NUMERO}\n` +
    `BAIRRO: ${BAIRRO}, COMPLEMENTO: ${COMPLEMENTO}\n` 

    PEDIDO.value = DADOS_CLIENTE

    document.getElementById('modal-entrega').style.display='none'
}

function enviarPedido(){
    let fone = 'https://wa.me/5585987723878?'
    DADOS_CLIENTE

}