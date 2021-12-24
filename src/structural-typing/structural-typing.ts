type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username &&
        user.password === sentValue.password
    );
};

const dbUser = { username: "Abacaxiguy", password: "123456", permission: "" };
const sentUser = { username: "Abacaxiguy", password: "123456" };
const loggedIn = verifyUser(dbUser, sentUser);
console.log(loggedIn);

// Annotations 🤓✍📋
/*
    Typescript doesnt care about the identity of things
    the function verifyUser, needs in theory, two objects of the type "User"
    but we just used a object, that follows the restrictions of this type
    Typescript doesnt even care if we add MORE keys in that object

    -poggers
*/
