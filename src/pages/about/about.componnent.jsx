import React from "react";
import "./about.styles.scss";
import AdCard from "../../components/ad-card/ad-card.component";

class AboutComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      admin: [
        {
          id: "1",
          name: "BusyOnFriday",
          position: "developer",
          info:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iure eos necessitatibus soluta. Nobis repudiandae dolore unde magni illum mollitia?",
          img:
            "https://scontent.fbkk4-3.fna.fbcdn.net/v/t1.0-9/14601123_1221547981240586_3039491281991479089_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeGzpmYRVs0T6tonwxzSpUUgP9GTVF-HLKi-dacnZS_-29RTTr4yFSybzpZutGom01LRlC4yGSrVmdmer1cLL_QXPTDpBEZCZIyr2L3LuyL9zw&_nc_oc=AQlrup6yR3e2FR6I9NesTYKB2K61QARa1GFbgrgjbgxB1GY6Y6PwLa5leWjAsFdcd4c&_nc_ht=scontent.fbkk4-3.fna&oh=994c6f8ea1aade1c210ab00b878a88b2&oe=5F0347AA"
        },
        {
          id: "2",
          name: "zLighT:3",
          position: "reviewer",
          info:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel iure eos necessitatibus soluta. Nobis repudiandae dolore unde magni illum mollitia?",
          img:
            "https://scontent.fbkk4-1.fna.fbcdn.net/v/t31.0-8/p960x960/18237942_10206668559152834_8761134577487324017_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_eui2=AeHCy5p_Nh6JtJvfhJUkscLVmhc3NKiscFB7OGsdzO9Ny4cO2TaEKlySJfSUhNW5w8ryzlel5BoZ1n3rAoMOpSrQdVc8MMIlxrX_4bleYDt-Hg&_nc_oc=AQmncuCU0o9brAOTwoHHlCyQTtkRgf_F3i4-bd5cwPi2bfN2tMAQkcW_A5bXpvwYO2o&_nc_ht=scontent.fbkk4-1.fna&_nc_tp=6&oh=03c93b5661132d7189b2fe975dea2937&oe=5EF998C1"
        }
      ]
    };
  }
  render() {
    const admin = this.state.admin;
    return (
      <div className="about-container">
        <h1>About Us</h1>
        <div className="card-container">
          {admin.map(({ id, ...otherProps }) => (
            <AdCard key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default AboutComponent;
