import './SearchField.css'
function SearchField(){
    return (
        <div className='searchfield'>
            <form >
                <input type="text" className='searchfieldinput' size='60' ></input>
            </form>
        </div>
    );
}
export default SearchField;