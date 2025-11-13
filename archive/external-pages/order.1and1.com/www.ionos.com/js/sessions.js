// Function to create a session

function createSession() {
	let tld = window.location.hostname.split('.').pop();
	let market = window.location.hostname.split('.').pop();
	if (market === 'com') {
		market = 'us';
	}
	if (market === 'at') {
		market = 'de';
	}
	if (tld === 'localhost') {
		market = 'localhost';
		tld = 'de';
	} else if (tld === 'lan') {
		market = 'localhost';
		tld = window.location.hostname.split('.').reverse().pop();
	}
	if (tld === 'uk') {
		tld = 'co.uk';
	}

	fetch(`https://shop-api.ionos.${tld}/v1/api/shop/session`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'x-market': market,
		},
	})
		.then((response) => {
			response.json();
		})
		.then(() => {
			window.sessionStorage.setItem('hasSession', 'true');
			// Save the timestamp
			window.sessionStorage.setItem('sessionTimestamp', Date.now());
		})
		.catch((error) => {
			window.sessionStorage.removeItem('hasSession');
			window.sessionStorage.removeItem('sessionTimestamp');
			console.error('There was a problem with the fetch operation:', error);
		});
}

function isSessionExpired() {
	const sessionTimestamp = window.sessionStorage.getItem('sessionTimestamp');
	if (sessionTimestamp) {
		const oneHourAgo = Date.now() - 3600000; // 1 hour in milliseconds
		if (parseInt(sessionTimestamp) < oneHourAgo) {
			window.sessionStorage.removeItem('hasSession');
			return true; // Session has expired
		} else {
			return false;
		}
	}
	return true;
}

if (!window.sessionStorage.getItem('hasSession') || isSessionExpired()) {
	console.log('no session');
	createSession();
}

setInterval(() => {
	if (!document?.hidden && isSessionExpired()) {
		createSession();
	}
}, 10000);
