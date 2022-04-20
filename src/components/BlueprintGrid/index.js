import React, {useState} from "react";

import BlueprintsAPI from "../../vendors/BlueprintsAPI";
import Blueprint from "./Blueprint";

const BlueprintGrid = () => {
    const [blueprints, setBlueprints] = useState([]);
    BlueprintsAPI.getTopBlueprints().then((result => setBlueprints(result)));

    return (
        <div className="row">
            {
                blueprints.map((curBlueprint) => {
                    return (<Blueprint blueprint={curBlueprint}/>)
                })
            }
        </div>
    );
};

export default  BlueprintGrid;