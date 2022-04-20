import React from "react";

import BlueprintsAPI from "../../vendors/BlueprintsAPI";

const BlueprintGrid = () => {

    BlueprintsAPI.get_top_blueprints();

    return (
        <div className="row">

        </div>
    );
};

export default  BlueprintGrid;