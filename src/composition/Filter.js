import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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