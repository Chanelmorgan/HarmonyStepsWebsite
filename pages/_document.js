import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://unpkg.com/animate.css@4.1.1/animate.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
        />
        <style>{`
          html { line-height: 1.15; scroll-behavior: smooth; }
          body { margin: 0; font-family: 'Bricolage Grotesque', Inter, system-ui, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; color: var(--dl-color-theme-neutral-dark); background-color: var(--dl-color-theme-neutral-light); fill: var(--dl-color-theme-neutral-dark); }
          * { box-sizing: border-box; border-width: 0; border-style: solid; }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          data-section-id="navbar"
          src="https://unpkg.com/@teleporthq/teleport-custom-scripts"
        />
      </body>
    </Html>
  )
}
