export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json());
};
export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json());
};

export const getMovies = () => {
return fetch(
    '/api/movies',{headers: {
        // 'Content-Type': 'application/json'
        'Authorization': window.localStorage.getItem('token')
    },
    // method: 'get',
}
).then(res => res.json());
};

export const getMovieImages = () => {
return fetch(
    '/api/movies',{headers: {
        // 'Content-Type': 'application/json'
        'Authorization': window.localStorage.getItem('token')
    },
    // method: 'get',
}
).then(res => res.json());
};

export const getActors = () => {
return fetch(
    '/api/actors',{headers: {
        // 'Content-Type': 'application/json'
        'Authorization': window.localStorage.getItem('token')
    }
}
).then(res => res.json());
};

export const getShows = () => {
return fetch(
    '/api/shows',{headers: {
        // 'Content-Type': 'application/json'
        'Authorization': window.localStorage.getItem('token')
    }
}
).then(res => res.json());
};
