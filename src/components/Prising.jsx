import '../../public/css/animate.css'
import '../../public/css/font-awesome.min.css'
import '../../public/css/namari-color.css'
import '../../public/css/style.css'
import { Link } from 'react-router-dom'
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
                        <h2 className="section-title">What do you want to upload?</h2>
                        </div>
                        <div
                        className="pricing-block featured col-3 wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <div className="pricing-block-content">
                            <h3>Image</h3>
                            <p className="pricing-sub"></p>
                            <div className="pricing">
                                <p>Upload your favourite images, wheder they are from internet or taken by you</p>
                            </div>
                            <Link className="button" to="/create">POST ONLY IMAGE</Link>
                        </div>
                    </div>
                    <div
                        className="pricing-block featured col-3 wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <div className="pricing-block-content">
                            <h3>Image</h3>
                            <p className="pricing-sub"></p>
                            <div className="pricing">
                                <p>Upload your favourite images, wheder they are from internet or taken by you</p>
                            </div>
                            <Link className="button" to="/create">POST ONLY IMAGE</Link>
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