import React from 'react';
import { Box } from "@mui/material";
import "./LearnContent.css";
import LearnTutorial from '../learn-tutorial/LearnTutorial';
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import learnItems from './learnItems';



const LearnContent = ()=> {
      // Translation
      const { i18n } = useTranslation();
        const items = learnItems.map(item => {
          if(i18n.language == 'ar') {
            return({
                id: item.id,
                Head: item.Head_ar,
                subHead: item.subHead_ar,
                headHref: item.headHref,
                headHrefName: item.headHrefName_ar,
                codeCaption: item.codeCaption_ar,
                tryHref: item.tryHref,
                tryHrefName: item.tryHrefName_ar,
                code: item.code,
            })
          }
          return item;
        });
  return (
        <Box class="w-full flex flex-col justify-center items-center">
            <Box 
                onClick={() => window.scrollTo(0, document.body.scrollHeight / 2)}
                className="element btn flex justify-center items-center">
                    <IoIosArrowDown />
            </Box>
              {
              items
              .map(
                (item, index) => 
                  <Box key={index} className="mt-5 w-full flex flex-col justify-center items-center">
                  {
                      (
                      <LearnTutorial 
                          Head={item.Head}
                          subHead={item.subHead}
                          headHref={item.headHref}
                          headHrefName={item.headHrefName}
                          codeCaption={item.codeCaption}
                          tryHref={item.tryHref}
                          tryHrefName={item.tryHrefName}
                          code={item.code}
                          style={item.style}
                      />          
                      )
                  }
                  </Box>
                  )
                  }
            </Box>
    )
}
export default LearnContent;