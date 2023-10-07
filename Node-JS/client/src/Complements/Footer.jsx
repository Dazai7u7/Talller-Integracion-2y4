import React from 'react';
import fbk from "../Imagenes/fbk.png"
import ig from "../Imagenes/ig.png"
import twt from "../Imagenes/twt.png"
export function FooterConten() {
    return (
        <section>
            <footer class="mt-32 flex  flex-col border justify-center bg-teal-500 shadow">
                <div class="flex justify-between mt-2 p-4 mx-4 ">

                    <p class="mx-2 text-xl text-white font-semibold"> ipsum dolor sit</p>

                    <div class="flex flex-wrap">
                        <img class="h-8 mx-2" src={fbk} alt=""/>
                        <img class="h-8 mx-2" src={ig} alt=""/>
                        <img class="h-8 mx-2" src={twt} alt=""/>
                    </div>
                </div>
                <hr class="border-white"/>
                <div class="flex justify-center mt-2 p-4 mx-4">
                    <p class="text-white mx-2">adipiscing</p>
                    <p class="text-white mx-2">adipiscing</p>
                    <p class="text-white mx-2">adipiscing</p>
                    <p class="text-white mx-2">adipiscing</p>
                    <p class="text-white mx-2">adipiscing</p>
                </div>
            </footer>
        </section>
    );
}

export default FooterConten;