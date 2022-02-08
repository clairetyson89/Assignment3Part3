require([
        "esri/Map",
        "esri/layers/CSVLayer",
        "esri/views/MapView",
        "esri/widgets/Legend"
      ], (Map, CSVLayer, MapView, Legend) => {
        const url =
          "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";

const template = {
   title: "Crime committed at {ILEADSStreet}"
};

        const renderer = {
          type: "heatmap",
          colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#21E01E", ratio: 0.083 },
            { color: "#21E01E", ratio: 0.166 },
            { color: "#0ED379", ratio: 0.249 },
            { color: "#0FB980", ratio: 0.332 },
            { color: "#2DAAA3", ratio: 0.415 },
            { color: "#2980B9", ratio: 0.498 },
            { color: "#2980B9", ratio: 0.581 },
            { color: "#256CDE", ratio: 0.664 },
            { color: "#104395", ratio: 0.747 },
            { color: "#082554", ratio: 0.83 },
            { color: "#17202A", ratio: 0.913 },
            { color: "#17202A", ratio: 1 }
          ],
          maxPixelIntensity: 25,
          minPixelIntensity: 0
        };

    const layer = new CSVLayer({
        url: url,
        title: "St. Louis Crime Heatmap",
        copyright: "St. Louis Police Department",
		   //latitudeField:"Lat",
        //longitudeField:"Lon", commented out because it was breaking the map
		popupTemplate: template,
		renderer: renderer
});

        const map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

        const view = new MapView({
          container: "viewDiv",
          center: [-90.21415, 38.62867],
          zoom: 10,
          map: map
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-right"
        );
      });
