import axios from "axios";

const URL_BASE = "/blueprints-api/";

const get_top_blueprints = () => {
    const url = URL_BASE + "blueprintSummaries/top/page/1?title=";
    axios.get(url).then((response) => {
        console.log(response);
    });
};

const BlueprintsAPI = {get_top_blueprints};
export default BlueprintsAPI;