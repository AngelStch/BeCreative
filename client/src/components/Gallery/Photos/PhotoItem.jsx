export default function PhotoItem({
    imageUrl
}) {
    return (
        <a
            href={imageUrl}
            data-featherlight="image"
            className="col-3 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <img
                src={imageUrl}
                alt="Landing Page"
            />
        </a>
    )
}