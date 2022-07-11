import Logo from './components/Logo';
import MenuButton from './components/MenuButton';
import SearchField from './components/SearchField';
function App() {
  const buttonname = [
    {   title: 'Services', menuitemone:'Plumber',  menuitemtwo:'Mechanic', menuitemthree:'Electrician'  },
    {   title: 'Schedule', menuitemone:'Call',  menuitemtwo:'Message', menuitemthree:'' },
    {   title: 'Sign in',menuitemone:'Username',  menuitemtwo:'Password', menuitemthree:'three'  }
];
  return (
    <div className='container2'>
      
        <div className='container'>
          <Logo></Logo>
          <MenuButton title={buttonname[0].title} menuitemone={buttonname[0].menuitemone } menuitemtwo={buttonname[0].menuitemtwo} menuitemthree={buttonname[0].menuitemthree}></MenuButton>
          <MenuButton title={buttonname[1].title} menuitemone={buttonname[1].menuitemone } menuitemtwo={buttonname[1].menuitemtwo} menuitemthree={buttonname[1].menuitemthree}></MenuButton>
          <SearchField />
          <MenuButton title={buttonname[2].title} menuitemone={buttonname[2].menuitemone } menuitemtwo={buttonname[2].menuitemtwo} menuitemthree={buttonname[2].menuitemthree}></MenuButton>
          
        </div>
        
    </div>
  );
}

export default App;
