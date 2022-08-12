import Example from "./Example";

const ConditionalOperator = () => {
    return ( 
        <>
            <div className="conditionals">
                <h1>Conditional Rendering</h1>
                <ol>
                    <li>
                        Short Circuit Evaluation
                        <ul>
                            <li>
                                or: value || "Hello World"
                            </li>
                            <li>
                                and: value &amp;&amp; "Hello World"
                            </li>
                        </ul>
                    </li>
                    <li>
                        Ternary Operator
                        <p>(value) ? true : false</p>
                    </li>
                </ol>
            </div>

            {/* Example */}
            <Example />
        </>
     );
}
 
export default ConditionalOperator;