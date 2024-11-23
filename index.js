import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { SalesforceSDKManager } from 'react-native-salesforce-sdk';

// Initialize Salesforce SDK
SalesforceSDKManager.initNative({
    oauthRedirectURI: 'sfdc://success',
    remoteAccessConsumerKey: 'YourConsumerKey',
    oauthScopes: ['api', 'refresh_token'],
});

// Register the main application component
AppRegistry.registerComponent(appName, () => App);
