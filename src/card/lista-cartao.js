import React from 'react';

import Card from './card'

class ListaCartao extends React.Component {

    render() {
        let noticias = [
            { titulo: 'Titulo 1', descricao: 'Descricao 1', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/sample-1.jpg', link: 'https://www.google.com' },
            { titulo: 'Titulo 2', descricao: 'Descricao 2', detalhe: 'Detalhe', imagem: 'https://43urj51zk8fr4328pu407mmp-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/1910.jpg', link: 'https://www.google.com' },
            { titulo: 'Titulo 3', descricao: 'Descricao 3', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: 'https://www.google.com' },
            { titulo: 'Titulo 4', descricao: 'Descricao 4', detalhe: 'Detalhe', imagem: 'https://43urj51zk8fr4328pu407mmp-wpengine.netdna-ssl.com/wp-content/uploads/2014/07/volpi.jpg', link: 'https://www.google.com' },
            { titulo: 'Titulo 5', descricao: 'Descricao 5', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: 'https://www.google.com' },
            { titulo: 'Titulo 6', descricao: 'Descricao 6', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: 'https://www.google.com' },
            { titulo: 'Titulo 7', descricao: 'Descricao 7', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: 'https://www.google.com' },
            { titulo: 'Titulo 8', descricao: 'Descricao 8', detalhe: 'Detalhe', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGKDMTmYiDHfbwWzGU5_fu5KI3Vc9LIxUJ0v46wxBYbRI-fR36Q', link: 'https://www.google.com' },
            { titulo: 'Titulo 9', descricao: 'Descricao 9', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: 'https://www.google.com' },
            { titulo: 'Titulo 10', descricao: 'Descricao 10', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/sample-1.jpg', link: 'https://www.google.com' },
            { titulo: 'Titulo 11', descricao: 'Descricao 11', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/sample-1.jpg', link: 'https://www.google.com' }

        ]
        let aux = [];
        let novaLista = [];

        for (let k = 0; k < noticias.length; k++) {
            aux.push(noticias[k]);
            if (aux.length == this.props.qtdLinha) {
                novaLista.push(aux);
                aux = [];
            } else if (k == noticias.length - 1) {
                novaLista.push(aux);
            }

        }
        let col = "col  m"+this.props.tamanhoCol;

        let listaCartoes = function (grupo) {
            return grupo.map(function (item, index) {
                return (
                    <div key={index} className={col}>
                        <Card dados={item}/>
                    </div>
                );

            });
        }

        let linha = novaLista.map(function (grupo, index) {
            return (
                <div key={index} className="row">
                    {listaCartoes(grupo)}
                </div>
            )
        });


        return (
            <div>
                {linha}
            </div>
        );

    }

}
export default ListaCartao;