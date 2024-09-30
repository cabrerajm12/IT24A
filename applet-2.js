class leafLetMap{
    constructor(containerId, center, zoom){
      this.map = L.map(containerId).setView(center, zoom);
      this.initTileLayer();
    }
    initTileLayer(){
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | sample in NBSC'
        }).addTo(this.map);
    }

    addMarker(lat,long, message){
      const marker =  L.marker([lat, long]).addTo(this.map)
        .bindPopup(message)
    }

}

const Mymap = new leafLetMap('map', [8.359735, 124.869206], 18);

Mymap.addMarker(8.359735, 124.869206, 'CCS Faculty Office');
Mymap.addMarker(8.359639, 124.869179, 'CCS Laboratory 1');
Mymap.addMarker(8.359554, 124.869153, 'CCS Laboratory 2');