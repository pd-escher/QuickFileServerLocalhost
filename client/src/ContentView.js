import React from 'react'
import AppCard from './Tabs/Apps/appCard'
import 'bootstrap/dist/css/bootstrap.min.css';


const ContentView = () => {
    return (
        <div>
            <AppCard
                appname="stonks"
                appinfo="Simple Finance Management App"
            />
        </div>
    )
}

export default ContentView
