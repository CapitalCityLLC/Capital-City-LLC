import Header from "./Header/header";
import SectionOne from "./SectionOne/sectionOne";
import Footer from "./Footer/footer"
import ContactPage from "./Contact/contactPage";
import About from "./About/about";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div>
      <Header/>
      <Routes>
      <Route path="/*" index element={<SectionOne/>}/>
      <Route path="about" index element={<About/>}/>
      <Route path="contactPage" element={<ContactPage/>}/> 
      </Routes> 
      <Footer/>
  
       </div> 
    </BrowserRouter>
  );
}
 
export default App;
