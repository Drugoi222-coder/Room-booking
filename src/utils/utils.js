import {
    TOWER_LABEL,
    FLOOR_LABEL,
    ROOM_LABEL,
    START_TIME,
    END_TIME,
    DATE,
} from '../constants/constants';

export const labelToKeyMap = new Map([
    [TOWER_LABEL, 'tower'],
    [FLOOR_LABEL, 'floor'],
    [ROOM_LABEL, 'room'],
    [START_TIME, 'startTime'],
    [END_TIME, 'endTime'],
    [DATE, 'date'],
]);

export const convertDatesInObj = (obj) => {
    const { startTime, endTime, date } = obj;
    return {
        ...obj,
        startTime: startTime.format('HH:mm'),
        endTime: endTime.format('HH:mm'),
        date: date.format('MM/DD/YYYY'),
    };
};

export const generateArrWithValues = (arrLength, startValue) => {
    return Array(arrLength)
        .fill(startValue)
        .map((item, index) => ({ name: item + index }));
};

export const btnStyle = (color) => ({
    bgcolor: `${color}`,
    ':hover': { bgcolor: `${color}` },
});