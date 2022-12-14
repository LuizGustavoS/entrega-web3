import {Col, Container, Row} from 'react-bootstrap';
import ClienteForm from '../../components/form/ClienteForm'
import {useNavigate} from 'react-router-dom'

function ClienteCadastro() {
    const navigate = useNavigate();

    function createCliente(cliente) {
        fetch('http://localhost:5000/cliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente)
        }).then((resp) => resp.json())
            .then((data) => {
                    navigate('/clienteList')
                    console.log(data)
                }
            )
            .catch(err => { console.log(err); console.log('') })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Cadastrar Cliente</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ClienteForm handleSubmit={createCliente} btnText="Cadastrar" />
                </Col>
            </Row>
        </Container>
    )
}
export default ClienteCadastro;