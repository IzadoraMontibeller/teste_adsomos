import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <head>
        <link
          rel="icon"
          href="https://hasar.sharepoint.com/sites/hasarbrasil/documentos%20partilhados/03%20marketing/01%20padr%c3%b5es/01%20identidade%20visual/logo/hasar%20brasil/logos%20portal-02.png?web=1"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
