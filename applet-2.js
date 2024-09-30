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

}

const Mymap = new leafLetMap('map', [8.359735, 124.869206], 18);