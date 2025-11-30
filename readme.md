# **PlanePatrol ✈️**

**PlanePatrol** is a lightweight, immersive web application for live global aircraft tracking. It combines real-time flight telemetry with local weather data and a unique "Cockpit View" ride-along feature, all contained within a single HTML file.

## **🌟 Key Features**

* **Live Traffic Tracking**: Visualizes aircraft in real-time using data from airplanes.live.  
* **Immersive Cockpit View**: Tap any plane to enter a 3D "Ride Along" mode that follows the aircraft's perspective with a pitch-accurate HUD.  
* **ASMR Audio Engine**: Procedurally generated engine sounds that adapt based on aircraft type (Jet, Prop, Helicopter) and flight phase.  
* **Live Weather Integration**: Displays local temperature, wind speed, and sky conditions based on your GPS location.  
* **NEXRAD Radar Overlay**: Real-time precipitation radar overlay for tracking weather systems relative to air traffic.  
* **Mobile-First Design**: Optimized for mobile devices with touch controls, haptic feedback, and PWA (Progressive Web App) support.  
* **Pin Drop Mode**: Tap anywhere on the map to "teleport" your radar location to explore air traffic globally.

## **🚀 Quick Start**

PlanePatrol is a zero-dependency, single-file application.

1. **Download** the index.html file.  
2. **Open** it in any modern web browser (Chrome, Safari, Firefox, Edge).  
3. **Allow Location Access** when prompted to find aircraft near you (or deny to default to the central US).

**Note:** For the best experience on mobile, use the "Add to Home Screen" option in your browser to launch it as a standalone app.

## **🎮 Controls**

### **Main Radar View**

* **Pan/Zoom**: Standard touch/mouse gestures to navigate the map.  
* **Tap Plane**: Select an aircraft to enter **Cockpit Mode**.  
* **Tap Map (Empty Space)**: Moves the radar center to that location ("Pin Drop").  
* **WX Button**: Toggles the NEXRAD weather radar overlay.  
* **Refresh Button**: Resets the view to your current GPS location.  
* **Range Selector**: Switch radar range between 3, 5, 10, or 20 miles.

### **Cockpit Mode (Ride Along)**

* **Back Button**: Returns to the main radar map.  
* **Sound Icon**: Toggles the procedural engine noise.  
* **HUD Data**: Displays Altitude, Ground Speed, Vertical Speed, Heading, and Distance from your location.

## **🛠️ Tech Stack**

* **Core**: Vanilla HTML5, CSS3, JavaScript (ES6+).  
* **Mapping Engine**: [MapLibre GL JS](https://maplibre.org/).  
* **Audio**: Web Audio API (Custom procedural noise generation for engines).

## **📡 APIs & Data Sources**

PlanePatrol aggregates data from several public APIs:

| Data Type | Source |
| :---- | :---- |
| **Aircraft Telemetry** | [Airplanes.live](https://airplanes.live/) |
| **Weather Data** | [Weather.gov API](https://www.weather.gov/documentation/services-web-api) |
| **Radar Tiles** | [Iowa State University Mesonet](https://mesonet.agron.iastate.edu/) |
| **Map Tiles** | [CartoDB](https://carto.com/) & [ArcGIS](https://www.arcgis.com/index.html) |

## **🔋 Optimization & Performance**

The app includes several internal optimizations:

* **Dynamic Polling**: API requests pause when the tab is hidden or inactive to save battery and data.  
* **Smart throttling**: Map and Cockpit updates run on independent, throttled loops to maintain high FPS without overheating devices.  
* **Offline Handling**: Graceful error states and "Systems Offline" overlay when network connection is lost.

## **📝 License**

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).  
*Happy Spotting\!*