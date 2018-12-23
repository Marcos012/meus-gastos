// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyDpVxGWzdXfHc8GkOJMzUFngi0I_7GrjBw',
    authDomain: 'daily-gastos-angular.firebaseapp.com',
    databaseURL: 'https://daily-gastos-angular.firebaseio.com',
    projectId: 'daily-gastos-angular',
    storageBucket: 'daily-gastos-angular.appspot.com',
    messagingSenderId: '247371946160'
  }
};
