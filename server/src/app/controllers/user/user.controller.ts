import { UserService } from '../../services/user/user.service'

export const createUserController = async(request:any) => {
    const { username, email, password } = request.params;
  
    try {
        const user = await UserService.createUserService(username, password, email);
        return user;
    } catch (error:any) {
        throw new Error(`Error registering user: ${error.message}`);
    }
};

export const loginUserController = async(request:any) => {
    const { email, password } = request.params;
   
    try {
        const user = await UserService.loginUserService(email, password);
        return user;
    } catch (error:any) {
        throw new Error(`Login error: ${error.message}`);
    }
};

