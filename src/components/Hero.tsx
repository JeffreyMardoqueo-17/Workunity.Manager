"use client";

import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="bg-background dark:bg-bagroundDark py-16 px-8 md:px-16 lg:px-24 mt-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Columna de Texto */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Gestiona tus proyectos <br /> con <span className="text-purple-700">Workunity Manager</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        La herramienta perfecta para equipos, estudiantes y profesores. Organiza, colabora y
                        alcanza tus objetivos.
                    </p>
                    <div className="mt-6 flex space-x-4">
                        <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-all">
                            Descargar Manual
                        </button>
                        <button className="px-6 py-3 bg-white text-gray-900 dark:bg-purple-700 dark:text-gray-200 rounded-lg font-medium border border-gray-300 dark:border-purple-500 hover:bg-gray-100 dark:hover:bg-purple-500 transition-all">
                            Saber más
                        </button>
                    </div>
                </div>

                {/* Columna de Imagen */}
                <div className="flex justify-center items-center">
                    <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex justify-center items-center">
                        <span className="text-gray-400 text-sm">[ Aqui wo a poner despues la foto ]</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
