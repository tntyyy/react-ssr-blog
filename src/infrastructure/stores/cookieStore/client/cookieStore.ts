import Cookies from 'js-cookie';

import type {CookieStoreType, setHandlerOptionsType} from '@general-infrastructure/libs/cookieStore';

class CookieStore implements CookieStoreType {

	get(key: string) {
		return Cookies.get(key);
	}

	set(key: string, value: string, options: setHandlerOptionsType) {
		Cookies.set(key, value, options);
	}

	remove(key: string) {
		Cookies.remove(key);
	}

	has(key: string) {
		return !!Cookies.get(key);
	}
}

export default CookieStore;