import Parse from 'parse/node';
import { createUserController, loginUserController } from "../app/controllers/user/user.controller";
import { getCoinsFromApi } from '../app/controllers/coin/coin.controller';
// User
Parse.Cloud.define('createUser', (request:any) => createUserController(request));
Parse.Cloud.define('loginUser', (request:any) => loginUserController(request));

// Coin
Parse.Cloud.define('getCoins', (request:any) => getCoinsFromApi(request));