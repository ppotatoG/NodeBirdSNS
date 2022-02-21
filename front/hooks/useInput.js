import { useState, useCallback } from 'react';

<<<<<<< HEAD
export default (initValue = null) => {
=======
export default (initialValue = null) => {
>>>>>>> ca327d155aa35d70e392c061dacb1583f922b260
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
<<<<<<< HEAD
    
=======

>>>>>>> ca327d155aa35d70e392c061dacb1583f922b260
    return [value, handler, setter];
};