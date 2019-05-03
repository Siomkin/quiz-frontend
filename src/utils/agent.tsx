import superagent from 'superagent';

const API_ROOT = 'http://localhost:8080/api';
const responseBody = (response: any) => response.body;

let token: string | null = null;

const tokenPlugin = (secured: any) => {
    return (request: any) => {
        if (token && secured) {
            request.set('Authorization', `Bearer ${token}`);
        }
    };
};

export const requests = {
    get: (url: string, secured = false) => {
        return superagent.get(`${API_ROOT}${url}`).use(tokenPlugin(secured)).then(responseBody);
    },
    post: (url: string, body?: string | object, secured = true) => {
        return superagent.post(`${API_ROOT}${url}`).send(body).use(tokenPlugin(secured)).then(responseBody);
    },
    put: (url: string, body?: string | object, secured:boolean = true) => {
        return superagent.put(`${API_ROOT}${url}`).send(body).use(tokenPlugin(secured)).then(responseBody);
    },
    patch: (url: string, body?: string | object, secured = true) => {
        return superagent.patch(`${API_ROOT}${url}`).send(body).use(tokenPlugin(secured)).then(responseBody);
    },
    delete: (url: string, secured = true) => {
        return superagent.del(`${API_ROOT}${url}`).use(tokenPlugin(secured)).then(responseBody)
    },
    upload: (url: string, file: any, secured = true) =>
        superagent.post(`${API_ROOT}${url}`).attach('file', file)
            .use(tokenPlugin(secured))
            .then(responseBody),
    setToken: (newJwtToken: string) => token = newJwtToken
};