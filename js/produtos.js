$(function(){
    $.getJSON('/model/listar-produtos.php', function(dados){
        dados.forEach(function(el, id){
            
            var tr = '<tr>'
                +'<th>'+ el.Id +'</th>'
                +'<th>'+ el.nome +'</th>'
                +'<th>'+ el.categoria +'</th>'
                +'<th>'+ el.preco +'</th>'
                +'</tr>'
                +'<a href="/produtos-alterar.html" class="btn btn-primary" title="Editar"><i class=""></i></a>'
                +'<a href="/produtos-deletar.html" class="btn btn-danger" title="Deletar"><i class="fas fa-minus-circle"></i> Deletar</a>'
            +'</td>'
        +'</tr>';

        $('#lista-produtos').append(tr);

        });//forEach
    });//JSON
});//funtion