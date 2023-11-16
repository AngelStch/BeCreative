export default function Footer() {
    return (
        <footer id="landing-footer" className="clearfix">
            <div className="row clearfix">
                <p id="copyright" className="col-2">
                    Made with love by{" "}
                    <a href="https://www.shapingrain.com">ShapingRain</a>
                </p>
                <ul className="col-2 social-icons">
                    <li>
                        <a
                            target="_blank"
                            title="Facebook"
                            href="https://www.facebook.com/username"
                        >
                            <i className="fa fa-facebook fa-1x" />
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            title="Google+"
                            href="http://google.com/+username"
                        >
                            <i className="fa fa-google-plus fa-1x" />
                            <span>Google+</span>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            title="Twitter"
                            href="http://www.twitter.com/username"
                        >
                            <i className="fa fa-twitter fa-1x" />
                            <span>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            title="Instagram"
                            href="http://www.instagram.com/username"
                        >
                            <i className="fa fa-instagram fa-1x" />
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" title="behance" href="http://www.behance.net">
                            <i className="fa fa-behance fa-1x" />
                            <span>Behance</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
