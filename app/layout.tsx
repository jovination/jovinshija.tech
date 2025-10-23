import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { initializeApp } from "firebase/app";
import "./globals.css";

// Define environment variables type-safely
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTqeH7x6XDkmNatMXQMgVU18a6ISy40Vo",
  authDomain: "jovinshijatech.firebaseapp.com",
  projectId: "jovinshijatech",
  storageBucket: "jovinshijatech.firebasestorage.app",
  messagingSenderId: "383600900154",
  appId: "1:383600900154:web:d115801dcff88ad5d61d03",
  measurementId: "G-7HBHM8EX6D"
};

// Font optimization
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Improves font loading performance
});

// Structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jovin Shija",
  url: "https://jovinshija.tech",
  sameAs: [
    "https://www.linkedin.com/in/jovination",
    "https://www.twitter.com/jovination_",
    "https://www.instagram.com/jovination_",
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Spiraxy Studio",
  },
  knowsAbout: ["Software Development", "Fullstack Developer", "App Development", "JavaScript"],
};

// SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://jovinshija.tech"),
  title: "Jovin Shija | Software Engineer | Full Stack Developer",
  description:
    "Explore the portfolio of Jovin Shija, a Software Engineer & Full Stack Developer. Crafting immersive digital wonders using JavaScript, React.js, and Python.",
  openGraph: {
    type: "website",
    url: "https://jovinshija.tech/",
    title: "Jovin Shija | Software Engineer | Full Stack Developer",
    description:
      "Explore the portfolio of Jovin Shija, a passionate Software Developer & UI/UX Designer. Crafting immersive digital wonders using JavaScript, React.js, and Python.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Jovin Shija Portfolio Preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jovination4",
    title: "Jovin Shija | Software Engineer | Full Stack Developer | SaaS Builder | Founder of Nasiacademy",
    description:
      "Explore the portfolio of Jovin Shija, a Software Engineer & Full Stack Developer. Crafting immersive digital wonders using JavaScript, React.js, and Python.",
    images: ["/preview.png"],
  },
  verification: {
    google: "Sz97e4b8ekBPyzuYSLTZhAvvXHI40WlMoUQVUsnpAuk",
    other: {
      "facebook-domain-verification": "p35u9ozrvagy4l1mwtld6t0hwkhllz",
    }
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
        
      </head>
      <body className="antialiased bg-[--background] text-white">
        {children}
        
        {/* Firebase Scripts - Using the recommended modular SDK */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7HBHM8EX6D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7HBHM8EX6D');
          `}
        </Script>
        <Script id="firebase-config" strategy="afterInteractive">
          {`
            import { initializeApp } from 'firebase/app';
            import { getAnalytics } from 'firebase/analytics';
            
            const firebaseConfig = ${JSON.stringify(firebaseConfig)};
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
          `}
        </Script>
        <Script
        id="feedbackgrove-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.src = "https://feedbackgrove.com/feedback-popup.js";
              script.setAttribute('data-username', "JovinShija");
              script.setAttribute('data-theme', "dark");
              script.setAttribute('data-template', "minimal");
              script.setAttribute('data-id', "customer-satisfaction");
              document.head.appendChild(script);
            })();
          `,
        }}
      />
        
      </body>
    </html>
  );
}