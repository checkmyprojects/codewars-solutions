// https://www.codewars.com/kata/55e4c52ad58df7509c00007e

function validate(username, password){
    if( username.indexOf('"') != -1 || password.indexOf('"') != -1 )
        return 'Wrong username or password!';
    return new Database().login(username, password);
}