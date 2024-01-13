
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Searchbar(){
    const [city,setcity]=useState("")
    
    return (
        <Container  className="p-5 bg-primary text-white">
            <Form className="d-flex  justify-content-center ">
                  <Form.Group className="d-flex">
                  <Form.Control  
                  type="text"
                  value={city}
                  placeholder="Inserisci la città"
                  onChange={(e) =>
                    
                    setcity(e.target.value)
                }
                    />
                </Form.Group>
             
                <Link  className="mx-4 font-weight-bold text-primary border bg-white p-2 rounded-4" to={"/"+city} type="submit">
    				Cerca la città
    			</Link>
            </Form>
        </Container>
      );
}