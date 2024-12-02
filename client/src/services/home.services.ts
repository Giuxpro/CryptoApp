
const { REACT_APP_API_URL, REACT_APP_APP_ID } = process.env

export const getCoins = async (page: number) => {
    const response = await fetch(`${REACT_APP_API_URL}getCoins`, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': `${REACT_APP_APP_ID}`,
      },
    });
  
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Error al obtener datos del usuario');
    }
  
    return data.result;
  };