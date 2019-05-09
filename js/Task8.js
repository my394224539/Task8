$(document).ready(function(){
    var apiBase = "https://jsonplaceholder.typicode.com/photos/";
    var id = 0;

    axios.get(apiBase).then(function(){
      $('.btn').on('click',function(){
             id++;
             var url= apiBase + id;
             axios.get(url).then(function(response){
  
                     var link = response.data.url;
                     var title = response.data.title;

                     var $title = $('<p>').html('Title: ' + title);
                     var $imgs = $('<img>').attr("src",link).attr("alt",title);
                    var $link = $('<a>').html(link).attr("href",link);

                     $('#Task8').html([$title,$imgs]);
                     $('#Link').html([$link]);

        }); 
         $('#Link').html('Loading.......');
     });
     
});
});
