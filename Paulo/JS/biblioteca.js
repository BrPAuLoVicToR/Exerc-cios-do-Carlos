function exercicio1(){
    if(document.frm_Exerc1.botao.value == "Mostrar"){
    //Resgatar o valor
    num = document.frm_Exerc1.entrada.value;
    num = Number(num); //Convertendo
    sucessor =  num + 1;
    antecessor = num - 1;
    document.frm_Exerc1.sucessor.value = sucessor;
    document.frm_Exerc1.antecessor.value = antecessor;
    document.frm_Exerc1.botao.value = "Limpar";
}

else{
    num = document.frm_Exerc1.entrada.value = "";
    document.frm_Exerc1.sucessor.value = "";
    document.frm_Exerc1.antecessor.value = "";
    document.frm_Exerc1.botao.value = "Mostrar";
}

}