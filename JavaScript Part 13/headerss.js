const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = {headers: {Accept: "application/json"}};
     let res = await axios.get(url,config);
     console.log(res.data);
    }
    catch(err){
  console.log(err);
    }

}

const url = "https://incanhazdadjoke.com/";
async function getJokes() {
    try {

