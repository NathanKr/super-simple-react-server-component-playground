// Client Component
"use client"


import { FC } from "react";

const ClientComponentHelloWorld : FC = () => {
    console.log('Hello world client component');
    
    return (
        <div>
            <h2>Hello world client component</h2>
        </div>
    );
};

export default ClientComponentHelloWorld;