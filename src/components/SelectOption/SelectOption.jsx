import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import dataContext from '../../context/context';
import { labelToKeyMap } from '../../utils/utils';

const SelectOption = ({ items, label }) => {
    const [value, setValue] = useState('');
    const data = useContext(dataContext);

    const handleOnChangeOption = (event) => {
        data.changeSelectOption(label, event.target.value);
    };

    const createMenuItemsList = items.map((item) => {
        return (
            <MenuItem value={item.name} key={uniqid()}>
                {item.name}
            </MenuItem>
        );
    });

    useEffect(() => {
        setValue(data[labelToKeyMap.get(label)]);
    }, [data]);

    return (
        <FormControl
            sx={{
                minWidth: '100%',
                borderRadius: '10px',
            }}
            required
        >
            <InputLabel id={`${label}-id`}>{label}</InputLabel>
            <Select
                MenuProps={{ sx: { maxHeight: 200 } }}
                required
                sx={{ borderRadius: 'inherit' }}
                labelId={`${label}-id`}
                value={value}
                label={label}
                onChange={handleOnChangeOption}
            >
                {createMenuItemsList}
            </Select>
        </FormControl>
    );
};

export default SelectOption;

SelectOption.propTypes = {
    items: PropTypes.array,
    label: PropTypes.any,
    changeOption: PropTypes.func,
};
