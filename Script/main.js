// Hamburger menu
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
  $('.mobile-nav ul li a').on('click', () => {
    $('#onclick').click();
  });
});
// end of Hamburger menu
const ourTeam = [
  {
    image: '/Capstone-Project/assets/1.png',
    title: 'Scott Charles',
    subTitle: 'Software Engineer',
    info: 'Worked with other programmers to develop Kiyu the best online tranding platfom in 2017.',
  },
  {
    image: '/Capstone-Project/assets/2.webp',
    title: 'Scott Charles',
    subTitle: 'Frontend Developer',
    info: 'Worked with other programmers to develop Kiyu the best online tranding platfom in 2017.',
  }, {
    image: '/Capstone-Project/assets/3.jpg',
    title: 'Scott Charles',
    subTitle: 'Backend Developer',
    info: 'Worked with other programmers to develop Kiyu the best online tranding platfom in 2017.',
  }, {
    image: '/Capstone-Project/assets/4.jpg',
    title: 'Scott Charles',
    subTitle: 'Full Stack Developer',
    info: 'Worked with other programmers to develop Kiyu the best online tranding platfom in 2017.',
  }, {
    image: '/Capstone-Project/assets/5.jpeg',
    title: 'Scott Charles',
    subTitle: 'DevOps Engineer',
    info: 'Worked with other programmers to develop Kiyu the best online tranding platfom in 2017.',
  }, {
    image: '/Capstone-Project/assets/6.jpeg',
    title: 'Scott Charles',
    subTitle: 'Software Engineer',
    info: 'Worked with other programmers to develop Kiyu the best online tranding platfom in 2017.',
  },

];

ourTeam.forEach((element, i) => {
  const team = document.querySelector('#team');
  console.log(team);
  const card = document.createElement('div');
  card.classList = 'card';
  const teamcard = `
  <div class="row" id="dynamic-card">
 <div class="col-sm-12 col-md-12" id="hor">
  <img src="${ourTeam[i].image}">
  <div class="details">
    <h4 class="CT">${ourTeam[i].title}</h4>
    <h6 class="CST">${ourTeam[i].subTitle}</h6>
    <p class="INFO">${ourTeam[i].info}</p>
  </div>
 </div>
 </div>

`;
  card.innerHTML = teamcard;
  team.appendChild(card);
});
