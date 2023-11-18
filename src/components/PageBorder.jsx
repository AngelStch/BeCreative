import '../../public/css/animate.css'
import '../../public/css/font-awesome.min.css'
import '../../public/css/namari-color.css'
import '../../public/css/style.css'
export default function PageBorder() {
    return (
        <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
            <div
                className="top-border wow fadeInDown animated"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
            />
            <div
                className="right-border wow fadeInRight animated"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
            />
            <div
                className="bottom-border wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
            />
            <div
                className="left-border wow fadeInLeft animated"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
            />
        </div>
    )
}