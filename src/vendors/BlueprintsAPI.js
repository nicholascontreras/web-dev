const axios = require('axios');

const URL_BASE = "https://www.factorio.school/api/";

const get_top_blueprints = async () => {
    const url = URL_BASE + "blueprintSummaries/top/page/1?title=";
    const response = await axios.get(url);
    console.log(response);
};

export default {get_top_blueprints};