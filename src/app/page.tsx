
// import Portfolio from "./landing";

// export default function Home() {
//   return (Portfolio());

// }

import Footer from './footer/footer';
import Top from './top/top';
import Welcome from './welcome/welcome';

export default function Home() {
    // return (Portfolio())
    return (
        <div className='container mx-2 sm:mx-auto h-full'>
            <Top />
            
            <Welcome />

            
            <Footer />

        </div>
    );
}