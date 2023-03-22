import { useState, useEffect  } from "react";
import MDButton from "components/MDButton";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import MDBox from "components/MDBox";

interface Props {
    title?: string,
    description?: string,
    yes?: string,
    no: string,
    isOpen?: boolean,
    onAgree?(obj: any):any; 
    onDisagree?(): void;
}

function RnrDialog({ title, description, yes, no, isOpen, onAgree, onDisagree }: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(isOpen)
  },[isOpen])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onDisagree();
    setOpen(false);
  };

  return (
    <MDBox>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
                {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton onClick={handleClose} variant="contained" color="error">{no}</MDButton>
          <MDButton onClick={handleClose} autoFocus variant="contained" color="info">
             {yes}
          </MDButton>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}

RnrDialog.defaultProps = {
    title: "Confirm",
    description: "Are you sure?",
    yes: 'Yes',
    no: 'No'
  };

export default RnrDialog;