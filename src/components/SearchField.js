import './SearchField.css'
import MockData from '../MockData.json'
import { useState } from 'react';
function SearchField(){
    const [threeLetters, setThreeLetters] = useState('');
    const [change, setChange] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  const makeChange = (e) => {
    setChange((e.prev = !e.prev));
  };


    

    
       
    return (
        <div className='searchfield'>
            <form >
                <input type="text" className='searchfieldinput' size='60'  onKeyUp={makeChange}
                onChange={(event) => {
                    setThreeLetters(event.target.value);
                  }}></input>
            </form>
            <div className='newclas'>
                {MockData.filter((val ) =>{
                    if (threeLetters==''){
                        return val;
                    }
                    else if(
                        val.first_name.toLowerCase().includes(threeLetters().toLowerCase())
                    ){
                        return val;
                    }
                    
                }).map((val, key) => {
                    return (
                        <div>
                        <div className='newclas2' >
                            <div  className='newclas'>
                                <div>{ val.first_name} {val.last_name}</div>
                            </div>
                            <div className='newclas'>
                                <div><img src= {val.avatar} alt={val.name} /></div>
                                <div>{ val.first_name}</div>
                                <div>{ val.last_name}</div>
                                <div>{ val.email_address}</div>
                                <div>{ val.profession}</div>
                                <div>{ val.phone}</div>
                                <div>{ val.rating }</div>
                            </div>
                        </div>
                    </div>
                    );
                  })}
            </div>
        </div>
    );
    
}
export default SearchField;