import 'dotenv/config'
import Parse from 'parse/node';
const { API_GECKO, TRENDINGCOINS } = process.env

export const CoinService = {

    getCoinsFromApi: async (page:number) =>{
        try {
            const perPage = 100;
            const coinUrl = `${API_GECKO}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&sparkline=true&page=${page}&price_change_percentage=1h%2C24h%2C7d`
            const response = await fetch(coinUrl);

            if (!response.ok) {
                throw new Error('Error getting data from API');
            }

            const data = await response.json();

            return data;
        } catch (error: any) {
            throw new Error(`Error querying API or saving data: ${error.message}`);
        }
    },
    getTotalCoinsPage: async () =>{
        try {
            const perPage = 100;
            const coinListUrl = `${API_GECKO}coins/list`
            const response = await fetch(coinListUrl);
            if (!response.ok) {
                throw new Error('Error getting data from API');
            }
            const data = await response.json();
            const totalPage =  Math.ceil(data.length/perPage)
          
            return totalPage;
        } catch (error: any) {
            throw new Error(`Error querying API or saving data: ${error.message}`);
        }
    },
    
    createCoin: async (name:string, symbol:string, purchasePrice:string, totalCoinsPurchased:number) => {
      
        try {
            const query = new Parse.Query('Coin');
            query.equalTo('name', name);

            const existingUser = await query.first({ useMasterKey: true });  
            if (existingUser) {
                throw new Error(`There is already a coin with the name: ${name} on your list`);
            }
            
            const Coin = Parse.Object.extend('User');
            const coin = new Coin();
            
            coin.set('coinName', name);
            coin.set('symbol', symbol);
            coin.set('purchasePrice', purchasePrice);
            coin.set('totalCoinsPurchased', totalCoinsPurchased);
        
        
            const savedUser = await coin.save();
            return savedUser;
        } catch (error:any) {
            throw new Error(`Error saving user: ${ error.message}`);
        }
    },
   
}