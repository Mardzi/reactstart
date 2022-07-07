import './ContactCard.css'
import MockData from '../MockData.json'

function ContactCard(){
    return(
        <div>
            {
                MockData.map( record =>{
                    return(
                        <div className='container3'>
                            <div>{ record.avatar}</div>
                            <div>{ record.first_name}</div>
                            <div>{ record.last_name}</div>
                            <div>{ record.email_address}</div>
                            <div>{ record.profession}</div>
                            <div>{ record.phone}</div>
                            <div>{ record.rating }</div>

                        </div>
                        
                    )
                })
            }
        </div>
    )

       
}

export default ContactCard;