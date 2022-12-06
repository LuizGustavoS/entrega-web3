import { Button } from 'react-bootstrap';
function Submit({ texto }) {
    return (
        <Button variant="dark" type="submit">
            {texto}
        </Button>
    );
}
export default Submit;