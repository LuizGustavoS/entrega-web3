import {useEffect, useState} from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';

function ImovelList() {
    const [imovel, setImovel] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/imovel', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then((resp) => resp.json())
            .then((data) => setImovel(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Listar Imóveis</ h1>
                </ Col>
            </ Row>
            <Table>
                <thead>
                <tr>
                    <td>Cód</td>
                    <td>Descricao</td>
                    <td>Endereço</td>
                    <td>Tipo</td>
                </tr>
                </thead>
                <tbody>
                {imovel.map((u)=>(
                    <tr>
                        <td>{u.id}</td>
                        <td>{u.descricao}</td>
                        <td>{u.endereco}</td>
                        <td>{u.tipo}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </ Container>
    );
}
export default ImovelList;