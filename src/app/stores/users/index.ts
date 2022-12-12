import { atom } from "nanostores";

export const users = atom<[]>([]);

export function addUsers(values: []) {
    users.set(values);
}

export const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        addUsers(data);
    } catch (e) {
        return null;
    }
};
