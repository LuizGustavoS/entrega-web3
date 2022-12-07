import {useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';

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
                </Col>
            </Row>

            <span style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", fontWeight: 'bold'}}>
                <ul>Cód</ul>
                <ul>Descrição</ul>
                <ul>Endereço</ul>
                <ul>Tipo</ul>
            </span>

            <span>
                {imovel.map((u)=>(
                    <span>
                        <hr></hr>
                        <span style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
                            <ul>{u.id}</ul>
                            <ul>{u.descricao}</ul>
                            <ul>{u.endereco}</ul>
                            <ul>{u.tipo}</ul>
                        </span>
                    </span>
                ))}
            </span>
        </Container>
    );
}
export default ImovelList;