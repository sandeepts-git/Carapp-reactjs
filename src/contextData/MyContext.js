import React, { createContext } from 'react';
import useCarHooks from '../UseCarHooks'

export const MyContext = createContext();
export const MyProvider = props => {
    return (
        <MyContext.Provider value={{ ...useCarHooks() }}>
            {props.children}
        </MyContext.Provider>
    )
}