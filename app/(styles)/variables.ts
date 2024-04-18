export const GLOBALS = {
    
}

export const CARD = {
    BACKGROUND: "#464646",
    BORDER: "#535353",
}


export const COLORS = {
    LIGHT: "",
    DARK: "",
    GRAY: "#212121",
    DARK_GRAY: "#212121",
    PURPLE: "#D1A8FF",
    DARK_PURPLE: "#7e679752",

    WHITE: "#FFF",
    BLACK: "#000",

    BACKGROUND_COLOR: "#3A3A3A",
    TEXT_COLOR: "#E0E0E0",

    PRIMARY: "#3FC5F0",

    ...CARD
}


export const PADDING = ""

export const HEADINGS = {
    H1: "text-[46px] sm:text-[52px]",
    H2: "text-[38px]",
    H3: "text-[28px] sm:text-[32px]",
    H4: "",
    H5: "",
    H6: "",
}

export const DEFAULT_CARDS_STYLES = `
    p-5
    bg-[#464646]
    border-[#535353]
    rounded-[6px]

    hover:cursor-pointer
    hover:bg-[#525252]
    transition
    duration-350
`

export const DEFAULT_LANDING_SECTION_TITLE = `${HEADINGS.H1} mb-8 font-bold`

export const DEFAULT_H3_STYLES = `
    ${HEADINGS.H3} 
    font-bold 
    mb-2
`