import React from "react";
import "./Logo.css";

export default function Logo() {
    return (
        <>
            <div className="logo-container">
                <div className="logo-glow">
                    {/* <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.0796 13.9426L22.7586 15.8112L18.6888 15.3033L14.8584 14.8755L13.1874 16.7283L11.5519 18.5718L8.86721 17.8472L6.34991 17.0793L4.68848 18.894L4.61538 18.9662L1 4.28351L13.6773 1L22.1041 5.84598L24.0926 13.9215L24.0796 13.9426Z" fill="#020611"/>
                    <path d="M22.1201 5.83722L16.5764 7.3487L15.3377 7.66953L13.7026 1.02894" fill="#020611"/>
                    <path d="M24.4921 16.3117L23.5762 18.1116L19.461 18.1441L15.5949 18.2239L14.1854 20.2737L12.8104 22.3096L10.043 21.9462L7.436 21.5182L6.14686 23.3479L5.95474 23.6291L9.29035 32L28 24.4463L24.6389 16.0117L24.4921 16.3117Z" fill="#020611"/>
                    <path d="M22.1201 5.83722L16.5764 7.3487L15.3377 7.66953L13.7026 1.02894M4.16817 7.77594L12.1299 5.71379M5.49582 13.094L20.8384 9.12015M9.74421 27.5471L24.4649 21.6293M24.0796 13.9426L22.7586 15.8112L18.6888 15.3033L14.8584 14.8755L13.1874 16.7283L11.5519 18.5718L8.86721 17.8472L6.34991 17.0793L4.68848 18.894L4.61538 18.9662L1 4.28351L13.6773 1L22.1041 5.84598L24.0926 13.9215L24.0796 13.9426ZM24.4921 16.3117L23.5762 18.1116L19.461 18.1441L15.5949 18.2239L14.1854 20.2737L12.8104 22.3096L10.043 21.9462L7.436 21.5182L6.14686 23.3479L5.95474 23.6291L9.29035 32L28 24.4463L24.6389 16.0117L24.4921 16.3117Z" stroke="#FDF7F7" stroke-width="1.65" stroke-miterlimit="10"/>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="336" height="95" viewBox="0 0 336 95" fill="none">
                        <g filter="url(#filter0_f_11_66)">
                            <path d="M14 47.5C14 28.9985 28.9985 14 47.5 14H288.5C307.002 14 322 28.9985 322 47.5C322 66.0015 307.002 81 288.5 81H47.5C28.9985 81 14 66.0015 14 47.5Z" fill="#FDF7F7" fillOpacity="0.05"/>
                            <path d="M47.5 9C26.237 9 9 26.237 9 47.5C9 68.763 26.237 86 47.5 86H288.5C309.763 86 327 68.763 327 47.5C327 26.237 309.763 9 288.5 9H47.5Z" stroke="url(#paint0_linear_11_66)" strokeWidth="10"/>
                        </g>
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="24px" fontFamily="Arial, sans-serif">
                            Split'n Share
                        </text>
                        <defs>
                            <filter id="filter0_f_11_66" x="0" y="0" width="336" height="95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_11_66"/>
                            </filter>
                            <linearGradient id="paint0_linear_11_66" x1="14" y1="47.5" x2="322" y2="47.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FDF7F7" stopOpacity="0.02"/>
                                <stop offset="1" stopColor="#979393" stopOpacity="0.01"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <p id="tagline">Partagez  facilement vos additions entre amis</p>
        </>
    )
}
