import "../../../public/css/details.css"

import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as storyImageService from '../../service/storyImageService.js';
import * as commentService from '../../service/commentService.js';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../path.js";
export default function storyImageDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [storyImage, setstoryImage] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { storyImageId } = useParams();

    useEffect(() => {
        storyImageService.getOne(storyImageId)
            .then(setstoryImage);

        commentService.getAll(storyImageId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [storyImageId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            storyImageId,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${storyImage.textTitle}`);

        if (hasConfirmed) {
            await storyImageService.remove(storyImageId);

            navigate('/photosImages');
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    return (
        <>
            <h2>Details Form</h2>
            <section className="formDetails">
                <h2 htmlFor="Title" className="title">Title: {storyImage.textTitle}</h2><br />
                <img className="story-img" src={storyImage.imageUrl} alt={storyImage.textTitle} /><br />
                <h3 htmlFor="theStory">The full story:</h3>
                <p className="story-text" id="story" name="story" readOnly >{storyImage.text}</p><br />
                <div className="details-comments">
                    <h2 className="comm">Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <h3 className="no-comment">No comments.</h3>
                    )}
                </div>

                {userId === storyImage._ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.EditStoryImage, { storyImageId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}

                {userId !== storyImage._ownerId && (
                    <>
                        <article className="create-comment">
                            <div className="labelComm">
                            <label >Add new comment:</label>
                            </div>
                            <form className="form" onSubmit={onSubmit}>
                                <textarea className="textComm" name="comment" value={values.comment} onChange={onChange} placeholder="Comment......" required></textarea>
                                <input className="btnsubmit" type="submit" value="Add Comment"  />
                            </form>
                        </article>
                    </>
                )}
            </section>
        </>
    )
}