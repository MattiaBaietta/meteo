import { Container, Col, Row } from "react-bootstrap";
import { Cambiainunderscore } from "./Meteodaily";
import { icons } from "./Meteodaily";

function Temperaturaoraria({ meteo }) {
    console.log(Cambiainunderscore(meteo.days[0].hours[7].icon))

    return (
        <Container className=" p-5 bg-primary text-white">
            <Row >
                <Col md={3} className="align-items-center d-flex flex-column  text-center ">


                    <p> Mattina:</p>
                    <p className="fs-2">{meteo.days[0].hours[7].temp}°C</p>
                    <img className="imgdaily" src={icons[Cambiainunderscore(meteo.days[0].hours[7].icon)]} alt="" />
                </Col>
                <Col md={3} className="align-items-center d-flex flex-column text-center">
                    <p>Pomeriggio:</p>
                    <p className="fs-2">{meteo.days[0].hours[15].temp}°C</p>
                    <img className="imgdaily"  src={icons[Cambiainunderscore(meteo.days[0].hours[15].icon)]} alt="" />


                </Col>
                <Col md={3} className="align-items-center d-flex flex-column text-center">
                    <p>Sera:</p>
                    <p className="fs-2">{meteo.days[0].hours[20].temp}°C</p>
                    <img className="imgdaily" src={icons[Cambiainunderscore(meteo.days[0].hours[20].icon)]} alt="" />

                </Col>
                <Col md={3} className="align-items-center d-flex flex-column text-center">
                    <p>Notte:</p>
                    <p className="fs-2">{meteo.days[1].hours[2].temp}°C</p>
                    <img className="imgdaily" src={icons[Cambiainunderscore(meteo.days[1].hours[2].icon)]} alt="" />

                </Col>
            </Row>
        </Container>
    )
}
export default Temperaturaoraria