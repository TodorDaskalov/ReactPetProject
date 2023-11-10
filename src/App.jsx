import Footer from "./components/Footer";
import Header from "./components/Header";
import PetDetails from "./components/PetDetails";
import PetsList from "./components/PetsList";
import WeatherComponent from "./components/WeatherComponent";

function App() {
    return (
        <>
            <Header />
            {/* <div className="page1_block">
                <div className="container_12">
                    <div className="grid_6">
                        <h2>Welcome to Our Site</h2>
                        <br />
                        <img
                            src="images/page1_img5.jpg"
                            alt=""
                            className="img_inner fleft"
                        />
                        <div className="extra_wrapper style1">
                            <p className="text1">
                                <a href="#">Click here</a> for more info about
                                this free website template created by
                                TemplateMonster.com{" "}
                            </p>
                            Hibh ullamcorper accumsan sem lectus ut sapien.
                            Donec venenatis .{" "}
                        </div>
                        <div className="clear" />
                        Praesent quis orci eget diam viverra consequat. Fusce
                        sagittis quam in pulvinar sollicitudin velit velit
                        cursus nibh ullamcorper accumsan sem lectus ut sapien.
                        Donec venenatis posuere velit aty convallis neque
                        ullamcorper quis. Integer posuere ipsum eu risus
                        sollicitudin nec varius eratylo luctus. Fusce fringilla
                        erat ac urna pe llentesque congue. Nunc fringilla diam
                        sit amet adipi scing bibendum turpis velit feugiat urna
                        et pharetra neque nisi ac nunc. Vivamus est quam
                        dapibuslok. ..ullamco rper imperdiet nec euismod ut
                        arcu. Nulla facilisi. Etiam mauris lorem pulvinar vel
                        con sequat ut pretium ac erat. Morbi facilisis elit eu
                        nisl blandit ac blandit enim faucibu. Praesent quis orci
                        eget diam viverra consequat. Fusce sagittis.
                        <br />
                        <a href="#" className="btn">
                            More
                        </a>{" "}
                    </div>
                    <div className="grid_5 prefix_1">
                        <h2 className="ic1">Latest News</h2>
                        <ul className="list">
                            <li>
                                {" "}
                                <span>
                                    <time dateTime="2045-01-01">
                                        27<span>APR</span>
                                    </time>
                                </span>
                                <div className="extra_wrapper">
                                    <div className="col1">
                                        <a href="#">
                                            Duis posuere consectetur
                                            pellentesqe;
                                        </a>
                                        <time dateTime="2045-01-01">
                                            April 27.03.45
                                        </time>
                                    </div>
                                    Sed nisi turpis, pellentesque at ultrices in
                                    dapibus in magna. Nunc easi diam
                                    risus,placerat ut scelerisque suscipit eu
                                    ante. Nullam vitae dolor ullcper felises
                                </div>
                            </li>
                            <li>
                                {" "}
                                <span className="cnt">
                                    <time dateTime="2045-01-01">
                                        28<span>APR</span>
                                    </time>
                                </span>
                                <div className="extra_wrapper">
                                    <div className="col1">
                                        <a href="#">
                                            Kuuis posuere consectetur pellentes;
                                        </a>
                                        <time dateTime="2045-01-01">
                                            April 28.03.45
                                        </time>
                                    </div>
                                    Eed nisi turpis, pellentesque at ultrices in
                                    dapibus in magna. Nunc easi diam risulacerat
                                    ut scelerisque et suscipit eu ante. Nullam
                                    vitae dolor ullcper felises.{" "}
                                </div>
                            </li>
                            <li>
                                {" "}
                                <span>
                                    <time dateTime="2045-01-01">
                                        29<span>APR</span>
                                    </time>
                                </span>
                                <div className="extra_wrapper">
                                    <div className="col1">
                                        <a href="#">
                                            Opuis posuere honsectetur
                                            pellentesyt;
                                        </a>
                                        <time dateTime="2045-01-01">
                                            April 29.03.45
                                        </time>
                                    </div>
                                    Koed nisi turpis, pellentesque at ultrices
                                    in dapibus in magna. Nunc easi diam risujo
                                    placerat ut scelerisque et suscipit eu ante.
                                    Ullam vitae dolor ullcper felises.{" "}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* <PetsList /> */}
            <PetDetails />
            <WeatherComponent />
            
            {/* <WeatherComponent /> */}
            {/* <div className="content page1">
                <div className="container_12">
                    <div className="grid_12">
                        {" "}
                        <a href="#" className="next" />
                        <a href="#" className="prev" />
                        <h2>Pets for Adoption</h2>
                    </div>
                    <div className="clear" />
                    <ul className="carousel1">
                        <li className="grid_4">
                            {" "}
                            <img
                                src="images/carousel1_img1.jpg"
                                alt=""
                                className="img_inner fleft"
                            />
                            <div className="extra_wrapper pad1">
                                <p className="col2">
                                    <a href="#">
                                        Praesent quis orcidiam viverralopr{" "}
                                    </a>
                                </p>
                                Raes quis orci eget diam viverralopr con equat.
                                Fusce sagit quam ihui hyhy kolo opirlo
                                pulvinarhjkjo.{" "}
                            </div>
                        </li>
                        <li className="grid_4">
                            {" "}
                            <img
                                src="images/carousel1_img2.jpg"
                                alt=""
                                className="img_inner fleft"
                            />
                            <div className="extra_wrapper pad1">
                                <p className="col2">
                                    <a href="#">
                                        Aeraesent quis hoj rcieget diam iverral.
                                    </a>
                                </p>
                                Loaesent quis orci diam viverralopr con equat.
                                Lusce sagittis quam ihui hyhy opir pulvinarhjk
                                velit.{" "}
                            </div>
                        </li>
                        <li className="grid_4">
                            {" "}
                            <img
                                src="images/carousel1_img3.jpg"
                                alt=""
                                className="img_inner fleft"
                            />
                            <div className="extra_wrapper pad1">
                                <p className="col2">
                                    <a href="#">
                                        Tyeraesent quis hojo rcieget iam
                                        iverralji.
                                    </a>
                                </p>
                                Eroaesent quis orci ediam viverralopr con
                                jikjulo poiu retyulo hyk equat. Usce sagittis ki
                                quam ihui hyhy opirp.{" "}
                            </div>
                        </li>
                        <li className="grid_4">
                            {" "}
                            <img
                                src="images/carousel1_img4.jpg"
                                alt=""
                                className="img_inner fleft"
                            />
                            <div className="extra_wrapper pad1">
                                <p className="col2">
                                    <a href="#">
                                        Aeraesent quis hoj rcieget diam iverral.
                                    </a>
                                </p>
                                Loaesent quis orci diam viverralopr con equat.
                                Lusce sagittis quam ihui hyhy opir pulvinarhjk
                                velit.{" "}
                            </div>
                        </li>
                        <li className="grid_4">
                            {" "}
                            <img
                                src="images/carousel1_img5.jpg"
                                alt=""
                                className="img_inner fleft"
                            />
                            <div className="extra_wrapper pad1">
                                <p className="col2">
                                    <a href="#">
                                        Aeraesent quis hoj rcieget diam iverral.
                                    </a>
                                </p>
                                Loaesent quis orci diam viverralopr con equat.
                                Lusce sagittis quam ihui hyhy opir pulvinarhjk
                                velit.{" "}
                            </div>
                        </li>
                        <li className="grid_4">
                            {" "}
                            <img
                                src="images/carousel1_img6.jpg"
                                alt=""
                                className="img_inner fleft"
                            />
                            <div className="extra_wrapper pad1">
                                <p className="col2">
                                    <a href="#">
                                        Aeraesent quis hoj rcieget diam iverral.
                                    </a>
                                </p>
                                Loaesent quis orci diam viverralopr con equat.
                                Lusce sagittis quam ihui hyhy opir pulvinarhjk
                                velit.{" "}
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}
            {/* <div className="bottom_block">
                <div className="container_12">
                    <div className="grid_6">
                        <h2>Pet Care Tips </h2>
                        <br />
                        Praesent quis orci eget diam viverra consequat. Fusce
                        sagittis quam in pulvinar sollicitudin velit velit
                        cursus nibh ullamcorper accumsan sem lectus ut sapien.
                        Donec venenatis posuere velit a convallis neque
                        ullamcorper quis. Integer posuere ipsum eu risus
                        sollicitudin nec varius erat luctus. Fusce fringilla
                        erat ac urna pe llentesque congue. Nunc fringilla, diam
                        sit amet adipi scing bibendum turpis velit feugiat urna,
                        et pharetra neque nisi ac nunc. Vivamus est quam dapibus
                        ullamco rper imperdiet nec, euismod ut arcu. Nulla
                        facilisi. Etiam mauris lorem pulvinar vel con sequat ut
                        pretium ac erat. Morbi facilisis elit eu nisl blandit ac
                        blandit enim faucibus. Praesent quis orci eget diam
                        viverra consequat. Fusce sagittis.{" "}
                    </div>
                    <div className="grid_4 prefix_2">
                        <h2 className="ic1">Any Question?</h2>
                        <img
                            src="images/page1_img4.jpg"
                            alt=""
                            className="fleft img_inner"
                        />
                        <div className="extra_wrapper">
                            <div className="cont">
                                {" "}
                                Call Us Free: <span>+1 800 559 6580</span>{" "}
                            </div>
                        </div>
                        <div className="clear" />
                        Nunc fringilla, diam sit amet adipi scing bibendum
                        turpis velit feugiat urna, et pharetra neque nisi ac
                        nunc. Viv amus est quam dapibus ullamco rper imperdiet
                        nec euismod ut arcu. Nulla facilisi. Etiam mauris.{" "}
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    );
}

export default App;
