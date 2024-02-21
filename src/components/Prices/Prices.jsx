import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Prices.scss';
import { useState } from 'react';
import ContactForm from '../Forms/ContactForm/ContactForm.jsx';
function Prices() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [openSections, setOpenSections] = useState({
        oneTwoLevelCarPolish: false,
        twoThreeLevel: false,
        threeFourLevel: false,
        oneLevelInterior: false,
        twoLevelInterior: false,
        threeLevelInterior: false,
        simplePolishing: false,
        deepPolishing: false,
        bodyRepair: false,
        headlightPolishing: false,
    });

    function handleFormDivClick() {
        setIsFormOpen(!isFormOpen);
    }

    function handleSectionToggle(sectionKey) {
        setOpenSections((prevState) => ({
            ...prevState,
            [sectionKey]: !prevState[sectionKey],
        }));
    }

    return (
        <>
            <div className="prices">
                <Header />

                <div className="prices-div">
                    <div className="prices-form-div">
                        {isFormOpen && (
                            <ContactForm buttonClose={handleFormDivClick} />
                        )}
                    </div>
                    <div className="price-polishing-div ">
                        <div className="service-info-div service-polishing-div">
                            <h2>
                                Kėbulo poliravimo bei žibintų poliravimo
                                paslauga
                            </h2>
                            <p>
                                Poliravimo metu atgaivinama spalva, pašalinami
                                vidutiniai ir gilūs įbrėžimai, jis skirtas
                                maksimaliai atstatyti automobilio kėbulo
                                išvaizdą.
                            </p>
                            <div className="form-div-button">
                                <h3>Rezervacija</h3>
                                <button
                                    onClick={handleFormDivClick}
                                    className="form-button"
                                >
                                    Spausti čia
                                </button>
                            </div>
                        </div>
                        {/* Masinos poliravimas */}
                        <div className="prices-info-div">
                            <div className="prices-info-div-two">
                                <div className="prices-info-div-two-inner">
                                    <div>
                                        <h2>Poliravimo kainos</h2>
                                        <ul>
                                            <li>Nuo 83 eur 1-2 etapai</li>
                                            <li>Nuo 165 eur 2-3 etapai</li>
                                            <li>Nuo 270 eur 3-4 etapai</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="prices-info-div-two">
                                <h2>Plačiau apie paslagas</h2>

                                <div className="one-two-level-car-polish">
                                    <h3>
                                        1-2 etapai (automobiliui, kurio bukle
                                        yra labia gera).{' '}
                                        <span
                                            onClick={() =>
                                                handleSectionToggle(
                                                    'oneTwoLevelCarPolish'
                                                )
                                            }
                                            className="more"
                                        >
                                            Plačiau
                                        </span>
                                    </h3>

                                    {openSections.oneTwoLevelCarPolish && (
                                        <ul>
                                            <li>
                                                Hologramų ir lengvų įbrėžimų
                                                pašalinimas. Automobilis atgauna
                                                pirminį savo žvilgesį.
                                            </li>
                                            <li>
                                                Sūkuriniai įbrėžimai pašalinami
                                                nuo 70 iki 90%
                                            </li>
                                            <li>
                                                Visi įbrėžimai pašalinami iki
                                                50% (nepašalinami vidutiniai ir
                                                gilūs įbrėžimai)
                                            </li>
                                            <li>Suteikiamas blizgesys 100%</li>
                                        </ul>
                                    )}
                                </div>

                                <div className="two-three-level">
                                    <h3>
                                        2-3 etapai (automobiliui, kurio kėbulas
                                        turi smulkių ir vidutinių įbrėžimų).
                                        <span
                                            onClick={() =>
                                                handleSectionToggle(
                                                    'twoThreeLevel'
                                                )
                                            }
                                            className="more"
                                        >
                                            {' '}
                                            Plačiau
                                        </span>
                                    </h3>
                                    {openSections.twoThreeLevel && (
                                        <ul>
                                            <li>
                                                Antro lygio poliravimo metu
                                                atgaivinama spalva, pašalinami
                                                vidutiniai įbrėžimai, jis
                                                rekomenduojamas didžiajai daliai
                                                automobilių savininkų.
                                            </li>
                                            <li>
                                                Hologramų, lengvų ir vidutinių
                                                įbrėžimų šalinimas.
                                            </li>
                                            <li>
                                                Sūkuriniai įbrėžimai pašalinami
                                                nuo 75% iki 95%
                                            </li>
                                            <li>
                                                Visi įbrėžimai pašalinami nuo
                                                75% iki 85% (nepašalinami gilūs
                                                įbrėžimai)
                                            </li>
                                            <li>Suteikiamas blizgesys 100%</li>
                                        </ul>
                                    )}
                                </div>

                                <div className="three-four-level">
                                    <h3>
                                        3-4 etapai (automobiliui, kurio kėbulas
                                        turi vidutinių ir gilesnių įbrėžimų).{' '}
                                        <span
                                            onClick={() =>
                                                handleSectionToggle(
                                                    'threeFourLevel'
                                                )
                                            }
                                            className="more"
                                        >
                                            {' '}
                                            Plačiau
                                        </span>
                                    </h3>
                                    {openSections.threeFourLevel && (
                                        <ul>
                                            <li>
                                                Trečio lygio poliravimo metu
                                                atgaivinama spalva, pašalinami
                                                vidutiniai ir gilūs įbrėžimai,
                                                jis skirtas maksimaliai
                                                atstatyti automobilio kėbulo
                                                išvaizdą.
                                            </li>
                                            <li>
                                                Hologramų, lengvų , vidutinių ir
                                                gilių įbrėžimų šalinimas.
                                            </li>
                                            <li>
                                                Sūkuriniai įbrėžimai pašalinami
                                                nuo 85% iki 95%
                                            </li>
                                            <li>
                                                Visi įbrėžimai pašalinami nuo
                                                75% iki 95% (saugumo sumetimais
                                                gali likti labai gilių įbrėžimų)
                                            </li>
                                            <li>Suteikiamas blizgesys 100%</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zibintu Poliravimas */}
                    <div className="price-body-div">
                        <div className="service-info-div service-headlight-div">
                            <h2>Žibintų poliravimo paslaugos</h2>
                            <p>
                                Poliravimo metu pašalinami vidutiniai ir gilūs
                                įbrėžimai, jis skirtas maksimaliai atstatyti
                                žibintų išvaizdą.
                            </p>

                            <div className="form-div-button">
                                <h3>Rezervacija</h3>
                                <button
                                    onClick={handleFormDivClick}
                                    className="form-button"
                                >
                                    Spausti čia
                                </button>
                            </div>
                        </div>
                        <div className="prices-info-div">
                            <div className="prices-info-div-two">
                                <h2>Žibintų poliravimo kainos</h2>
                                <ul>
                                    <li>
                                        <strong>
                                            10 Eur už vnt - Paprastas ilgalaikis
                                            poliravimas (5-ių žingsnių)
                                        </strong>{' '}
                                        - (rekomenduojama pageltusiems
                                        žibintams, kurie nepaveikti stiprios
                                        oksidacijos).
                                    </li>
                                    <li>
                                        <strong>
                                            15 Eur už vnt - Gilesnis ilgalaikis
                                            poliravimas (7-9-ių žingsnių)
                                        </strong>
                                        - (rekomenduojama stipriau oksidacijos
                                        pažeistiems žibintams arba turintiems
                                        didesnių įbrėžimų, šiuo būdu nuimamas
                                        didesnis sluoksnis pažeisto žibinto
                                        paviršiaus ir vėl sulyginamas bei
                                        atgaunamas geras šviesos pralaidumas,
                                        matomumas ir išvaizdos estetinis
                                        blizgumas).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Cheminis */}

                    <div className="price-interiot-div">
                        <div className="service-info-div service-interior-div">
                            <h2>Cheminis sausa salono valymas</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit..Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit..Lorem ipsum dolor,
                                sit amet consectetur adipisicing elit..
                            </p>
                            <div className="form-div-button">
                                <h3>Rezervacija </h3>
                                <button
                                    onClick={handleFormDivClick}
                                    className="form-button"
                                >
                                    Spausti čia
                                </button>
                            </div>
                        </div>
                        <div className="prices-info-div">
                            <div className="prices-info-div-two">
                                <h2>Cheminio ir sauso salono valymo kainos</h2>
                                <ul>
                                    <li>Sausas valymas nuo 15 eur</li>
                                    <li>Mini cheminis valymas nuo 30 eur</li>
                                    <li>Pilnas cheminis valymas nuo 70 eur</li>
                                    <li>
                                        Bagažinės cheminis valymas nuo 20 eur
                                    </li>
                                    <li>Sėdimos vietos valymas nuo 10 eur</li>
                                    <li>Langų valymas iš vidaus nuo 5 eur</li>
                                </ul>
                            </div>
                            <div className="prices-info-div-two">
                                <h2>Plačiau apie paslagą</h2>
                                <div className="one-level-inerior">
                                    <h3>
                                        Sausas valymas.{' '}
                                        <span
                                            onClick={() =>
                                                handleSectionToggle(
                                                    'oneLevelInterior'
                                                )
                                            }
                                            className="more"
                                        >
                                            {' '}
                                            Plačiau
                                        </span>
                                    </h3>

                                    {openSections.oneLevelInterior && (
                                        <ul>
                                            <li>
                                                Salono, bagažinės siurbimas,
                                                dulkių valymas, kilimėlių
                                                plovimas/siurbimas.
                                            </li>
                                            <li>
                                                Prie sauso valymo galima
                                                įskaičiuoti papildomai kliento
                                                pageidavimus (pvž.: langų
                                                valymą, batų žymių ir t.t).
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <div className="two-level-interior">
                                    <h3>
                                        Mini cheminis valymas.{' '}
                                        <span
                                            onClick={() =>
                                                handleSectionToggle(
                                                    'twoLevelInterior'
                                                )
                                            }
                                            className="more"
                                        >
                                            {' '}
                                            Plačiau
                                        </span>
                                    </h3>
                                    {openSections.twoLevelInterior && (
                                        <ul>
                                            <li>
                                                {' '}
                                                Salono ir bagažinės siurbimas,
                                                batų žymių arba kitų nedidelių
                                                nešvarumų cheminis valymas nuo
                                                salono apdailos detalių.
                                            </li>
                                            <li>
                                                Dulkių valymas, kilimėlių
                                                plovimas/valymas.
                                            </li>
                                            <li>
                                                Polimerinių paviršių
                                                atnaujinimas, langų valymas
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <div className="three-level-inerior">
                                    <h3>
                                        Pilnas cheminis valymas.{' '}
                                        <span
                                            onClick={() =>
                                                handleSectionToggle(
                                                    'threeLevelInterior'
                                                )
                                            }
                                            className="more"
                                        >
                                            {' '}
                                            Plačiau
                                        </span>
                                    </h3>
                                    {openSections.threeLevelInterior && (
                                        <ul>
                                            <li>
                                                Sėdimų vietų, durelių apmušalų,
                                                kiliminės dangos, plastmasinių
                                                detalių valymas, atnaujinimas,
                                                langų valymas + salono
                                                džiovinimas
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kebulo remontas */}
                    {/* <div className="price-body-div">
                        <div className="service-info-div service-body-div">
                            <h2>Kėbulo remonto paslaugos</h2>
                            <p>
                                Poliravimo metu atgaivinama spalva, pašalinami
                                vidutiniai ir gilūs įbrėžimai, jis skirtas
                                maksimaliai atstatyti automobilio kėbulo
                                išvaizdą.
                            </p>

                            <div className="form-div-button">
                                <h3>Rezervacija</h3>
                                <button
                                    onClick={handleFormDivClick}
                                    className="form-button"
                                >
                                    Spausti čia
                                </button>
                            </div>
                        </div>
                        <div className="prices-info-div">
                            <div className="prices-info-div-two">
                                <h2>Plačiau apie paslagą</h2>
                                <ul>
                                    <li>Lengvų įbrėžimų pašalinimas</li>
                                    <li>Suteikiamas automobiliui blizgesys</li>
                                    <li>Žibintų poliravimas</li>
                                </ul>
                            </div>

                            <div className="prices-info-div-two">
                                <h2>Kainos</h2>
                                <ul>
                                    <li>1000eru Lengvasis auto</li>
                                    <li>2000eur visuregis</li>
                                    <li>3000eur mikroautobusas</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <footer className="footer-contaienr" id="contacts">
                <Footer />
            </footer>
        </>
    );
}
export default Prices;
