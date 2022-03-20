interface ColorsProps {
   white: string,
   navy: string,
   orange: string,
   brownishOrange: string,
   pumpkin: string,
   rustyOrange: string,
   paleGrey: string,
   blueGrey: string,
   black: string,
   whiteTwo: string,
   fadedRed: string,
   apple: string,
   lipstick: string,
   jadeGreen: string,
   lightBlueGrey: string,
   greyBlue: string,
   greyishBrown: string,
   lightBlueGreyTwo: string,
   paleGreyThree: string,
   mango: string,
   reddishPink: string,
   darkGreyBlue: string,
   lightBlueGreySix: string,
   silverThree: string,
   paleGreyFive: string,
   cornflower: string,
   lipstickThree: string,
   darkPastelGreen: string,
   dusk: string,
   golden: string,
   purplyTwo: string,
   ceruleanTwo: string,
   turquoiseBlue: string,
   tomato: string,
   darkTwo: string,
   slateTwo: string,
}


export const colors: ColorsProps = {
   white: "#ffffff",
   navy: "#041b48",
   orange: "#e47712",
   brownishOrange: "#e27727",
   pumpkin: "#ee7e00",
   rustyOrange: "#e44d0b",
   paleGrey: "#edf2fa",
   blueGrey: "#72839d",
   black: "#1a1919",
   whiteTwo: "#ebebeb",
   fadedRed: "#e3424f",
   apple: "#80c139",
   lipstick: "#c31162",
   jadeGreen: "#2da771",
   lightBlueGrey: "#a7bde5",
   greyBlue: "#7c94bd",
   greyishBrown: "#4f4f4f",
   lightBlueGreyTwo: "#c4d1e7",
   paleGreyThree: "#f4f7fc",
   mango: "#ff9f30",
   reddishPink: "#ff3053",
   darkGreyBlue: "#32485e",
   lightBlueGreySix: "#d8e0ee",
   silverThree: "#c8cdd2",
   paleGreyFive: "#eef3fb",
   cornflower: "#6074f9",
   lipstickThree: "#e32b69",
   darkPastelGreen: "#5aba56",
   dusk: "#3c3a61",
   golden: "#e8c900",
   purplyTwo: "#9031bf",
   ceruleanTwo: "#0079bf",
   turquoiseBlue: "#00bcd9",
   tomato: "#e73a3a",
   darkTwo: '#252631',
   slateTwo: '#46536b',
};

interface RBGAColorsProps {
   orange05: string,
   orange30: string,
   pumpkin30: string,
   orange80: string,
   navy30: string,
   navy20: string,
   white30: string,
   blueGrey10: string,
   blueGrey40: string,
   blueGrey60: string,
   slate30: string,
   paleGreyThree50: string,
   cloudyBlue80: string,
}

export const colorsRGBA: RBGAColorsProps = {
   orange05: "rgba(228, 119, 18, 0.05)",
   orange30: "rgba(228, 119, 18, 0.3)",
   pumpkin30: "rgba(238, 126, 0, 0.3)",
   orange80: "rgba(228, 119, 18, 0.8)",
   navy30: "rgba(4, 27, 72, 0.3)",
   navy20: "rgba(4, 27, 72, 0.2)",
   white30: "rgba(255,255,255, 0.9)",
   blueGrey10: "rgb(114, 131, 157, 0.1)",
   blueGrey40: "rgb(114, 131, 157, 0.4)",
   blueGrey60: "rgb(114, 131, 157, 0.6)",
   slate30: "rgb(70, 83, 107, 0.3)",
   paleGreyThree50: "rgb(230, 233, 239, 0.5)",
   cloudyBlue80: "rgba(199, 204, 216, 0.8)",
};

interface ShadowsProps {
   baseBoxShadow: string,
   lightBlueBoxShadow: string,
   lighterLightBlueBoxShadow: string,
   darkerLightBlueBoxShadow: string,
   silverThreeBoxShadow: string,
   orangeBoxShadow: string,
   cloudyBlueShadow: string,
}

export const shadows: ShadowsProps = {
   baseBoxShadow: `0 2px 4px 0 ${colors.paleGrey}`,
   lightBlueBoxShadow: `0 8px 12px 0 ${colors.lightBlueGreySix}`,
   lighterLightBlueBoxShadow: `0 2px 8px 0 ${colors.lightBlueGreySix}`,
   darkerLightBlueBoxShadow: `0 8px 12px 0 ${colors.greyBlue}`,
   silverThreeBoxShadow: `0 2px 10px 0 ${colors.silverThree}`,
   orangeBoxShadow: `0 2px 10px 0 ${colorsRGBA.orange30}`,
   cloudyBlueShadow: `0 0 15px 0 ${colorsRGBA.cloudyBlue80}`,
};

interface FontsProps {
   ibm: string,
   opensans: string,
}

export const fonts: FontsProps = {
   ibm: "IBM Plex Sans, sans-serif",
   opensans: "Open Sans, sans-serif",
};

export const acceptedImageFormats: string[] = [
   'image/png',
   'png',
   'image/jpg',
   'image/jpeg',
   'image/gif',
   'jpg',
   'gif',
   '.jpg',
   'jpeg',
   'image/src',
   'src',
];

export const acceptedBgImageFormats: string[] = [
   'image/png',
   'png',
   'image/jpg',
   'image/jpeg',
   'jpg',
   '.jpg',
   'jpeg',
];

export const acceptedDocsFormats: string[] = [
   'application/doc',
   'doc',
   '.pdf',
   'pdf',
   '.doc',
   'application/pdf',
];

export const acceptedVideoFormats: string[] = [
   'video/mpeg',
   'mpeg',
   'video/mp4',
   'mp4',
];

export const acceptedFileFormats: string[] = [...acceptedImageFormats, ...acceptedDocsFormats, ...acceptedVideoFormats];

export const GOOGLE_TRACKING_ID: string = 'UA-56713941-6”';
