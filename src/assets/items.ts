import website from '../assets/website.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.jpg'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'
import twitter from '../assets/twitter.png'
import { ItemType } from '../ts';

const items: ItemType[] = [{
    "title": "Website",
    "subtitle": "Look at my work!",
    "image": website,
    "link": "https://fahmirizaldi.com" //your personal website or portfolio  link
},
{
    "title": "GitHub",
    "subtitle": "@rizaldifahmi | 🏡 to all my open-source projects",
    "image": github,
    "link": "https://github.com/rizaldifahmi" //Github Profile link
},
{
    "title": "Instagram",
    "subtitle": "@fahmirizaldi |  Shots of my life 🙂",
    "image": instagram,
    "link": "https://instagram.com/fahmirizaldi" //instagram profile link 
},
{
    "title": "Twitter",
    "subtitle": "@fahmirizaIdi | 😉",
    "image": twitter,
    "link": "https://twitter.com/fahmirizaIdi"// twitter profile link 
},
{
    "title": "LinkedIn",
    "subtitle": "Know more about my profession 👨‍💼",
    "image": linkedin,
    "link": "https://www.linkedin.com/in/fahmirizaldi/" // linkedin
},
{
    "title": "Telegram",
    "subtitle": "@chatwithfahmi | Chat with me instantly ",
    "image": telegram,
    "link": "https://telegram.me/chatwithfahmi" //Telegram Pofile 
}]

export default items
