var arrDataElements1 = new Object();
var arrDataElements2 = new Object();

$.getJSON('https://json.geoiplookup.io/?callback=?', function (data) {
    // console.log(JSON.stringify(data, null, 2));
    arrDataElements1 = JSON.parse(JSON.stringify(data));

    const ipV6 = arrDataElements1.ip;
    const isp = arrDataElements1.isp;
    const continentName = arrDataElements1.continent_name;
    const continentCode = arrDataElements1.continent_code;
    const country = arrDataElements1.country_name;

    let element;

    element = document.querySelector('#ipV6');
    element.innerHTML = ipV6;

    element = document.querySelector('#isp');
    element.innerHTML = isp;

    element = document.querySelector('#continentName');
    element.innerHTML = continentName;

    element = document.querySelector('#continentCode');
    element.innerHTML = continentCode;

    element = document.querySelector('#country');
    element.innerHTML = country;
});

let apiKey = 'd42dc0e5b04445acb757dc4de23386d5';
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
  console.log(JSON.stringify(data, null, 2));

  arrDataElements2 = JSON.parse(JSON.stringify(data));

    const ipV4 = arrDataElements2.ip_address;
    const region = arrDataElements2.region;
    const city = arrDataElements2.city;
    const timeZone = arrDataElements2.timezone.abbreviation;
    const coordinates = arrDataElements2.latitude + " " + arrDataElements2.longitude;
    const vpn = arrDataElements2.security.is_vpn;

    element = document.querySelector('#ipV4');
    element.innerHTML = ipV4;

    element = document.querySelector('#region');
    element.innerHTML = region;

    element = document.querySelector('#city');
    element.innerHTML = city;

    element = document.querySelector('#timeZone');
    element.innerHTML = timeZone;

    element = document.querySelector('#coordinates');
    element.innerHTML = coordinates;

    element = document.querySelector('#VPN');
    element.innerHTML = vpn;
});

// $.getJSON('http://www.geoplugin.net/json.gp', function (data) {
//     // console.log(JSON.stringify(data, null, 2));
//     arrDataElements2 = JSON.parse(JSON.stringify(data));

//     const ipV4 = arrDataElements2.geoplugin_request;
//     const region = arrDataElements2.geoplugin_region;
//     const city = arrDataElements2.geoplugin_city;
//     const timeZone = arrDataElements2.geoplugin_timezone;
//     const coordinates = arrDataElements2.geoplugin_latitude + " " + arrDataElements2.geoplugin_longitude;

//     element = document.querySelector('#ipV4');
//     element.innerHTML = ipV4;

//     element = document.querySelector('#region');
//     element.innerHTML = region;

//     element = document.querySelector('#city');
//     element.innerHTML = city;

//     element = document.querySelector('#timeZone');
//     element.innerHTML = timeZone;

//     element = document.querySelector('#coordinates');
//     element.innerHTML = coordinates;

//     element = document.querySelector('#VPN');
//     element.innerHTML = coordinates;
// });

var request = new XMLHttpRequest();
request.open('GET', 'https://api.ipdata.co/?api-key=9ab994ce35f473124877ffa978a6dc2c485a4a3ca94a0d95f954e93c');
request.setRequestHeader('Accept', 'application/json');
request.onreadystatechange = function () {
    if (this.readyState === 4) {
        // console.log(this.responseText);

        let threatData = JSON.parse(this.responseText);
        // console.log(threatData.threat);

        element = document.querySelector('#Proxy');
        element.innerHTML = threatData.threat.is_proxy;

        element = document.querySelector('#Tor');
        element.innerHTML = threatData.threat.is_tor;
    }
};
request.send();