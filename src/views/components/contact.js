import {
    getUser
} from "../api/user";
import {
    placeHtml
} from "./place";

function displayUser(username) {
    getUser(username).then((user) => {
        let basics = user.basics;

        /*== Home ==*/
        placeHtml(
            "contact",
            `
            <div class="flex flex-wrap my-5 md:my-10 mx-5 md:mx-32">
                <div class="w-full md:w-1/2">
                    <div class="">
                        <h1 class="title py-10 self-center flex-1 text-3xl md:text-5xl">
                            CONTACTS</h1>
                        <p class="py-3">
                            the idea of beauty is the fundamental idea of everything. In the world we see only
                            distortions of the fundamental idea, but art, by imagination, may lift itself to the height
                            of this idea. Art is therefore akin to creation.
                        </p>

                        <p class="py-3">
                            Morocco, Tetouan
                        </p>

                        <p class="py-3">
                            s.chadidi02@gmail.com
                        </p>
                        <p class="py-3">
                            +212 628 976 549
                        </p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex justify-center">
                    <form class="w-full max-w-md">
                        <div class="flex flex-wrap -mx-px mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password">
                                    Name
                                </label>
                                <input
                                    class="appearance-none block w-full bg-white text-gray-700 border bordbg-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="nick" type="text">
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-px mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password">
                                    E-mail
                                </label>
                                <input
                                    class="appearance-none block w-full bg-white text-gray-700 border bordbg-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email" type="email">
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-px mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password">
                                    Message
                                </label>
                                <textarea
                                    class=" no-resize appearance-none block w-full bg-white text-gray-700 border bordbg-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                                    id="message"></textarea>
                            </div>
                        </div>
                        <div class="md:flex md:items-center ml-4">
                            <div class="md:w-1/3">
                                <button
                                    class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded"
                                    type="button">
                                    Send
                                </button>
                            </div>
                            <div class="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>
			`
        );
    });
}
displayUser("chadidi02");