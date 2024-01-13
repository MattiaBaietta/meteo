import { useState, useEffect } from "react"
import hail from "./assets/hail.png"
import clear_day from "./assets/clear-day.png"
import clear_night from "./assets/clear-night.png"
import cloudy from "./assets/cloudy.png"
import fog from "./assets/fog.png"
import partly_cloudy_day from "./assets/partly-cloudy-day.png"
import partly_cloudy_night from "./assets/partly-cloudy-night.png"
import rain_snow_showers_day from "./assets/rain-snow-showers-day.png"
import rain_show_showers_night from "./assets/rain-snow-showers-night.png"
import rain_snow from "./assets/rain-snow.png"
import rain from "./assets/rain.png"
import showers_day from "./assets/showers-day.png"
import showers_night from "./assets/showers-night.png"
import sleet from "./assets/sleet.png"
import snow_showers_day from "./assets/snow-showers-day.png"
import snow_showers_night from "./assets/snow-showers-night.png"
import snow from "./assets/snow.png"
import thunder_rain from "./assets/thunder-rain.png"
import thunder_showers_day from "./assets/thunder-showers-day.png"
import thunder_showers_night from "./assets/thunder-showers-night.png"
import thunder from "./assets/thunder.png"
import wind from "./assets/wind.png"
import humidity from "./assets/humidity.png"
import vento from "./assets/vento.png"
import sunrise from "./assets/sunrise.png"
import sunset from "./assets/sunset.png"

import { Row, Col, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from "./Mynav"
import { useLocation } from "react-router-dom"

import { LineChart } from "@mui/x-charts"


import { useParams } from "react-router-dom"
import Temperaturaoraria from "./Temperaturaoraria"
import Meteofuturo from "./Meteofuturo"

export const icons = {
    hail, clear_day, clear_night, cloudy, fog, partly_cloudy_day, rain_snow_showers_day, rain_show_showers_night, rain_snow, rain, showers_day, showers_night, sleet, snow_showers_day, snow_showers_night, snow, thunder_rain, thunder_showers_day, thunder_showers_night, thunder, wind, partly_cloudy_night
}

export const apikey = "3EZMYLYDC6HXP8HCYLJV9PSUG"



export async function Stampameteo(city = "Rimini") {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/` + city + `?&lang=it&key=` + apikey + `&unitGroup=metric`)
        const data = await response.json()
        if (data) {
            return data
        }
        else {
            console.log("errore fetch meteo")
        }
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}
function Calchours(n1, n2) {
    let calcolo = (n1 - n2)
    let minutes = Math.floor(calcolo / 60) % 60;
    let hours = Math.floor(calcolo / 3660);
    return (hours + "Ore e " + minutes + "Minuti")
}
export function Cambiainunderscore(stringa) {
    return stringa.replace(/-/g, "_")
}
function cambiaparams(stringa) {
    if (stringa===undefined)
    {
        return stringa
    }
    else{
        return stringa.replace(/ /g, '%20');
}
    }
    

function Meteodaily() {
    const params = useParams()
    const [meteo, setmeteo] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const location = useLocation()
     const nuovolink=cambiaparams(params.city)
    console.log(params)
    const isSpecificPath = location.pathname === "/" + nuovolink + "/15";
    useEffect(() => {
        const meteofetch = async () => {
            try {
                const results = await Stampameteo(params.city)
                setmeteo(results)
                setisLoading(false)


            } catch (e) {
                console.log(e)
            }
        }
        meteofetch()
    }, [params.city])




    if (!isLoading) {
        if (isSpecificPath) {
            return (
                <Container className="bg-primary">
                    <Meteofuturo meteo={meteo} />
                </Container>

            )
        }
        else {
            return (

                <>
                    <Container className="bg-primary text-white">
                        <>
                            <Mynav />
                        </>
                        <>
                            <Row className=" align-items-center">
                                <Col className=" m-3">
                                    <Row className="text-center align-items-center">
                                        <Col className="fs-3" >
                                            <img  src={icons[Cambiainunderscore(meteo.days[0].icon)]} alt="" />
                                            {meteo.resolvedAddress}
                                        </Col>
                                    </Row>
                                    <Row className=" p-4">
        
                                        <Col className="text-center" >
                                            <div>Tempo: {meteo.description}</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="" md={6}>
                                            <Row>
                                                <div>
                                                    <img className="p-3"src={vento} alt="iconwind" />
                                                    Vento: {meteo.days[0].windspeed}km/h
                                                </div>
                                            </Row>
                                            <Row>
                                                <div>
                                                    <img className="p-3" src={humidity} alt="iconhumidity" />
                                                    Umidità:{meteo.days[0].humidity}%
                                                </div>
                                            </Row>
                                        </Col>
                                        <Col className="" md={6}>
                                            <Row > 
                                                <div>
                                                    <img className="p-3 " src={sunrise} alt="" />
                                                    Alba: {meteo.currentConditions.sunrise}
                                                    </div>
                                            </Row>
                                            <Row>
                                                <div>
                                                    <img className="p-3" src={sunset} alt="" />
                                                      Tramonto: {meteo.currentConditions.sunset} 
                                                    </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <LineChart
                                         xAxis={[{ data: [0,6,12,16, 20, 24] 
                                        }]}
                                        series={[
                                            {
                                                
                                                data: [meteo.days[0].hours[0].temp, meteo.days[0].hours[6].temp,meteo.days[0].hours[12].temp, meteo.days[0].hours[16].temp,meteo.days[0].hours[20].temp, meteo.days[1].hours[0].temp],
                                                area: true,
                                                background: "",
                                                color:"white",
                                            },
                                        ]}
                                        width={500}
                                        height={300}
                                    />
                                </Col>
                            </Row>
                        </>
                    </Container>
                    <Temperaturaoraria meteo={meteo} />

                </>
            )
        }
    } else {
        return (
            <Container>
                <div>Fetch in caricamento</div>
            </Container>)
    }
}
export default Meteodaily