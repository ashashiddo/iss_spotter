
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then((body) => {
    const { latitude, longitude } = JSON.parse(body);
    return fetchISSFlyOverTimes(latitude, longitude);
  })
  .then((body) => { console.log(body);
})
  .catch((error) => { console.log('Error:', error);
});
