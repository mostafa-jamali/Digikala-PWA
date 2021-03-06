import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductGroups from '../../Components/ProductGroups/ProductGroups'
import CardProducts from '../../Components/CardProducts/CardProducts'
import CarouselTop from '../../Components/CarouselTop/CarouselTop';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import banerLeft from '../../assets/images/baner1.png'
import banerRight from '../../assets/images/baner2.png';

const useStyles = makeStyles((theme) => ({
    myCarousel: {
        position: "relative",
        top: 70,
        background: "#59C173",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to top, #7e51d0, #a17fe0, #59C173)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to top, #7e51d0, #a17fe0, #59C173)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        margin: 0,
        padding: "20px 0px 0px 0px",
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
    },
    products:{
        paddingBottom: 6,
        background: "#d8eaf8",
        background: "-webkit-linear-gradient(to top, #9fdae0, #d8eaf8)",
        background: "linear-gradient(to top, #9fdae0, #d8eaf8)", 
    }
}))

function DefaultFooter() {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.myCarousel}>
                <Hidden mdDown>
                    <Grid item >
                        <img style={{ width: "70%", marginTop: "0px" }} src={banerLeft} alt="" />
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={10} md={10} lg={8}>
                    <Paper>
                        <CarouselTop />
                    </Paper>
                </Grid>
                <Hidden mdDown>
                    <Grid item >
                        <img style={{ width: "70%", marginTop: "0px" }} src={banerRight} alt="" />
                    </Grid>
                </Hidden>
            </Grid>
            <div className={`${classes.products}`}>
                <ProductGroups />
                <CardProducts componentName={"Suggestion"} />
                <CardProducts componentName={"Newest"} />
                <CardProducts componentName={"HighestScore"} />
            </div>
        </div>
    )
}

export default DefaultFooter
