import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About/About';
import MenuDropDown from './Components/Menu/MenuDropdown';
import Footer from './Components/Footer/Footer';
const App = () => {
  return(
    <div>
      <>
        <Home/>
        <Header/>
        <MenuDropDown/>
        <About/>
        <Footer/>
      </>
    </div>
  )
}
export default App;
