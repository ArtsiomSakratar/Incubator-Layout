let teamPerson = document.querySelector('.team-person');

let team = [
    {
        name: "Dianne Hickman",
        position: "UI Designer",
        description: "Designers also research targeted users to develop a clear understanding of their needs."
    }, {
        name: "Woody Rogers",
        position: "QA Automation",
        description: "Refers to using a separate piece of software to run tests on the software that you're developing."
    },{
        name: "Verity Morgan",
        position: "Developer",
        description: "Engineer who can handle all the work of databases, servers, systems engineering, and clients."
    }, {
        name: "Korey Bernard",
        position: "Project Manager",
        description: "Process of leading the work of a team to achieve goals and meet success criteria at a specified time."
    },{
        name: "Kathryn Christian",
        position: "Business Analyst",
        description: "Used to identify and articulate the need for change in how organizations work."
    }, {
        name: "Elisa Gale",
        position: "Team Lead",
        description: "Provides guidance, instruction, direction and leadership to a group of individuals."
    }
];

const TEAM_SIZE = 6;

for (let i = 0; i < TEAM_SIZE; i++) {
    let person = document.createElement('div');
    person.classList.add('person');

    let img = getImg(i+1);
    person.append(img);

    let personAbout = createPersonAbout(i);
    person.append(personAbout);

    teamPerson.append(person);
}

/*  #####  FUNCTIONS  #####  */

function getImg(personNum) {
    let img = document.createElement('img');
    img.src = `./images/team_${personNum}.png`;
    img.alt = `Person ${personNum}`;
    return img;
}

function createPersonAbout(personNum) {
    let personAbout = document.createElement('div');
    personAbout.classList.add('person-about');
    let personName = createPersonName(personNum);
    personAbout.append(personName);
    let description = createDescription(personNum);
    personAbout.append(description);
    let personSocial = createPersonSocial()
    personAbout.append(personSocial);
    return personAbout;
}

function createPersonName(personNum) {
    let personName = document.createElement('div');
    personName.classList.add('person-name');
    personName.innerHTML = `${team[personNum].name} <span>/ ${team[personNum].position}</span>`;
    return personName;
}

function createDescription(personNum) {
    let descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description');
    let description = document.createElement('p');
    description.innerHTML = team[personNum].description;
    descriptionContainer.append(description);
    return descriptionContainer;
}

function createPersonSocial() {
    let personSocial = document.createElement('div');
    personSocial.classList.add('person-social');
    let facebook = getSocial('facebook');
    personSocial.append(facebook);
    let twitter = getSocial('twitter');
    personSocial.append(twitter);
    let dribbble = getSocial('dribbble');
    personSocial.append(dribbble);
    let mail = getSocial('mail');
    personSocial.append(mail);
    return personSocial;
}

function getSocial(service) {
    let social = document.createElement('a');
    social.target = '_blank'
    let socialIcon = document.createElement('i');

    switch (service) {
        case 'facebook':
            social.href = 'https://www.facebook.com/';
            socialIcon.classList.add('fab');
            socialIcon.classList.add('fa-facebook-f');
            break;
        case 'twitter':
            social.href = 'https://twitter.com/';
            socialIcon.classList.add('fab');
            socialIcon.classList.add('fa-twitter');
            break;
        case 'dribbble':
            social.href = 'https://dribbble.com/';
            socialIcon.classList.add('fab');
            socialIcon.classList.add('fa-dribbble');
            break;
        case 'mail':
            social.href = 'https://mail.google.com/';
            socialIcon.classList.add('far');
            socialIcon.classList.add('fa-envelope');
            break;
    }

    social.append(socialIcon);
    return social;
}