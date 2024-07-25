import React, { useEffect } from 'react';

const MapEmbed = () => {
    useEffect(() => {
        // Create script elements
        const script1 = document.createElement('script');
        script1.src = "https://www.amcharts.com/lib/3/ammap.js";
        script1.type = "text/javascript";
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = "https://www.amcharts.com/lib/3/maps/js/worldHigh.js";
        script2.type = "text/javascript";
        document.body.appendChild(script2);

        const script3 = document.createElement('script');
        script3.src = "https://www.amcharts.com/lib/3/themes/dark.js";
        script3.type = "text/javascript";
        document.body.appendChild(script3);

        // Initialize the map after scripts are loaded
        script3.onload = () => {
            const script4 = document.createElement('script');
            script4.type = "text/javascript";
            script4.innerHTML = `
                var map = AmCharts.makeChart("mapdiv", {
                    type: "map",
                    theme: "dark",
                    projection: "mercator",
                    panEventsEnabled: true,
                    backgroundColor: "#FFFFFF",
                    backgroundAlpha: 1,
                    zoomControl: {
                        zoomControlEnabled: true
                    },
                    dataProvider: {
                        map: "worldHigh",
                        getAreasFromMap: true,
                        areas: [
                            {
                                "id": "DE",
                                "showAsSelected": true
                            },
                            {
                                "id": "US",
                                "showAsSelected": true
                            }
                        ]
                    },
                    areasSettings: {
                        autoZoom: true,
                        color: "#DBDBDB",
                        colorSolid: "#001EFF",
                        selectedColor: "#001EFF",
                        outlineColor: "#DBDBDB",
                        rollOverColor: "#DBDBDB",
                        rollOverOutlineColor: "#000000",
                        selectable: false
                    }
                });
            `;
            document.body.appendChild(script4);
        };

        // Cleanup script elements on unmount
        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
            document.body.removeChild(script3);
        };
    }, []);

    return (
        <div>
            <div id="mapdiv" style={{ width: "1000px", height: "450px" }}></div>
            <div style={{ width: "1000px", fontSize: "70%", padding: "5px 0", textAlign: "center", backgroundColor: "#FFFFFF", marginTop: "1px", color: "#DBDBDB" }}>
                <a href="https://www.amcharts.com/visited_countries/" style={{ color: "#DBDBDB" }}>Create your own visited countries map</a> or check out the <a href="https://www.amcharts.com/" style={{ color: "#DBDBDB" }}>JavaScript Charts</a>.
            </div>
        </div>
    );
};

export default MapEmbed;
