import {Col, Container, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import ImovelForm from "../../components/form/ImovelForm";

function ImovelCadastro() {
    const navigate = useNavigate();

    function createImovel(cliente) {
        fetch('http://localhost:5000/imovel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente)
        }).then((resp) => resp.json())
            .then((data) => {
                    navigate('/imovelList')
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
                    <ImovelForm handleSubmit={createImovel} btnText="Cadastrar" />
                </Col>
            </Row>
        </Container>
    )
}
export default ImovelCadastro;