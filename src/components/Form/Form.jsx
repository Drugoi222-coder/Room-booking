import './Form.css';
import SelectOption from '../SelectOption/SelectOption';
import TimeInterval from '../TimeInterval/TimeInterval';
import BtnGroup from '../BtnGroup/BtnGroup';
import { TextField } from '@mui/material';
import {
    TOWER_LABEL,
    FLOOR_LABEL,
    ROOM_LABEL,
    TOWERS,
    EMPTY_FORM
} from '../../constants/constants';
import dataContext from '../../context/context';
import { useState } from 'react';
import { labelToKeyMap, generateArrWithValues } from '../../utils/utils';

const { Provider } = dataContext;

const Form = () => {

    const floors = generateArrWithValues(25, 3);
    const rooms = generateArrWithValues(10, 1);

    const [formData, setFormData] = useState(EMPTY_FORM);

    const resetForm = () => {
        setFormData(EMPTY_FORM);
    };

    const changeSelectOption = (label, value) => {
        const key = labelToKeyMap.get(label);
        setFormData({...formData, [key]: value});
        return value;
    };
    
    const handleOnChangeComment = (event) => {
        setFormData({...formData, comment: event.target.value})
    }

    const providerValue = { resetForm, changeSelectOption, ...formData };

    return (
        <Provider value={providerValue}>
            <form onSubmit={(e) => e.preventDefault()} className="form">
                <SelectOption
                    items={TOWERS}
                    label={TOWER_LABEL}
                />
                <SelectOption
                    items={floors}
                    label={FLOOR_LABEL}
                />
                <SelectOption
                    items={rooms}
                    label={ROOM_LABEL}
                />
                <TimeInterval />
                <TextField
                    onChange={handleOnChangeComment}
                    placeholder="Комментарий"
                    sx={{
                        width: '100%',
                        bgcolor: 'white',
                        borderRadius: '10px',
                        fieldset: {
                            borderRadius: '10px',
                        },
                    }}
                    multiline
                    rows={10}
                />
                <BtnGroup />
            </form>
        </Provider>
    );
};

export default Form;
