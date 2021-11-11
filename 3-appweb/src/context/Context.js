import React, { useState, createContext } from 'react';
import Storage from '../helpers/Storage';

export const Context = createContext();

const userInitial = {'userId' : null,'name' : null,'email' : null};
  
export const ContextProvider = ({ children }) => {
    const { getLocalStorage, setLocalStorage } = Storage();
    const [dataUser, setDataUser] = useState(userInitial);

    const checkUser = () => {
        return getLocalStorage('user');
    }
    const login = (set, user) => {
        setLocalStorage(set, 'user', user); setDataUser(user); 
    }
    const logout = (set) => {
        setLocalStorage(set, 'user', null); setDataUser(null); 
    }

    return (
        <Context.Provider value={{
            dataUser, setDataUser, checkUser, login, logout
        }}>
            {children}
        </Context.Provider>
    )
};