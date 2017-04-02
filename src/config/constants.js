import Rebase from 're-base';

const config = {
	apiKey: "AIzaSyCOiAaOXmnHwPocF3T70E-u5hq0zxgY-eI",
	authDomain: "dentest-cdc44.firebaseapp.com",
	databaseURL: "https://dentest-cdc44.firebaseio.com",
}

const base = Rebase.createClass(config);

export const firebaseAuth = base;