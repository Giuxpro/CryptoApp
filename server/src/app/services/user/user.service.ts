import Parse from 'parse/node';
import * as CryptoJS from 'crypto-js';

export const UserService = {
    
    createUser: async (username:string, password:string, email:string) => {
    
        try {
            const query = new Parse.Query('User');
            query.equalTo('email', email);

            const existingUser = await query.first({ useMasterKey: true });  
            if (existingUser) {
                throw new Error(`A user already exists with the email: ${email}`);
            }
            
            const User = Parse.Object.extend('User');
            const user = new User();

            const encryptedPassword = CryptoJS.SHA256(password + email).toString(CryptoJS.enc.Base64);
            
            user.set('username', username);
            user.set('password', encryptedPassword);
            user.set('email', email);
        
        
            const savedUser = await user.save();
            return savedUser;
        } catch (error:any) {
            throw new Error(`Error saving user: ${ error.message}`);
        }
    },

    loginUser: async (email: string, password:string) => {
        try {
            const query = new Parse.Query('User');
            query.equalTo('email', email);

            const user = await query.first({ useMasterKey: true });
            if (!user) {
                throw new Error(`User with email ${email} not found`);
            }

            const storedPasswordHash = user.get('password');

            const encryptedInputPassword = CryptoJS.SHA256(password + email).toString(CryptoJS.enc.Base64);

            if (storedPasswordHash !== encryptedInputPassword) {
                throw new Error('Incorrect password');
            }

            return {
                message: 'Inicio de sesión exitoso',
                user: {
                  username: user.get('username'),
                  email: user.get('email'),
                },
            };
        } catch (error: any) {
            throw new Error(`Error getting user: ${ error.message}`);
        }
    },
}