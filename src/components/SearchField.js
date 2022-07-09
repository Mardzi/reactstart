import './SearchField.css'
import ContactCard from './ContactCard';
function SearchField(){
   
    return (
        <div className='searchfield'>
            <form >
                <input type="text" className='searchfieldinput' size='60'></input>
            </form>
            <div className='container2'><ContactCard /></div>
        </div>
    );
    
}
export default SearchField;