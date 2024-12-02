const { REACT_APP_API_URL, REACT_APP_APP_ID } = process.env

export const loginUser = async (userData:{email: string, password:string}) => {
    const response = await fetch(`${REACT_APP_API_URL}loginUser`, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': `${REACT_APP_APP_ID}`,
      },
      body: JSON.stringify(userData)
    });
  
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Error al obtener datos del usuario');
    }
  
    return data.result;
};
