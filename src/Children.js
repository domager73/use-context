import React, {useContext} from 'react';
import {Context} from "./Context";

const Children = () => {
    const [value, setValue] = useContext(Context);

    return (
        <div>
            <input type='text' value={value} onChange={(event) => setValue(event.target.value)}/>
        </div>
    );
};

export default Children;