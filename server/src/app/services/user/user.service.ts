import Parse from 'parse/node';
import * as CryptoJS from 'crypto-js';

export const UserService = {
    
    createUserService: async (username:string, password:string, email:string) => {
    
        try {
            const query = new Parse.Query('User');
            query.equalTo('email', email);

            const existingUser = await query.first({ useMasterKey: true });  
            if (existingUser) {
                throw new Error(`A user already exists with the email: ${email}`);
            }
            
            const User = Parse.Object.extend('User');
            const user = new User();

            // const encryptedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);
           
            user.set('username', username);
            user.set('password', password);
            user.set('email', email);
        
            const savedUser = await user.signUp();
          
            return savedUser;
        } catch (error:any) {
            if (error.message.includes('user already exists')) {
                throw new Error('User already exists');
            } else{
                throw new Error(`An unexpected error has occurred: ${error.message}`);
            }
        }
    },

    loginUserService: async (email: string, password:string) => {
        try {
        
            const user = await Parse.User.logIn(email, password);

            return {
                token: user.getSessionToken(),
                user: user.toJSON(),
            };

        } catch (error: any) {
            if (error.code === 101) {
                throw new Error('Incorrect username or password');
            } else {
                throw new Error(`Error trying to log in: ${error.message}`);
            }
        }
    },
}