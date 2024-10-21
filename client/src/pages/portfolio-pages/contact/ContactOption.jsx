import React from 'react';
import contactItems from "./contactItems";
import { Box, Link, useTheme } from '@mui/material';
import { useTranslation } from "react-i18next";
import { tokens } from "../../../theme";
 



const ContactOption = () => {
    // Translation
    const { t, i18n } = useTranslation();
    const Items = contactItems.map(item => {
        if(i18n.language === 'ar') {
        return({
          id: item.id,
          icon: item.icon,
          title: item.title_ar,
          sub_title: item.sub_title,
          contact_option: item.contact_option,
        })
        }
        return item;
        });

        // App Theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
      <Box>
      {Items
        .map((item) => (
            <article className="contact__option mt-2">
                <span
                style={{
                  color: colors.grey[500],
              }}
                >
                  {item.icon}
                </span>
                <h4 
                   style={{
                    color: colors.grey[500],
                }}
                >{item.title}</h4>
                <h3
                style={{
                  color: colors.grey[500],
              }}
                >{item.sub_title}</h3>
                <Link 
                style={{
                  color: colors.grey[500],
              }} 
              href={item.contact_option} 
              target="_blank">{t("contact.sendMessage")}</Link>
            </article>
        ))}
      </Box>
  )
}

export default ContactOption