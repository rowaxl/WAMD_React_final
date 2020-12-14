import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import "../scss/styles.scss"

function Filter() {

    return(
        <div className="formcont">
        <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Filter issues:</InputLabel>
            <Input/>
        </FormControl>
        </div>
    )
}

export default Filter