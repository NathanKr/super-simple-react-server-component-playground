import { FC } from "react";

const ServerComponentHelloWorld : FC = () => {
    console.log('Hello world server component');
    
    return (
        <div>
            <h2>Hello world server component</h2>
        </div>
    );
};

export default ServerComponentHelloWorld;