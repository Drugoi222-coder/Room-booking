import Form from '../Form/Form';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

function App() {
    return (
        <Container>
            <Typography sx={{ textAlign: 'center' }} variant="h4">
                Бронирование переговорной комнаты
            </Typography>
            <Form />
        </Container>
    );
}

export default App;
