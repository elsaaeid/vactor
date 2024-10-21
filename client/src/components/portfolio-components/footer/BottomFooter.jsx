import React, { useContext } from 'react';
import bottomItems from "./bottomItems";
import ActiveLink from '../../global-components/active-link/ActiveLink';
import Grid from '@material-ui/core/Grid';
import {Context} from "../../../context/Context.js";

const BottomFooter = () => {
  const {activeNav,
    setActiveNav} = useContext(Context);
  return (
      <Grid className="row" container justifyContent="center" spacing={4}>
      {bottomItems
        .map((item) => (
            <Grid 
            className="footer__socials_icons mt-5 flex flex-row justify-center items-center" 
            xs={6} sm={6} md={4} lg={4}>
              <ActiveLink
                  key={item.id}
                  clickHandling={() => setActiveNav(item.href)}
                  classN={activeNav === item.href ? 'active global-Link' : 'global-Link'}
                  href={item.href}
                  obj={item.icon} />
            </Grid>
        ))}
      </Grid>
  )
}

export default BottomFooter