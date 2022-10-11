export function checkConfirmPassword(password:string, confirmPassword:string){
    if(!(password && confirmPassword)) return false;

    if(!password) return false;

    if(!confirmPassword) return false;

    if(password === confirmPassword){
            return true;
    }
    return false;
}   