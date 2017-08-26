var bio = {
    name: 'Muteb Nidaa',
    role: 'Information Systems / Data Science',
    contacts: {
        mobile: '+966557253969',
        email: 'rkrktktk@gmail.com',
        github: 'MutebNidaa',
        twitter: 'null',
        location: 'Saudi Arabia '
    },
    welcomeMessage: 'Student in College of Computer and Information Sciences of King Saud University.  Developer and Programmer Web Application ',
    skills: ['HTML', 'CSS', 'JavaScript', 'User Interface', 'MySQL', 'PHP'],
    biopic: 'images/fry.jpg',

    display: function() {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        $('#header').prepend(formattedName + formattedRole);
        $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
            formattedGithub + formattedTwitter + formattedLocation);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcomeMessage);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            for (var i = 0, ilength = bio.skills.length; i < ilength; i++) {
                var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
                $('#skills').append(formattedSkills);
            }
        }
    }
};
var education = {
    schools: [{
        'name': 'King Saud University',
        'location': 'Riyadh Saudi ',
        'degree': 'Bachelor of Information Systems Data Science ',
        'majors': ['Information Systems'],
        'dates': '2014 - 2019',
        'url': 'http://ccis.ksu.edu.sa/en'
    }],
    onlineCourses: [{
        'title': 'HTML and CSS and JavaScript ',
        'school': 'w3schools',
        'dates': '2016',
        'url': 'https://www.w3schools.com/html/default.asp'
    }],

    display: function() {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (var i = 0, ilength = education.schools.length; i < ilength; i++) {
                var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
                var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
                var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
                var formattedNameAndDegree = formattedName + formattedDegree;

                $('#education').append(HTMLschoolStart);
                $('.education-entry:last').append(formattedNameAndDegree);
                $('.education-entry:last').append(formattedSchoolDates);
                $('.education-entry:last').append(formattedLocation);

                for (var j = 0, jlength = education.schools[i].majors.length; j < jlength; j++) {
                    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors[j]);
                    $('.education-entry:last').append(formattedMajor);
                }
            }
            $('#education').append(HTMLonlineClasses);

            for (var c = 0, clength = education.onlineCourses.length; c < clength; c++) {
                var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[c].title).replace('#', education.onlineCourses[c].url);
                var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[c].school);
                var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[c].dates);
                var formattedUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[c].url);
                var formattedTitleAndSchool = formattedTitle + formattedSchool;
                $('#education').append(HTMLschoolStart);
                $('.education-entry:last').append(formattedTitleAndSchool);
                $('.education-entry:last').append(formattedOnlineDates);
                $('.education-entry:last').append(formattedUrl);
            }
        }
    }
};
var work = {
    jobs: [{
        employer: 'Enjaz company',
        title: 'Web Develope',
        location: 'Saudi ,Riyadh',
        dates: 'March 2017 - May 2017',
        description: 'I work in Information Systems and development Website'
    }],

    display: function() {
        if (work.jobs.length > 0) {
            for (var i = 0, ilength = work.jobs.length; i < ilength; i++) {
                var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
                var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
                var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
                var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
                var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
                var formattedEmployerAndTitle = formattedEmployer + formattedTitle;

                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last').append(formattedEmployerAndTitle);
                $('.work-entry:last').append(formattedDates);
                $('.work-entry:last').append(formattedLocation);
                $('.work-entry:last').append(formattedDescription);
            }
        }
    }
};
var projects = {
    projects: [{
            'title': 'Animal Trading Cards',
            'dates': 'July 2017',
            'description': 'is project use HTML and CSS in Animal Trading Cards page',
            'images': ['images/project1.png']
        },
        {
            'title': 'Build a portfolio site',
            'dates': 'august 2017',
            'description': 'is project use HTML and CSS and framework in building a portfolio page.',
            'images': ['images/project2.png']
        }
    ],

    display: function() {
        if (projects.projects.length > 0) {
            for (var i = 0, ilength = projects.projects.length; i < ilength; i++) {
                var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
                var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
                var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

                $('#projects').append(HTMLprojectStart);
                $('.project-entry:last').append(formattedTitle);
                $('.project-entry:last').append(formattedDates);
                $('.project-entry:last').append(formattedDescription);

                for (var j = 0, jlength = projects.projects[i].images.length; j < jlength; j++) {
                    var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
                    $('.project-entry:last').append(formattedImage);
                }
            }
        }
    }
};
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
