import axios from "axios";

const URL_BASE = "/blueprints-api/";

const getTopBlueprints = async () => {
    const url = URL_BASE + "blueprintSummaries/top/page/1?title=";
    const response = await axios.get(url);
    return mapBlueprintsFromAPI(response["data"]["_data"]);
};

const getRecentBlueprints = async () => {
    const url = URL_BASE + "blueprintSummaries/filtered/page/1?title=";
    const response = await axios.get(url);
    return mapBlueprintsFromAPI(response["data"]["_data"]);
};

const mapBlueprintsFromAPI = (api_data) => {
    return api_data.map((curBlueprint) => {
        return {
            key: curBlueprint["key"],
            name: curBlueprint["title"],
            imageURL: "https://i.imgur.com/"
                + curBlueprint["imgurImage"]["imgurId"] + "."
                + curBlueprint["imgurImage"]["imgurType"].split("/")[1]
        };
    });
};

const getBlueprintDetails = async (blueprint_key) => {
    const url = URL_BASE + "blueprintDetails/" + blueprint_key;
    const response = await axios.get(url);
    const blueprint = response.data;

    return {
        key: blueprint["key"],
        name: blueprint["title"],
        imageURL: "https://i.imgur.com/"
            + blueprint["imgurImage"]["imgurId"] + "."
            + blueprint["imgurImage"]["imgurType"].split("/")[1],
        description: blueprint["descriptionMarkdown"]
    };
};

const searchBlueprints = async (name, tags = []) => {
    const url = URL_BASE + "blueprintSummaries/filtered/page/1?title=" + name;
    const response = await axios.get(url);
    return mapBlueprintsFromAPI(response.data["_data"]);
};

const getAllBlueprintTags = async () => {
    const url = URL_BASE + "tags";
    const response = await axios.get(url);
    return response.data.map(curTag => {
        return curTag["category"] + ": " + curTag["name"];
    });
};

const BlueprintsService = {getTopBlueprints, getRecentBlueprints, getBlueprintDetails, searchBlueprints, getAllBlueprintTags};
export default BlueprintsService;