import { UserService } from '../../services/user/user.service'

export const createUser = async(request:any) => {
    const { username, email, password } = request.params;
  
    try {
        const user = await UserService.createUser(username, password, email);
        return user;
    } catch (error:any) {
        throw new Error(`Error registering user: ${error.message}`);
    }
};

export const loginUser = async(request:any) => {
    const { email, password } = request.params;

    try {
        const user = await UserService.loginUser(email, password);
        return user;
    } catch (error:any) {
        throw new Error(`Error registering user: ${error.message}`);
    }
};

