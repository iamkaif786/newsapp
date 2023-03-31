import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>

                    <img src={!imageUrl ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.toptal.com%2Fmachine-learning%2Fgenerative-adversarial-networks&psig=AOvVaw1qtozV0ffcekQ-Tb53eMBo&ust=1680325686999000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNC375Czhf4CFQAAAAAdAAAAABAE" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
