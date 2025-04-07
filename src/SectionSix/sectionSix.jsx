import Carousel from '../Carousel-compound/index'
import '../Css/sectionSix.css'
import abovyan1 from '../images/abovyan1.jpg'
import abovyan2 from '../images/abovyan2.jpg'
import abovyan3 from '../images/abovyan3.jpg'
import abovyan4 from '../images/abovyan4.jpg'
import abovyan5 from '../images/abovyan5.jpg'
import abovyan6 from '../images/abovyan6.jpg'
import abovyan7 from '../images/abovyan7.jpg'
import abovyan0 from '../images/abovyan0.jpg'

const SectionSix = () => {
    return(
        <div>
            <section className='section6'>
                <div className="container">
                    <div> 
                        <h2> Մեր նախագծերը</h2>
                        <h4>ք. Աբովյան</h4>
                        <p className='armeniaGarden'>ARMENIA GARDEN</p>
                    </div>
                    <div className='slideBox  app__main-container'>
                    <Carousel infinite>
                            <Carousel.Page>
                                <div className='norqImg'> <img src={abovyan0} width="700" height="450"/></div>
                            </Carousel.Page>
                            
                            <Carousel.Page>
                                <div> <img src={abovyan1} width="700" height="450"/></div>
                            </Carousel.Page>
                            
                            <Carousel.Page>
                                 <div> <img src={abovyan2} width="700" height="450"/></div>
                            </Carousel.Page>
 
                            <Carousel.Page>
                                <div> <img src={abovyan3} width="700" height="450"/></div>
                            </Carousel.Page>

                            <Carousel.Page>
                                <div> <img src={abovyan4} width="700" height="450"/></div>  
                            </Carousel.Page>

                            <Carousel.Page>
                                <div> <img src={abovyan5} width="700" height="450"/></div> 
                            </Carousel.Page>
 
                           <Carousel.Page>
                                <div> <img src={abovyan6} width="700" height="450"/></div> 
                           </Carousel.Page>
     
                            <Carousel.Page>
                                 <div> <img src={abovyan7} width="700" height="450"/></div>
                            </Carousel.Page>
                  
                    </Carousel>
                 
                              
             </div>
                    


                     <div>
                        <p className='infoarmeniaGarden'> «ARMENIA GARDEN» բնակելի համալիրը Էկոլոգիապես մաքուր, ընդարձակ թաղամաս Է։ Գործում է եկամտային հարկի վերադարձի օրենքը։
                             Բաղկացած 16 մասնաշենքերից: Առկա են ժամանակակից լուծումներով հարմարավետ բնակարաններ՝ ընդհանուր 34-78 քմ մակերեսներով։
                             Արժեքները սկսած 365.000 դրամից։ Առկա են ավտոկայանատեղիներ 18-21 քմ մակերեսներով։
                             Ոնի հարմարավետ խաղահրապարակ։
                             Շինարարական աշխատանքների ավարտը նախատեսված է 2025 թ. դեկտեմբեր։ </p>
                    </div>
                     
                    
                    
                    
                </div>
            </section>
        </div>
    )
}

export default SectionSix

