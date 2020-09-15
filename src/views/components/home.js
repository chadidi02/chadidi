import { getUser } from "../api/user";
import { placeHtml } from "./place";

function displayUser(username) {
	getUser(username).then((user) => {
		let basics = user.basics;
		placeHtml("name", basics.name);
		placeHtml("email", basics.email);
		placeHtml("phone", basics.phone);
		console.log(basics);

		/*== Home ==*/
		placeHtml(
			"",
			`
			
			`
		);
	});
}
displayUser("chadidi02");
