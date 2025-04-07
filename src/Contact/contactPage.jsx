import '../Css/contactPage.css'
import { 
    NavLink
  } from "react-router-dom";
  
const ContactPage = () => {
  

    return(
        <div>
            <section className="contactPage">
            <div className="container"> 

            <div className='nav'><NavLink to="/sectionOne"> Մեր նախագծերը </NavLink> </div>      
            <div className='nav'><NavLink to="/contactPage"> Կապ  </NavLink> </div>
            <div className='nav'><NavLink to="/about">Մեր մասին  </NavLink> </div>
                <div className='contact'>
                    <h2>Կոնտակտներ </h2>
                    <p>Մեր մասնագետները սիրով կպատասխանեն Ձեր հարցերին</p> 
                </div>
                
                   
               <div className='contactInfo'>
                
                   <div className='contactBox'>
                        <div className='icon' ><i class="fa-solid fa-location-dot"></i> </div>
                        <p>Ն. Տիգրանյան 1-ին փակուղի 8-րդ շենք</p>
                  </div>
                   <div className='contactBox'>
                        <div className='icon' > <i class="fa-solid fa-phone"></i> </div>
                        <a  className='tel2'href="tel:+37455-80-50-70"> +374 55 805070</a>
                   </div>
                   <div className='contactBox'>
                        <div className='icon' ><i class="fa-solid fa-envelope"></i></div>
                        <p><a href="mailto:capitalcityllcinfo@gmail.com">capitalcityllcinfo@gmail.com</a>  </p>
                   </div>
                   
               </div>

               <div className="map">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.5916533133491!2d44.517731234987515!3d40.21240971540057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd80a53161b1%3A0x93637569f4c14f3f!2sCapital%20City%20Realty!5e1!3m2!1sru!2sam!4v1742805974495!5m2!1sru!2sam"  
                    width="100%"
                    height="500px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    />
                    

            </div>

            </div>
            </section>

        </div>
    )


}

export default ContactPage


