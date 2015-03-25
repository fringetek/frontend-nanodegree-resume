/*bio*/
var bio = {
  contactInfo: {
    "name" : "Rachel Presley",
    "age" : 26,
    "role" : "Front-end Web Developer",
    "phone" : "(703) 647 - 0180",
    "email" : "rachel@shebora.com",
    "picURL" : "https://scontent-atl.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11011889_10206303855420310_1162186412875955130_n.jpg?oh=84b000034ae31227c24b6313ec6d7a42&oe=5584B7D3",
    "welcome" : "Long days and pleasant nights, humans.",
    "skills" : ["HTML/CSS", "JavaScript", "JQuery", "PHP"],
    "git" : "HooahVixen",
    "location" : "Fort Bragg, NC"
  }
}




/*Work*/
var work = [
  {
    "position" : "Domestic Engineer",
    "employer" : "Unwanted Children",
    "years" : "2008-present",
    "location" : "Fort Bragg, NC",
    "desc" : "I have been a stay-at-Home mother so that my husband could follow his dream of joining the army.  I control the finances, buying everything, chauffeur, cook, I'm a 'nurse', provide 'therapy', make and uphold house laws (like judge Dredd), and I handle any other odd job my family requires. I'm amazing at it. Now that my husband is getting out of the army, I've been working on educating myself so he can take a step back and I can become the main bread winner."
  },
  {
    "position" : "Pregnant Receptionist",
    "employer" : "Dance Factory",
    "years" : 2008,
    "location" : "Arlington, VA",
    "desc" : "After my husband went to basic, I needed to make some money so I wouldn't be put out on the streets. I became a receptionist and made $10/hour. I handled calls, administrative work, created flyers, set up for conferences, set up for Friday night parties, threw up a lot (morning sickness), handled money, and I was the first person to greet customers before they went to class (I was really good at keeping students)."
  },
  {
    "position" : "Intern, Receptionist, Dance Instructor, and Executive Assistant",
    "employer" : "Alliance Dance Institute",
    "years" : "2005-2007",
    "location" : "Alexandria, VA",
    "desc" : "I got this job, originally, as an extracurricular activity.  I started (and basically stayed) as a receptionist. I greeted and scheduled customers; created, printed, and handed out flyers; handled money, bought things and set up for parties. Later on I began training to dance. Instead of recieving money, I traded my time for coaching lessons. I trained for competitions and to recieve my in-house certification for dance. Once I was certified, my job title became executive assistant (to the VP)/Dance instructor. My duties were as follows: teach group and private lessons, provide help for new and old students during parties, clean, set up for parties, type to dictation, edit memos, open the studio, keep students happy, create/update flyers, handle other teachers, set up for conferences, any odd jobs that anyone needed me to do, and continue my dance education. I worked up to 14-hour days and I didn't really have a life beyond the studio and school. Once I met my husband, I realized that I couldn't work 7 days a week anymore. I told this to the president of the studio and he said that he couldn't afford to give me time off, so I quit."
  }

]


/*education*/
var education = {
    "highSchools": [
        {
            "name": "Park View High School",
            "location": "Sterling, VA",
            "years": "2002-2003",
            "grad": false
        },
        {
            "name": "Robinson Secondary School",
            "location": "Burke, VA",
            "years": ["2003-2005", "2007"],
            "grad": false
        },
        {
            "name": "T. C. Williams",
            "location": "Alexandria, VA",
            "years": "2005-2006",
            "grad": false
        },
        {
            "name": "GED",
            "location": "Fairfax, VA",
            "years": "2007",
            "grad": true
        }
    ],
    "colleges": [
        {
            "name": "University of Pheonix",
            "location": "Fort Polk, LA",
            "major": "Elementary Education",
            "degree": "no degree",
            "date": "2009-2009"
        }
    ],
    "onlineCourses" : [
      {
        "schoolName" : "Khan Academy",
        "onlineURL" : "https://www.khanacademy.org/",
        "school" : "non-profit",
        "compCourses" : ["Intro to JS: Drawing & Animation", "HTML/CSS: Making webpages", "Hour of Code", "K-2nd Math", "Early Math Fundamentals"],
        "enrolledIn" : ["Advanced JS: Games & Visualizations", "Trigonometry", "Pre-Calculus", "Chemistry"],
        "date" : "2014 - Present"
      },
      {
        "schoolName" : "Code Academy",
        "onlineURL" : "http://www.codecademy.com",
        "school" : "private",
        "compCourses" : ["JavaScript", "jQuery"],
        "enrolledIn" : "PHP",
        "date" : "2015 - Present"
      },
      {
        "schoolName" : "Udacity",
        "onlineURL" : "https://www.udacity.com/",
        "school" : "for-profit",
        "compCourses" : ["Intro to HTML and CSS", "How to Use Git and GitHub"],
        "enrolledIn" : ["JavaScript Basics", "Responsive Web Design Fundamentals"],
        "date" : "2015 - Present"
      }
    ]
}
education.display = function () {
  $("#education").append(HTMLschoolStart);
  var formName = HTMLschoolName.replace("%data%", education.colleges[0].name);
  var formDegree = HTMLschoolDegree.replace("%data%", education.colleges[0].degree);
  var formDate = HTMLschoolDates.replace("%data%", education.colleges[0].date);
  var formLoc = HTMLschoolLocation.replace("%data%", education.colleges[0].location);
  var formMajor = HTMLschoolMajor.replace("%data%", education.colleges[0].major);
  var displayCollege = formName + formDegree + formDate + formLoc + formMajor;
  $("#education").append(displayCollege);

  $("#education").append(HTMLonlineClasses);

  for (i in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].schoolName);
    var formSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
    var formURL = HTMLonlineURL.replace("#", education.onlineCourses[i].onlineURL);
    var formURL = formURL.replace("%data%", education.onlineCourses[i].onlineURL);
    var formOnSchool = formTitle + formSchool + formDate + formURL;
    $("#education").append(formOnSchool);
  }
}
/*Projects*/
var projects = {
  "proj": [
    {
      "title": "Not Really a Project",
      "date": "March 24, 2015",
      "desc": "Just using this as a place holder, because I haven't yet had any real projects I can display at this time. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
      "imgURL": "http://fillmurray.com/284/196"
    },
    {
      "title": "Fake Project",
      "date": "March 24, 2015",
      "desc": "Just using this as a place holder, because I haven't yet had any real projects I can display at this time. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
      "imgURL": "http://fillmurray.com/g/460/300"
    }
  ]
}

/*putting it all on the page*/
var displayWork = function(){

  for (job in work){
    $("#workExperience").append(HTMLworkStart);
    var formEmp = HTMLworkEmployer.replace("%data%", work[job].employer);
    var formPos = HTMLworkTitle.replace("%data%", work[job].position);
    var formEmpTitle = formEmp + formPos;
    var formDate = HTMLworkDates.replace("%data%", work[job].years);
    var formLoc = HTMLworkLocation.replace("%data%", work[job].location);
    var formDesc = HTMLworkDescription.replace("%data%", work[job].desc);
    var formInfo = formDate + formLoc + formDesc;
    var formWork = formEmpTitle + formInfo;
    $(".work-entry:last").append(formWork);
  }
}

var displayBio = function () {

  var formRole = HTMLheaderRole.replace("%data%", bio.contactInfo.role);
  $("#header").prepend(formRole);
  var formName = HTMLheaderName.replace("%data%", bio.contactInfo.name);
  $("#header").prepend(formName);
  var formImg = HTMLbioPic.replace("%data%", bio.contactInfo.picURL);
  $("#header").append(formImg);

  var formMobile = HTMLmobile.replace("%data%", bio.contactInfo.phone);
  var formEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
  var formGit = HTMLgithub.replace("%data%", bio.contactInfo.git);
  var formLoc = HTMLlocation.replace("%data%", bio.contactInfo.location);
  var formContact = formMobile + formEmail + formGit + formLoc;
  $("#topContacts").append(formContact);

  if (bio.contactInfo.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    for (skill in bio.contactInfo.skills){
      var formSkill = HTMLskills.replace("%data%", bio.contactInfo.skills[skill]);
      $("#header").append(formSkill);
    }
  }
}

$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

$("#header").prepend(internationalizeButton);

function inName(name) {
  var nameArray = name.split(" ");
  var firstName = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  var lastName = nameArray[1].toUpperCase();
  nameArray[0] = firstName;
  nameArray[1] = lastName;
  var internationalName = nameArray.join(" ");
  return internationalName;
}

projects.display = function () {
  for (i in projects.proj) {
    $("#projects").append(HTMLprojectStart);
    var formTitle = HTMLprojectTitle.replace("%data%", projects.proj[i].title);
    var formDate = HTMLprojectDates.replace("%data%", projects.proj[i].date);
    var formDescription = HTMLprojectDescription.replace("%data%", projects.proj[i].desc);
    var formImg = HTMLprojectImage.replace("%data%", projects.proj[i].imgURL);
    var projContent = formTitle + formDate + formDescription + formImg;
    $(".project-entry:last").append(projContent);
  }
}

displayBio();
displayWork();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
initializeMap();
