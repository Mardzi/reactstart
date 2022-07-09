import './ContactCard.css'
import MockData from '../MockData.json'
function ContactCard() {
    return(
        <div>
            {
                MockData.map( record =>{
                    return(
                        
                        <div>
                            <div className='container4' >
                                <div  >
                                    <div>{ record.first_name} {record.last_name}</div>
                                </div>
                                <div className='container3'>
                                    <div><img src= {record.avatar} alt={record.name} /></div>
                                    <div>{ record.first_name}</div>
                                    <div>{ record.last_name}</div>
                                    <div>{ record.email_address}</div>
                                    <div>{ record.profession}</div>
                                    <div>{ record.phone}</div>
                                    <div>{ record.rating }</div>
                                </div>
                            </div>
                        </div>
                        
                    )
                   
                })
               
            }
        </div>
    )

       
}

export default ContactCard;
//Napraviti funkciju koja ce da uradi show hide contact carda nakon unosa 3 karaktera u search field.