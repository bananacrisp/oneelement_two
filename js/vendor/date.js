function nextMon(){
  var date = new Date(),
      month = date.getMonth(),
      day = date.getUTCDate();
      months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      while(date.getDay()!= 1) date.setDate(++day);
      return day + " " + months[month]; // return what you need
}

function nextWed(){
  var date = new Date(),
      month = date.getMonth(),
      day = date.getUTCDate();
      months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      while(date.getDay()!= 3) date.setDate(++day);
      return day + " " + months[month]; // return what you need
}

function nextSat(){
  var date = new Date(),
      month = date.getMonth(),
      day = date.getUTCDate();
      months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      while(date.getDay()!= 6) date.setDate(++day);
      return day + " " + months[month]; // return what you need
}


  document.getElementById("nextMon").innerHTML = nextMon();
  document.getElementById("nextWed").innerHTML = nextWed();
  document.getElementById("nextSat").innerHTML = nextSat();