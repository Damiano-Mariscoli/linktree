export default function HomePage() {
  const links = [{}];
  return (
    <>
      <div className="container animate-load">
        <div className="homeHeader mb-3">
          <img className="user" src="user.svg" alt="" />
          <h1 className="userName">Link Tree</h1>
        </div>

        <div className="flex flex-col items-center justify-center row gap-3 mx-auto">
          <div className="col-1 d-flex iconButton justify-center gap-1">
            <img className="icon" src="github.svg" alt="" />
            <button className="iconName ">Github</button>
          </div>

          <div className="col-1 d-flex iconButton justify-center gap-1">
            <img className="icon" src="curriculum.svg" alt="" />
            <button className="iconName ">Curriculum</button>
          </div>

          <div className="col-1 d-flex iconButton justify-center gap-1">
            <img className="icon" src="portfolio.svg" alt="" />
            <button className="iconName ">Portfolio</button>
          </div>

          <div className="col-1 d-flex iconButton justify-center gap-1">
            <img className="icon" src="linkedin.svg" alt="" />
            <button className="iconName ">Linkedin</button>
          </div>

          <div className="col-1 d-flex iconButton justify-center gap-1">
            <img className="icon" src="gmail.svg" alt="" />
            <button className="iconName ">Email</button>
          </div>

          <div className="col-1 d-flex iconButton justify-center gap-1">
            <img className="icon" src="blog.svg" alt="" />
            <button className="iconName ">Blog</button>
          </div>

          <div className="col-1 d-flex iconButton justify-center gap-1">
            <img className="icon" src="instagram.svg" alt="" />
            <button className="iconName ">Instagram</button>
          </div>

          <div className="col-1 d-flex iconButton justify-center gap-1">
            <img className="icon" src="twitter.svg" alt="" />
            <button className="iconName ">X</button>
          </div>

          {/* <div className="col-1 d-flex iconButton justify-center gap-1">
            <img className="icon" src="stackOverflow.svg" alt="" />
            <button className="iconName ">SO</button>
          </div> */}
        </div>
      </div>
    </>
  );
}
