// import React, { useState } from 'react';
// import { Button, Modal, Box, Typography } from '@mui/material';

import { Button, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const MyModalComponent = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                פתח מודל
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        כותרת המודל
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        <input type ="text">enter your userName</input>
                        <input type ="password">enter your password</input>
                    </Typography>
                    <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
                        סגור
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default MyModalComponent;
