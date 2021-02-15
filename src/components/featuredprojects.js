function FeaturedProjects() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 class="text-center">Featured</h2>
                </div>
                <br />
                <br />
            </div>

            <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                    <div class="card card-box" >
                        <img class="card-img-top" src="https://via.placeholder.com/150x80" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <div class="card card-box">
                        <img class="card-img-top" src="https://via.placeholder.com/150x80" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <div class="card card-box">
                        <img class="card-img-top" src="https://via.placeholder.com/150x80" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProjects;
