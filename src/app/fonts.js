import localFont from "next/font/local";

export const dmserif = localFont({
    src: "../fonts/DMSerifText-Regular.ttf",
    variable: "--font-dmserif",
    weight: "400",
    style: "normal",
    display: "swap",
});

export const roboto = localFont({
    src: "../fonts/Roboto-VariableFont_wdth,wght.ttf",
    variable: "--font-roboto",
    display: "swap",
});

export const teko = localFont({
    src: [
        { path: "../fonts/Teko-Light.ttf", weight: "400", style: "normal" },
        { path: "../fonts/Teko-Medium.ttf", weight: "500", style: "normal" },
        { path: "../fonts/Teko-Bold.ttf", weight: "700", style: "normal" },
    ],
    variable: "--font-teko",
    display: "swap",
});

export const caprasimo = localFont({
    src: "../fonts/Caprasimo-Regular.ttf",
    variable: "--font-caprasimo",
    weight: "400",
    style: "normal",
    display: "swap",
});