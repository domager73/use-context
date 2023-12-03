import React, {useContext} from 'react';
import {Context} from "./Context";

const Children2 = () => {
    const [value, setValue] = useContext(Context);

    return (
        <div>
            {value}
        </div>
    );
};

export default Children2;