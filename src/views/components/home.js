import { getUser } from "../api/user";
import { placeHtml } from "./place";

function displayUser(username) {
	getUser(username).then((user) => {
		let basics = user.basics;
		// placeHtml("perfil", basics.picture);
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
