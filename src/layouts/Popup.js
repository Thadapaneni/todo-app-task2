import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
 const Popup = ({openPopup, onDialog}) => {
    const [open,setopen] = useState(false)
    const[dialog,setDialog]=useState(false)
    return(
        <>
        
        <Dialog 
        open={openPopup}
       

        aria-labelledby='dialog-title' 
        aria-describedby='diallog-description'>
            <DialogTitle id='dialog-title'></DialogTitle>
            <DialogContent>
            <DialogContentText id='dialog-description'>ARE YOU SURE YOU WANT TO DELETE</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button  onClick={()=>onDialog(true)}>YES</Button>
                <Button onClick={()=>onDialog(false)} >CANCEL</Button>

            </DialogActions>
        </Dialog>
        </>
    )
}
export default Popup;