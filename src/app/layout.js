import DINNextW1GFont from '@/app/dinnextw1g'
import localFont from 'next/font/local'
import "./globals.css";

const universFont = localFont({
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
    variable: "--univers-font"
})

const obliqueFont = localFont({
    src: [
        {
            path: '../fonts/Univers-Oblique.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Univers-LightOblique.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/Univers-BoldOblique.woff2',
            weight: '600',
            style: 'normal',
        }
    ],
    variable: "--oblique-font"
})

export const metadata = {
    title: "Webicient",
    description: "A sample project for webicient company",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${universFont.variable} ${obliqueFont.variable} ${DINNextW1GFont.variable}`}>
                {children}
            </body>
        </html>
    );
}
