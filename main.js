import './style.css';

document.querySelector('#app').innerHTML = `
<h1 class="title"><span>Reliable, efficient delivery</span>
Powered by Technology</h1>
<p class="description">Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful</p>
<div class="card__container">
<div class="card__item border-one">
  <h2 class="head__title">Supervisor</h2>
  <p class="card__discription">Monitors activity to identify project roadblocks</p>
  <img src="./img/icon-supervisor.svg" alt="">
</div>
<div class="card__item border-two">
  <h2 class="head__title">Team Builder</h2>
  <p class="card__discription">Scans our talent network to create the optimal team for your project</p>
  <img src="./img/icon-team-builder.svg" alt="">
</div>
<div class="card__item border-tree">
  <h2 class="head__title">Karma</h2>
  <p class="card__discription">Regularly evaluates our talent to ensure quality</p>
  <img src="./img/icon-karma.svg" alt="">
</div>
<div class="card__item border-x">
  <h2 class="head__title">Calculator</h2>
  <p class="card__discription">Uses data from past projects to provide better delivery estimates</p>
  <img src="./img/icon-calculator.svg" alt="">
</div>
</div>
`

