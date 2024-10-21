import { Box } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./LearnTutorial.css"
import { tokens } from "../../../../theme";
import { useTheme } from "@mui/material";
import { Context } from '../../../../context/Context';



const LearnTutorial = ({
    Head,
    subHead,
    headHref,
    headHrefName,
    codeCaption,
    tryHref,
    tryHrefName,
    code,
    style,
})=>{
      // App Theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    // App Context
    const { btnState, btnHandling } = useContext(Context);
    return(
        <Box className={`learn-tutorial w-full flex justify-evenly items-center ${style}`}>
            <Box className="tutorial-details flex flex-col justify-center items-center w-1/2 h-full">
                <h1>{Head}</h1>
                <p>{subHead}</p>
                <Link 
                    style={{
                        color: colors.grey[500],
                    }}
                    underline="none"
                    className={btnState === "headHrefName" ? "btnX active" : "btnX"}
                    onClick={() =>btnHandling("headHrefName")}
                    to={headHref}>{headHrefName}</Link>
            </Box>
            <Box 
                style={{
                    background: colors.grey[900],
                    color: colors.grey[500],
                  }}
                className="code-content w-1/2 h-full">
                <Box className="code-caption">
                    <h3>{codeCaption}</h3>
                </Box>
                <Box
                    className="code">
                    {code}
                </Box>
                <Link
                    style={{
                        color: colors.grey[500],
                    }}
                    underline="none"
                    className={btnState === "tryHrefName" ? "btnX active" : "btnX"}
                    onClick={() =>btnHandling("tryHrefName")}
                    to={tryHref}>{tryHrefName}</Link>
            </Box>
        </Box>
    )
};
export default LearnTutorial;