function populate(s1,s2){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  if(s1.value == "Barnes Green"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Battersea Park"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Parsons Green"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Putney"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "St Margarets"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Tooting"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Twickenham"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Wandsworth Common"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Wandsworth West Side"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Wimbledon Park"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Vauxhall"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  } else if(s1.value == "Teddington"){
    var optionArray = ["|choose a time","Sat 9:00am|Sat 09.00","Thu 7:30pm|Thu 19.30","Tue 7:30pm|Tue 19.30"];
  }
  for(var option in optionArray){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}
