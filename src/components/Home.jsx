import PageMenu from "./HeaderMenu.jsx"

export default function Home() {
    return (
        <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
            <div id="banner-content" className="row clearfix">
                <div className="col-38">
                    <div className="section-heading">
                        <h1>BeCreative:  Where creativity meets the click.</h1>
                        <h2>
                        Welcome to BeCreative, where every click tells a story. Immerse yourself in the enchanting visuals of our site through the lens of our passionate photographer,namely You. Each snapshot captures the essence of this quaint town, revealing hidden tales in every nook and cranny. Explore the magical moments frozen in time, and let our images transport you to a world where reality meets imagination.
                        </h2>
                    </div>
                    <a href="#" className="button">
                        START CREATING 
                    </a>
                </div>
            </div>
        </header>
    )
}