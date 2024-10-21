import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './About.css';
import { useTranslation } from "react-i18next";


function CarouselContainer()
{
     // Translation
const { i18n } = useTranslation();
  
    // About Section Items
    var items = [
        {
            id: 1,
            description: "Our company specializes in the dynamic world of programming, offering a diverse range of services to the tech community",
            description_ar: "شركتنا متخصصة في عالم البرمجة الديناميكي، وتقدم مجموعة متنوعة من الخدمات لمجتمع التكنولوجيا"
        },
        {
            id: 2,
            description: "Through our publishing division, we produce engaging and informative programming blogs that cater to both beginners and experts alike, providing valuable insights and tutorials. Additionally, our video production team creates visually captivating content, delivering in-depth programming tutorials and discussions in a multimedia format",
            description_ar: "من خلال قسم النشر لدينا، نقوم بإنتاج مدونات برمجة جذابة وغنية بالمعلومات تلبي احتياجات كل من المبتدئين والخبراء على حد سواء، وتوفر رؤى وبرامج تعليمية قيمة. بالإضافة إلى ذلك، يقوم فريق إنتاج الفيديو لدينا بإنشاء محتوى جذاب بصريًا، وتقديم دروس برمجة ومناقشات متعمقة بتنسيق الوسائط المتعددة"
        },
        {
            id: 3,
            description: "To further enhance the learning experience, we also offer programming consulting services, providing personalized guidance and expertise to individuals and organizations seeking to optimize their programming projects",
            description_ar: "لتعزيز تجربة التعلم بشكل أكبر، نقدم أيضًا خدمات استشارية في مجال البرمجة، ونوفر التوجيه والخبرة الشخصية للأفراد والمنظمات التي تسعى إلى تحسين مشاريع البرمجة الخاصة بها"
        }
    ]

   
const carouselItem = items.map(item => {
  if(i18n.language == 'ar') {
    return({
      id: item.id,
      name: item.name_ar,
      description: item.description_ar,
    })
  }
  return item;
})

    return (
        <Carousel className='carousel-content width-full flex flex-col justify-center items-center'>
            {
                carouselItem.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
export default CarouselContainer;

function Item(props)
{
    return (
        <div className="about__cards">
            <div className='wow fadeInUp' data-wow-iteration="1" data-wow-offset="80" data-wow-delay=".5s">
                <article className="about__card flex flex-col justify-center items-center">
                    <span>{props.item.icon}</span>
                    <h5>{props.item.name}</h5>
                    <small>{props.item.description}</small>
                </article>
            </div>
        </div>
    )
}