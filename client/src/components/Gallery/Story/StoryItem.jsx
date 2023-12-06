import { Link } from "react-router-dom";


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
                <Link to={`/stories/${_id}`} className="btn-primary">view more</Link>
            </div>
        </div>
    )
}