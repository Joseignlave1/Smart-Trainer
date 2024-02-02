import './App.css';
import Title from './Components/Title';
import Header from './Components/Header';
import Description from './Components/Description/Description';
import MenuDropDown from './Components/Menu/MenuDropdown';
import About from "./Components/About/About";
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer";
const App = () => {
  return(
    <div className="background__container">
        <Title/>
        <Header/>
        <Description/>
        <div className="app__container">
        <MenuDropDown/>
        <About/>
        <Contact/>
        <Footer/>
        </div>
    </div>
  )
}
export default App;
