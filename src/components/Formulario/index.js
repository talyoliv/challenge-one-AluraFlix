import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import styles from './Formulario.module.css';

function Formulario(props) {
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')

    const salvar = (evento) => {
        evento.preventDefault();
        props.videoCadastrado({
            titulo, 
            categoria,
            imagem,
            video
        })
        setTitulo('')
        setCategoria('')
        setImagem('')
        setVideo('')
    }

    return (
        <section className={styles.formulario}>
            <h1>NOVO VÍDEO</h1>
            <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
            <form onSubmit={salvar}>
                <h2>Criar Card</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder="Digite o Título"
                    valor={titulo}
                    valorAlterado={valor => setTitulo(valor)}
                />
                <ListaSuspensa 
                    label="Categoria" 
                    placeholder="Selecione uma categoria" 
                    itens={props.categorias}
                    valor={categoria}
                    valorAlterado={valor => setCategoria(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    valorAlterado={valor => setImagem(valor)}
                />
                <CampoTexto 
                    label="Vídeo" 
                    placeholder="Digite o link do vídeo"
                    valor={video}
                    valorAlterado={valor => setVideo(valor)}
                />
                <div className={styles.div_botao}>
                    <Botao>Salvar</Botao>
                    <Botao>Limpar</Botao>
                </div>                
            </form>
        </section>
    )
}

export default Formulario;