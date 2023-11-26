import '../../../../public/css/stories.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Stories() {

    const [stories, setStories] = useState([])
    useEffect(() => {
        axios.get("/api/stories")
          .then(response => setStories(response.data))
          .catch(error => console.error(error));
      }, []);

    return (
        <aside
            id="gallery"
            className="row text-center scrollto clearfix"
            data-featherlight-gallery=""
            data-featherlight-filter="a"
        >
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Card Title</div>
                    <div className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                    <button className="btn-primary">Details</button>
                </div>
            </div>
        </aside>
    )
}