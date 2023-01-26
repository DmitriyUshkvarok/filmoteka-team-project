import teamsModal from '../templates/team-modal.hbs'
import *as basicLightBox from "basiclightbox";
import 'basiclightbox/dist/basicLightbox.min.css';



const teamLink = document.querySelector('.info-user-container');
teamLink.addEventListener('click', onTeamLinkClick);

function onTeamLinkClick(event) {
    event.preventDefault();
    const markUp = teamsModal();
    const instance = basicLightBox.create(markUp);
    instance.show();
}