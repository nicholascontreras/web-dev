import axios from "axios";

const URL_BASE = "/blueprints-api/";

const getTopBlueprints = async () => {
    const url = URL_BASE + "blueprintSummaries/top/page/1?title=";
    const response = await axios.get(url);

    return response["data"]["_data"].map((curBlueprint) => {
        return {
            name: curBlueprint["title"],
            imageURL: "https://imgur.com/" + curBlueprint["imgurImage"]["imgurId"]
        };
    });
};

const BlueprintsAPI = {getTopBlueprints};
export default BlueprintsAPI;