import { useState } from "react";

const Example = () => {
    const [ value, setValue ] = useState(true)
    return ( 
        <>
            {/* or */}
            <h1>For Or Circuit Evaluation: When value is {value ? 'true' : 'false'}</h1>
            <p>The output is equal to = { value || "Hello World"} </p>
            
            {/* and */}
            <h1>For And Circuit Evaluation: When value is {value ? 'true' : 'false'}</h1>
            <p>The output is equal to = { value && "Hello World"} </p>

        </>
     );
}
 
export default Example;