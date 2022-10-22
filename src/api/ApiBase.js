export const baseURL = `${process.env.REACT_APP_API_URL}`


function ApiBase(){
    return {
        get: (url, params = {}) => {
            return fetch(baseURL + url, params).then(x => x.json());
        },
        post: (url, data, params = {}) => {
            let config = { method: "post", body: data, headers: { 'Content-Type': "application/json", Accept: "application/json" }, ...params };
            return fetch(baseURL + url, config);
        },
        put: (url, data, params = {}) => {
            let config = { method: "put", body: data, headers: { 'Content-Type': "application/json", Accept: "application/json" }, ...params };
            return fetch(baseURL + url, config);
        },
        delete: (url, data, params = {}) => {
            let config = { method: "delete", body: data, headers: { 'Content-Type': "application/json", Accept: "application/json" }, ...params };
            return fetch(baseURL + url, config);
        }
    }
}

//Esto lo vamos a utilizar para agregar el token en las llamadas que requieran autenticación
// export const authHeader = function () {
//     const userToken = JSON.parse(localStorage.getItem("user"));
//     if (userToken && userToken.jwt) {
//         return { headers: { Authorization: "Bearer " + userToken.jwt } };
//     }
//     else
//         return {}
// }

export default ApiBase();