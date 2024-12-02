import Parse from 'parse/node';
import { createUser, loginUser } from "../app/controllers/user/user.controller";
import { getCoinsFromApi } from '../app/controllers/coin/coin.controller';
// User
Parse.Cloud.define('createUser', (request:any) => createUser(request));
Parse.Cloud.define('loginUser', (request:any) => loginUser(request));

// Coin
Parse.Cloud.define('getCoins', (request:any) => getCoinsFromApi(request));