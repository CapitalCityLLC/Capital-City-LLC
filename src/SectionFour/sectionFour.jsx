import '../Css/sectionFour.css'
import img2 from '../images/1.jpg'

const SectionFour = () => {
    return(
        <div>
            <section className="section4">
             <div className="container">
             <div className='zeytunBox'>
                      <h4> Քանաքեռ Զեյթուն վարչական շրջան</h4>
                      <div className='discoveryInfo'>
                            <div className='disInfoBox'>
                                <p className='discoveryTitle'>«DISCOVERY PLAZA» բնակելի համալիրը բաղկացած է 3 մասնաշենքերից </p>
                                <div className='disSpan'>
                                    <span>  
                                       <p>⚬ Գտնվում է՝ Քանաքեռ Զեյթուն վարչական շրջանում, Ահարոնյան փողոց հասցեում </p> 
                                       <p>⚬ Հարկեր՝ 16 հարկ </p> 
                                       <p>⚬ Բնակարանների մակերեսներ՝ 66-173 քմ</p>  
                                       <p>⚬ Շինարարական աշխատանքների ավարտ՝ 2025 թ. դեկտեմբեր</p> 
                                       <p>⚬ Համագործակցող բանկ՝ Ardshinbank</p>
                                        
                                </span>
                                </div>
                               
                                <p className='price'> Սկսած 590․000 դրամ</p>
                                <button className='discoveryBtn'> <a href="tel:+37455-80-50-70">Իմանալ ավելին   <i class="fa-solid fa-phone-flip" ></i></a></button>
                            </div>
                          <div> <img  src={img2}  width="520" height="662"/>  </div>
                      </div>
                </div>              
            </div>
            </section>

        </div>
    )
}

export default SectionFour