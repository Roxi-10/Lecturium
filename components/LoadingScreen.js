import React from 'react';

export default function LoadingScreen() {
    let div = <>
        <div className="flex items-center justify-center h-screen bg-[#f5f3ea] flex-col">
            <h1 className="text-4xl font-bold text-[#6b4f3b] mb-4">Lecturium</h1>
            <div
                className="loader ease-linear rounded-full border-8 border-t-8 border-[#6b4f3b] h-16 w-16 mb-4 animate-spin"></div>
            <p className="text-[#6b4f3b]">Se încarcă magia cărților...</p>
        </div>
    </>;
    return div;
}
