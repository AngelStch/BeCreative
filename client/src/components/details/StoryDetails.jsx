import "../../../public/css/details.css"
import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as storyService from '../../service/storyService.js';
import * as commentService from '../../service/commentService.js';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../path.js";
export default function StoryDetails() {
    const navigate = useNavigate();
    const { username, userId } = useContext(AuthContext);
    const [story, setStory] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { storyId } = useParams();

    useEffect(() => {
        storyService.getOne(storyId)
            .then(setStory);

        commentService.getAll(storyId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [storyId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            storyId,
            values.comment
        );

        newComment.owner = { username };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${story.textTitle}`);

        if (hasConfirmed) {
            await storyService.remove(storyId);

            navigate('/stories');
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    return (
        <>
            <h2>Details Form</h2>
            <section className="formDetails">
                <h2 htmlFor="Title" className="title">Title: {story.textTitle}</h2><br />
                <label htmlFor="lastName">The full story:</label>
                <p type="text" id="story" name="story" readOnly >{story.text}</p><br />
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
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {userId === story._ownerId && (
                    <div className="buttons">
                        {/* {pathToUrl(Path.storyEdit, { storyId })} */}
                        <Link to="/" className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}

                {userId !== story._ownerId && (
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