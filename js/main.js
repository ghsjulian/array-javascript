import users from "./users.js";

const searchUser = searchTerm => {
    let search;
    users.filter(user => {
        Object.values(user).forEach(value => {
            if (value === searchTerm) {
                search = user;
            }
        });
    });
    return search;
};

