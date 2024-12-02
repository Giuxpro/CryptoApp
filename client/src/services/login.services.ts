import { notificationErrorMessage } from "../utils/toastNotification/toastifyNotifications";

const { REACT_APP_API_URL, REACT_APP_APP_ID } = process.env

export const loginUser = async (userData:{email: string, password:string}) => {
  try {

    const response = await fetch(`${REACT_APP_API_URL}loginUser`, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': `${REACT_APP_APP_ID}`,
      },
      body: JSON.stringify(userData)
    });
  console.log("Successfully logged in", response)
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Incorrect email or password')
    }
  
    return data.result;
    
  } catch (error:any) {
    console.log("ERROR_LOGIN_USER:", error)
    notificationErrorMessage(error.message || 'An unexpected error occurred')
  }
   
};
