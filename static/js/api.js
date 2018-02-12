import {fetch} from "./fetch";

export function lookOption(issuer,userId) {
	return fetch({
		url: 'http://rapapi.org/mockjsdata/31481/',
		method:'get',
		params: {
			currentUserId:userId
		}
	})
}
