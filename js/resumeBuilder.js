var myName =
  "Rachel Presley";
var formattedName =
 HTMLheaderName.replace("%data%", myName);

var role =
  "Front-end Web Developer";
var formattedRole =
 HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedRole);
$("#header").prepend(formattedName);
