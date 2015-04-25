
var key = "72331513076e6a444f506c43167c69";
var urlName = "ny-tech";


var result = $.getJSON("http://api.meetup.com/2/events?key=" + key +"&group_urlname="+urlName+"&sign=true", function(data){
  return data;
});

console.log(result);
