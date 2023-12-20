const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    }
];

teamMembers.forEach(member => {
    console.log(`Name: ${member.name}, Role: ${member.role}, Image: ${member.image}`);
});

const teamContainer = document.getElementById('team-container');

teamMembers.forEach(member => {
    const memberInfo = document.createElement('div');
    memberInfo.innerHTML = `<p>Name: ${member.name}</p><p>Role: ${member.role}</p><img src="${member.image}" alt="${member.name}">`;
    teamContainer.appendChild(memberInfo);
});

// IN PIU
document.getElementById('prev').addEventListener('click', function () {
    document.getElementById('team-container').scrollLeft -= 300;
});

document.getElementById('next').addEventListener('click', function () {
    document.getElementById('team-container').scrollLeft += 300;
});

