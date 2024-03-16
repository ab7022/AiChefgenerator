import Footer from "./Footer";
import Navbar from "./Navbar";

export default function About() {
    return(
        <div>
            <Navbar/>
            <div className="flex flex-row items-center mt-60 justify-center align-middle">
                This is About Page
            </div>
            <Footer/>
        </div>
    )
}