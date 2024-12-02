const ParseDashboard = require('parse-dashboard');
const { APP_ID, SERVER_URL, MASTER_KEY, APP_NAME } = process.env;

export const parseDashboard = {
    show : () =>{
        const dashboard = new ParseDashboard({
            "apps": [
                {
                    "serverURL": SERVER_URL,
                    "appId": APP_ID,
                    "masterKey": MASTER_KEY,
                    "appName": APP_NAME
                }
            ],
            "users": [
                {
                    "user": "admin",
                    "pass": "adminPass"
                }
            ]
        }, true);
        return dashboard;
    },
}