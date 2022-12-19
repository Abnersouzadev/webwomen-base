

function renderCards(array){
    let lista = document.querySelector("ul") 

    array.forEach(vaga => {
        let card = createCard(vaga)

        lista.appendChild(card)
    });
}

function createCard(vaga){
    const li = document.createElement("li")
    const h3 = document.createElement("h3")
    const div1 = document.createElement("div")
    const span1 = document.createElement("span")
    const span2 = document.createElement("span")
    const p = document.createElement("p")
    const div2 = document.createElement("div")
    const span3 = document.createElement("span")
    const button = document.createElement("button")

    li.classList.add("list-item")

    h3.classList.add("titulo-card")
    h3.innerText = vaga.title

    div1.classList.add("detalhes")

    span1.classList.add("item-detalhes")
    span1.innerText = vaga.enterprise

    span2.classList.add("item-detalhes")
    span2.innerText = vaga.location

    p.classList.add("descricao-vaga")
    p.innerText = vaga.descrition

    div2.classList.add("modalidades")
    
    span3.classList.add("modalidade")
    span3.innerText = vaga.modalities

    button.classList.add("botao-vaga")
    button.innerText = "Candidatar"
    button.dataset.id = vaga.id
    
    button.addEventListener("click", event => {
        if(button.innerText == "Candidatar"){
            button.innerText = "Remover Candidatura"
            vagasSelecionadas.push(vaga)
            console.log(vagasSelecionadas)
        }
        else{
            button.innerText = "Candidatar"
        }
    })

    div1.appendChild(span1)
    div1.appendChild(span2)
    div2.appendChild(span3)
    div2.appendChild(button)

    li.appendChild(h3)
    li.appendChild(div1)
    li.appendChild(p)
    li.appendChild(div2)

    return li

}

renderCards(jobsData)

// function renderSelecionadas(array){
//     let divvagasselecionadas = document.querySelector("vagas-selecionadas")
//     let listaSelecionadas = document.querySelector("lista-selecionadas")

//     array.forEach(vaga =>{
//         let card = createcardVagasSelecionadas(vaga)

//         listaSelecionadas.appendChild(card)
//         // divvagasselecionadas.appendChild(listaSelecionadas)
//     })
// }

function createcardVagasSelecionadas(vaga){

    const li = document.createElement("li")
    const div1 = document.createElement("div")
    const h4 = document.createElement("h4")
    const button = document.createElement("button")
    const div2 = document.createElement("div")
    const span1 = document.createElement("span")
    const span2 = document.createElement("span")

    li.classList.add("li-selecionada")

    div1.classList.add("titulo-botao-vaga-selecionada")

    h4.classList.add("titulo-vaga-selecionada")
    h4.innerText = vaga.title

    button.classList.add("botao-vaga-selecionada")
    button.innerText = "Remover"
    button.dataset.cartId = vaga.cartId

    div2.classList.add("detalhes")

    span1.classList.add("item-detalhes")
    span1.innerText = vaga.enterprise

    span2.classList.add("item-detalhes")
    span2.innerText = vaga.location

    div1.appendChild(h4)
    div1.appendChild(button)
    div2.appendChild(span1)
    div2.appendChild(span2)

    li.appendChild(div1)
    li.appendChild(div2)

    return li
}




// renderSelecionadas(vagasSelecionadas)

let ulSelecionadas = document.querySelector("lista-selecionadas")

vagasSelecionadas.forEach(vaga => {
    let card = createcardVagasSelecionadas(vaga)

    ulSelecionadas.appendChild(card)
});


