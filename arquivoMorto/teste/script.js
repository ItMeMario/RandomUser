$(document).ready(function(){

    var url = "https://randomuser.me/api/?results=10";
    var p ="";
    var radioValue;
    var selectedNationality;
    var loadMore;
    
    });

    function fetchInformation(url){
        fetch(url)
        .then((response) => response.json())
        .then(function(data){

           data.results.forEach(person => {

               p = `<div class="well">
               <img src="${person.picture.medium}" class="img-rounded" alt="Cinque Terre">
               <span style="margin-left:25px;">${person.name.title}  ${person.name.first} ${person.name.last}</span>
               <span>(${person.nat})</span>
               <span style="margin-left:350px;">Email: ${person.email}</span>
               </div>`;
               console.log(p);
               $("#result").append(p);
               
           }); 

          loadMore = '<button id="loadmore" class="btn btn-primary">Load More</button>';

          $("#result").append(loadMore);

          $('#loadmore').on('click', function() {
            fetchInformation(url);
            $(this).remove();
          });
        
           
        })
    }