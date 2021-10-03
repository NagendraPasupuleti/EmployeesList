import React ,{Fragment}from "react";
import GitHubProfileCard from "./components/GitHubProfileCard";
import GitHubProfileDetails from "./components/GitHubProfileDetails";

let GitHubProfile=(props)=>{
    return(
        <Fragment>

          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-4">
                                  {
                                      //To Checks the Object is Empty
                                      Object.keys(props.profile).length>0?
                                          <GitHubProfileCard profile={props.profile}/>:null
                                  }

                              </div>

                                      <div className="col-md-8">
                                          {
                                              //To Checks the Object is Empty
                                              Object.keys(props.profile).length>0?
                                                  <GitHubProfileDetails profile={props.profile}/>:null
                                          }

                                      </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>

        </Fragment>
    )
}
export default GitHubProfile