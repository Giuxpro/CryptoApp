import { CoinService } from "../../services/coin/coin.service";

export const getCoinsFromApi = async(request:any) => {
    const { page } = request.params;
    try {
        const coin = await CoinService.getCoinsFromApi(page);
        return coin;
    } catch (error:any) {
        throw new Error(`Error registering user: ${error.message}`);
    }
};