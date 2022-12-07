import {useEffect, useState} from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';

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
                </ Col>
            </ Row>
            <Table>
                <thead>
                <tr>
                    <td>Cód</td>
                    <td>Nome</td>
                    <td>E-mail</td>
                </tr>
                </thead>
                <tbody>
                {usuario.map((u)=>(
                    <tr>
                        <td>{u.id}</td>
                        <td>{u.nome}</td>
                        <td>{u.email}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ Container>
    );
}
export default UsuarioList;