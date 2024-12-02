const { REACT_APP_API_URL, REACT_APP_APP_ID } = process.env

export const createUser = async (userData: { username: string; password: string; email: string }) => {
    
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
  
    return data.result;
};