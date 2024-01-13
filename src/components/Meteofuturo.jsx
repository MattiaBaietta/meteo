
import Mynav from "./Mynav"
import { Container, Row, Col } from "react-bootstrap"
import { icons } from "./Meteodaily"
import { Cambiainunderscore } from "./Meteodaily"
import { getCurrentHour } from "./Meteodaily"

function Convertigiorno(n) {
    const dataString = n;
    const data = new Date(dataString);
    const opzioniGiorno = { weekday: 'long', month: 'long', day: 'numeric' };

    const giornoDellaSettimana = new Intl.DateTimeFormat('it-IT', opzioniGiorno).format(data);
    return giornoDellaSettimana
}

function Meteofuturo({ meteo }) {
    console.log(meteo)
    return (
        <>
            <Mynav />
            <Container className="text-white">
                <Row className="fs-2 p-5 text-center align-items-center">
                    <Col className="fs-4 d-flex align-items-center  justify-content-center " >
                        <p className="align-items-center">
                            <img src={icons[Cambiainunderscore(meteo.days[0].icon)]} alt="" />
                            {meteo.resolvedAddress}
                        </p>
                        <p className="px-5">{meteo.days[0].hours[getCurrentHour()].temp}°C</p>
                    </Col>
                    
                </Row>
                {meteo.days.map((giorno) => (
                    <Row className="border fs-6  align-items-center">
                        <Col md={2}>
                            {Convertigiorno(giorno.datetime)}
                        </Col>
                        <Col md={2}>
                            {giorno.tempmax}°C/{giorno.tempmin}°C
                        </Col>
                        <Col>
                            <img src={icons[Cambiainunderscore(giorno.icon)]} alt="" />
                            {giorno.description}
                        </Col>
                    </Row>
                ))
                }
            </Container>
        </>

    )
}
export default Meteofuturo