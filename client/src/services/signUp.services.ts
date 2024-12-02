import { notificationErrorMessage, notificationSuccesMessage } from "../utils/toastNotification/toastifyNotifications";

const { REACT_APP_API_URL, REACT_APP_APP_ID } = process.env

export const createUser = async (userData: { username: string; password: string; email: string }) => {
    try {
      
      const response = await fetch(`${REACT_APP_API_URL}createUser`, {
        method: 'POST',
        headers: {
          'X-Parse-Application-Id': `${REACT_APP_APP_ID}`,
        },
        body: JSON.stringify(userData),
      });
    
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Error creating user');
      }
      notificationSuccesMessage('User created successfully')
      return data.result;

    } catch (error:any) {
      console.log("ERROR_CREATE_USER", error)
      notificationErrorMessage(error.message || 'An unexpected error occurred')
    }
    
};