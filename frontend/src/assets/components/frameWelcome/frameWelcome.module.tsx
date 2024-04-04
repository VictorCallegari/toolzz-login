import React from "react";

interface IText {
    h1: string;
    p: string;
}

export default function FrameWelcome({ h1, p }: IText) {
    return (
        <div className="
            w-auto
            h-24
            py-4
            px-6
            flex
            flex-col
            gap-4
        ">
            <div>
                <h1 className="
                    font-inter
                    font-semibold
                    text-xl
                    leading-6
                ">
                    {h1}
                </h1>
            </div>
            <div>
                <p className="
                    font-inter
                    font-medium
                    text-base
                    leading-6
                ">
                    {p}
                </p>
            </div>         
            
        </div>
    );
}

