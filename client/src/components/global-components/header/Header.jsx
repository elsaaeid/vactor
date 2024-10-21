import React from "react";
import './header.css';
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { Bar } from "./Bar";
import LogoContent from "../LogoContent";

const Header= ()=> {
    // Theme Colors Mode
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 
        return (
            <header
                className="flex flex-row justify-between items-center"
                style={{
                background: colors.grey[900],
                }}>
                <LogoContent />
                <Bar />
            </header> 
        )
    };
export default Header;
