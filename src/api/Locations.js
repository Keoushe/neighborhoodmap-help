const CLIENT_ID = "TVL5H2VQV5BFOC4532F2ECB5KFRN40NTJPFUPAYIC0AQAVD1";
const CLIENT_SECRET = "FNIPSINEXZOH0KD21ULTZ431GSQ1BTLCJ2FLKXIR4JC3IQ2A";

export const getLocations = () => {
return fetch (`https://api.foursquare.com/v2/venues/explore?cat=food&near=busch_stadium&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181101`)
  .then(resp => resp.json())
  .then(result => result.response.groups[0].items);
};
