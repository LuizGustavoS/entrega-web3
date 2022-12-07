import Input from '../../components/form/Input'
import Submit from '../../components/form/Submit'
import {useState} from 'react'
import {Form} from 'react-bootstrap';

function UsuarioForm({btnText, handleSubmit, imovelData}) {
    const [imovel, setImovel] = useState(imovelData || [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(imovel);
    }
    function handleChange(e) {
        setImovel({ ...imovel, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Form onSubmit={submit}>
                <Input
                    name="id" text="Id:"
                    tipo="text" placeholder="Cód: do cliente"
                    handleChange={handleChange}
                    value={imovel.id? imovel.id : ''}/>
                <Input
                    name="descricao" text="Descrição:"
                    tipo="text" placeholder="Descrição"
                    handleChange={handleChange} 
                    value={imovel.descricao? imovel.descricao : ''}/>
                <Input
                    name="endereco" text="Endereço:"
                    tipo="text" placeholder="Endereço"
                    handleChange={handleChange}
                    value={imovel.endereco ? imovel.endereco : ''}/>
                <Input
                    name="tipo" text="Tipo:"
                    tipo="text" placeholder="Tipo do imóvel"
                    handleChange={handleChange} 
                    value={imovel.tipo ? imovel.tipo : ''}/>
                <Submit texto={btnText} />
            </Form>
        </div >
    );
}
export default UsuarioForm;