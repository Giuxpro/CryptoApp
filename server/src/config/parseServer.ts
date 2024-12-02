const ParseServer = require('parse-server').ParseServer;
const { DATABASE_URI, APP_ID, FILE_KEY, MASTER_KEY } = process.env;

export const parseServer = {
    run: () => {
        const api = new ParseServer({
            databaseURI: DATABASE_URI,
            cloud: './src/routes/routes.ts',
            appId: APP_ID,
            fileKey: FILE_KEY,
            masterKey: MASTER_KEY,
        });

        api.start();
        return api.app;
    },
}