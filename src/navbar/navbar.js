import React from 'react';

import Navmenu from './nav-menu'

class Navbar extends React.Component {

    render() {

        let menu = [
            { titulo: "Home", link: "#home" },
            { titulo: "Sobre", link: "#sobre" },
            { titulo: "Contato", link: "#contato" },
            { titulo: "React", link: "#react" },
            { titulo: "Angular", link: "#react" }
        ];


        let corNav = "nav-wrapper " + this.props.cor;
        return (
            <nav>
                <div className={corNav}>
                    <div className="container">
                        <a href="#" className="brand-logo ">{this.props.titulo}</a>
                       <Navmenu menus={menu} />
                    </div>
                </div>
            </nav>
        );
    }

}
export default Navbar;