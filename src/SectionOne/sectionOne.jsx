import '../Css/sectionOne.css'
import img1 from '../images/2.jpg'
import SectionFive from '../SectionFive/sectionFive'
import SectionFour from '../SectionFour/sectionFour'
import SectionThree from '../SectionThree/sectionThree'
import SectionTwo from '../SectionTwo/sectionTwo'
import SectionSix from '../SectionSix/sectionSix'


import { 
  NavLink
} from "react-router-dom";


const SectionOne = () => {


    return(
        <div>
            <section className="section1">
             <div className="container">
                 <div className='info' >
                      <div className='capitalInfo'>
                         <h3>Capital City LLC</h3>
                         <h2> ԸՆՏՐԻՐ ՔՈ ԵՐԱԶԱՆՔՒ ԲՆԱԿԱՐԱՆԸ ՄԵԶ ՀԵՏ</h2>
                         <p>Մեր ընկերությունը առաջարկում է Ձեզ բնակարաններ անմիջապես կառուցապատողից</p>
                         <div className='abouts'><NavLink to="/about">Մեր մասին ⇗ </NavLink> </div>
                      </div>

                   <div className='imgBox'>
                       <div className='img1'>
                         <img  src={img1} width="593" height="750" />
                       </div>
                    </div>



                  </div>

                  
            </div>
            </section>
                 
                  <SectionSix/>
                  <SectionTwo/>
                  <SectionThree/>
                  <SectionFour/> 
                  <SectionFive/>
                  
                  
        </div>
    )
}

export default SectionOne 

          