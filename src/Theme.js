import { ThemeProvider } from "styled-components";

const styles = {
    colors: {

        lettersBtnBorder: '#7AA7C7',
        lettersBtnBgDisabled: '#9FAAB5',
        lettersBtnColorDisabled: '#798A9F',
        lettersBtnColorEnabled: '#39739D',
        lettersBtnBgEnabled: '#E1ECF4',

        RandomWordButtonBg: '#27AE60',
        black: 'black',
        white: 'white',
        quarenteneColorRed: '#FF00001',
        quarenteneColorGreen: '#27AE60',

        knowTheWordBorder: '#CCCCCC',
        tryWordColor: '#3C76A1',
        tryWordBorder: '#7AA7C7'
    },
    fonts: {
        beginButton: {
            fontSize: '20px',
            lineHeight: '23px'
        },
        quarentine: {
            fontFamily: ['Noto Sans', 'sans-serif'],
            fontSize: '50px',
            lineHeight: '68px'
        },
        tryWordLabel: {
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '23px',
        },
    }

}
export default function Theme({children}){
    return <ThemeProvider theme={styles}>{children}</ThemeProvider>
}