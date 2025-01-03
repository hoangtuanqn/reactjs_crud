import logo from "../imgs/logo.png";
const Header = () => {
    return (
        <header className="header">
            <div className="content">
                <img src={logo} alt="" className="logo" />
                <nav className="menu">
                    <a href="#!">HomePage</a>
                    <a href="#!">Investment</a>
                    <a href="#!">Business</a>
                    <a href="#!">Society</a>
                    <a href="#!">About</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
