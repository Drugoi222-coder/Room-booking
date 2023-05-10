import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import PropTypes from 'prop-types';
import dataContext from '../../context/context';
import { useContext, useEffect, useState } from 'react';
import { labelToKeyMap } from '../../utils/utils';
import { END_TIME, START_TIME } from '../../constants/constants';
import dayjs from 'dayjs';

const Time = ({ label }) => {
    const data = useContext(dataContext);
    const [selectedTime, setSelectedTime] = useState(null);
    const key = labelToKeyMap.get(label);

    const handleOnChangeTime = (val) => {
        const validation = validateTime(val);
        if (validation === true) {
            data.changeSelectOption(label, val);
            setSelectedTime(val);
        } else {
            throw new Error(validation);
        }
    };

    const limitMaxTime = () => {
        const endTime = data.endTime;
        if (label === START_TIME && endTime) {
            return dayjs(endTime).subtract(5, 'minute');
        }
        return false;
    };

    const limitMinTime = () => {
        const startTime = data.startTime;
        if (label === END_TIME && startTime) {
            return dayjs(startTime).add(5, 'minute');
        }
        return false;
    };

    const validateTime = (val) => {
        const startTime = data.startTime;
        if (label === END_TIME && startTime && !val.isAfter(startTime)) {
            return `Введите правильно время!`;
        } else {
            return true;
        }
    };

    useEffect(() => {
        if (!data[key]) {
            setSelectedTime(null);
        }
    }, [data[key]]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                slotProps={{
                    textField: {
                        required: true,
                    },
                }}
                sx={{
                    maxWidth: {
                        xs: '100%',
                        md: '200px',
                    },
                    bgcolor: 'white',
                    borderRadius: '10px',
                    fieldset: {
                        borderRadius: '10px',
                    },
                }}
                minTime={limitMinTime()}
                maxTime={limitMaxTime()}
                value={selectedTime}
                onChange={handleOnChangeTime}
                ampm={false}
                label={label}
            />
        </LocalizationProvider>
    );
};

Time.propTypes = {
    label: PropTypes.string,
};

export default Time;
