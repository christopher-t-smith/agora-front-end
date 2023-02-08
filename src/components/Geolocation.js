import React from 'react'


const GeoLocation = () => {

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            let mapText = document.getElementById("mapAbove");
            let mapArea = document.getElementById("googleMapSection")
            mapArea.innerHTML = '<iframe class ="googleMap" height=480px width=100% style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=' + latitude + ',' + longitude + '&key=AIzaSyDeXWfZxJxN5ubZJ37xkR7DdCWHcNwIkpU&zoom=12"></iframe>'

        })
    } else {
        console.log("Geolocation isn't available.")
    }

    return (
        <div>
            <div>
                <div className="sticky">
                        <div id="mapAbove">DON'T FORGET TO SHARE COOL PLACES TO VISIT OR STUFF TO DO NEARBY TODAY! </div>
                        <div id="googleMapSection"></div>
                </div>
            </div>

        </div>

    )
}

export default GeoLocation