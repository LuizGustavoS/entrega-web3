import {useEffect, useState} from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';

function ClienteList() {
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cliente', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then((resp) => resp.json())
            .then((data) => setClientes(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Listar Clientes</h1>
                </Col>
            </Row>

            <Table>
                <thead>
                <tr>
                    <td>Cód</td>
                    <td>Nome</td>
                    <td>Telefone</td>
                    <td>E-mail</td>
                </tr>
                </thead>
                <tbody>
                {clientes.map((c)=>(
                    <tr>
                        <td>{c.id}</td>
                        <td>{c.nome}</td>
                        <td>{c.telefone}</td>
                        <td>{c.email}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}
export default ClienteList;