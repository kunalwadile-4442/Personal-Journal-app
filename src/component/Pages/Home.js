import React from "react";
import img from "../images/Aboutbg.png";
import "../Style/Home.css";
import { Button } from "react-bootstrap";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LockIcon from "@mui/icons-material/Lock";
import p1 from "../images/p1.webp";
import p2 from "../images/p2.jpeg";
import p3 from "../images/p3.jpeg";
import verify from "../images/Tick.png";

function Home() {
  return (
    <div className="HOME">
      <div className="home-f1">
        <ection className="split left">
          <p className="p1">
            {" "}
            <br />
            <br />
            <br />
            write your Thoughts
          </p>
          <Button className="Btnb" variant="success">
            {" "}
            Start Free Trial{" "}
          </Button>
          {""}
          <p className="container t1">
            Try PJ free for 14 days, login is required. Click On Free Trail and
            then start the <br />
            free trial
          </p>
        </ection>

        <section className="split right">
          <img src={img} alt="" className="imghome" />
        </section>
      </div>
      <br />
      <br />
      <hr className="container hrl" />

      <div className="container div2">
        <h1 className="div2h1">Built For Journaling</h1>
        <div className="container">
          <section className="options">
            <div className="row">
              <div className="col-sm-4">
                <div className="ic">
                  <InsertDriveFileIcon className="iconsh" />
                </div>

                <br />
                <span className="spanhead">Unlimited entries</span>
                <p className="smalP">
                  Unlike other journaling platforms, you can write as much and
                  as often as you like, all for free.
                </p>
              </div>
              <div className="col-sm-4">
                <div className="ic">
                  <MobileFriendlyIcon className="iconsh" />
                </div>
                <br />
                <span className="spanhead">Mobile apps</span>
                <p className="smalP">
                  You can write in your journal when not at your computer with
                  our iOS and Android apps
                </p>
              </div>
              <div className="col-sm-4">
                <div className="ic">
                  <ThumbUpIcon className="iconsh" />
                </div>
                <br />
                <span className="spanhead">Saves as you go</span>
                <p className="smalP">
                  Never worry about losing your work — Penzu saves as you type
                  at your computer or on the go.
                </p>
              </div>
            </div>
          </section>

          <section className="options SecSec">
            <div className="row">
              <div className="col-sm-4">
                <div className="ic">
                  <ImportContactsIcon className="iconsh" />
                </div>
                <br />
                <span className="spanhead">Custom journals</span>
                <p className="smalP">
                  Choose different covers, backgrounds, fonts and more for each
                  of your journals and entries.
                </p>
              </div>
              <div className="col-sm-4">
                <div className="ic">
                  <MarkChatUnreadIcon className="iconsh " />
                </div>
                <br />
                <span className="spanhead">Reminders</span>
                <p className="smalP">
                  Set daily, weekly or custom reminders to ensure that you never
                  forget to write in your journal.
                </p>
              </div>
              <div className="col-sm-4">
                <div className="ic">
                  <FavoriteIcon className="iconsh" />
                </div>
                <br />
                <span className="spanhead">So much more...</span>
                <p className="smalP">
                  Enjoy unlimited devices, encryption, tagging, search, prompts,
                  journal and entry locking, entry sharing and more.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr className="container hrl" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="D3">
        <section className="SecThree">
          <div className="lockhead">
            <h2 className="h2head">
              <LockIcon /> Privacy is our <span style={{ color: "blue", fontWeight: "bold" }}>#1</span> concern
            </h2>

            <p className="container">
              Even when carefully kept, paper journals can be read by anyone who
              happens upon them.{" "}
              <span style={{ color: "blue", fontWeight: "bold" }}>PJ</span>{" "}
              keeps your journals safe with double password protection and
              military strength encryption so you can rest easy knowing that
              your entries are secure in the PJ's Vault.
            </p>
          </div>
        </section>
      </div>
      <br />
      <hr className="container hrl" />
      <div className="div4">
        <section className="SecFor">
          {/* <div className="cros">  </div>  */}
          <h2 className="h2world">
            Loved by millions of people <br /> around of world
          </h2>

          <div className="Pcards container">
            <div className="card1">
              <img className="profimg" src={p1} alt="" />
              <h4 className="cardu">
                Sam john <img src={verify} className="verify" />
              </h4>
              <h6 className="cardi">@ samJohn</h6>
              <p className="cardp container">
                {" "}
                I really love the emails <span style={{ color: "blue", fontWeight: "bold" }}>PJ</span> sends me about my past journal
                entries. It's so good to see where I was then and where I am
                now.
                <br />
                <br />
                Journaling is life-saving.
              </p>
            </div>

            <div className="card1">
              <img className="profimg" src={p2} alt="" />
              <h4 className="cardu">
                Anny <img src={verify} className="verify" />
              </h4>
              <h6 className="cardi">@ anny541</h6>
              <p className="cardp container">
                {" "}
                On rainy days,<span style={{ color: "blue", fontWeight: "bold" }}> Headspace + PJ</span> are the best combo to tap back
                into that feeling wherever you are.
              </p>
            </div>

            <div className="card1">
              <img className="profimg" src={p3} alt="" />
              <h4 className="cardu">
                Harry <img src={verify} className="verify" />
              </h4>
              <h6 className="cardi">@ har09ry</h6>
              <p className="cardp container">
                {" "}
                Going to get a work journal this week because I'm really so
                tired of wondering what happened with my day. I keep trying apps
                I don't like, but just going to invest in <span style={{ color: "blue", fontWeight: "bold" }}>PJ</span> because I like
                it the best.
              </p>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
