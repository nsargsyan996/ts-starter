export const capitalize = ([first, ...rest]: string | []) => {
    if (!first || !first[0]) return "";
    return first[0].toUpperCase() + rest.join("");
};
