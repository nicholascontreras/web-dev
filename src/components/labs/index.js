import React from "react";

import ReduxExamples from "./redux-examples";

import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";
import {Link} from "react-router-dom";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>

            <ReduxExamples/>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </div>
    )
};

export default Labs;
