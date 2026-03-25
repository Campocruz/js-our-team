const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// selcet DOM node by id card-row
const containerCardEl = document.getElementById('card-row');
// select DOM node from query form
const formEl = document.querySelector('form');
// select DOM node by id for all input
const inmputRole = document.getElementById('inputRole');
const inmputName = document.getElementById('inputName');
const inmputEmail = document.getElementById('inputEmail');
const inmputImg = document.getElementById('inputImg');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

})

for (let i = 0; i < teamMembers.length; i++) {
  // create new DOM object 
  const memberCard = document.createElement('div');
  // add class at the object
  memberCard.classList.add('col');
  // complete the info every iteraction
  memberCard.innerHTML = `
    <div class="card mb-3" style="max-width: 340px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="./assets/${teamMembers[i].img}" class="img-fluid rounded-start" alt="${teamMembers[i].img}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-title text-uppercase">${teamMembers[i].name}</p>
            <p class="card-text">${teamMembers[i].role}</p>
            <p class="card-text">${teamMembers[i].email}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  // insert new object in a card-row
  containerCardEl.appendChild(memberCard);
}