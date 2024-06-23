import { GoogleFont } from 'next/font/google'
import localFont from 'next/font/local'
import "./globals.css";

const DINNextW1G = GoogleFont({
    family: 'DIN Next W1G',
    subsets: ['latin'],
    display: 'swap',
})

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
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${universFont.variable} ${obliqueFont.variable} ${DINNextW1G.className}`}>{children}</body>
        </html>
    );
}
