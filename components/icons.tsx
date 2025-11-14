import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="swoosh-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
             <linearGradient id="pin-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
        </defs>
        <circle cx="56" cy="60" r="38" fill="url(#globe-gradient)" />
        {/* Simplified continents */}
        <path d="M45,45 C40,55 42,75 48,85 S 58,95 62,88 S 70,65 65,50 S 50,35 45,45 Z" fill="#16a34a" opacity="0.8"/>
        <path d="M68,42 C72,48 70,60 72,70 S 78,78 80,72 S 80,50 75,45 Z" fill="#16a34a" opacity="0.8"/>
        
        {/* The swoosh path for the airplane */}
        <path id="swoosh-path" d="M20 80 C 40 120, 88 110, 100 65" stroke="url(#swoosh-gradient)" fill="none" strokeWidth="8" strokeLinecap="round"/>
        
        {/* The animated airplane */}
        <g>
            <path d="M-2,-4 L10,0 L-2,4 L0,0 Z" fill="white" transform="scale(1.5)">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.42 0 0.58 1">
                    <mpath href="#swoosh-path" />
                </animateMotion>
            </path>
        </g>
        
        {/* The location pin */}
        <path d="M72 70 C 72 60, 80 52, 88 52 C 96 52, 104 60, 104 70 C 104 85, 88 100, 88 100 C 88 100, 72 85, 72 70 Z" fill="url(#pin-gradient)"/>
        <circle cx="88" cy="70" r="10" fill="white"/>
        <text x="88" y="73" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e40af">GPS</text>
    </svg>
);


export const LatamLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0H48V48H0V0Z" fill="white" fillOpacity="0.01"/>
    <path d="M12 11L4 24H12L20 11H12Z" fill="#0033A0"/>
    <path d="M21 11L13 24H21L29 11H21Z" fill="#0033A0"/>
    <path d="M29 11L21 24H29L37 11H29Z" fill="#D81E05"/>
    <path d="M38 11L30 24H38L46 11H38Z" fill="#D81E05"/>
  </svg>
);

export const SkyLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18.913 6.96313H21.4285V4.76172H14.1428V6.96313H16.6067C15.2287 11.6441 12.0125 15.111 8.57139 17.0709L10.2857 18.9998L10.3242 19.0383C14.3999 16.7141 18.0035 12.6369 19.4632 6.96313H18.913ZM7.14282 14.8569L9.17854 13.0355L4.49996 4.76172H2.57139L7.14282 14.8569Z" fill="#6c2bd9"/>
  </svg>
);

export const BoaLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#0033A0"/>
        <path d="m13.21 15.4-3.95-3.95a.996.996 0 1 1 1.41-1.41l2.22 2.22 4.68-4.68a.996.996 0 1 1 1.41 1.41L14.62 15.4a.996.996 0 0 1-1.41 0z" fill="#D81E05"/>
        <path d="M12.5,9.5 C12.5,9.22 12.72,9 13,9 L16,9 C16.28,9 16.5,9.22 16.5,9.5 C16.5,9.78 16.28,10 16,10 L13,10 C12.72,10 12.5,9.78 12.5,9.5 z" fill="#FFC72C"/>
    </svg>
);

export const JetSmartLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="45" fill="#0033A0" />
        <path d="M30 60 C 40 70, 60 70, 70 60" stroke="#FFFFFF" strokeWidth="8" fill="transparent" />
        <path d="M35 40 Q 50 25, 65 40" stroke="#D81E05" strokeWidth="8" fill="transparent" />
    </svg>
);

export const FlybondiLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="45" fill="#FFD700" />
        <path d="M30,50 a20,20 0 1,1 40,0" fill="#000" />
        <circle cx="50" cy="50" r="10" fill="#FFD700" />
    </svg>
);

export const MaxMilhasLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="100" height="50" rx="10" fill="#2E8B57"/>
      <text x="50" y="35" fontFamily="Arial, sans-serif" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">max</text>
    </svg>
);

export const AzulLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M49.9998 8.33301C38.8358 8.33301 28.1814 13.033 20.4184 20.796C12.6554 28.559 7.9554 39.2134 7.9554 50.3774C7.9554 61.5414 12.6554 72.1958 20.4184 79.9588C28.1814 87.7218 38.8358 92.4218 49.9998 92.4218C61.1638 92.4218 71.8182 87.7218 79.5812 79.9588C87.3442 72.1958 92.0442 61.5414 92.0442 50.3774C92.0442 39.2134 87.3442 28.559 79.5812 20.796C71.8182 13.033 61.1638 8.33301 49.9998 8.33301Z" fill="#001E64"/>
        <path d="M29.1667 50.377L33.3334 46.2103L50.0001 62.877L66.6667 46.2103L70.8334 50.377L50.0001 71.2103L29.1667 50.377Z" fill="#00AEEF"/>
        <path d="M50.0001 29.5439L33.3334 46.2106L37.5001 50.3773L50.0001 37.8773L62.5001 50.3773L66.6667 46.2106L50.0001 29.5439Z" fill="white"/>
    </svg>
);

export const DecolarLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="8" fill="#F43F5E"/>
        <path d="M24 12C17.37 12 12 17.37 12 24C12 30.63 17.37 36 24 36C27.13 36 29.98 34.89 32.09 33.09C30.29 30.98 29.18 28.13 29.18 25.1C29.18 20.53 32.89 16.82 37.46 16.82C35.13 13.91 30.09 12 24 12Z" fill="white"/>
    </svg>
);

export const BookingLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="48" height="48" rx="8" fill="#003580"/>
        <path d="M21 14H24.5C27.5 14 30 16.5 30 19.5C30 22.5 27.5 25 24.5 25H21V14ZM21 27H25C28.5 27 31 29.5 31 32.5C31 35.5 28.5 38 25 38H21V27Z" fill="white" stroke="#FFFFFF" strokeWidth="2"/>
    </svg>
);

export const ClickBusLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#FF6600"/>
      <path d="M16 24V18H32V24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 30H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 30H32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 24H36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 30H36V34H12V30Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CCRBarcasLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="48" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="50" fill="#00AEEF" rx="8"/>
    <text x="50" y="35" fontFamily="Arial, sans-serif" fontSize="24" fill="white" textAnchor="middle" fontWeight="bold">
      BARCAS
    </text>
  </svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const HourglassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

export const AlertTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

export const BackpackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 0a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v.75m-1.5 0a1.5 1.5 0 0 0-1.5-1.5M4.5 9.75a4.5 4.5 0 0 1 4.5-4.5h6a4.5 4.5 0 0 1 4.5 4.5v9.75a1.5 1.5 0 0 1-1.5-1.5h-12a1.5 1.5 0 0 1-1.5-1.5V9.75Z" />
    </svg>
);

export const SuitcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0h15m-15 0a7.5 7.5 0 0 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 0 0 7.5 7.5h0a7.5 7.5 0 0 0 7.5-7.5M12 19.5v-7.5" />
    </svg>
);

export const BaggageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75V3.375A2.25 2.25 0 0 0 9.75 1.125h-3.75A2.25 2.25 0 0 0 3.75 3.375v6.375" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75h4.5v-.375c0-.621-.504-1.125-1.125-1.125H12.75" />
    </svg>
);

export const FuelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h.375v.375H8.25V7.5Zm-1.5 1.5h.375v.375H6.75V9Zm1.5 1.5h.375v.375H8.25v-.375Zm-1.5 1.5h.375v.375H6.75v-.375Zm1.5 1.5h.375v.375H8.25V12Zm-1.5 1.5h.375v.375H6.75v-.375Zm1.5 1.5h.375v.375H8.25v-.375Zm1.5-1.5h.375v.375H9.75v-.375Zm1.5 1.5h.375v.375H11.25v-.375Zm1.5-1.5h.375v.375H12.75v-.375Zm1.5 1.5h.375v.375H14.25v-.375Zm1.5-1.5h.375v.375H15.75v-.375Zm-1.5-3h.375v.375H14.25V9Zm-1.5 0h.375v.375H12.75V9Zm-1.5 0h.375v.375H11.25V9Zm-1.5 0h.375v.375H9.75V9Zm-3 3.375c0-1.036.84-1.875 1.875-1.875h.375a1.875 1.875 0 0 1 1.875 1.875v7.5c0 1.036-.84 1.875-1.875-1.875h-.375a1.875 1.875 0 0 1-1.875-1.875v-7.5Zm12.375-1.875a1.875 1.875 0 0 0-1.875-1.875h-.375a1.875 1.875 0 0 0-1.875 1.875v7.5c0 1.036.84 1.875 1.875 1.875h.375a1.875 1.875 0 0 0 1.875-1.875v-7.5Z" />
    </svg>
);


export const TollIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


export const CarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875m-1.5-9-3.75-3.75m0 0a3.75 3.75 0 1 0-5.303 0m5.303 0-3.75 3.75" />
    </svg>
);

export const BusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75V4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V9.75m-3.375 0h3.375M3.75 9.75h4.875M3.75 4.875h4.875c.621 0 1.125.504 1.125 1.125v4.875" />
    </svg>
);


export const TrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75V6.375a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v3.375M12 9.75h4.5m-4.5 0a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v3.375" />
    </svg>
);

export const CompassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.362 8.638-3.388 6.776-6.776-3.388 3.388-6.776 6.776 3.388Z" />
    </svg>
);

export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

export const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" />
    </svg>
);

export const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.664 0l3.181-3.183m-11.664 0-3.181 3.183m0 0-3.181-3.183m3.181 3.183L9.75 16.5m-3.181 3.183-3.181-3.183" />
    </svg>
);

export const PlaneTakeoffIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Zm0 0h7.5" />
    </svg>
);

export const CogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m0 0H8.25m4.125 4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z" />
    </svg>
);

export const ActivityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
);

export const ShipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662m18 0c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.678 48.678 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.092 1.21-.138 2.43-.138 3.662m18 0h-18" />
    </svg>
);

export const RouteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.125 1.125 0 0 0-.11 2.243l.218.065a2.25 2.25 0 0 0 1.161.886l.51.766c.319.48.126 1.121-.216 1.49l-1.068.89a1.125 1.125 0 0 0-.405.864v.568M12.75 3.03h-1.5M12.75 21h-1.5m.75-18v.568c0 .334-.148.65-.405.864l-1.068.89c-.442.369-.535 1.01-.216 1.49l.51.766a2.25 2.25 0 0 1 1.161.886l.143.048a1.125 1.125 0 0 0 .11 2.243l-.218.065a2.25 2.25 0 0 0-1.161.886l-.51.766c-.319.48-.126 1.121.216 1.49l1.068.89a1.125 1.125 0 0 0 .405.864v.568m0 0h1.5" />
  </svg>
);

export const ParkingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-6v6m-9-6h3.75a3.75 3.75 0 1 1 0 7.5H6.75" />
  </svg>
);

export const TangoDancersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6h-6v6ZM12 5.25a6 6 0 0 1 6 6h-6v-6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 1-6-6h6v6ZM12 5.25a6 6 0 0 0-6 6h6v-6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
    </svg>
);

export const MountainPeakIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152-.439 1.591 0L21.75 12M2.25 12h19.5" />
    </svg>
);

export const WineGlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75V12m0 0v-9.75m0 9.75h4.5m-4.5 0h-4.5m4.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Zm4.5 0a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" />
    </svg>
);

export const CompassSouthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0 3.375-3.375M12 21l-3.375-3.375" />
    </svg>
);

export const RiverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
);

export const SouthAmericaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </svg>
);

export const MontevideoGateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1.091" />
    </svg>
);

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

export const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
);

// FIX: Added the missing WifiIcon component.
export const WifiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.136 11.886a9 9 0 0 1 13.728 0M12 18.188a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
);

export const ThumbsUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M6.596 9.75H4.25l-.714 10.686a.75.75 0 0 0 .714.814h.096a.75.75 0 0 0 .714-.814L6.596 9.75Z" />
    </svg>
);

export const ThumbsDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.367 13.75c-.806 0-1.533.446-2.031 1.08a9.041 9.041 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 0 0-.322 1.672V21.25a.75.75 0 0 1-.75.75 2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.874c-1.026 0-1.945-.694-2.054-1.715A11.94 11.94 0 0 1 1.75 12c0-.435.023-.863.068-1.285.109-1.022 1.028-1.715 2.054-1.715h3.126c.618 0 .991-.724.725-1.282A7.471 7.471 0 0 1 7.5 3.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25v.109c0 .587.213 1.158.58 1.621.366.462.836.858 1.38 1.134.475.244.984.42 1.517.534a9.042 9.042 0 0 1 2.861 2.4c.5.634.787 1.458.787 2.338Zm-3.149-3.5c-.266-.558.107-1.282.725-1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M6.596 9.75H4.25l-.714 10.686a.75.75 0 0 0 .714.814h.096a.75.75 0 0 0 .714-.814L6.596 9.75Z" />
    </svg>
);

export const ChurchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0a2.25 2.25 0 0 1-2.25-2.25V15M12 19.5a2.25 2.25 0 0 0 2.25-2.25V15m-4.5 0h4.5m-4.5 0a2.25 2.25 0 0 1-2.25-2.25V9.75A2.25 2.25 0 0 1 7.5 7.5h9a2.25 2.25 0 0 1 2.25 2.25v2.25a2.25 2.25 0 0 1-2.25 2.25m-13.5 0v-2.25a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5L6.75 9h10.5L12 4.5z" />
    </svg>
);

export const LavenderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c2.485 0 4.5-2.015 4.5-4.5V12a4.5 4.5 0 0 0-4.5-4.5h-1.5a4.5 4.5 0 0 0-4.5 4.5v5.25c0 2.485 2.015 4.5 4.5 4.5Zm0 0V12m0 0a1.5 1.5 0 0 1 1.5-1.5h.75a1.5 1.5 0 0 1 1.5 1.5v2.25a1.5 1.5 0 0 1-1.5 1.5h-.75a1.5 1.5 0 0 1-1.5-1.5V12Zm-3 0a1.5 1.5 0 0 1 1.5-1.5h.75a1.5 1.5 0 0 1 1.5 1.5v2.25a1.5 1.5 0 0 1-1.5 1.5h-.75a1.5 1.5 0 0 1-1.5-1.5V12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1.5" />
    </svg>
);

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
);