import React from "react";
// import './Academy.css'; // Import the CSS file for styling
import { TiTick } from "react-icons/ti";

const Home = () => {
  return (
    <>
      <div className="main-content">
        <h1>Intract Academy </h1>

        <p>
          Intract users have together made more than $100 million in web3. Join
          them and learn how to earn crypto!
        </p>
        <button className="get-started">Get Started</button>
      </div>
      {/*2nd section  */}
      <div className="flex col ">
        <div className="crypto-box">
          <div className="flex crypto-content">
            <div>
              <img className="crypto-img" src="crypto.png" alt="crypto" />
            </div>
            <div>
              <h2 className="crypto-title">Basics of Crypto</h2>
              <p>
                The safest and easiest way place to start your crypto journey!
              </p>
              <span className="span">1490 XPs</span>
            </div>
          </div>

          <div className="flex crypto-content-box">
            <div>
              <img className="crypto-img1" src="crypto-img1.png" alt="crypto" />
            </div>
            <div className="crypto-box">
              <h2 className="crypto-title1">#1: But what is crypto and...</h2>
              <p></p>
              <div className="flex space-btn mt20">
                <h2>11 Tasks</h2>
                <div class="horizontal-bar"></div>
                <span className="box-tick">
                  <TiTick />
                </span>
              </div>
            </div>
          </div>

          <div className="flex crypto-content-box">
            <div>
              <img className="crypto-img1" src="crypto-img2.jpg" alt="crypto" />
            </div>
            <div className="crypto-box">
              <h2 className="crypto-title1">#2: But what is crypto and...</h2>
              <p></p>
              <div className="flex space-btn mt20">
                <h2>11 Tasks</h2>
                <div class="horizontal-bar"></div>
                <span className="box-tick">
                  <TiTick />
                </span>
              </div>
            </div>
          </div>

          <div className="flex crypto-content-box">
            <div>
              <img className="crypto-img1" src="crypto-img3.jpg" alt="crypto" />
            </div>
            <div className="crypto-box">
              <h2 className="crypto-title1">#3: But what is crypto and...</h2>
              <p></p>
              <div className="flex space-btn mt20">
                <h2>11 Tasks</h2>
                <div class="horizontal-bar"></div>
                <span className="box-tick">
                  <TiTick />
                </span>
              </div>
            </div>
          </div>

          <div className="flex crypto-content-box">
            <div>
              <img className="crypto-img1" src="crypto-img4.jpg" alt="crypto" />
            </div>
            <div className="crypto-box">
              <h2 className="crypto-title1">#4: But what is crypto and...</h2>
              <p></p>
              <div className="flex space-btn mt20">
                <h2>11 Tasks</h2>
                <div class="horizontal-bar"></div>
                <span className="box-tick">
                  <TiTick />
                </span>
              </div>
            </div>
          </div>

          <div className="flex crypto-content-box">
            <div>
              <img className="crypto-img1" src="crypto-img5.jpg" alt="crypto" />
            </div>
            <div className="crypto-box">
              <h2 className="crypto-title1">#5: But what is crypto and...</h2>
              <p></p>
              <div className="flex space-btn mt20">
                <h2>11 Tasks</h2>
                <div class="horizontal-bar"></div>
                <span className="box-tick">
                  <TiTick />
                </span>
              </div>
            </div>
          </div>

          <div className="flex crypto-content-box">
            <div>
              <img className="crypto-img1" src="crypto-img6.jpg" alt="crypto" />
            </div>
            <div className="crypto-box">
              <h2 className="crypto-title1">#6: But what is crypto and...</h2>
              <p></p>
              <div className="flex space-btn mt20">
                <h2>11 Tasks</h2>
                <div class="horizontal-bar"></div>
                <span className="box-tick">
                  <TiTick />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="learner">
          <span className="box-tick">
            <TiTick />
          </span>
          <img src="learner-img.png" alt="crypto" />
          <h2>Intract Certified: Learner NFT</h2>
          <p>Your crypto black-belt certificate</p>
          <span className="claim">Claim</span>
        </div>
      </div>
    </>
  );
};

export default Home;
