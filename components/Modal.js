import React, {useState, useEffect} from 'react';
import { Modal, Box } from '@mui/material';
import mql from '@microlink/mql';

export default function ModalResume({show, toggleModal}) {

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const { status, data } = await mql('https://altr.dev/pdf?obfuscate=false', { pdf: 'true', scale: '1', margin: '0.4cm', format: 'letter' });      
            setData(data.pdf.url);
        }
        if(show) {
            fetchData();
        }
    }, [show])
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <Modal
            open={show}
            onClose={toggleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <iframe
                width="100%"
                height="100%"
                    src={data}
                ></iframe>
            </Box>
        </Modal>
    );
}
