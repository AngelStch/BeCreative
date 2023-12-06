import { Link } from 'react-router-dom'
import '../../../public/css/animate.css'
import '../../../public/css/font-awesome.min.css'
import '../../../public/css/namari-color.css'
import '../../../public/css/style.css'
import Path from '../../path.js'
Path
export default function About() {
    return (

        <section id="about" className="introduction scrollto">
            <div className="row clearfix">
                <div className="col-3">
                    <div className="section-heading">
                        <h2 className="section-title">
                            What's on your mind today?
                        </h2>
                        <p className="section-subtitle">

                            Welcome to our storytelling haven! At Be Crative, we believe in the power of narratives to connect, inspire, and transform. Join us on a journey where each story unfolds with passion, purpose, and the shared joy of weaving tales that resonate with the heart
                        </p>
                    </div>
                </div>
                <div className="col-2-3">
                    <div
                        className="col-2 icon-block icon-top wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="icon">
                            <i className="fa fa-html5 fa-2x" />
                        </div>
                        <div className="icon-block-description">
                            <h4>Photos &amp; Images</h4>
                            <p>
                                This is the best option for you. Tell us a story and follow up with a photo that maches your fairy
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-2 icon-block icon-top wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <div className="icon">
                            <i className="fa fa-tablet fa-2x" />
                        </div>
                        <div className="icon-block-description">
                            <h4>A pretty image</h4>
                            <p>
                                Capture the essence of your story in a single frame – share a photo on our website and let the visual narrative enhance the richness of your tale.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-2 icon-block icon-top wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        <div className="icon">
                            <i className="fa fa-bolt fa-2x" />
                        </div>
                        <div className="icon-block-description">
                            <h4>Or just a story</h4>
                            <p>
                                Tell us all your stories and let the audience visualize them trough your creative writing
                            </p>
                        </div>
                    </div>
                    
                    <div></div>
                    <div className='AboutButton'>
                        <Link className="button" to={Path.Options} >Tell the people</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
