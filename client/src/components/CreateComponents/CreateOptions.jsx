import '../../../public/css/animate.css'
import '../../../public/css/font-awesome.min.css'
import '../../../public/css/namari-color.css'
import '../../../public/css/style.css'

import { useState } from 'react'
import CreateImage_Story from './CreateImage_Story.jsx'
import CreateImage from './CreateImage.jsx'
import CreateStory from './CreateStory.jsx'

export default function CreateOptions() {

    const [ImageStory, setIsShownImageStory] = useState(false);
    const [Story, setIsShownStory] = useState(false);
    const [Image, setIsShownImage] = useState(false);

    const handleClickImageStory = () => {
        setIsShownImageStory(current => !current);
    }

    const handleStory = () => {
        setIsShownStory(current => !current);
    }

    const handleClickImage = () => {
        setIsShownImage(current => !current);
    }

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
                                <p>Upload your favourite image/s, wheder they are from internet or taken by you</p>
                            </div>
                            <a className="button" onClick={handleClickImage}>IMAGE</a>

                            {Image && (
                                <CreateImage CloseForm={() => { setIsShownImage(false) }} />)}

                        </div>
                    </div>
                    <div
                        className="pricing-block featured col-3 wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <div className="pricing-block-content">
                            <h3>Story and image</h3>
                            <p className="pricing-sub">Most popular choice</p>
                            <p className="pricing-sub"></p>
                            <div className="pricing">
                                <p>The best you can choose share a story and a photo for more visualisation</p>
                            </div>
                            <a className="button" onClick={handleClickImageStory}>IMAGE + STORY</a>
                            <div>
                                {ImageStory && (
                                    <CreateImage_Story CloseForm={() => { setIsShownImageStory(false) }} />)}
                            </div>
                        </div>
                    </div>
                    <div
                        className="pricing-block featured col-3 wow fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        <div className="pricing-block-content">
                            <h3>Story</h3>
                            <p className="pricing-sub"></p>
                            <div className="pricing">

                                <p>Write your personal and favouritge stories and share them with other users</p>
                            </div>
                            <a className="button" onClick={handleStory}>STORY</a>
                            <div>
                                {Story && (
                                    <CreateStory CloseForm={() => { setIsShownStory(false) }} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}