export const TOKEN_KEY = "@Signature:token";

export const onSignIn = (value) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(value));
};

export const onSignOut = () => localStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
    const token = await localStorage.getItem(TOKEN_KEY);

    return (token !== null) ? token : false;
};