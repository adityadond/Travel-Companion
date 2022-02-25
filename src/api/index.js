import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";


export const getPlacesData = async (sw,ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, { params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "eb5f935e21msh5cb5046543b2f6ap182d48jsnb66e501ee85b",
      },
    })
    return data;
  } catch (error) {
    console.log(error);
  }
};
