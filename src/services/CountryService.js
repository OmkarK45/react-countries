// Get data from API and pass it to Components
import axios from "axios";

// const api_url = "https://restcountries.eu/rest/v2/all";

export async function getCountries() {
  const allData = await axios.get('https://restcountries.eu/rest/v2/all')
  return allData
}
