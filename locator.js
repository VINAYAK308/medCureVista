const labs = [
    {
        name: "ABC Diagnostic Center",
        location: "Koregaon Park",
        address: "987 Wellness Street, Koregaon Park, Pune, 411001",
        contact: "+91-98765-43210",
        rating: "⭐⭐⭐⭐☆ (4.6/5)",
        facilities: "Comprehensive health checkups, specialized blood tests, home sample collection, online report access, expert consultation."
    },
    {
        name: "HealthFirst Labs",
        location: "Aundh",
        address: "123 Harmony Plaza, Aundh, Pune, 411007",
        contact: "+91-99876-54321",
        rating: "⭐⭐⭐⭐☆ (4.4/5)",
        facilities: "Blood tests, radiology, home collection, online reports, diet consultation."
    },
    {
        name: "City Diagnostics",
        location: "Shivaji Nagar",
        address: "456 Healthway, Shivaji Nagar, Pune, 411005",
        contact: "+91-91234-56789",
        rating: "⭐⭐⭐⭐☆ (4.3/5)",
        facilities: "Complete health packages, blood tests, digital X-ray, ECG, ultrasound."
    },
    {
        name: "Prime Diagnostics",
        location: "Viman Nagar",
        address: "789 Prime Road, Viman Nagar, Pune, 411014",
        contact: "+91-98765-43210",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        facilities: "Full body checkups, pathology, radiology, home sample collection, online access."
    },
    {
        name: "Metro Labs",
        location: "Wakad",
        address: "321 Health Boulevard, Wakad, Pune, 411057",
        contact: "+91-98654-32109",
        rating: "⭐⭐⭐⭐☆ (4.2/5)",
        facilities: "Diagnostic imaging, blood tests, COVID-19 testing, home collection."
    },
    {
        name: "Sunrise Diagnostics",
        location: "Kothrud",
        address: "876 Sunrise Avenue, Kothrud, Pune, 411038",
        contact: "+91-90000-54321",
        rating: "⭐⭐⭐⭐☆ (4.7/5)",
        facilities: "Advanced diagnostic tools, radiology, pathology, health packages."
    },
    {
        name: "Care Diagnostics",
        location: "Kalyani Nagar",
        address: "654 Care Street, Kalyani Nagar, Pune, 411014",
        contact: "+91-99876-12345",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        facilities: "Blood tests, X-ray, ECG, full-body checkup, online reports."
    },
    {
        name: "Lifeline Labs",
        location: "Hadapsar",
        address: "432 Lifeline Path, Hadapsar, Pune, 411028",
        contact: "+91-98765-12340",
        rating: "⭐⭐⭐⭐☆ (4.4/5)",
        facilities: "Health checkups, specialized testing, pathology, radiology."
    },
    {
        name: "Pulse Diagnostics",
        location: "Kharadi",
        address: "987 Pulse Lane, Kharadi, Pune, 411014",
        contact: "+91-91234-98765",
        rating: "⭐⭐⭐⭐☆ (4.3/5)",
        facilities: "Diagnostic tests, blood work, home collection, digital imaging."
    },
    {
        name: "Vital Diagnostics",
        location: "Baner",
        address: "654 Vital Road, Baner, Pune, 411045",
        contact: "+91-98765-67890",
        rating: "⭐⭐⭐⭐☆ (4.6/5)",
        facilities: "Comprehensive health checkups, blood tests, online reporting, advanced diagnostics."
    },
    {
        name: "HealthCare Labs",
        location: "Pashan",
        address: "111 HealthCare Street, Pashan, Pune, 411021",
        contact: "+91-99876-98765",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        facilities: "Full body checkup, pathology, radiology, online results, home collection."
    },
    {
        name: "Wellness Diagnostics",
        location: "Hinjewadi",
        address: "543 Wellness Ave, Hinjewadi, Pune, 411057",
        contact: "+91-90000-56789",
        rating: "⭐⭐⭐⭐☆ (4.7/5)",
        facilities: "Advanced blood tests, radiology, ECG, full body checkups, online reports."
    },
    {
        name: "Medilab Diagnostics",
        location: "Hadapsar",
        address: "678 Medilab Road, Hadapsar, Pune, 411028",
        contact: "+91-91234-76543",
        rating: "⭐⭐⭐⭐☆ (4.3/5)",
        facilities: "Pathology, radiology, COVID-19 testing, health checkups, online results."
    },
    {
        name: "Precision Diagnostics",
        location: "Aundh",
        address: "987 Precision Way, Aundh, Pune, 411007",
        contact: "+91-98765-67890",
        rating: "⭐⭐⭐⭐☆ (4.6/5)",
        facilities: "Specialized tests, pathology, radiology, full body checkups, online reports."
    }
];

function findLab() {
    const userLocation = document.getElementById("location-input").value.toLowerCase();
    const selectedLocation = document.getElementById("location-select").value.toLowerCase();
    const labList = document.getElementById("lab-list");
    
    labList.innerHTML = ""; // Clear previous results

    const results = labs.filter(lab => 
        lab.location.toLowerCase().includes(userLocation) || 
        lab.location.toLowerCase() === selectedLocation
    );

    if (results.length > 0) {
        results.forEach(lab => {
            const labItem = document.createElement("div");
            labItem.className = "lab-item";
            labItem.innerHTML = `
                <h3>${lab.name}</h3>
                <p><strong>Address:</strong> ${lab.address}</p>
                <p><strong>Contact:</strong> ${lab.contact}</p>
                <p><strong>Rating:</strong> ${lab.rating}</p>
                <p><strong>Facilities:</strong> ${lab.facilities}</p>
            `;
            labList.appendChild(labItem);
        });
    } else {
        labList.innerHTML = "<p>No labs found for the entered location.</p>";
    }
}
