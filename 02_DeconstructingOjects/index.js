const userList = {
    fname:    "John",
    lname:    "Doe",
    username: "johndoe"
}
const {fname: fn, lname:ln, username: un} = userList;
console.warn(`${fn}`);