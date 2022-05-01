import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import BlueprintsService from "../../services/blueprints-service";
import {BlueprintsGrid} from "../BlueprintsGrid";

const Search = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");

    const [state, setState] = useState({});
    useEffect(() => {
        (async () => {
            const blueprints = await BlueprintsService.searchBlueprints(name, []);
            setState((prevState) => ({...prevState, "blueprints": blueprints}));
        })();
    }, [name]);

    return (
        <>
            {   state["blueprints"] &&
                <BlueprintsGrid title="Search Results:" blueprintsPreloaded={state["blueprints"]}/>
            }
        </>
    );
};

export default Search;