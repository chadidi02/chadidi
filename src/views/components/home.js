import {
	getUser
} from "../api/user";
import {
	placeHtml
} from "./place";

function displayUser(username) {
	getUser(username).then((user) => {
		let basics = user.basics;
		console.log(basics);

		/*== Home ==*/
		placeHtml(
			"home",
			`
			<div class=" flex flex-wrap absolute left-0 right-0 my-16 md:my-40 mx-12">
			<div class="w-full md:w-1/2 h-full">

				<div class="md:flex rounded-lg pt-6">
					<div class=" h-32 w-32 md:h-40 md:w-40  mx-auto md:mx-0 md:mr-10 "> <img class="w-full h-full rounded-full" src="${basics.picture}"/></div>
					<div class="text-center md:text-left">
						<h2 class="text-white text-3xl whitespace-pre my-2 tracking-widest">${basics.name}</h2>
						<div class="text-gray-200 mb-1 text-base">Front End Developer / WordPress Expert </div>
						<a href="" class="text-gray-200 mb-1 text-base">${basics.email}</a><br><br>
						<a href="" class="text-gray-200 text-base lining-nums">${basics.phone}</a>
					</div>
				</div>

			</div>
			<!-- ====++=== -->
			<div class="w-full md:w-1/2 ">
				<div class="flex justify-center md:justify-end my-5 md:my-20 home__btn">
					<a
						class=" bg-transparent hover:bg-gray-100 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:opacity-50 hover:border-transparent rounded-full">
						CONTACT ME
					</a>
					<a
						class="bg-transparent ml-5 hover:bg-gray-100 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:opacity-50 hover:border-transparent rounded-full">
						DOWNLOAD AS PDF
					</a>
				</div>
			</div>
		</div>
			`
		);
	});
}
displayUser("chadidi02");