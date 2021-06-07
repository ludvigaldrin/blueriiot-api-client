const { BlueToken, BlueCredentials } = require('./models/BlueToken');

var apigClientFactory = require('aws-api-gateway-client').default;
const AWS_REGION = "eu-west-1"
//const AWS_SERVICE = "execute-api"
const BASE_HEADERS = {
    "User-Agent": "BlueConnect/3.2.1",
    "Accept-Language": "en-DK;q=1.0, da-DK;q=0.9",
    "Accept": "**",
}
const BASE_URL = "https://api.riiotlabs.com/prod/"

class BlueriiotAPI {
    token;
    user;

    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.token = '';
    }

    async init() {
        await this.getToken();
    }

    getToken = async () => {
        const config = { invokeUrl: BASE_URL }
        var apigClient = apigClientFactory.newClient(config);
        var pathParams = {};
        var pathTemplate = 'user/login'
        var method = 'POST';
        var additionalParams = {
            headers: BASE_HEADERS,
        };
        var body = {
            email: this.email,
            password: this.password
        };

        //login
        try {
            var result = await apigClient.invokeApi(pathParams, pathTemplate, method, additionalParams, body);
            var data = result.data;
            var cred = data.credentials;

            var blueCred = new BlueCredentials(cred.access_key, cred.secret_key, cred.session_token, cred.expiration)
            this.token = new BlueToken(data.identity_id, data.token, blueCred);

            //console.log(this.token);
        } catch (result) {
            this.token = '';
            throw new Error(result.response.data.errorMessage);
        }
    }

    isAuthenticated = () => {
        if (this.token === '') {
            return false;
        } else {
            return true;
        }
    }

    getUser = async () => {
        if (this.isAuthenticated()) {
            var pathParams = {};
            var pathTemplate = 'user/'
            try {
                var userData = await this.getData(pathParams, pathTemplate);
                //console.log(userData);
                return userData;
            } catch (err) {
                throw new Error(err);
                //console.error("Error, Can't get userdata");
            }
        } else {
            throw new Error("You need to init api first!");
        }
    }

    getData = async(pathParams, pathTemplate) => {
        var cred = this.token.credentials;
        // Check if expired and refresh if needed

        const apigClient = apigClientFactory.newClient({
            invokeUrl: BASE_URL,
            region: AWS_REGION,
            accessKey: cred.access_key,
            secretKey: cred.secret_key,
            sessionToken: cred.session_token,
        });

        const method = 'GET';
        const additionalParams = {
            headers: BASE_HEADERS,
        };
        const body = {
        };

        var result = '';
        try {
            var response = await apigClient.invokeApi(pathParams, pathTemplate, method, additionalParams, body);
            var result = await JSON.stringify(response.data);
        } catch (result) {
            //console.log(result);
            throw new Error(result);
        }

        return result;
    }




}

module.exports = { BlueriiotAPI };