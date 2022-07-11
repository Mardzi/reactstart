import './ContactCard.css'
import MockData from '../MockData.json'
function ContactCard() {
    const parsjejson = MockData.map();
    return(
        <div>
            console.log(parsjejson);
        </div>
    )

       
}

export default ContactCard;
//Napraviti funkciju koja ce da uradi show hide contact carda nakon unosa 3 karaktera u search field.