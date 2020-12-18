import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const formInitialValue = {
  id:"",
  title:"",
  url:"",
  state:"",
  created:"",
  update:""
}

const TITLE = {
  add: 'Add new Issue',
  edit: 'Issue Id: ',
  delete: 'Are you sure?'
}


export default function FormDialog({ open, mode, data, handleClose, handleSubmit }) {
  const [formData, setFormData] = useState(formInitialValue)
  const [formError, setFormError] = useState({
    id:"",
    title:"",
    state:"",
  })

  useEffect(() => {
    setFormData(mode === 'add' ? formInitialValue : data)
  }, [mode, data])

  const handleChange=(field, value) => {
    validateField(field, value)
    setFormData({
      ...formData,
      [field]:value
    })
  }

  const onSubmit = ()=>{
    if (validateForm(formData)) {
      handleSubmit(formData);
      setFormData(formInitialValue);
    }
  }

  const validateField = (field, value) =>{
    if (field !== "id" && field !== "title" && field !== "state")
      return

    if(!value){
      setFormError({
        ...formError,
        [field]:`${field} is required`
      })
      return
    }

    if (field === 'state' && value.length > 10) {
      setFormError({
        ...formError,
        [field]: `${field} is too long`
      })
      return
    }

    setFormError({
      ...formError,
      [field]: ""
    })
  }

  const validateForm = (formValue) => {
    const formErrors = {}

    if (!formValue.id) {
      Object.assign(formErrors, { id: 'id is required' })
    }

    if(!formValue.title) {
      Object.assign(formErrors, { title: 'title is required' })
    }

    if(!formValue.state) {
      Object.assign(formErrors, { state: 'state is required' })
    }

    if (formValue.state.length > 10) {
      Object.assign(formErrors, { state: 'state is too long' })
    }

    setFormError(formErrors)

    return Object.keys(formErrors).length < 1
  }

  const onClose = () => {
    setFormData(formInitialValue)
    setFormError({
      id:"",
      title:"",
      state:"",
    })

    handleClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {
          mode === 'edit' ?
            TITLE[mode] + data.id :
            TITLE[mode] 
        }
      </DialogTitle>

      <DialogContent>
        {
          mode === 'delete' ?
            <>
              { Object.keys(data).map(key =>
                <p key={key}>{key}:{data[key]}</p>)
              }
            </> :
            <>
              <TextField
                autoFocus
                required
                color="secondary"
                margin="dense"
                id="id"
                label="Id"
                type="text"
                fullWidth
                value={formData.id}
                onChange={e => handleChange("id", e.target.value)}
                error={!!formError.id}
                helperText={formError.id}
              />

              <TextField
                required
                color="secondary"
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
                value={formData.title}
                onChange={e => handleChange("title", e.target.value)}
                multiline
                error={!!formError.title}
                helperText={formError.title}
              />

              <TextField
                required
                color="secondary"
                margin="dense"
                id="state"
                label="State"
                type="text"
                fullWidth
                value={formData.state}
                onChange={e => handleChange("state", e.target.value)}
                error={!!formError.state}
                helperText={!!formError.state ? formError.state : `${formData.state.length}/10`}
              />

              <TextField
                color="secondary"
                margin="dense"
                id="url"
                label="Url"
                type="text"
                fullWidth
                value={formData.url}
              />

              <TextField
                color="secondary"
                margin="dense"
                id="created"
                label="Created at"
                type="text"
                fullWidth
                value={formData.created}
                onChange={ e => handleChange("created", e.target.value)}
              />

              <TextField
                color="secondary"
                margin="dense"
                id="updated"
                label="Updated at"
                type="text"
                fullWidth
                value={formData.updated}
                onChange={ e => handleChange("updated", e.target.value)}
              />
            </>
        }
      </DialogContent>

      <DialogActions>
        <Button
          onClick={onSubmit}
          color={mode === "delete" ? "secondary" : "primary"}
          disabled={Object.keys(formError).map(key => formError[key]).filter(Boolean).length > 0}
        >
          {mode === "delete" ? "Delete" : "Save"}
        </Button>
        <Button onClick={onClose}>
          Cancel
        </Button>

      </DialogActions>
    </Dialog>
  );
}
