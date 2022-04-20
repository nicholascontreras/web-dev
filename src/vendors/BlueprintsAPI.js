const axios = require('axios');

const URL_BASE = "https://www.factorio.school/api/";

const get_top_blueprints = () => {
    const url = URL_BASE + "blueprintSummaries/top/page/1?title=";
    axios.get(url).then((response) => {
        console.log(response);
    });
};

const BlueprintsAPI = {get_top_blueprints};
export default BlueprintsAPI;