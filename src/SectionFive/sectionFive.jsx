import '../Css/sectionFive.css'
import norq from '../images/norq2.jpg'


const SectionFive = () => {
 
    return(
        <div>
            <section className="section5">
             <div className="container"> 
                <div className='babayanBox'>
                    <div className='babayanImg'>
                         <h4>  Նոր Նորք վարչական շրջան</h4>
                         <img  src={norq} width="420" height="490" />
                    </div>

                    <div className='babayanInfo'>
                       <h5> «FeliCity»  </h5>
                       <p className='dicriptionBabayan'>  «FeliCity» բնակելի համալիրը բաղկացած է 5 մասնաշենքերից </p>
                     <span>
                                       <p>⚬ Գտնվում է՝ Նոր Նորքի 5-րդ զանգվածում </p> 
                                       <p>⚬ Հարկեր՝ 14 և 16  </p> 
                                       <p>⚬ Բնակարանների մակերեսներ՝ 52,4 քմ-ից մինչև 125,8քմ</p>  
                                       <p>⚬ Համագործակցող բանկ՝ INECOBANK</p>
                     </span>
                      
                       <p className='babayanEnd'>  Աշխատանքների ավարտ՝ 2028 թ. 2 կիսամյակ   </p> 
                       <p className='babayanPrice'> Սկսած 460.000 դրամ</p>
                       <button className='babayanBtn'><a href="tel:+37455-80-50-70">Իմանալ ավելին   <i class="fa-solid fa-phone-flip" ></i></a> </button>
                    </div>


                </div>
             </div>
            </section>

        </div>
    )
}

export default SectionFive