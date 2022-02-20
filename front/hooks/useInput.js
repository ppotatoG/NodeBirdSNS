import { useState, useCallback } from 'react';

export default (initialValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);

    return [value, handler, setter];
};