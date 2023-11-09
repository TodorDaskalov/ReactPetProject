export default function Header() {
    return (
        <header>
            <div className="container_12">
                <div className="grid_12">
                    <h1>Viki's Pet Nursery</h1>
                    <div className="menu_block">
                        <nav>
                            <ul className="sf-menu">
                                <li className="current">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="with_ul">
                                    <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                    <a href="services.html">Services</a>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="contacts.html">Contacts </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="clear" />
                    </div>
                    <div className="clear" />
                </div>
            </div>
        </header>
    );
};
