import React from "react";

export default function FrameSeparation() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-20 p-6 gap-4">
                <div className="w-full h-px bg-black bg-opacity-25"></div>
                <p className="text-lg font-inter text-black font-normal leading-6 text-left">OU</p>
                <div className="w-full h-px bg-black bg-opacity-25"></div>
            </div>
        </>
    );
}

