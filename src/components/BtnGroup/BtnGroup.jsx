import { Box, Button } from '@mui/material';
import dataContext from '../../context/context';
import { useContext } from 'react';
import { convertDatesInObj } from '../../utils/utils';
import { EMPTY_FORM } from '../../constants/constants';
import { btnStyle } from '../../utils/utils';

const BtnGroup = () => {
    const data = useContext(dataContext);
    const { resetForm } = data;

    const checkEmptyInputs = () => {
        for (let key in EMPTY_FORM) {
            if (!data[key] || EMPTY_FORM[key] === data[key]) {
                throw new Error(`Введите значение свойства: ${key}`);
            }
        }
    };

    const makeEndObj = () => {
        checkEmptyInputs();
        const endMap = new Map();
        const dataWithConvertedDates = convertDatesInObj(data);

        for (let key in dataWithConvertedDates) {
            if (
                typeof dataWithConvertedDates[key] === 'string' ||
                typeof dataWithConvertedDates[key] === 'number'
            ) {
                endMap.set(key, dataWithConvertedDates[key]);
            }
        }
        return Object.fromEntries(endMap);
    };

    const handleOnClickSendJson = () => {
        console.log(JSON.stringify(makeEndObj()));
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                height: {
                    xs: '95px',
                    md: 'auto',
                },
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
            }}
        >
            <Button
                type="reset"
                onClick={resetForm}
                variant="contained"
                sx={btnStyle('#994E47')}
            >
                Очистить форму
            </Button>
            <Button
                type="submit"
                onClick={handleOnClickSendJson}
                variant="contained"
                sx={btnStyle('#68995B')}
            >
                Отправить
            </Button>
        </Box>
    );
};

export default BtnGroup;
