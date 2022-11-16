import React, { useState, useEffect } from "react";
import { Modal, Box, CircularProgress } from "@mui/material";
import mql from "@microlink/mql";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => {
    return createStyles({
        boxModal: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "90%",
            backgroundColor: theme.palette.primary.resumeMain,
            border: "2px solid",
            borderColor: theme.palette.primary.main,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: 4,
            WebkitOverflowScrolling: "touch"
        },
        divCircular: {
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    })
});

export default function ModalResume({ show, toggleModal }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const classes  = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const { status, data } = await mql(
        "https://altr.dev/pdf?obfuscate=false",
        { pdf: "true", scale: "1", margin: "0.4cm", format: "letter" }
      );
      setData(data.pdf.url);
      setLoading(false);
    };
    if (show) {
      fetchData();
    }
  }, [show]);

  return (
    <Modal
      open={show}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.boxModal}>
        {loading ? (
            <div className={classes.divCircular}>
                <CircularProgress color="primary"/>
            </div>
        ) : (
          <iframe width="100%" height="100%" src={`${data}#view=fitH`}></iframe>
        )}
      </Box>
    </Modal>
  );
}
