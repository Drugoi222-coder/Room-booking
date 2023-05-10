import Date from '../Date/Date';
import Time from '../Time/Time';
import { Box } from '@mui/material';
import { START_TIME, END_TIME, DATE } from '../../constants/constants';

const TimeInterval = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
                height: {
                    xs: "190px",
                    md: "auto"
                }
            }}
        >
            <Date label={DATE} />
            <Time label={START_TIME} />
            <Time label={END_TIME} />
        </Box>
    );
};

export default TimeInterval;
