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

    loginUser: async (email: string, password:string) => {
        try {
            const query = new Parse.Query('User');
            query.equalTo('email', email);

            const user = await Parse.User.logIn(email, password);
            
            // const user = await query.first({ useMasterKey: true });

            // if (!user) {
            //     throw new Error(`User with email ${email} not found`);
            // }

            // const storedPasswordHash = user.get('password');

            // const encryptedInputPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64);
    
            // if (storedPasswordHash !== encryptedInputPassword) {
            //     throw new Error('Incorrect password');
            // }

            return {
                message: 'Inicio de sesión exitoso',
                user: {
                  username: user.get('username'),
                  email: user.get('email'),
                },
            };
        } catch (error: any) {
            if (error.message.includes('Incorrect password')) {
               
                throw new Error('Contraseña incorrecta');
            } else if (error.message.includes('not found')) {
               
                throw new Error('Usuario no encontrado');
            } else {
              
                throw new Error(`Error al intentar iniciar sesión: ${error.message}`);
            }
        }
    },
}