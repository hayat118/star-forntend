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

{
  /* // import React from 'react';
// // import './Academy.css';

// const Home = () => {
//   return ( */
}
//     <div className="container">
//       <header className="header">
//         <div className="logo">intract.</div>
//         <nav className="nav">
//           <div className="nav-item">Compass</div>
//           <div className="nav-item">Explore</div>
//           <div className="nav-item active">Academy</div>
//           <div className="nav-item">NFTs</div>
//           <div className="nav-item">For Projects</div>
//         </nav>
//         <button className="sign-in-button">Sign In</button>
//       </header>

//       <div className="content">
//         <section className="section">
//           <h2 className="quest-title">Basics of Crypto</h2>
//           <div className="xp">1490 XPs</div>
//           <div className="quest">
//             <div className="quest-number">#1: But what is crypto and...</div>
//             <div className="task-count">11 Tasks</div>
//           </div>
//           <div className="quest">
//             <div className="quest-number">#2: Setting up your own web3...</div>
//             <div className="task-count">8 Tasks</div>
//           </div>
//           <div className="quest">
//             <div className="quest-number">#3: What the heck is a...</div>
//             <div className="task-count">8 Tasks</div>
//           </div>
//           <div className="nft">
//             {/* <img className="nft-image" src="/path/to/your/nft-image1.png" alt="Learner NFT" /> */}
//             <div className="nft-text">Intract Certified: Learner NFT</div>
//             <div className="nft-description">Your crypto black-belt certificate</div>
//             <button className="claim-button">Claim</button>
//           </div>
//         </section>

//         <section className="section">
//           <h2 className="quest-title">Introduction to Airdrops</h2>
//           <div className="xp">1040 XPs</div>
//           <div className="quest">
//             <div className="quest-number">#1: What are airdrops, and ho...</div>
//             <div className="task-count">7 Tasks</div>
//           </div>
//           <div className="quest">
//             <div className="quest-number">#2: Types of airdrops</div>
//             <div className="task-count">10 Tasks</div>
//           </div>
//           <div className="quest">
//             <div className="quest-number">#3: How to earn huge $$$ from...</div>
//             <div className="task-count">11 Tasks</div>
//           </div>
//           <div className="nft">
//             {/* <img className="nft-image" src="/path/to/your/nft-image2.png" alt="Earner NFT" /> */}
//             <div className="nft-text">Intract Certified: Earner NFT</div>
//             <div className="nft-description">Your proof of airdrop expertise</div>
//             <button className="claim-button">Claim</button>
//           </div>
//         </section>

//         <div className="airdrop-section">
//           <img className="airdrop-image" src="/path/to/your/airdrop-image.png" alt="Airdrop Image" />
//           <div className="airdrop-details">
//             <div className="airdrop-title">10,000 $PEPE</div>
//             <div className="airdrop-subtitle">Memecoin Airdrop</div>
//             <div className="reward-countdown">
//               <div className="countdown-number">00</div>
//               <div className="countdown-label">Days</div>
//               <div className="countdown-number">00</div>
//               <div className="countdown-label">Hrs</div>
//               <div className="countdown-number">00</div>
//               <div className="countdown-label">Mins</div>
//               <div className="countdown-number">00</div>
//               <div className="countdown-label">Sec</div>
//             </div>
//             <div className="reward-info">
//               <div className="reward-title">Free access to paid KOL (crypto earning) communities!</div>
//               <div className="reward-description">
//                 Win access to exclusive earning communities of some of the greatest earners in crypto for a month, every 24 hours.
//                 Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.
//               </div>
//               <div className="win-criteria">To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="footer">© 2024 Intract. All rights reserved.</footer>
//     </div>
//   );
// };

// export default Home;
