import localFont from 'next/font/local'
 
const DINNextW1GFont = localFont({
    src: [
        {
            path: '../fonts/dinnextw1g/dinnextw1g_ultralight.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../fonts/dinnextw1g/dinnextw1g_light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/dinnextw1g/dinnextw1g.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/dinnextw1g/dinnextw1g_medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/dinnextw1g/dinnextw1g_bold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/dinnextw1g/dinnextw1g_black.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/dinnextw1g/dinnextw1g_heavy.otf',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: "--dinNext-font"
})

export default DINNextW1GFont;

