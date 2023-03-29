import './styles/common.scss'
import './styles/fonts.scss'
import './styles/style.scss'

// import Swiper from 'swiper'

import Swiper from 'swiper';


import 'swiper/css'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {

        320: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        
        600: {
          slidesPerView: 2.3,
          spaceBetween: 10
        },

        1000: {
          slidesPerView: 3.3,
          spaceBetween: 10
        },

        
        1500: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        
        2000: {
          slidesPerView: 4,
          spaceBetween: 10
        }
    }

  });

let cardHolder = document.querySelector('#cardHolder')

console.log(cardHolder)

let agentCardsData = [
    {
        name: 'Ag1-name.svg',
        picture: 'Ag1-img.png',
        birthplace: 'Ag1-birthplace.svg',
        skill: ['Ag1-skill-icon1.svg', 'Ag1-skill-icon2.svg', 'Ag1-skill-icon3.svg', 'Ag1-skill-icon4.svg']
    },
    {
        name: 'Ag2-name.svg',
        picture: 'Ag2-img.png',
        birthplace: 'Ag2-birthplace.svg',
        skill: ['Ag2-skill-icon1.svg', 'Ag2-skill-icon2.svg', 'Ag2-skill-icon3.svg', 'Ag2-skill-icon4.svg']
    },
    {
        name: 'Ag3-name.svg',
        picture: 'Ag3-img.png',
        birthplace: 'Ag3-birthplace.svg',
        skill: ['Ag3-skill-icon1.svg', 'Ag3-skill-icon2.svg', 'Ag3-skill-icon3.svg', 'Ag3-skill-icon4.svg']
    },
    {
        name: 'Ag4-name.svg',
        picture: 'Ag4-img.png',
        birthplace: 'Ag4-birthplace.svg',
        skill: ['Ag4-skill-icon1.svg', 'Ag4-skill-icon2.svg', 'Ag4-skill-icon3.svg', 'Ag4-skill-icon4.svg']
    },

]

for (let element of agentCardsData) {
    cardHolder.insertAdjacentHTML('beforeend', createCard(element))
}

function createCard(element) {
    let basePath = './static/images/'
    return `
    <div class="swiper-slide">
    <div class="agent-card">
        <div class="agent-card__wrap">
            <img class="agent-card__name" src="${basePath + element.name}" alt=""> <!-- #1F2326 -->
            <img class="agent-card__birthplace" src="${basePath + element.birthplace}" alt="">         
        </div>
        <div class="agent-card__container">
            <div class="agent-card__wrapper">
                <picture class="agent-card__img">
                    <img class="agent-card__picture" src="${basePath + element.picture}" alt="">
                </picture>
            </div>
            <div class="agent-card__skills-container">
                <img class="agent-card__skill" src="${basePath+ element.skill[0]}" alt="Skill 1">
                <img class="agent-card__skill" src="${basePath+ element.skill[1]}" alt="Skill 2">
                <img class="agent-card__skill" src="${basePath+ element.skill[2]}" alt="Skill 3">
                <img class="agent-card__skill" src="${basePath+ element.skill[3]}" alt="Skill 4">
                <!-- #1F2326 -->
            </div>
        </div>
    </div>
    </div>
    `
}

const swiper2 = new Swiper('.swiper2',{
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        800: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        1000: {
            slidesPerView: 1.7,
            spaceBetween: 70
        },
        1600: {
            slidesPerView: 2.3,
            spaceBetween: 100  
        },
    }
});

let skillCardsData = [
    {
        heading:'BASIC',
        name: 'Slow Orb',
        description: 'Cast out a radianite orb that breaks into a slowing field upon impact with the ground.',
        image: 'skill-1.svg'
    },
    {
        heading:'SIGNATURE',
        name: 'Healing Orb',
        description: 'Heal an ally or yourself to full health over a few seconds.',
        image: 'skill-2.svg'
    },
    {
        heading:'ULTIMATE',
        name: 'Resurrection',
        description: 'Target a friendly corpse. After a short delay, revive them with full health.',
        image: 'skill-3.svg'
    },
]

let skillsHolder = document.querySelector('#skillsHolder')

for (let element of skillCardsData) {
    console.log(skillCardsData)
    skillsHolder.insertAdjacentHTML('beforeend', createSkillCard(element))
}

function createSkillCard(element) {
    let basePath = './static/images/'
    return `
    <div class="swiper-slide">
        <div class="skill-card">
            <div class="skill-card__wrapper">
                <p class="skill-card__heading">${element.heading}</p>
                <p class="skill-card__name">${element.name}</p>
                <p class="skill-card__description">${element.description}</p>
            </div>
        <img class="skill-card__image" src="${basePath + element.image}" alt="">
        </div>
    </div>
    `
}