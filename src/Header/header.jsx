import '../Css/header.css'
import logo from '../images/Logo.png'



const Header = () => {
    return(
        <div>
            <section className='section'>
                <div className="container">
                    <div className='header'>
                        <div className='logo'>
                            <img  src={logo} alt='logo.img' width="150" height="110"  />
                        </div >
                    
              
                        <div>
                            <div className='tel'> <a href="tel:+37455-80-50-70">  <i class="fa-solid fa-phone"></i>  055 80 50 70 </a>  </div>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header


