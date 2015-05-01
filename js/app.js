
var dataKey;
var jsonURL = "http://api.meetup.com/2/open_events.json?zip=13201&radius=100&topic=art&status=upcoming&time=,1w&key=2a4357102314d741b5a75331115722f&callback=?";

$(document).ready(function(){
   $( "#categories" ).on("click", "li", function(){

      //grab category from li 
      var dataCat = $(this).data();

      //insert catergory into JSON query
      jsonURL = "http://api.meetup.com/2/open_events.json?zip=13201&radius=100&topic="+dataCat.cat+"&status=upcoming&time=,1w&key=2a4357102314d741b5a75331115722f&callback=?";

      //remove child li 
      $('#meetups-list').children().remove('li');

      //run JSON request
      $.getJSON(jsonURL, function (data) { 
        appendData(data);
    });
  });
   

  ////functions///////
  var appendData = function(returnedData){
    $.each( returnedData.results, function( key, value ) {
    
    //convert dates
    //create months array  
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; 

    //convert from unix time 
    var dateConverted = new Date(value.time);

    //create hours and convert to 12hr clock
    var hours = dateConverted.getHours();
    if(hours > 12){
      hours = hours - 12;
    }

    //create month
    var month = months[dateConverted.getMonth()];

    //create date
    var date = dateConverted.getDate();

    // create minutes
    var minutes = "0" + dateConverted.getMinutes();

    // will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(minutes.length-2); 

    //build Cal list
    $('#meetups-list').append('<li data-key="'+key+'"><div class="date-block"><span class="month">'+month+'</span><br><span class="date">'+date+'</span></div><div class="info-block"><stong>'+formattedTime+'<strong><br>'+value.name+'</div></li>');
   });
  }
  
  //add details for menu list clicked 
  $( "#meetups-list" ).on("click", "li", function(){

    //remove child elements from prev requests
     $('#details').children().remove('div');

     //grab data from event list item
    var dataKey = $(this).data();
    
    //pull JSON for details
     $.getJSON(jsonURL, function (data) { 
      $('#details').append('<div style ="background-color:#FFFFFF; padding: .5em">'+data.results[dataKey.key].description + '</div>');
    });
  }); 
});
 