import {Col, Container, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import UsuarioForm from "../../components/form/UsuarioForm";

function UsuarioCadastro() {
    const navigate = useNavigate();

    function createUsuario(cliente) {
        fetch('http://localhost:5000/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente)
        }).then((resp) => resp.json())
            .then((data) => {
                    navigate('/usuarioList')
                    console.log(data)
                }
            )
            .catch(err => { console.log(err); console.log('') })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Cadastrar Usuario</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <UsuarioForm handleSubmit={createUsuario} btnText="Cadastrar" />
                </Col>
            </Row>
        </Container>
    )
}
export default UsuarioCadastro;