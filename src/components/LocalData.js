export const setLocalToken = (token) =>
{
    const s = JSON.stringify(token);
    localStorage.setItem('token', s);
}

export const getLocalToken = () =>
{
    var get = localStorage.getItem('token');
    if (get===null)
    {
        return false;
    }
    return JSON.parse(get);
}