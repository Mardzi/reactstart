import './SearchField.css'
import MockData from '../MockData.json'
import {useState} from 'react';
function SearchField() {
    const [filterOutput, setFilterOutput] = useState('');
    const [changeClass, setChangeClass] = useState("borders2");
    


    const changer = () => {
        setChangeClass((prev) => !prev);
    };
    return (
        <div className='searchfield'>
            <form>
                <input type="text" className='searchfieldinput' size='60'
                    onChange={
                        (event) => {
                            setFilterOutput(event.target.value);
                        }
                }></input>
        </form>
        <div> {
            MockData.filter((val) => {
                if (filterOutput == "") {
                    console.log();
                    
                } else if (val.first_name.toLowerCase().includes(filterOutput.toLowerCase())) {
                    return val;
                    
                }else if (val.last_name.toLowerCase().includes(filterOutput.toLowerCase())) {
                    return val;
                }
            }).map((val, key) => {


                return (
                    <div className='directions'
                        onMouseOver={changer}
                        onMouseOut={changer}>
                        <div className='borders'>
                            <div className='textalign'>
                                {
                                val.first_name
                            } 
                                {
                                val.last_name
                            }</div>
                        </div>
                        <div className={
                            changeClass ? 'borders2' : 'borders'
                        }>
                            <div><img src={
                                        val.avatar
                                    }
                                    alt={
                                        val.name
                                    }/></div>
                            <div>{
                                val.first_name
                            }</div>
                            <div>{
                                val.last_name
                            }</div>
                            <div>{
                                val.email_address
                            }</div>
                            <div>{
                                val.profession
                            }</div>
                            <div>{
                                val.phone
                            }</div>
                            <div>{
                                val.rating
                            }</div>
                        </div>
                    </div>
                );
            })
        } </div>
    </div>
    );

}
export default SearchField;
