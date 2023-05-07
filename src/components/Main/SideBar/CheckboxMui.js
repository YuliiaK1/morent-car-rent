import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CheckboxMui ({ changeChecked, typeFilter }) {
const { checked, label, id } = typeFilter;
return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        label={label}
      />
    </div>
  );
}