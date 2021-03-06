import React, { useState, useEffect } from 'react';
import { api } from '../../WooCommerceRestApi/API'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { Row } from 'reactstrap'
import { Link } from "react-router-dom";

import LoadingComponent from '../LoadingComponent/LoadingComponent'


const useStyles = makeStyles((theme) => ({
    modal: {
        // width: "80%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        justifyContent: 'space-around',
    },
    buttonCateguries: {
        maxWidth: 200,
        margin: theme.spacing(1),
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: "#3275fc",  /* fallback for old browsers */
        "&:hover":{
            textDecoration:"none",
            color:"black",
            background: "white",
        }
    },
    link: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        borderRadius: 40,
        background: "#3275fc",  /* fallback for old browsers */
        "&:hover":{
            textDecoration:"none",
            color:"black",
            background: "white",
        }
    }
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [mobileCategories, setMobileCategories] = useState([])
    const [pending, setPending] = useState(true)
    useEffect(() => {
        api.get("products/categories", { per_page: 100 }).then(
            res => {
                setMobileCategories(res.data);
                setPending(false);
            }
        ).catch(error => console.log(error))
    }, [])
    return (
        <div >
            <Button variant="contained" className={classes.button} onClick={handleOpen}>
                دسته‌بندی محصولات
            </Button>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1000,
                }}
            >
                <Fade in={open}>
                    <Row className={classes.paper} xs={1} sm={2} md={2}>
                        {
                            pending ?
                                <LoadingComponent />
                                :
                                mobileCategories.map((item) =>
                                    item.display === "default" &&
                                    <Link key={item.id} to={`/categories/${item.id}`} className={classes.link}>
                                        <Button className={classes.buttonCateguries} variant="contained" color="primary">
                                            <img src={item.image.src} style={{ width: "20%" }} alt="" />
                                            <p style={{ marginBottom: 0 }}>{item.name}</p>
                                        </Button>
                                    </Link>
                                )
                        }
                    </Row>
                </Fade>
            </Modal>
        </div>
    );
}
