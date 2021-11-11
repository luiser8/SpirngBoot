const Storage = () => {

    const getLocalStorage = (value) => {
        let data;
        if(value === 'user'){
            data = {
                'userId' : window.localStorage.getItem('userId'),
                'name' : window.localStorage.getItem('name'),
                'email' : window.localStorage.getItem('email')
            };
        }
        return data;
    }

    const setLocalStorage = (set, value, data) => {
        if(value === 'user'){
            if (data !== null) {
                window.localStorage.setItem('userId', data.userId);
                window.localStorage.setItem('name', data.name);
                window.localStorage.setItem('email', data.email);
            } else {
                window.localStorage.removeItem('userId');
                window.localStorage.removeItem('name');
                window.localStorage.removeItem('email');
            }
        }
    }

    return {
        getLocalStorage, setLocalStorage
    }
}

export default Storage;