import "./Sidebar.css";
import logo from "../../assets/logo/logo.svg";

function Sidebar() {
    return (
        <aside className="sidebar" id="sidebar">

            <div className="sidebar-top">

                <a
                    href="#"
                    className="sidebar-logo-link"
                    aria-label="Página inicial"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="sidebar-logo"
                    />
                </a>

                <nav
                    className="sidebar-section"
                    aria-label="Menu principal"
                >
                    <a href="#" className="nav-item">
                        <span className="nav-icon"></span>
                        <span>Início</span>
                    </a>

                    <a href="#" className="nav-item">
                        <span className="nav-icon"></span>
                        <span>Cadastros</span>
                    </a>

                    <a href="#" className="nav-item">
                        <span className="nav-icon"></span>
                        <span>Suprimentos</span>
                    </a>

                    <a href="#" className="nav-item active">
                        <span className="nav-icon"></span>
                        <span>Vendas</span>
                    </a>
                </nav>

            </div>

            <div className="sidebar-bottom">

                <a href="#" className="nav-item footer-item">
                    <span className="nav-icon"></span>
                    <span>Canal de ideias</span>
                </a>

                <a href="#" className="nav-item footer-item">
                    <span className="nav-icon"></span>
                    <span>Indique e ganhe</span>
                </a>

                <a href="#" className="nav-item footer-item">
                    <span className="nav-icon"></span>
                    <span>Configurações</span>
                </a>

                <div className="sidebar-pin">
                    <span>Fixar menu</span>

                    <button
                        className="pin-toggle active"
                        id="themeToggle"
                        type="button"
                        aria-label="Alternar tema"
                    >
                        <span className="pin-thumb"></span>
                    </button>
                </div>

            </div>

        </aside>
    );
}

export default Sidebar;