import { getUser } from "../api/user";
import { placeHtml } from "./place";

function displayUser(username) {
	getUser(username).then((user) => {
		let basics = user.basics;
		placeHtml("name", basics.name);
		console.log(basics);

		/*== About ==*/
		placeHtml(
			"",
			`
			`
		);
	});
}
displayUser("chadidi02");
