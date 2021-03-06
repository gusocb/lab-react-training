import React from  'react';

const Greetings = (prop) => {
    let greeting = '';
    switch(prop.lang){
        case 'es':
            greeting = 'Hola';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        case 'en':
            greeting = 'Hello';
            break;
        case 'de':
            greeting = 'Hallo';
            break;
        default:
            greeting = 'Hoi';
    }

    return (
    <p className="greetings-card">{`${greeting} ${prop.children}`}</p>
    )
}

export default Greetings;