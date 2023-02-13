import axios from 'axios';

export const getShips = async () => {

    let serverResponse = await axios({
        method: 'GET',
        url: `/get_starships`
    });

    return serverResponse;
}