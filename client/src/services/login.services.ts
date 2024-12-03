import { notificationErrorMessage } from "../utils/toastNotification/toastifyNotifications";

const { REACT_APP_API_URL, REACT_APP_API_URL_PARSE, REACT_APP_APP_ID } = process.env

export const loginUser = async (userData:{email: string, password:string}) => {
  try {

    const response = await fetch(`${REACT_APP_API_URL}loginUser`, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': `${REACT_APP_APP_ID}`,
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error('Incorrect email or password')
    }
    
    const token = data.result.token; 
    localStorage.setItem('authToken', token);
  
    return data.result;
    
  } catch (error:any) {
    console.log("ERROR_LOGIN_USER:", error)
    if (error.message.includes('Unexpected token')) {
      notificationErrorMessage('An unexpected error has occurred, please try again later.');
  } else {
      notificationErrorMessage(error.message || 'An unexpected error occurred');
  }
  }
   
};

// import Parse from 'parse';
// import { notificationErrorMessage } from "../utils/toastNotification/toastifyNotifications";

// const { REACT_APP_API_URL, REACT_APP_APP_ID } = process.env;

// export const loginUser = async (userData: { email: string, password: string }) => {
//   try {
//     // Utiliza el método logIn de Parse para autenticar al usuario
//     const user = await Parse.User.logIn(userData.email, userData.password);
    
//     // Si el login fue exitoso, el objeto `user` contendrá la información del usuario
//     console.log("Logged in user:", user);
    
//     // Puedes obtener un token de sesión (usualmente lo maneja Parse automáticamente)
//     const token = Parse.User.current().getSessionToken();
//     console.log("Session Token:", token);
    
//     // Guardamos el token en el localStorage para usarlo en futuras solicitudes
//     localStorage.setItem('authToken', token);
    
//     return user;
    
//   } catch (error: any) {
//     console.log("ERROR_LOGIN_USER:", error);
//     notificationErrorMessage(error.message || 'An unexpected error occurred');
//   }
// };

