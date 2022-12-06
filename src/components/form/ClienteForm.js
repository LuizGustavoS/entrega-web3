import Input from '../../components/form/Input'
import Submit from '../../components/form/Submit'
import { useState } from 'react'
import { Form } from 'react-bootstrap';

function ClienteForm({ btnText, handleSubmit, clienteData }) {
    const [cliente, setCliente] = useState(clienteData || [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(cliente);
    }
    function handleChange(e) {
        setCliente({ ...cliente, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Form onSubmit={submit}>
                <Input
                    name="id" text="Id:"
                    tipo="text" placeholder="Cód: do cliente"
                    handleChange={handleChange}
                    value={cliente.id? cliente.id : ''}/>
                <Input
                    name="nome" text="Nome:"
                    tipo="text" placeholder="Nome do cliente"
                    handleChange={handleChange} 
                    value={cliente.nome? cliente.nome : ''}/>
                <Input
                    name="telefone" text="Telefone:"
                    tipo="text" placeholder="Telefone do cliente"
                    handleChange={handleChange}
                    value={cliente.telefone ? cliente.telefone : ''}/>
                <Input
                    name="email" text="Email:"
                    tipo="text" placeholder="E-mail do cliente"
                    handleChange={handleChange} 
                    value={cliente.email ? cliente.email : ''}/>
                <Submit texto={btnText} />
            </Form>
        </div >
    );
}
export default ClienteForm;