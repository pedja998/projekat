$("#add_player").submit(function(event){
    alert("Podaci uspešno uneti");
})
$("#update_player").submit(function(event){
    event.preventDefault();

    var unindexed_array =$(this).serializeArray();
    var podaci={}
    $.map(unindexed_array,function(n,i){
        podaci[n["name"]]=n["value"]
    })
    var request = {
        "url" : `http://localhost:3000/api/players/${podaci.id}`,
        "method" : "PUT",
        "data" : podaci
    }

    $.ajax(request).done(function(response){
        alert("Uspešno izmenjeni podaci");
    })
})
if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/players/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Da li hoćeš da obrišeš igrača??")){
            $.ajax(request).done(function(response){
                alert("Podaci uspešno obrisani!");
                location.reload();
            })
        }

    })
}