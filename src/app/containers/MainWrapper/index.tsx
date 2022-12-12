import React from "react";

import { useStore } from "@nanostores/react";

import { getUsers, users } from "../../stores";

export function MainWrapper() {
    const usersList = useStore(users);

    console.log(usersList);

    React.useEffect(() => {
        void getUsers();
    }, []);

    return <div>hello</div>;
}
