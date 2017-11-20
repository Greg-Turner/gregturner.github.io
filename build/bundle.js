(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint-env jquery */
/* eslint-env es6 */

$(document).ready(function () {
  const aboutEl = $('#about')
  let aboutHTML = ``
  $.ajax({
    'url': '../content/about-content.json',
    'method': 'GET'

  }).then(aboutData => {
    let aboutArray = aboutData.about
    aboutArray.forEach(about => {
      aboutHTML += `
            <h1>${about.pic} ${about.name}</h1>
                <p>${about.background}</p>
                `
    })
    aboutEl.html(aboutHTML)
  })
})

},{}],2:[function(require,module,exports){
/* eslint-env jquery */
/* eslint-env es6 */

$(document).ready(function () {
  const contactEl = $('#contact')
  let contactHTML = `
      <h1>Follow me at:</h1>
      <br>
      `
  $.ajax({
    'url': '../content/contact-content.json',
    'method': 'GET'

  }).then(contactData => {
    let contactArray = contactData.contacts
    contactArray.forEach(contact => {
      contactHTML += `
      <a href="${contact.url}" target="_blank">${contact.icon}</a> ---- 
      `
    })
    contactHTML += `
    </br>
    `
    contactEl.html(contactHTML)
  })
})

},{}],3:[function(require,module,exports){

require('./about-ajax')
// const adminAjax = require('./admin-ajax')
// const blogAjax = require('./blog-ajax')
require('./contact-ajax')
// const navigationBar = require('./navbar')
// const paginationAjax = require('./pagination-ajax')
// const projectsAjax = require('./projects-ajax')
require('./resume-ajax')
const navbarRevealSection = require('./navbar-reveal-section')
const navbarEl = document.getElementById('navbar')
let activeSection = 'about'

navbarEl.innerHTML = `
    <ul class="navigate">
            <li class="noStyle" class="navButton"><a id='aboutLink' href='#'>Main</a></li>
            <li class="noStyle" class="navButton"><a id='blogLink' href='#'>Blog</a></li>
            <li class="noStyle" class="navButton"><a id='projectsLink' href='#'>Projects</a></li>
            <li class="noStyle" class="navButton"><a id='resumeLink' href='#'>Resume</a></li>
            <li class="noStyle" class="navButton"><a id='contactLink' href='#'>Contact</a></li>
            <li class="noStyle" class="navButton"><a id='adminLink' href='#'>Admin Login</a></li>
            `
document.getElementById('aboutLink').addEventListener('click', navbarRevealSection('aboutLink', activeSection))
document.getElementById('adminLink').addEventListener('click', navbarRevealSection('adminLink', activeSection))
document.getElementById('blogLink').addEventListener('click', navbarRevealSection('blogLink', activeSection))
document.getElementById('contactLink').addEventListener('click', navbarRevealSection('contactLink', activeSection))
document.getElementById('projectsLink').addEventListener('click', navbarRevealSection('projectsLink', activeSection))
document.getElementById('resumeLink').addEventListener('click', navbarRevealSection('resumeLink', activeSection))

},{"./about-ajax":1,"./contact-ajax":2,"./navbar-reveal-section":4,"./resume-ajax":5}],4:[function(require,module,exports){
const revealSection = function (item, activeSection) {
  document.getElementById(activeSection).classList.add('hidden')
  document.getElementById(item).classList.remove('hidden')
  activeSection = item
}

module.exports = revealSection

},{}],5:[function(require,module,exports){
/* eslint-env jquery */
/* eslint-env es6 */

$(document).ready(function () {
  const resumeEl = $('#resume')
  let resumeHTML = `
        <h1>Experience</h1>
        <h3>Work History:</h3>
        <ul>
        `
  $.ajax({
    'url': '../content/resume-content.json',
    'method': 'GET'

  }).then(resumeData => {
    let experienceArray = resumeData.experience
    let experienceCategory = 'job'
    experienceArray.forEach(experience => {
      if (experience.category !== experienceCategory && experience.category === 'cert') {
        experienceCategory = experience.category
        resumeHTML += `
            </ul>
            <h3>Certifications:</h3>
            <ul>
            `
      } else if (experience.category !== experienceCategory && experience.category === 'edu') {
        experienceCategory = experience.category
        resumeHTML += `
            </ul>
            <h3>Education:</h3>
            <ul>
            `
      } else {
        resumeHTML += `
        <br>
          `
      }
      resumeHTML += `
                  <li class="noStyle">${experience.icon}  ${experience.name}  ${experience.location}  ${experience.startDate} - ${experience.endDate}</li>
                  <li class="noStyle">${experience.title}</li>
                  <li class="noStyle">${experience.comment}</li>
                  `
    })
    resumeHTML += `
        </ul>
        `
    resumeEl.html(resumeHTML)
  })
})

},{}]},{},[3]);
