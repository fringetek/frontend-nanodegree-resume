/*Header*/
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

/*bio*/
var skills =
 ["HTML/CSS", "JavaScript", "JQuery", "PHP"];

var bio = {
  "name" : "Rachel",
  "age" : 26,
  "role" : role,
  "phone" : "(703) 647 - 0180",
  "email" : "rachel@shebora.com",
  "picURL" : "https://scontent-atl.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11011889_10206303855420310_1162186412875955130_n.jpg?oh=84b000034ae31227c24b6313ec6d7a42&oe=5584B7D3",
  "welcome" : "Long days and pleasant nights, humans.",
  "skills" : skills,
  "git" : "HooahVixen",
  "loc" : "North Carolina"
}

var formattedPic = HTMLbioPic.replace("%data%", bio.picURL);
$("#header").prepend(formattedPic);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcome);

var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#topContacts").append(formattedEmail);

var formattedPhone = HTMLmobile.replace("%data%", bio.phone);
$("#topContacts").append(formattedPhone);

var formattedGit = HTMLgithub.replace("%data%", bio.git);
$("#topContacts").append(formattedGit);

var formattedLoc = HTMLlocation.replace("%data%", bio.loc);
$("#topContacts").append(formattedLoc);

var formattedSkills = HTMLskills.replace("%data%", bio.skills.join("</li><li>"))
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);


/*Work/edu*/
var work = {
  "position" : "Domestic Engineer",
  "employer" : "Unwanted Children",
  "years" : 7,
  "city" : "Worldwide"
};

var education = {
  "name" : "GED",
  "years" : "0",
  "city" : "Fairfax, VA"
}

var workPosition = HTMLworkTitle.replace("%data%", work["position"]);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(workPosition);

$("#education").append(HTMLschoolStart);
var schoolName = HTMLschoolName.replace("%data%", education.name);
$("#education").append(schoolName);
