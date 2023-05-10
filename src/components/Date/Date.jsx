import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
import dataContext from '../../context/context';
import { useContext, useState, useEffect } from 'react';
import { labelToKeyMap } from '../../utils/utils';

const Date = ({ label }) => {
    const data = useContext(dataContext);
    const [selectedDate, setSelectedDate] = useState(null);
    const key = labelToKeyMap.get(label);

    const handleOnChangeDate = (val) => {
        data.changeSelectOption(label, val);
        setSelectedDate(val);
    };

    useEffect(() => {
        if (!data[key]) {
            setSelectedDate(null);
        }
    }, [data[key]]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                slotProps={{
                    textField: {
                        required: true,
                    },
                }}
                sx={{
                    maxWidth: {
                        xs: '100%',
                        md: '180px',
                    },
                    bgcolor: 'white',
                    borderRadius: '10px',
                    fieldset: {
                        borderRadius: '10px',
                    },
                }}
                value={selectedDate}
                onChange={handleOnChangeDate}
                label={label}
            />
        </LocalizationProvider>
    );
};

export default Date;

Date.propTypes = {
    label: PropTypes.string,
};
