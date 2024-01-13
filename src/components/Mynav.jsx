import { Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";


function Mynav() {
    const params = useParams()
    if(params.city=="undefined")
    {
        params.city="Rimini"
    }
    return (
        <Container>
            <Nav fill variant="tabs" defaultActiveKey="/">
                <Nav.Item >
                    <Nav.Link className="text-white" href={"/"+params.city}>Meteo giornaliero</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="text-white" href={"/"+params.city+"/15"} >Meteo dei prossimi 15 giorni</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
}

export default Mynav