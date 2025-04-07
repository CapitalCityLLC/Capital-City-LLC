import '../Css/footer.css'
import logo2 from '../images/logo2.png'


const Footer = () => {
    return(
        <div>
            <section className="footer">
             <div className="container">
                <div className='footerInfoBox'>
                <div className='footerLogo' >
                 <img  src={logo2} width="150" height="110" />
                </div>
              
                <div className='footerInfo'>
                    <a href="tel:+37455-80-50-70"> <i class="fa-solid fa-phone"></i> 055 80 50 70 </a> 
                 </div>
                 <div className='email'>
                    <p> <a href="mailto:capitalcityllcinfo@gmail.com">capitalcityllcinfo@gmail.com</a> </p> 
                 </div>

                <div className='socialLinks'>
                    <div><a href='https://www.facebook.com/profile.php?id=61562664794703'><i class="fa fa-facebook-f">  </i></a></div> 
                    <div><a href='https://www.instagram.com/capital_city_llc?igsh=cXpyNTUyajF1MWRo'><i class="fa fa-instagram">   </i></a></div> 
                    <div><a href='https://www.youtube.com/@CapitalCity-k9u '><i class="fa fa-youtube-play"></i></a></div> 
                </div>

                </div>
              
                
                               
            </div>
            </section>

        </div>
    )
}

export default Footer