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

// selcet DOM node
const containerCardEl = document.getElementById('container-card');
const formEl = document.querySelector('form');

// select DOM node by id for all input
const inmputName = document.getElementById('inputName');
const inmputRole = document.getElementById('inputRole');
const inmputEmail = document.getElementById('inputEmail');
const inmputImg = document.getElementById('inputImg');

// create new DOM object 
const memberCard = document.createElement('div');
memberCard.classList.add('row', 'row-cols-3', 'mt-3');

// render card in page at first loading
renderCard(teamMembers);

// wait the event submit
formEl.addEventListener('submit', (e) => {
	e.preventDefault();
	// read and add new member in array list
	const newMember = {
		name: inmputName.value,
		role: inmputRole.value,
		email: inmputEmail.value,
		img: inmputImg.value
	};
	teamMembers.unshift(newMember);
	// render card in page after submit with new data in array
	renderCard(teamMembers);
})

// function to render the card in a element of DOM
function renderCard(listMembers) {
	let markupCard = '';
	for (let i = 0; i < listMembers.length; i++) {
		markupCard += markupGenerator(listMembers[i]);
	}
	memberCard.innerHTML = markupCard
	containerCardEl.appendChild(memberCard)
}

// Function to generate markup string
function markupGenerator(members) {
	// complete the info every iteraction
	const subStringImg = members["img"].substring(4);
	const markupString = `
    <div class="col mt-3">
      <div class="card mb-3" style="max-width: 340px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="./assets/${members.img}" class="img-fluid rounded-start" alt="${subStringImg}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-title text-uppercase">${members.name}</p>
              <p class="card-text">${members.role}</p>
              <p class="card-text">${members.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
	return markupString;
}