import '../Css/about.css'
import {  
    NavLink
 } from "react-router-dom";
 import '../Css/about.css'
 import { data } from "../FaqsData/data";
 import { useState } from "react";
 
const About = () => {
    const [selected, setSelected] = useState(null)
    
    const toggle = (i) => {
        if (selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
    
    return(
        <div>
            <section className="about">
             <div className="container">
               <div className='nav'><NavLink to="/sectionOne"> Մեր նախագծերը </NavLink> </div>      
               <div className='nav' ><NavLink to="/contactPage"> Կապ  </NavLink> </div>
                          
                 <div className='time'> 
                    <h1>CAPITAL CITY LLC</h1>
                    
                    <p className='text'>Հմուտ մասնագետներից բաղկացած մեր թիմը պատրաստ է օգնելու ձեզ ՝ ձեռք բերելու ձեր երազանքների տունը, ինչպես նաև ՝
                         իրականացնելու ցանկացած առուվաճառքի գործարք և մատուցելու իրավաբանական խորհրդատվություն՝ կապված ձեր գործարքի հետ։
                          Կատարվում են նաև բնակարանների արհեստավարժ վերանորոգում:</p>
                    
                          <p className='text'>
                             Բացի այդ, մեր մասնագետները առաջարկում են կառուցապատողներին հմուտ լուծումներ և լավ գաղափարներ իրենց նախագծերի իրականացման համար։
                          </p>
                 </div>
    

            <div className="faqsBox">
                <div className="faqs">
                    <h2> Կառուցապատողից բնակարան գնելու առավելությունները</h2>
                    
                </div>

                <div className="dataBox">
                    {data.map((item, i) => (
                       <div key={data.id}>
                         <div className="questionBox">
                            <div className="question"  onClick={() => toggle(i)}>
                                <h4>{item.question}</h4>
                                <span>{selected === i ? '⇓': '⇐ '}</span>
                            </div>
                         </div>
                         
                          <div className={ selected === i ? "answer show" : 'answer' }>
                              <p>{item.answer}</p>
                          </div>
                       </div>
                    ))}
                </div>
            </div>



            </div>
            </section>
                
        </div>
    )
}

export default About