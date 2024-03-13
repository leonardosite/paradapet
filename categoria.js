
//ATIVAÇÃO DO MENU CATEGORIAS
const categoriaofc = document.querySelector('.seçao-menu');
const cliqueofc = document.querySelector('#botao-categoria');
const fecharofc = document.querySelector('#fechar-categoria');

cliqueofc.addEventListener('click', ()=>{
categoriaofc.classList.add('seçao-menu-ativar')
})

fecharofc.addEventListener('click', ()=>{
categoriaofc.classList.remove('seçao-menu-ativar')
})


//ATIVAÇÃO DO MENU CATEGORIAS PARA MOBILE
const categoriamob = document.querySelector('#seçao-menumob');
const cliquemob = document.querySelector('#botao-categoria');


cliquemob.addEventListener('click', ()=>{
  categoriamob.classList.add('seçao-menumobativar')
  })

  fecharmob.addEventListener('click', ()=>{
    categoriamob.classList.remove('seçao-menumobativar') 
  })









    function ofertas(){
      document.querySelector('.titulo-categoria').innerHTML = "Ofertas";
    }
    
    const fundoofertas = document.querySelector(".fundo-ofertas");
    const cliqueofertas = document.querySelector("#cliqueofertas");
    cliqueofertas.addEventListener('click', ()=>{
    fundoofertas.classList.add("ativar-ofertas")
      
    });

    function religiosos(){
      document.querySelector('.titulo-categoria').innerHTML = "Religião";
    }
    
    const fundoreligio = document.querySelector(".fundo-religio");
    const cliquereligio = document.querySelector("#cliquereligio");
    cliquereligio.addEventListener('click', ()=>{
    fundoreligio.classList.add("ativar-religio");
      
    });


    function romance(){
      document.querySelector('.titulo-categoria').innerHTML = "Romance";
    }
    
    const fundoromance = document.querySelector(".fundo-romance");
    const cliqueromance = document.querySelector("#cliqueromance");
    cliqueromance.addEventListener('click', ()=>{
    fundoromance.classList.add("ativar-romance");
      
    });







    
   
function didaticos(){
  document.querySelector('.titulo-categoria').innerHTML = "Didáticos";
}

const fundodidatico = document.querySelector(".fundo-didaticos");
const cliquedidatico = document.querySelector("#cliquedidatico");
cliquedidatico.addEventListener('click', ()=>{
fundodidatico.classList.add("ativar-didatico")
  
});


function biografia(){
  document.querySelector('.titulo-categoria').innerHTML = "Biografias";
}

const fundobiografia = document.querySelector(".fundo-biografias");
const cliquebiografia = document.querySelector("#cliquebiografia");
cliquebiografia.addEventListener('click', ()=>{
fundobiografia.classList.add("ativar-biografias")
  
});



function Autoajuda(){
  document.querySelector('.titulo-categoria').innerHTML = "Auto Ajuda";
}



