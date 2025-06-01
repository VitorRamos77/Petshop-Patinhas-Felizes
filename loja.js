function filtrar(){
    var input, filter, ul, li, a, i, j, txtValue, span, count = 0;

    //pegar elementos
    input = document.querySelector("#input");
    ul = document.querySelector("#produtos");
    j = document.querySelector("#nEncontrado");
    j.style.display = 'none';


    //FILTRO
    filter = input.value.toUpperCase();

    //PEGAR TODAS AS LI'S
    li = document.getElementsByClassName("produto");

    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].parentElement.style.display = '';
            count++;
            span = li[i].querySelector(".item-name")
            if(span){
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match)=>{return "<strong>" + match + "</strong>"})
            }
            }else{
                li[i].parentElement.style.display = "none";
            }

    }
    console.log(count);
    if(count == 0){
        j.style.display = 'flex';
    }
}