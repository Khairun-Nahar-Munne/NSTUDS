import React from 'react'
import "./alumni.css"
import { Link } from "react-router-dom";

export default function Alumni() {
    return (
        <>
            <div class="alumni">
                <h2> 6th Executive Body</h2>
                <ul>

                <li class="resource-list-item" ><Link className="link" to="/ec6">
              Click On This!
            </Link></li>


                </ul>
                <h2>5th Executive Body</h2>
                <ul class="stylish">

                <li class="resource-list-item" ><Link className="link" to="/ec5">
              Click On This!
            </Link></li>

                </ul>
                <h2>4th Executive Body</h2>
                <ul>

                    <li class="resource-list-item" ><Link className="link" to="/ec4">
              Click On This!
            </Link></li>


                </ul>

            </div></>
    )
}
