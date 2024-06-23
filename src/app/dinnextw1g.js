import localFont from 'next/font/local'
 
const DINNextW1GFont = localFont({
    src: [
        {
            path: '../fonts/Univers.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Univers-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/Univers-Bold.woff2',
            weight: '600',
            style: 'normal',
        }
    ],
    variable: "--dinNext-font"
})

export default DINNextW1GFont;

