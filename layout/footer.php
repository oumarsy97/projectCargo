
</main>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
<script src="../node_modules/preline/dist/preline.js"></script>
<script src="../dist/script.js" type="module"></script>
<script type="text/javascript"
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

<!-- <script src="../dist/Model/mail.js" type="module"></script> -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>
     <script>
  var map = L.map('map').setView([30, 0], 2);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '©OpenStreetMap, ©CartoDB'
  }).addTo(map);

  var depart, arrive, line;

  function handleClick(e) {
    const arriv = document.getElementById('to');
    const depar = document.getElementById('from');

    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    var url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lng;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var country = data.address.country || "Inconnu";
        if (!depart || depar.value === "") {
          if (depart) map.removeLayer(depart);
          depar.value = country;
          depart = L.marker([lat, lng], {icon: L.divIcon({className: 'fas fa-plane-departure text-3xl text-blue-500'})}).addTo(map);
        } else if (!arrive || arriv.value === "") {
          if (arrive) map.removeLayer(arrive);
          arriv.value = country;
          arrive = L.marker([lat, lng], {icon: L.divIcon({className: 'fas fa-plane-arrival text-3xl text-green-500'})}).addTo(map);
        }
        if (depart && arrive) {
          if (line) map.removeLayer(line);
          var latlngs = [depart.getLatLng(), arrive.getLatLng()];
          line = L.polyline(latlngs, {color: 'indigo', weight: 3, opacity: 0.7, dashArray: '10, 10'}).addTo(map);
          map.fitBounds(line.getBounds(), {padding: [50, 50]});
          var distance = (depart.getLatLng().distanceTo(arrive.getLatLng()) / 1000).toFixed(2);
          document.getElementById('distance').value = distance;
        }
      })
      .catch(error => console.error(error));
  }

  map.on('click', handleClick);

  document.getElementById('typeChargement').addEventListener('change', function() {
    document.getElementById('typepoids').classList.toggle('hidden', this.value !== 'poids');
    document.getElementById('typecolis').classList.toggle('hidden', this.value !== 'colis');
    document.getElementById('nombreColis').disabled = this.value !== 'colis';
    document.getElementById('weight').disabled = this.value !== 'poids';
  });

  document.getElementById('typeproduit')?.addEventListener('change', function() {
    document.getElementById('divDegre').classList.toggle('hidden', this.value !== 'chimique');
  });
</script>
</body>
</html>