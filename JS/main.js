//################# BANNER ###############//

let time = 10000,
    currentImgIndex = 0,
    images = document
                .querySelectorAll("#slider img"),
    max = images.length;


    function anteImg(){

        images[currentImgIndex]
            .classList.remove('selected')
    
        currentImgIndex--
    
        if(currentImgIndex <= 0){
            currentImgIndex = 3
        }
    
        images[currentImgIndex]
            .classList.add('selected')
    }

function proxImg(){

    images[currentImgIndex]
        .classList.remove('selected')

    currentImgIndex++

    if(currentImgIndex >= max){
        currentImgIndex = 0
    }

    images[currentImgIndex]
        .classList.add('selected')
}

function start(){
    setInterval(()=>{
        proxImg()
    },time)
}

window.addEventListener("load",start)

//############# CLASSES ###############//

class Pessoa {
    nome;
    telefone;
    email;
    cpf;

}

class Cliente extends Pessoa{
    constructor(nome, telefone, email, cpf){
        super()
        super.nome = nome;
        super.telefone = telefone;
        super.email = email;
        super.cpf = cpf;
    }

    imprime(){
        let impressao = "Nome: " + this.nome + "<br />" +
                        "Telefone: " + this.telefone + "<br />" +
                        "E-Mail: " + this.email + "<br />" +
                        "CPF: " + this.cpf + "<br />";

        return impressao;
    }
}

class Funcionario extends Pessoa{
    endereco;
    filiacao;
    constructor(nome, telefone, email, cpf, endereco, filiacao){
        super()
        super.nome = nome;
        super.telefone = telefone;
        super.email = email;
        super.cpf = cpf;
        this.endereco = endereco;
        this.filiacao = filiacao;

    }

    imprime(){
        let impressao = "Nome: " + this.nome + "<br />" +
                        "Telefone: " + this.telefone + "<br />" +
                        "E-Mail: " + this.email + "<br />" +
                        "CPF: " + this.cpf + "<br />" +
                        "Endereço: " + this.endereco + "<br />" +
                        "Filiação: " + this.filiacao + "<br />";

        return impressao;
    }
}

class Livros {
    titulo;
    autor;
    genero;
    preco;
    capa;
    classificacao;
    estoque;

    constructor(titulo, autor, genero, preco, capa, classificacao, estoque){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.preco = preco;
        this.capa = capa;
        this.classificacao = classificacao;
        this.estoque = estoque;
    }
    
    imprimeVenda(){
        let autores = "";
        let generos = "";

        for(let i = 0; i < this.autor.length; i++){
            autores += this.autor[i] + "<br />"
        }

        for(let i = 0; i < this.genero.length; i++){
            generos += this.genero[i] + "<br />"
        }
            let impressao = '<div class="livro">' +
            '<div class="capa" style="background-image: url('+ this.capa +');">' +
              '<div class="classificação" style="color: red;">' + this.classificacao + '</div>' +
              '<div class="classificação" style="color: aquamarine; float:right;">' + this.estoque + '</div>' +
              '<div class="genero">' + generos + '</div>' +
              '<div class="preco">' + this.preco.toFixed(2) + '</div>' +
            '</div>' +
            '<br />' +
            '<span class="titulo">' + this.titulo + '</span>' +
            '<br />' +
            '<span class="autor">' + autores + '</span>' +
            '</div>'

        return impressao;
    }

    imprime(){
        let autores = "";
        let generos = "";

        for(let i = 0; i < this.autor.length; i++){
            autores += this.autor[i] + ", "
        }

        for(let i = 0; i < this.genero.length; i++){
            generos += this.genero[i] + ", "
        }
            let impressao = 'Classificação: ' + this.classificacao + '<br />' +
                            'Genero: ' + generos  + '<br />' +
                            'Preço: R$' + this.preco.toFixed(2) + '<br />' +
                            'Titulo: ' + this.titulo + '<br />' +
                            'Autor: ' + autores +
                            'Em Estoque: ' + this.estoque;

        return impressao;
    }
}

class Venda{
    Cliente;
    Funcionario;
    Livro;

    constructor(cliente, funcionario, livro){
        this.Cliente = cliente;
        this.Funcionario = funcionario;
        this.Livro = livro;
    }

    imprime(){
        let impressao = 'Cliente: ' + this.Cliente + '<br />' +
                        'Funcionario: ' + this.Funcionario  + '<br />' +
                        'Livro: ' + this.Livro + '<br />';

        return impressao;                        
    }



}



//############ VARIAVEIS ##############//

var Esconder = function(){
document.getElementsByClassName('principal')[0].style.display = 'none';
document.getElementById('Cliente').style.display = 'none';
document.getElementById('Funcionario').style.display = 'none';
document.getElementById('Livros').style.display = 'none';
document.getElementById('listClient').style.display = 'none';
document.getElementById('listFunc').style.display = 'none';
document.getElementById('listBooks').style.display = 'none';
document.getElementById('finalizaCompra').style.display = 'none'
};

var listaClientes = [], listaFunc = [], listaLivros = [], qtdAutores = 1, qtdGeneros = 1;

var listaVendas = [];

var EStock = [];


//############# FUNCTIONS ON FORMS ##########//

function home(){
    Esconder()
    stockBooks()
    document.getElementsByClassName('principal')[0].style.display = 'block';
    
}

/*###CLIENTES###*/

function addClient(){
    Esconder()
    document.getElementById('Cliente').style.display = 'block';
}

function showClients(){

    


}

function showSales(){



}

function cadClient(){

    listaClientes.push(new Cliente(
        document.getElementById('nomeCliente').value,
        document.getElementById('telefoneClie').value,
        document.getElementById('emailCliente').value,
        document.getElementById('cpfCliente').value
    ))

    document.client.reset()
    console.log(listaClientes)
}


/*###FUNCIONARIOS###*/

function addFunc(){
    Esconder()
    document.getElementById('Funcionario').style.display = 'block';



}

function showFunc(){

}

function salesOnFunc(){
    Esconder()
    document.getElementById("listFunc").innerHTML = "";
    document.getElementById('listFunc').style.display = "block"

    if(document.getElementById("listFunc").value!= ""){
        let Vendas = [];
        for(let i = 0 ; i < listaVendas.length ; i++){
            Vendas.push("<div class='cont'>"+
                            listaVendas[i].imprime() +
                            "</div>");
        }
        
        document.getElementById("listFunc").innerHTML = Vendas;
    }
}

function cadFunc(){

    listaFunc.push(new Funcionario(
        document.getElementById('nomeFunc').value,
        document.getElementById('telefoneFunc').value,
        document.getElementById('emailFunc').value,
        document.getElementById('cpfFunc').value,
        document.getElementById('endFunc').value,
        document.getElementById('filiaFunc').value
    ))

    document.func.reset()
    console.log(listaFunc)

}


/*###LIVROS###*/

function addBook(){
    Esconder()
    document.getElementById('Livros').style.display = 'block'

}

function addAutor(){
    qtdAutores++;
    let add = '<div class="form-group row Aut">' +
                    '<label class="col-md-2 control-label" for="autoLivro"> Autor '+ qtdAutores +'º </label>'+
                    '<div class="col-md-8">'+
                        '<input name="autoLivro" type="text"'+
                            'class="form-control">'+

                    '</div>'+
                    '<div class="col-md-2">'+
                    '<span class="material-icons green" onclick="addAutor()">'+
                    'control_point'+
                    '<span class="material-icons red" onclick="removeAutor()">' +
                    'remove_circle' +
                    '</span>' +
                        '</span></div></div>';
    
    document.getElementById("addAutor").innerHTML += add;
}

function removeAutor(){
    if(qtdAutores >= 2) {
    document.getElementsByClassName('Aut')[qtdAutores-1].remove()
    qtdAutores--
    }
}

function addGenero(){
    qtdGeneros++;
    let add = '<div class="form-group row Gen">' +
                    '<label class="col-md-2 control-label" for="generoLivro">Gene ' + qtdGeneros + 'º </label>'+
                    '<div class="col-md-8">'+
                        '<input name="generoLivro" type="text"'+
                            'class="form-control">'+

                    '</div>'+
                    '<div class="col-md-2">'+
                    '<span class="material-icons green" onclick="addGenero()">'+
                    'control_point'+
                    '<span class="material-icons red" onclick="removeGenero()">' +
                    'remove_circle' +
                    '</span>' +
                    '</span></div></div>';
    
    document.getElementById("addGenero").innerHTML += add;
}

function removeGenero(){
    if(qtdGeneros >= 2) {
    document.getElementsByClassName('Gen')[qtdGeneros-1].remove()
    qtdGeneros--
    }
}

function stockBooks(){
    Esconder()
    document.getElementById("listBooks").innerHTML = "";
    document.getElementById('listBooks').style.display = "block"

    if(document.getElementById("listBooks").value!= ""){
        let Livro = [];
        for(let i = 0 ; i < listaLivros.length ; i++){
            Livro.push("<div>"+
                            listaLivros[i].imprimeVenda() +
                            "</div>");
        }
        
        document.getElementById("listBooks").innerHTML = Livro;
    }

}

function sold(){

}

function cadBook(){

    let inputAutor = document.getElementsByName('autoLivro');
    let  inputGenero = document.getElementsByName('generoLivro');
    let autores = [], generos = [];

    EStock.push(Number(document.getElementById('Stock').value));

    for(let i = 0; i<inputAutor.length ; i++){
        autores.push(inputAutor[i].value);
    }

    for(let i = 0; i<inputGenero.length ; i++){
        generos.push(inputGenero[i].value);
    }

    listaLivros.push(new Livros(
        document.getElementById('tituloLivro').value,
        autores,
        generos,
        Number(document.getElementById('precoLivro').value),
        document.getElementById('capaLivro').value,
        document.getElementById('classLivro').value,
        EStock
    ));

    document.livros.reset();
    console.log(listaLivros)
}

//############## VALIDAÇÃO ###############//

function validaClient(){
    if(document.getElementById("venderClient").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let Client;
        for(let i = 0 ; i < listaClientes.length ; i++){
            if(listaClientes[i].nome.toLowerCase().startsWith(document.getElementById("venderClient").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            Client =  "<div class='container valida'>"+
                            listaClientes[ondeAchou].imprime() +
                            "</div>";
        } else {
            Client = "<h3 class='erroValida'>Cliente não encontrado</h3>";
        }

        document.getElementById("validaCliente").innerHTML = Client;

        setTimeout(function(){
            document.getElementById("validaCliente").innerHTML = "";
        }, 10000)
    }
}

function validaFunc(){
    if(document.getElementById("venderFunc").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let Func;
        for(let i = 0 ; i < listaFunc.length ; i++){
            if(listaFunc[i].nome.toLowerCase().startsWith(document.getElementById("venderFunc").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            Func =  "<div class='container valida'>"+
                            listaFunc[ondeAchou].imprime() +
                            "</div>";
        } else {
            Func = "<h3 class='erroValida'>Funcionário não encontrado</h3>";
        }

        document.getElementById("validaFunc").innerHTML = Func;

        setTimeout(function(){
            document.getElementById("validaFunc").innerHTML = "";
        }, 10000)
    }
}

function validaLivro(){
    if(document.getElementById("venderLivro").value!= ""){
        let achou = false;
        let ondeAchou = 0;
        let Livro;
        for(let i = 0 ; i < listaLivros.length ; i++){
            if(listaLivros[i].titulo.toLowerCase().startsWith(document.getElementById("venderLivro").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            Livro =  "<div class='container valida'>"+
                            listaLivros[ondeAchou].imprime() +
                            "</div>";
        } else {
            Livro = "<h3 class='erroValida'>Livro não encontrado</h3>";
        }

        document.getElementById("validaLivro").innerHTML = Livro;

        setTimeout(function(){
            document.getElementById("validaLivro").innerHTML = "";
        }, 10000)
    }
}


//############# VENDER ##################//

function Vender(){
    Esconder()
    document.getElementById('finalizaCompra').style.display = 'block';

}

function finalizarVenda(){
    let cliente = document.getElementById("venderClient").value;
    let func = document.getElementById("venderFunc").value;
    let livro = document.getElementById("venderLivro").value;

    if(
        cliente.innerHTML != "" &&
        func.innerHTML != "" &&
        livro.innerHTML != ""
        
    ){
        listaVendas.push(new Venda(cliente,
                                   func,
                                   livro,
        ));
    } else {
        window.alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
    }

    for(let i = 0 ; i < listaLivros.length ; i++){
        if(listaLivros[i].titulo.toLowerCase().startsWith(document.getElementById("venderLivro").value.toLowerCase())){
                        
            if(listaLivros[i].estoque < 1){
                alert('Não à mais este livro em estoque')
            }else{
                listaLivros[i].estoque--;
            }
        }

    }

    document.finalizaCompra.reset();
}

function Stoque(){
    
}


