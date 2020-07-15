import http from './common';

const getAll = () => {
    return http.get("/players");
};

const get = id => {
    return http.get(`/players/${id}`);
};

const create = data => {
    return http.post("/players", data);
};

const update = (id, data) => {
    return http.put(`/players/${id}`, data);
};

const remove = id => {
    return http.delete(`/players/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
};