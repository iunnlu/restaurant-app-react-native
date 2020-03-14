import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer IlnuuyFBDROSgn9U7XIUYXjhujrl_KYHIo0oiTLWCyapjyh9d28OpMMOpkoM9jp6yctPTXX2yjSbzjxZfjbklyuQKMnnecwX9DptbGH1UDfO8enQxU4u_N-QBdZTXnYx"
    }
});