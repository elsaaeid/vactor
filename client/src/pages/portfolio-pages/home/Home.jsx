import React from 'react';
import Main from '../../../components/portfolio-components/main/Main';
import AboutContainer from '../../../components/portfolio-components/about-container/AboutContainer';
import SliderItems from '../../../components/portfolio-components/home-view/slider-list/SliderItems';
import StackedBoxes from '../../../components/portfolio-components/home-view/stacked-boxes/StackedBoxes';


 const Home = () => {

  return (
     <section>
        <Main />
        <StackedBoxes />
        <AboutContainer />
        <SliderItems />
    </section>
  )
}
export default Home
