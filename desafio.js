 console.log('Desafio dos Produtos')
 
 let clienteAlice = [
  { produto: "Blusa preta gola alta", valor: 60.0 },
  { produto: "Short verde canelado", valor: 80.0 },
  { produto: "Salto agulha 39", valor: 250.0 },
];

let clienteManu = [
  { produto: "Calça jeans clara", valor: 130.0 },
  { produto: "Tênis casual preto", valor: 120.0 },
  { produto: "Bolsa pequena", valor: 49.0 },
];


let clienteLilit = [ 
  { produto: "Bolsa pequena", valor: 49.0 },
  { produto: "Cinto preto", valor: 22.0 },
  { produto: "Jaqueta Jeans", valor: 300.0 },
  { produto: "Calça preta", valor: 100.0 },
  { produto: "Blusa simples", valor: 35.0 },
  { produto: "Calça jeans clara", valor: 130.0 },
  { produto: "Blusa preta gola alta", valor: 60.0 },
  { produto: "Short verde canelado", valor: 80.0 },
  { produto: "Salto agulha 39", valor: 250.0 },
  { produto: "Tênis casual preto", valor: 120.0 },
  
];




function desconto(valor){
  if (valor >=50 && valor <=79){
      return valor*0.05;
  }else if (valor >=80 && valor <= 99 ) {
      return valor*0.1
  } else if (valor >=100 && valor <=199){
      return valor*0.2
  } else if(valor >= 200){
      return valor*0.5
   }else {
      return 0 
   }
} 


function cupom(valor, peças){
  if(valor > 800 || peças > 10){
      console.log('Ganhou um cupom de 50 reais');
  }
}

 function compras(produtos){
  valorTotal = 0;
  valorDesconto = 0;
  valorFinal = 0;
  totalPecas = 0;
  for(p of produtos){
      
      totalPecas ++;
      valorTotal += p.valor;
      valorDesconto += desconto(p.valor);

  }
   valorFinal = valorTotal - valorDesconto;
  console.log('Total de peças: ' + totalPecas)
  console.log('valor Total: R$' + valorTotal)
  console.log('valor Desconto: R$' + valorDesconto)
  console.log('valor Final: R$' + valorFinal)

  cupom(valorFinal, totalPecas)
} 


const hoje = new Date();

console.log(hoje); // 2022-04-09T10:56:49.693Z

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

console.log(`${dia}/${mes + 1}/${ano}`); // 09/04/2022 🤔

const dataFormatada = hoje.toLocaleDateString("pt-BR");
console.log(dataFormatada); // 09/04/2022

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dataLonga = hoje.toLocaleDateString("pt-BR", options);
console.log(dataLonga);

console.table('Compras da Lilit')
compras(clienteLilit);
console.log('----------------')
console.table('Compras da Alice')
compras(clienteAlice);
console.log('----------------')
console.table('Compras da Manu')
compras(clienteManu);
console.log('----------------')   


  
 console.log("Desafio dos filmes")

 let data = [
  {
    titulo: "us",
    genero: "terror",
    ano: "2019", 
  },
  {
    titulo: "transformers: O Lado Oculto da Lua",
    genero: ["ação", "sci-fi"],
    ano: "2011", 
  },
  {
    titulo: "moonfall - ameaça lunar",
    genero: ['Aventura', "sci-fi"],
    ano: "2022", 
  },
  {
    titulo: "casa gucci",
    genero: "drama",
    ano: "2021", 
  },
  {
    titulo: "encanto",
    genero: ["animação", "musical"],
    ano: "2021", 
  },
  {
    titulo: "Demon Slayer - Mugen Train",
    genero: ["ação", "fantasia"],
    ano: "2019", 
  },
  {
    titulo: "O Último Suspiro",
    genero: ["drama", "sci-fi"],
    ano: "2019", 
  },
  {
    titulo: "Suspiria",
    genero: "terror",
    ano: "1977", 
  },
  {
    titulo: "Corpo Elétrico",
    genero: ["drama", "ficção"],
    ano: "2017", 
  },
  {
    titulo: "Amour",
    genero: ["drama", "romance"],
    ano: "2012", 
  },
  {
    titulo: "Ninho de Musaranho",
    genero: "terror",
    ano: "2014", 
  },
  {
    titulo: "Colonia",
    genero: "suspense",
    ano: "2015", 
  },
  {
    titulo: "Homem-Aranha: Sem Volta para Casa",
    genero: ["ação", "aventura"],
    ano: "2021", 
  }]

let cliente1 = "Suspense";
let cliente2 = "Corpo Elétrico"
let cliente3 = "Homem-Aranha: Sem Volta para Casa"
let cliente4 = "sci-fi" 
let cliente5 = "romance"

function buscarPorTitulo(entrada) {
let filmesEncontrados = []
entrada = entrada.toLowerCase()
data.forEach(filme => {
   let titulo = filme.titulo.toLowerCase()
   if (titulo.includes(entrada)) {
       filmesEncontrados.push(filme)
   }
})
return filmesEncontrados
}

function buscarPorGenero(entrada) {
let listaPorGenero = []
entrada = entrada.toLowerCase()
for (let filme of data) {
   if (typeof(filme.genero) == "string") {
       let filmeEncontrado = (filme.genero).toLowerCase().includes(entrada)
       !!filmeEncontrado ? listaPorGenero.push(filme) : null
   } else {
       let filmeEncontradoArray = filme.genero.find(genero => genero.toLowerCase().includes(entrada))
       filmeEncontradoArray != undefined ? listaPorGenero.push(filme) : null
   }
}
return listaPorGenero
}


function buscarFilmes(entrada) {
if (typeof(entrada) == "string") {
   let porTitulo = buscarPorTitulo(entrada)
   let porGenero = buscarPorGenero(entrada)
   if(porTitulo.length > 0 && porGenero.length > 0) {
       console.log("--------Encontrados por título--------")
       console.log(porTitulo)
       console.log("--------------------------------------")
       console.log("--------Encontrados por gênero--------")
       console.log(porGenero)
       console.log("--------------------------------------")
   } else if (porTitulo.length > 0) {
       console.log("--------Encontrados por título--------")
       console.log(porTitulo)
       console.log("--------------------------------------")
   } else if (porGenero.length > 0) {
       console.log("--------Encontrados por gênero--------")
       console.log(porGenero)
       console.log("--------------------------------------")
   } else {
       console.log("Nenhum filme ou dado foi encontrado com o valor digitado")
   }    
} else {
   console.log('dado inválido')
}
}


buscarFilmes("Homem")






 
 