import Head from "next/head";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
return (
<>  

    <Head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js" integrity="sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4" crossOrigin="anonymous" />
    <Script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/mhchem.min.js" integrity="sha384-RTN08a0AXIioPBcVosEqPUfKK+rPp+h1x/izR7xMkdMyuwkcZCWdxO+RSwIFtJXN"  crossOrigin="anonymous" />
    <Script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous" />
    {/* onload={renderMathInElement(document.body)} /> */}
    
    <Component {...pageProps} />
</> 
    );
}