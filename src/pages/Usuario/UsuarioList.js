import {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

function UsuarioList() {
    const [usuario, setUsuario] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/usuario', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then((resp) => resp.json())
            .then((data) => setUsuario(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Listar Usuarios</ h1>
                </Col>
            </Row>

            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", fontWeight: 'bold'}}>
                <div>Cód</div>
                <div>Nome</div>
                <div>E-mail</div>
            </div>

            <div>
                {usuario.map((u)=>(
                    <div>
                        <hr></hr>
                        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
                            <div>{u.id}</div>
                            <div>{u.nome}</div>
                            <div>{u.email}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
export default UsuarioList;