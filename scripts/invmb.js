const savePermissionToken = (token) => {
    localStorage.setItem('token', token);
}
const getPermissionForCurrentUser = () => {
    if (localStorage.getItem('token')) {
        return localStorage.getItem('token');
    }
}
const imbCli = window.location.href.includes('localhost') ? '1913d9e4da4bad3e2e3da03e19df0705' : '1fc3770cf895558a4a8533e09c71d067';
const imb = new moneyButton.IMB({
    clientIdentifier: imbCli,
    permission: getPermissionForCurrentUser(), 
    onNewPermissionGranted: (token) => savePermissionToken(token)
});
