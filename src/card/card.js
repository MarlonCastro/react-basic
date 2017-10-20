import React from 'react';

class Card extends React.Component {

    render() {

        return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={this.props.dados.imagem} height="170"  />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.dados.titulo}<i className="material-icons right">more_vert</i></span>
                    <p>{this.props.dados.descricao}</p>
                </div>
                <div className="card-action">
                    <a href={this.props.dados.link}>Ver mais</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.dados.titulo}<i className="material-icons right">close</i></span>
                    <p>{this.props.dados.detalhe}</p>
                </div>
            </div>
        );
    }

}
export default Card;