import React, { useState } from 'react';

export default function Carrusel({ children: slides }) {
    const [curr, setCurr] = useState(0);

    const Anterior = () => setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
    const Siguiente = () => setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="shadow overflow-hidden relative rounded border border-teal-500">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={Anterior} className="">
                    <p className="rounded-full border bg-white text-black w-12 h-12 flex items-center justify-center hover:border-teal-500">←</p>
                </button>

                <button onClick={Siguiente}>
                    <p className="rounded-full border bg-white text-black w-12 h-12 flex items-center justify-center hover:border-teal-500">→</p>
                </button>
            </div>
        </div>
    );
}
