import './MenuButton.css';
function MenuButton(props){
    
    return (
            <div className="dropdown">{props.title}
                <ul className="dropdown-menu">
                    <li>{props.menuitemone}</li>
                    <li>{props.menuitemtwo}</li>
                    <li>{props.menuitemthree}</li>
                </ul>
            </div>

    );
}
export default MenuButton;
// <select>
// <option value="option 1">{props.title}</option>
// <option value="option 1">{props.menuitemone}</option>
//            <option value="option 2">{props.menuitemtwo} </option>
//<option value="option 3">{props.menuitemthree}</option>
//</select>