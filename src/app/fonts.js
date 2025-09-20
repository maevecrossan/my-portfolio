import localFont from "next/font/local";

export const nunito = localFont({
    src: [
        { path: "../fonts/Nunito-Variable.ttf", weight: "200 900", style: "normal" },
        { path: "../fonts/Nunito-VariableItalic.ttf", weight: "200 900", style: "italic" },
    ],
    variable: "--font-nunito",
    display: "swap",
});

export const melodrama = localFont({
    src: "../fonts/Melodrama-Variable.ttf",
    variable: "--font-melodrama",
    weight: "300 700",
    style: "normal",
    display: "swap",
});
