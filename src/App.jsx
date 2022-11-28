import { Fragment } from 'react';
import './App.css'
import { FlexContent, Footer, Hero, Sales, Stories, Navbar, Cart } from "./components";
import { heroapi, popularsales, topratedsales, highlight, sneaker, story,footerAPI } from "./Data/data"

function App() {

  return (
    <Fragment>
      <Navbar/>
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists={true}/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={topratedsales} />
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
        <Footer footerAPI={footerAPI}/>
      </main>
    </Fragment>
  );
}

export default App
