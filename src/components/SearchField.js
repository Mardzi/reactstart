import './SearchField.css'
import MockData from '../MockData.json'
import { useState } from 'react';
function SearchField(){
    const [change, setChange] = useState(false);
    const [threeLetters, setThreeLetters] = useState('');

    const makeChange = (e) => {
        setChange((e.prev = !e.prev));
      };

    
       
    return (
        <div className='searchfield'>
            <form >
                <input type="text" className='searchfieldinput' size='60' onKeyUp={makeChange} 
                onChange={(event) => {
                    threeLetters(event.target.value);
                  }}></input>
            </form>
            <div className='container2'>
                {MockData.filter((vrednost ) =>{
                    if (threeLetters==''){
                        return vrednost;
                    }
                    else if(
                        vrednost.first_name.toLowerCase().includes(threeLetters().toLowerCase())
                    ){
                        return vrednost;
                    }
                    
                }).map}
            </div>
        </div>
    );
    
}
export default SearchField;