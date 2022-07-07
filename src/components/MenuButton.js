import App from '../App';
import './MenuButton.css';
function MenuButton(props){
    const title = 'title';
    const menuitemone ='Nesto';
    const menuitemtwo ='hiperlink2';
    const menuitemthree = "Trojcica";
    return (
            <div class="dropdown">{props.title}
                <ul class="dropdown-menu">
                    <li><a href="#">{props.menuitemone}</a></li>
                    <li><a href="#">{props.menuitemtwo}</a></li>
                    <li><a href="#">{props.menuitemthree}</a></li>
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