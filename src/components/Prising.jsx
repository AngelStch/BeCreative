import '../../public/css/animate.css'
import '../../public/css/font-awesome.min.css'
import '../../public/css/namari-color.css'
import '../../public/css/style.css'
export default function Pricing() {
    return (
        <main id="content">
        
           

            
            <section
                id="pricing"
                className="secondary-color text-center scrollto clearfix "
            >
                <div className="row clearfix">
                    <div className="section-heading">
                        <h3>YOUR CHOICE</h3>
                        <h2 className="section-title">We have the right package for you</h2>
                    </div>
                    <div
                        className="pricing-block col-3 wow fadeInUp"
                        data-wow-delay="0.4s"
                    >
                        <div className="pricing-block-content">
                            <h3>Personal</h3>
                            <p className="pricing-sub">The standard version</p>
                            <div className="pricing">
                                <div className="price">
                                    <span>$</span>19
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <ul>
                                <li>5 Downloads</li>
                                <li>2 Extensions</li>
                                <li>Tutorials</li>
                                <li>Forum Support</li>
                                <li>1 year free updates</li>
                            </ul>
                            <a href="#" className="button">
                                BUY TODAY
                            </a>
                        </div>
                    </div>
                    <div
                        className="pricing-block featured col-3 wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <div className="pricing-block-content">
                            <h3>Student</h3>
                            <p className="pricing-sub">Most popular choice</p>
                            <div className="pricing">
                                <div className="price">
                                    <span>$</span>29
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <ul>
                                <li>15 Downloads</li>
                                <li>5 Extensions</li>
                                <li>Tutorials with Files</li>
                                <li>Forum Support</li>
                                <li>2 years free updates</li>
                            </ul>
                            <a href="#" className="button">
                                BUY TODAY
                            </a>
                        </div>
                    </div>
                    <div
                        className="pricing-block col-3 wow fadeInUp"
                        data-wow-delay="0.8s"
                    >
                        <div className="pricing-block-content">
                            <h3>Business</h3>
                            <p className="pricing-sub">For the whole team</p>
                            <div className="pricing">
                                <div className="price">
                                    <span>$</span>49
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <ul>
                                <li>Unlimited Downloads</li>
                                <li>Unlimited Extensions</li>
                                <li>HD Video Tutorials</li>
                                <li>Chat Support</li>
                                <li>Lifetime free updates</li>
                            </ul>
                            <a href="#" className="button">
                                BUY TODAY
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}