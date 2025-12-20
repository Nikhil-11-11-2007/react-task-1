const Page2 = () => {
  return (
    <div className='page2'>
      <div className="page2-top">
        <button>About Horizon</button>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laborum provident veritatis ad nam minima voluptatum iste fugiat a doloremque vel.</h3>
      </div>
      <div className="page2-center">
        <div className="card">
          <div id="svg">
            <img src="https://coloring.photos/wp-content/uploads/Tennis-court-coloring-page.jpg" alt="" />
          </div>
          <h2>Lorem ipsum dolor sit, amet <span>consectetur adipisicing elit. Autem est optio maiores xysea </span> eveniet explicabo sed similique?</h2>
          <div className="game-mode">
            <div className="btn">
              <button></button>
            </div>
            <h4>Game Mode</h4>
          </div>
        </div>
        <div className="card">
          <button>Private & Group Lesson</button>
        </div>
        <div className="card">
          <div className="top">
            <h1>100+</h1>
            <h4>Pro Coaches</h4>
            <p>Lorem ipsum dolor sit  consectetur adipisicing amet elit. Sed, cumque.</p>
          </div>
          <div className="bottom">
            <div className="levels">
              <h4>Beginner</h4>
              <div className="level-cen">
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
              </div>
              <h4>55</h4>
            </div>
            <div className="levels">
              <h4>Intermediate</h4>
              <div id="cen-level" className="level-cen">
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
              </div>
              <h4>40</h4>
            </div>
            <div className="levels">
              <h4>Advanced</h4>
              <div className="level-cen">
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
                <div className="dott"></div>
              </div>
              <h4>55</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="page2-bottom">
        <h1>A few more facts about usin numbers</h1>
        <div className="bottom-down">
          <div className="ratings">
            <h1>12000+</h1>
            <h4>Hours of play annually</h4>
          </div>
          <div className="ratings">
            <h1>89%</h1>
            <h4>Player Retention Rate</h4>
          </div>
          <div className="ratings">
            <h1>1,200+</h1>
            <h4>Active Members</h4>
          </div>
          <div className="ratings">
            <h1>125+</h1>
            <h4>Annual Tournaments</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
