import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog({open, handleClose, mode, handleSubmit}) {
  return (

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new Isuue</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            color="secondary"
            margin="dense"
            id="id"
            label="Id"
            type="text"
            fullWidth
          />
          <TextField
            required
            color="secondary"
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
          />
          <TextField
            required
            color="secondary"
            margin="dense"
            id="state"
            label="State"
            type="text"
            fullWidth
          />
          <TextField
            color="secondary"
            margin="dense"
            id="url"
            label="Url"
            type="text"
            fullWidth
          />
          <TextField
            color="secondary"
            margin="dense"
            id="created"
            label="Created at"
            type="text"
            fullWidth
          />
          <TextField
            color="secondary"
            margin="dense"
            id="updated"
            label="Updated at"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  );
}
