import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
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
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@jovination4",
    title: "Jovin Shija | Software Engineer",
    description:
      "Explore the portfolio of Jovin Shija, a Software Engineer & Full Stack Developer. Crafting immersive digital wonders using JavaScript, React.js, and Python.",
    images: ["https://jovinshija.tech/preview.png"],
  },
  other: {
    "facebook-domain-verification": "p35u9ozrvagy4l1mwtld6t0hwkhllz",
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
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jovin Shija",
            url: "https://jovinshija.tech",
            sameAs: [
              "https://www.linkedin.com/in/jovination",
              "https://www.twitter.com/jovination4",
              "https://www.instagram.com/jovination_",
            ],
            jobTitle: "Software Engineer",
            worksFor: {
              "@type": "Organization",
              name: "Spiraxy Studio",
            },
            knowsAbout: ["Software Development", "Web Development", "App Development", "JavaScript"],
          }),
        }} />
      </head>
      <body className={`${manrope.variable} antialiased bg-[--background] text-white`}>
        {children}

        <Script src="https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js" strategy="lazyOnload" />
        <Script src="https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js" strategy="lazyOnload" />
        <Script id="firebase-init" strategy="lazyOnload" dangerouslySetInnerHTML={{
          __html: `
            const firebaseConfig = {
              apiKey: "AIzaSyCTqeH7x6XDkmNatMXQMgVU18a6ISy40Vo",
              authDomain: "jovinshijatech.firebaseapp.com",
              projectId: "jovinshijatech",
              storageBucket: "jovinshijatech.appspot.com",
              messagingSenderId: "383600900154",
              appId: "1:383600900154:web:d115801dcff88ad5d61d03",
              measurementId: "G-7HBHM8EX6D"
            };
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
          `,
        }} />
      </body>
    </html>
  );
}
