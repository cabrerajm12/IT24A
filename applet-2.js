class leafLetMap{
    constructor(containerId, center, zoom){
      this.map = L.map(containerId).setView(center, zoom);
      this.initTileLayer();
      
        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab = 0;
        this.markerCounts = {};
        this.markers = [];
        this.loggedData = []; 

        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCount');
        this.logCount1Element = document.getElementById('logCountBA');
        this.logCount2Element = document.getElementById('logCountCCS');
        this.idContainer = document.getElementById('logContainer');
        this.btn.addEventListener('click', () => this.dataSc());
        this.btn1.addEventListener('click', () => this.dataLab());
        this.btn2.addEventListener('click', () => this.dataBa());
        this.btnclear.addEventListener('click', () => this.clearLogs());
    }
    initTileLayer(){
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | sample in NBSC'
        }).addTo(this.map);
    }

    addMarker(lat, long, message){
        const marker = L.marker([lat, long]).addTo(this.map)
        this.markerCounts[message] = (this.markerCounts[message] || 0) + 1;
        this.updateMarkerPopup(marker, message);
        marker.on('click', () => {
            this.markerCounts[message]++;
            this.updateMarkerPopup(marker, message);
        });

        this.markers.push(marker);
    }

    updateMarkerPopup(marker, message) {
        const count = this.markerCounts[message];
        marker.bindPopup(`${message}<br>Attendance logs: ${count}`).openPopup();
    }

    loadMarkersFromJson(url){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(marker => {
                this.addMarker(marker.latitude, marker.longitude, marker.message);
            });
        })
        .catch(error => console.error("Error Loading servers:", error));
    }

    dataSc() {
        this.addMarker(8.360238, 124.867470, 'SC building');
        this.attendanceCountSC++; 
        
    }

    dataBa() {
        this.addMarker(8.359134, 124.868537, 'BA building');
        this.attendanceCountBA++; 
    }
}

const Mymap = new leafLetMap('map', [8.359735, 124.869206], 18);



Mymap.loadMarkersFromJson('applet-2.json');