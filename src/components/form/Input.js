import { Form } from 'react-bootstrap';

function Input({ name, tipo, text, placeholder, handleChange, value}) {
    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{text}</Form.Label>
            <Form.Control type={tipo}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                name={name}
            />
        </Form.Group>
    );
}
export default Input;
