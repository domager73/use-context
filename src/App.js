import {Context} from "./Context";
import Children from "./Children";
import Children2 from "./Children2";
import {useState} from "react";

const App = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <Context.Provider value={[value, setValue]}>
                <Children/>
                <Children2/>
            </Context.Provider>
        </div>
    );
};

export default App;