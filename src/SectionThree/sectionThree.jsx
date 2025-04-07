import '../Css/sectionThree.css'
import monte from '../images/monte.jpg'
import nazarbekyan from '../images/nazarbekyan.jpg'

const SectionThree = () => {
    return(
        <div>
         <section className="section3">
             <div className="container">
                <div className='ajapnyakBox'>

                  <div className='ajCard'>
                    <h4>Մալաթիա Սեբաստիա վարչական շրջան</h4>
                    <div className='ajBox'>
                      <img className='ajImg' src={monte}  width="400" height="450"  /> 
                    <div className='AjInfoBox' >
                       <h5> MONTE RESIDENCE</h5>
                       <p className='ajpnyakInfo'> Զգացեք ժամանակակից կյանքի առավելությունները մեր բացառիկ բնակելի համալիրում։ Ձեր երազանքի տունը սպասում է ձեզ։</p>
                       <p className='priceAj'> Սկսած 460.000 դրամ</p>
                       <p className='workEndAj'> Աշխատանքների ավարտ - 2026 թվականի դեկտեմբեր </p>
                       <button className='ajapnyakBtn'><a href="tel:+37455-80-50-70">Իմանալ ավելին <i class="fa-solid fa-phone-flip" ></i></a></button>
                    </div> 
                    </div>
                    
                  </div>  

                  <div className='ajCard'>
                    <h4>Աջափնյակ վարչական շրջան</h4>
                    <div className='ajBox' >
                      <img className='ajImg' src={nazarbekyan}  width="400" height="450"  />  
                    <div className='AjInfoBox'>
                       <h5> NAZARBEKYAN PLAZA</h5>
                       <p className='ajpnyakInfo'> Վայելիր հարմարավետությունը և անվտանգությունը մեկ տեղում։ Դարձիր ամենականաչապատված բնակելի համալիրնեից մեկի բնակիչը։</p>
                       <p className='priceAj'> Սկսած 437.000 դրամ</p>
                       <p className='workEndAj'> Աշխատանքների ավարտ - 2026 թվականի դեկտեմբեր </p>
                       <button className='ajapnyakBtn'><a href="tel:+37455-80-50-70">Իմանալ ավելին   <i class="fa-solid fa-phone-flip" ></i></a></button>
                    </div> 
                    </div>
                    
                  </div>
              </div>                 
            </div>
         </section>

        </div>
    )
}

export default SectionThree