import { Link } from "react-router-dom";
import Path from '../../../path.js';


    export default function StoryItem({ _id,
        textTitle,
        text,
}) {

    return (

        <div className="card">
            <div className="card-body">
                <div className="card-title">{textTitle}</div>
                <div className="card-text">
                    {text.slice(0,10)}
                </div>
                <Link to={`${Path.EditStory}/${_id}`} className="btn-primary">view more</Link>
            </div>
        </div>
    )
}