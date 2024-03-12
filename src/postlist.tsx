import { useState, useEffect } from "react";

interface BlogPost {
    id: number;
    title: string;
    post: string;
    date: string;
}

const PostList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // TODO: change to async & await.
    useEffect(() => {
        fetch(`https://frp7yxvfsznb435yoar2beb45y0ddecx.lambda-url.us-east-1.on.aws/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}

            <div className="row">
                {data &&
                    (data as BlogPost[]).map((obj: BlogPost) => (
                        <div key={obj.id} className="col-12 mb-2">
                            <div className="card">
                                <div className="card-header">{obj.title}</div>
                                <div className="card-body">
                                    <p className="card-text">{obj.post}</p>
                                    <p className="card-text"><small className="text-body-secondary">Posted {obj.date}</small></p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
};

export default PostList;