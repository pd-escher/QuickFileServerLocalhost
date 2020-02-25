import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'axios';
import Axios from 'axios';

const AppCard = ({ appname, appinfo }) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h1 className="card-title">{appname}</h1>
                <p className="card-text">{appinfo}</p>
                <a href='/apk' className="btn btn-primary">Download {appname}</a>
            </div>
        </div>
    )
}

export default AppCard
