import Input from '../../components/form/Input'
import Submit from '../../components/form/Submit'
import {useState} from 'react'
import {Form} from 'react-bootstrap';

function UsuarioForm({btnText, handleSubmit, usuarioData}) {
    const [usuario, setUsuario] = useState(usuarioData || [])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(usuario);
    }
    function handleChange(e) {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Form onSubmit={submit}>
                <Input
                    name="id" text="Id:"
                    tipo="text" placeholder="Cód: do cliente"
                    handleChange={handleChange}
                    value={usuario.id? usuario.id : ''}/>
                <Input
                    name="nome" text="Nome:"
                    tipo="text" placeholder="Nome do cliente"
                    handleChange={handleChange} 
                    value={usuario.nome? usuario.nome : ''}/>
                <Input
                    name="senha" text="Senha:"
                    tipo="password" placeholder="Senha do cliente"
                    handleChange={handleChange}
                    value={usuario.senha ? usuario.senha : ''}/>
                <Input
                    name="email" text="Email:"
                    tipo="email" placeholder="E-mail do usuario"
                    handleChange={handleChange} 
                    value={usuario.email ? usuario.email : ''}/>
                <Submit texto={btnText} />
            </Form>
        </div >
    );
}
export default UsuarioForm;