import React, {useState, useEffect} from "react";

import BlueprintsAPI from "../../services/blueprints-service";
import Blueprint from "./Blueprint";
import {useSelector} from "react-redux";

import * as UsersService from "../../services/users-service";
import CommentsService from "../../services/comments-service";
import BlueprintsService from "../../services/blueprints-service";

export const TopBlueprintsGrid = () => {
    const [blueprints, setBlueprints] = useState([]);
    useEffect(() => {
        (async () => {
            setBlueprints(await BlueprintsAPI.getTopBlueprints());
        })();
    }, []);

    return BlueprintsGrid({title: "Popular Blueprints", blueprintsPreloaded: blueprints});
}

export const RecentBlueprintsGrid = () => {
    const [blueprints, setBlueprints] = useState([]);
    useEffect(() => {
        (async () => {
            setBlueprints(await BlueprintsAPI.getRecentBlueprints());
        })();
    }, []);

    return BlueprintsGrid({title: "Recent Blueprints", blueprintsPreloaded: blueprints});
}

export const BlueprintsWithFollowedCommentsGrid = () => {
    const loggedIn = useSelector((state) => state);

    const [blueprintKeysState, setBlueprintKeysState] = useState([]);
    useEffect(() => {
        (async () => {
            const followedUsers = (await UsersService.getUserProfile(loggedIn["_id"]))["following"];
            console.log(followedUsers);
            let comments = [];
            for (const curFollowing of followedUsers) {
                comments = [...comments, ...(await CommentsService.getCommentsByUser(curFollowing))]
            }
            console.log(comments);
            const blueprintKeys = comments.map(curComment => {
                return curComment["blueprintKey"];
            });
            console.log(blueprintKeys);
            setBlueprintKeysState(blueprintKeys);
        })();
    }, [loggedIn]);

    return BlueprintsGrid({title: "Commented on by Users You Follow:", blueprintKeys: blueprintKeysState});
};

export const BlueprintsGrid = ({title, blueprintKeys = false, blueprintsPreloaded = false}) => {
    const [blueprints, setBlueprints] = useState([]);
    useEffect(() => {
        if (blueprintsPreloaded) {
            setBlueprints(blueprintsPreloaded);
        } else {
            (async () => {
                const blueprints = await Promise.all(blueprintKeys.map((curBlueprintKey) =>
                    BlueprintsService.getBlueprintDetails(curBlueprintKey)));
                setBlueprints(blueprints);
            })();
        }
    }, [blueprintKeys, blueprintsPreloaded]);

    return (
        <>
            <h1>{title}</h1>
            {   blueprints.length > 0 &&
                <div className="row">
                    {
                        blueprints.map((curBlueprint) => {
                            return (<Blueprint key={curBlueprint["key"]} blueprint={curBlueprint}/>)
                        })
                    }
                </div>
            }
            {
                blueprints.length === 0 &&
                <p className="text-center mt-3"><i>No Blueprints</i></p>
            }
        </>
    );
};