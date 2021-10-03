import React,{Fragment} from "react";
import {Link} from "react-router-dom";
let Home=()=>{
    return(
        <Fragment>
            <div className="container mt-lg-5">
                <div className="row">
                    <div className="col">
                        <h2 className="text-white bg-dark">Welcome To Employees section</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquid asperiores autem cum delectus, dicta dignissimos ducimus earum et facilis fugiat iste modi molestiae nihil pariatur porro quas repellat repudiandae saepe soluta veniam. Beatae, consectetur dignissimos enim et iste molestiae nam, necessitatibus nesciunt quam, reiciendis reprehenderit suscipit? Autem!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquid asperiores autem cum delectus, dicta dignissimos ducimus earum et facilis fugiat iste modi molestiae nihil pariatur porro quas repellat repudiandae saepe soluta veniam. Beatae, consectetur dignissimos enim et iste molestiae nam, necessitatibus nesciunt quam, reiciendis reprehenderit suscipit? Autem!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquid asperiores autem cum delectus, dicta dignissimos ducimus earum et facilis fugiat iste modi molestiae nihil pariatur porro quas repellat repudiandae saepe soluta veniam. Beatae, consectetur dignissimos enim et iste molestiae nam, necessitatibus nesciunt quam, reiciendis reprehenderit suscipit? Autem!</p>

                        <Link to="/add-Employee" className="btn btn-success btn-sm">Add Employee</Link>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default  Home