const LPU_CENTER = [
    31.2559,
    75.7033
];


const map = L.map("map", {

    zoomControl: true,

    minZoom: 15,

    maxZoom: 20

});


map.setView(LPU_CENTER, 16);


L.tileLayer(

    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

    {

        maxZoom: 20,

        attribution:
            '&copy; OpenStreetMap contributors'

    }

).addTo(map);

const locations = [

    {
        id: 1,

        name: "LPU Main Gate",

        category: "gate",

        coordinates: [
            31.2559,
            75.7033
        ],

        icon: "🚪",

        description:
            "Main entry point of Lovely Professional University."
    },

    {
        id: 2,

        name: "UNI-MALL",

        category: "shopping",

        coordinates: [
            31.2550,
            75.7040
        ],

        icon: "🛍️",

        description:
            "Multi-storey shopping and dining facility with shops, food outlets, services and student essentials."
    },

    {
        id: 3,

        name: "UNI-HOSPITAL",

        category: "health",

        coordinates: [
            31.2540,
            75.7020
        ],

        icon: "🏥",

        description:
            "On-campus healthcare facility for students and university community."
    },

    {
        id: 4,

        name: "School of CSE",

        category: "academic",

        coordinates: [
            31.2565,
            75.7045
        ],

        icon: "💻",

        description:
            "Academic area for Computer Science and Engineering students."
    },


    {
        id: 5,

        name: "School of Business",

        category: "academic",

        coordinates: [
            31.2570,
            75.7050
        ],

        icon: "💼",

        description:
            "Academic facilities for business and management programmes."
    },


    {
        id: 6,

        name: "Central Library",

        category: "academic",

        coordinates: [
            31.2560,
            75.7060
        ],

        icon: "📚",

        description:
            "Central library and study resources for students."
    },


    {
        id: 7,

        name: "Innovation Studio",

        category: "innovation",

        coordinates: [
            31.2575,
            75.7060
        ],

        icon: "💡",

        description:
            "Innovation and project-oriented space supporting creativity, experimentation and student projects."
    },


    {
        id: 8,

        name: "Research Centre",

        category: "innovation",

        coordinates: [
            31.2580,
            75.7065
        ],

        icon: "🔬",

        description:
            "Research-oriented facility supporting university research and innovation."
    },

    {
        id: 9,

        name: "UNI-MALL Food Court",

        category: "food",

        coordinates: [
            31.25555,
            75.7045
        ],

        icon: "🍔",

        description:
            "Student dining area with multiple food options."
    },


    {
        id: 10,

        name: "LPU Canteen",

        category: "food",

        coordinates: [
            31.2556,
            75.7050
        ],

        icon: "🍴",

        description:
            "Canteen serving students and university community."
    },

    {
        id: 11,

        name: "Boys Hostel Zone",

        category: "hostel",

        coordinates: [
            31.2515,
            75.7005
        ],

        icon: "🏠",

        description:
            "Residential zone containing student accommodation facilities."
    },


    {
        id: 12,

        name: "Girls Hostel Zone",

        category: "hostel",

        coordinates: [
            31.2530,
            75.6985
        ],

        icon: "🏠",

        description:
            "Residential zone containing student accommodation facilities."
    },


    {
        id: 13,

        name: "Indoor Sports Complex",

        category: "sports",

        coordinates: [
            31.2520,
            75.7040
        ],

        icon: "🏆",

        description:
            "Indoor sports and recreational facility."
    },


    {
        id: 14,

        name: "Swimming Pool",

        category: "sports",

        coordinates: [
            31.2510,
            75.7050
        ],

        icon: "🏊",

        description:
            "Swimming facility for training and recreation."
    },


    {
        id: 15,

        name: "Football Ground",

        category: "sports",

        coordinates: [
            31.2500,
            75.7070
        ],

        icon: "⚽",

        description:
            "Outdoor football and sports area."
    },

    {
        id: 16,

        name: "Boys Studio 12",

        category: "hostel",

        coordinates: [
            31.249271,
            75.707116
        ],

        icon: "🏠",

        description:
            "Boys Studio 12 student accommodation facility."
    },


    {
        id: 17,

        name: "Bank of Baroda",

        category: "bank",

        coordinates: [
            31.249506,
            75.700224
        ],

        icon: "🏦",

        description:
            "Bank of Baroda banking facility on the LPU campus."
    },

    {
        id: 18,

        name: "Lovely Bakers Studio",

        category: "food",

        coordinates: [
            31.251649,
            75.701923
        ],

        icon: "🥐",

        description:
            "Lovely Bakers Studio food and bakery facility on the LPU campus."
    },


    {
        id: 19,

        name: "LPU BH 1",

        category: "hostel",

        coordinates: [
            31.251372,
            75.700350
        ],

        icon: "🏠",

        description:
            "LPU Boys Hostel 1 accommodation facility."
    },


    {
        id: 20,

        name: "School of Law",

        category: "academic",

        coordinates: [
            31.254160,
            75.699757
        ],

        icon: "⚖️",

        description:
            "School of Law academic facility at LPU."
    },


    {
        id: 21,

        name: "Security Office",

        category: "security",

        coordinates: [
            31.256856,
            75.705210
        ],

        icon: "🛡️",

        description:
            "Security Office and campus security facility."
    },


    {
        id: 22,

        name: "Girls Hostel",

        category: "hostel",

        coordinates: [
            31.255944,
            75.702833
        ],

        icon: "🏠",

        description:
            "Girls Hostel accommodation facility at LPU."
    },


    {
        id: 23,

        name: "Punjab National Bank",

        category: "bank",

        coordinates: [
            31.251420,
            75.700070
        ],

        icon: "🏦",

        description:
            "Punjab National Bank banking facility on the LPU campus."
    },


    {
        id: 24,

        name: "School of Agriculture",

        category: "academic",

        coordinates: [
            31.245995,
            75.700445
        ],

        icon: "🌱",

        description:
            "School of Agriculture academic facility at LPU."
    },

];


let markers = [];


function createIcon(location) {

    return L.divIcon({

        className: "",

        html: `

            <div
                class="custom-marker"
                title="${location.name}"
            >

                <span>
                    ${location.icon}
                </span>

            </div>

        `,

        iconSize: [38, 38],

        iconAnchor: [19, 38],

        popupAnchor: [0, -38]

    });

}


function addLocation(location) {


    const marker = L.marker(

        location.coordinates,

        {

            icon: createIcon(location),

            title: location.name

        }

    );


    marker.bindTooltip(

        location.name,

        {

            direction: "top",

            offset: [0, -30]

        }

    );


    marker.on(

        "click",

        function () {

            openLocation(location);

        }

    );


    marker.addTo(map);


    markers.push({

        marker: marker,

        data: location

    });

}



locations.forEach(

    function (location) {

        addLocation(location);

    }

);


let selectedLocation = null;


function openLocation(location) {


    selectedLocation = location;


    document.getElementById("modalIcon")
        .innerText = location.icon;


    document.getElementById("modalTitle")
        .innerText = location.name;


    document.getElementById("modalCategory")
        .innerText =
        location.category.toUpperCase();


    document.getElementById("modalDescription")
        .innerText =
        location.description;


    document
        .getElementById("locationModal")
        .classList
        .remove("hidden");


    map.flyTo(

        location.coordinates,

        18,

        {

            duration: 1.2

        }

    );

}



function closeModal() {

    document
        .getElementById("locationModal")
        .classList
        .add("hidden");

}



function showCategory(category) {


    markers.forEach(

        function (item) {


            const shouldShow =

                category === "all" ||

                item.data.category === category;


            if (shouldShow) {

                if (!map.hasLayer(item.marker)) {

                    item.marker.addTo(map);

                }

            }

            else {

                if (map.hasLayer(item.marker)) {

                    map.removeLayer(item.marker);

                }

            }

        }

    );

}


const categoryButtons =

    document.querySelectorAll(
        ".category-btn"
    );


categoryButtons.forEach(

    function (button) {


        button.addEventListener(

            "click",

            function () {


                categoryButtons.forEach(

                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }

                );


                button.classList.add(
                    "active"
                );


                const category =

                    button.dataset.category;


                showCategory(category);

            }

        );

    }

);


function searchLocation() {


    const query =

        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    if (query === "") {

        alert(
            "Please enter a location name."
        );

        return;

    }


    const result = locations.find(

        function (location) {

            return location.name
                .toLowerCase()
                .includes(query);

        }

    );


    if (result) {

        openLocation(result);

    }

    else {

        alert(
            "Location not found. Try another name."
        );

    }

}


document
    .getElementById("searchBtn")
    .addEventListener(

        "click",

        searchLocation

    );


document
    .getElementById("searchInput")
    .addEventListener(

        "keydown",

        function (event) {

            if (event.key === "Enter") {

                searchLocation();

            }

        }

    );

document
    .getElementById("locateBtn")
    .addEventListener(

        "click",

        function () {


            if (!navigator.geolocation) {

                alert(
                    "Location services are not supported."
                );

                return;

            }


            navigator.geolocation.getCurrentPosition(

                function (position) {


                    const userLat =
                        position.coords.latitude;


                    const userLng =
                        position.coords.longitude;


                    map.flyTo(

                        [
                            userLat,
                            userLng
                        ],

                        18,

                        {

                            duration: 1.5

                        }

                    );


                    L.marker(

                        [
                            userLat,
                            userLng
                        ]

                    )

                    .addTo(map)

                    .bindPopup(
                        "📍 You are here"
                    )

                    .openPopup();


                },


                function () {

                    alert(
                        "Unable to get your location."
                    );

                }

            );

        }

    );



let routeLine = null;


document
    .getElementById("routeBtn")
    .addEventListener(

        "click",

        function () {


            if (!selectedLocation) {

                return;

            }


            const start = LPU_CENTER;


            const end =
                selectedLocation.coordinates;


            if (routeLine) {

                map.removeLayer(routeLine);

            }


            routeLine = L.polyline(

                [

                    start,

                    end

                ],

                {

                    color: "#b5121b",

                    weight: 5,

                    opacity: 0.8,

                    dashArray: "10,10"

                }

            ).addTo(map);


            map.fitBounds(

                routeLine.getBounds(),

                {

                    padding: [80, 80]

                }

            );


            closeModal();

        }

    );


document
    .getElementById("centerBtn")
    .addEventListener(

        "click",

        function () {


            if (!selectedLocation) {

                return;

            }


            map.flyTo(

                selectedLocation.coordinates,

                18,

                {

                    duration: 1

                }

            );


            closeModal();

        }

    );


document.addEventListener(

    "keydown",

    function (event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }

);

