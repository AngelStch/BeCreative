
export default function All() {
    const [storiesImages, setStoriesImages] = useState([])
    useEffect(() => {
      fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
            setStoriesImages(Object.values(result))
        })
        
    }, [])

    return (
        <aside
            id="gallery"
            className="row text-center scrollto clearfix"
            data-featherlight-gallery=""
            data-featherlight-filter="a"
        >
            <div className="card">
                <img src="holder.js/100px180" alt="Card image cap" />
                <div className="card-body">
                    <div className="card-title">Card Title</div>
                    <div className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </div>
                    <button className="btn-primary">Go somewhere</button>
                </div>
            </div>
        </aside>
    )
}