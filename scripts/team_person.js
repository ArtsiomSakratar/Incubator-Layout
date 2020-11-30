let teamPerson = document.querySelector('.team-person');

for (let i = 1; i <= 6; i++) {
    
    let person = document.createElement('div');
    person.classList.add('person');

    let img = getImg(i);
    person.append(img);

    let personAbout = createPersonAbout();
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

function createPersonAbout() {

    let personAbout = document.createElement('div');
    personAbout.classList.add('person-about');

    let personName = createPersonName();
    personAbout.append(personName);

    let description = createDescription();
    personAbout.append(description);

    let personSocial = createPersonSocial()
    personAbout.append(personSocial);

    return personAbout;
}

function createPersonName() {
    
    let personName = document.createElement('div');
    personName.classList.add('person-name');

    personName.innerHTML = 'AL RAYHAN <span>/ UI Designer</span>';

    return personName;
}

function createDescription() {
    
    let description = document.createElement('p');

    description.innerHTML =
        `Lorem Ipsum is not simply is an<br />
        action designer random text<br />
        It has roots in a piece.`;
    
    return description;
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