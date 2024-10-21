import React from 'react';
import VideosContainer from "../../../components/portfolio-components/videos-container/VideosContainer";
import { PiVideoLight } from "react-icons/pi";



 const Videos = () => {

  return (
     <section>
      <div className='branch-container'>
					<PiVideoLight className='icon-branch' />
				</div>
       <VideosContainer />
    </section>
  )
}
export default Videos
