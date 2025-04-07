import '../Css/sectionTwo.css';
import arinj from '../images/arinj.jpg'
import { AvanProjects } from "../Avan/avanProjects"

const SectionTwo = () => {
    return(
        <div>
            <section className="section2">
             <div className="container">
            


                <div className='norNorqBox'>
                      <h4> Կոտայքի մարզ, գ. Առինջ </h4>

                      <div className='norNorqInfo'>
                            <div className='infoBox'>
                                <p className='norNorqTitle'>
                                «NEW ARINJ RESIDENCE» բնակելի համալիրը բաղկացած է 2 մասնաշենքերից </p>
                                <div className='infoSpan'>
                                    <span> 
                                       <p>⚬ Գործում է եկամտային հարկի վերադարձի օրենքը</p>     
                                       <p>⚬ Հարկեր՝ 8   </p> 
                                       <p>⚬ Բնակարանների մակերեսներ՝ 40.4 քմ-ից մինչև 101.3քմ</p>  
                                       <p>⚬ Շինարարական աշխատանքների ավարտ՝ 2026 թ. սեպտեմբեր</p> 
                                       <p>⚬ Համագործակցող բանկ՝ INECOBANK</p>
                                        
                                </span>
                                </div>
                               
                                <p className='price'> Սկսած 430․000 դրամ</p>
                                <button className='norqBtn'> <a href="tel:+37455-80-50-70">Իմանալ ավելին   <i class="fa-solid fa-phone-flip" ></i></a> </button>
                            </div>
                          <div > <img  src={arinj}  width="520" height="640"/>  </div>
                      </div>
                </div>


          <div className='avan'>
     
             <div className='title'> 
                    <h4> Ավան վարչական շրջան</h4>
            </div>
                <div className='projectsAvan'>

         {
                     AvanProjects.map((item) => ( 
                      
                           <div key={AvanProjects.id} className='boxAvan' >
                           
                                <div className='imgAvan'>  <img  src={item.avatar}  width="400" height="450"  />  </div>   
                                <div className='avatarname'>
                                     <p className='name'>{item.name}</p>
                                     <span> {item.description}</span>  
                                     <h1 className='square'>{item.square} </h1>
                                     <p className='end'>{item.end} </p>

                                     <button className='avanBtn'> <a href="tel:+37455-80-50-70">Իմանալ ավելին   <i class="fa-solid fa-phone-flip" ></i></a></button>
                                </div>
                               
                              
                        </div>
                   ) )
         } 
                </div>
              </div>
       
                
        



            </div>
            </section>

        </div>
    )
}

export default SectionTwo