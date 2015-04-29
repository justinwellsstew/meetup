$(function(){
$.getJSON("http://api.meetup.com/2/open_events.json?zip=10001&radius=7&topic=technology&status=upcoming&time=,1w&key=2a4357102314d741b5a75331115722f&callback=?", function (data) { 
  console.log(data)
});

   
})
