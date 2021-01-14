import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";

export default function Categories() {
    const history = useHistory();
    const location = useLocation();
    var params = new URLSearchParams(location.pathname.slice(1));
    const [clear, setClear] = useState(false);

    const sort = (arg) => {
        setClear(true);
        params.delete("sort");
        params.append("sort", arg);
        history.push(params.toString());
    };

    const filter = (condition) => {
        setClear(true);
        params.delete("condition");
        params.append("condition", condition);
        history.push(params.toString());
    };

    const clearFilters = () => {
        setClear(false);
        params.delete("condition");
        params.delete("sort");
        history.push(params.toString());
    };

    return (
        <ListGroup  vertical>
            <ListGroup.Item >
                {clear && (
                    <div>
                        <Button variant="success" onClick={clearFilters} >
                            Limpiar Busqueda
                        </Button>{" "}
                    </div>
                )}
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => sort("desc")} >
                
                    Mayor Precio
                
            </ListGroup.Item>
            <ListGroup.Item  action onClick={() => sort("asc")}>
                
                    Menor Precio
              
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => filter("new")}>
                
                    Nuevos
                
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => filter("used")}>
              
                    Usados
                
            </ListGroup.Item>
        </ListGroup>
    );
}