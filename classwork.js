var i;
for (i = 1; i < 101; i++) {

  if(i%10 == 0){
    $('body').append("<font color='red'>" + i + "</font><br>")
  }
  else{
    $('body').append(i + "<br>")
  }
}
