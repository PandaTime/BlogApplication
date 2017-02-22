

export function signInRequest(username, password) {
    return fetch('/user/login', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    }).then((res)=>res.json());
}

export function signOutRequest() {
    return fetch('/user/logout', {
        credentials: 'same-origin',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res)=>res.json());
}

export function verificationCheck() {
    return fetch('/user/check',{
        credentials: 'same-origin',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res)=>res.json());
}
