import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

function Filter({ handleFilterChange }) {
    return(
        <div className="formcont">
            <FormControl fullWidth>
                    <InputLabel>
                        Filter issues:
                    </InputLabel>
                <Input onChange={ e => handleFilterChange(e.target.value) }/>
            </FormControl>
        </div>
    )
}

export default Filter