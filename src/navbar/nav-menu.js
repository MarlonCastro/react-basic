import React from 'react';

class Navmenu extends React.Component {

    render() {
        let menu = this.props.menus;

        let lista = menu.map(function (values, index) {
            return (
                <li key={index}><a href={values.link}> {values.titulo} </a></li>
            );
        });
        return (
            <ul id="nav-mobile" className="right">
                {lista}
            </ul>
        );
    }

}
export default Navmenu;