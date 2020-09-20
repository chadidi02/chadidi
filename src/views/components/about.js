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
            "about",
            `
			<div class="mb-10">
                <div class="flex flex-wrap">
                    <div class="w-full sm:w-1/2">
                        <h1 class=" title p-10 text-center text-5xl">
                            About Me
                        </h1>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <p class="px-10  my-8">
                            the idea of beauty is the fundamental idea of everything. In the
                            world we see only distortions of the fundamental idea, but art, by imagination, may lift
                            itself
                            to the height of this idea. Art is therefore akin to creation.
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div class="w-full sm:w-1/2">
                        <div class="about__img m-auto p-1"> <img class="w-full h-full mb-6 md:mb-5"
                                src="${basics.picture}" alt="Souhaib Chadidi">
                        </div>
                    </div>
                    <!-- skills -->
                    <div class="w-full sm:w-1/2">
                        <div class="px-10 m-auto">
                            <!-- skills -->
                            <div class=" py-3 ">
                                <h1 class=" text-xl title ">My Skills.</h1>

                                <div class=" relative mt-8">
                                    <p class=" text-sm text-gray-700">UI & web design</p>
                                    <span class="absolute inset-y-0 right-0 mr-3 text-sm text-gray-700">90%</span>
                                    <div class="w-full  bg-gray-500 mt-3">
                                        <div class="text-right ui  py-px  html">
                                        </div>
                                    </div>
                                </div>
                                <div class=" relative mt-8">
                                    <p class=" text-sm text-gray-700">HTML</p>
                                    <span class="absolute inset-y-0 right-0 mr-3 text-sm text-gray-700">90%</span>
                                    <div class="w-full  bg-gray-500 mt-3">
                                        <div class="text-right   py-px  html">
                                        </div>
                                    </div>
                                </div>
                                <div class=" relative mt-8">
                                    <p class=" text-sm text-gray-700">CSS</p>
                                    <span class="absolute inset-y-0 right-0 mr-3 text-sm text-gray-700">80%</span>
                                    <div class="w-full  bg-gray-500 mt-3">
                                        <div class="text-right   py-px  css">
                                        </div>
                                    </div>
                                </div>
                                <div class=" relative mt-8">
                                    <p class=" text-sm text-gray-700">JavaScript</p>
                                    <span class="absolute inset-y-0 right-0 mr-3 text-sm text-gray-700">40%</span>
                                    <div class="w-full  bg-gray-500 mt-3">
                                        <div class="text-right   py-px  js">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- end of skills -->
                        </div>
                    </div>
                </div>
            </div>
			`
        );
    });
}
displayUser("chadidi02");