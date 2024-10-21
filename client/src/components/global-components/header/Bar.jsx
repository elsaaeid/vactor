import React, { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import {AccountMenu} from "./AccountMenu";
import {IconComponent} from './IconComponent';
import {NotificationMenu} from "./NotificationMenu";
import LanguageMenu from '../../../translation/LanguageMenu';      
import { ThemeModeIcon } from '../ThemeModeIcon';
import { ShowOnLogin, AdminAuthorLink } from "../../../protect/HiddenLink";
import HeaderSearch from './HeaderSearch';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiEdit } from "react-icons/fi";



export const Bar = ()=>{
    // Translation
    const { t } = useTranslation();
    // search Icon Direction State
    const [searchIconDir, setSearchIconDir] = useState(true);
    // Search Open State
    const [searchOpen, setSearchOpen] = useState(false);
    // open Header Search state
    const [openHeaderSearch, setOpenHeaderSearch] = useState(true);
    // search Value State
    const [searchVal, setSearchVal] = useState("");

    // search Icon Direction Side Effect
    useEffect(() => {
        if(document.body.dir === "ltr") {
            setSearchIconDir(true);
        }
        else if(document.body.dir === "rtl") {
            setSearchIconDir(false);
        }
    }, []);

    // open Search Function
    const openSearch = ()=> {
    setSearchOpen(true)
    };
    // close Search Function
    const closeSearch = ()=> {
        setSearchOpen(false);
        setSearchVal("");
        setOpenHeaderSearch(true);
    }

    return(
        <div className="bar h-full flex flex-row justify-evenly items-center">
            <AdminAuthorLink>
                <NavLink to="/add-blog">
                    <Tooltip title="Add Blog">
                        <IconComponent        
                        icon={<FiEdit className="icon-q" zIndex="30" fontSize="small" />} />
                        <span>{t("blog.addBlog")}</span>
                    </Tooltip>
                </NavLink>
            </AdminAuthorLink>
            <Tooltip>
                <div className="drop-down-menu mr-2">
                    <LanguageMenu />
                </div>
            </Tooltip>
            <Tooltip title="Mode">
                <IconComponent        
                icon={<ThemeModeIcon className="icon-q" zIndex="30" fontSize="small" />} />
            </Tooltip>
            <ShowOnLogin>
                <Tooltip title="Notification">
                    <IconComponent        
                    icon={<NotificationMenu />} />
                </Tooltip>
            </ShowOnLogin>
            <HeaderSearch 
                searchIconDir={searchIconDir} 
                searchVal={searchVal}
                searchOpen={searchOpen}
                openSearch={openSearch}
                closeSearch={closeSearch}
                openHeaderSearch={openHeaderSearch}
                setSearchVal={setSearchVal}
                setOpenHeaderSearch={setOpenHeaderSearch}
                />
            <AccountMenu />
        </div>
            
    )
}