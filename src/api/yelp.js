import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer X1eLCr5OmlF9gD7pZm9DcMDwlk3rMtefhCPoQ6cgSdCiwsSnTdSoyaLO8xQSA3VEMwIjZrGXvryL_g-NhAZHKgV-YQGHu_9UKcFJaSM6aaXIvTQhSKXzqHc1o7FiX3Yx'
    }

});
