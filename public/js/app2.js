    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            const countryDropdown = document.getElementById("country");
            data.forEach(country => {
                const option = document.createElement("option");
                option.value = country.name.common;
                option.textContent = country.name.common;
                countryDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Terjadi kesalahan:", error);
        });

    document.getElementById("country-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const countryName = document.getElementById("country").value;
        getCountryInfo(countryName);
    });

    function getCountryInfo(countryName) {
        const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const country = data[0];
                document.getElementById("country-name").textContent = country.name.common;
                document.getElementById("capital").textContent = country.capital ? country.capital[0] : "Tidak diketahui";
                document.getElementById("population").textContent = country.population ? country.population.toLocaleString() : "Tidak diketahui";
                document.getElementById("area").textContent = country.area ? country.area.toLocaleString() : "Tidak diketahui";
                document.getElementById("flag").src = country.flags ? country.flags.png : "";
            })
            .catch(error => {
                console.error("Terjadi kesalahan:", error);
            });
    }