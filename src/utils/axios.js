import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY3ZjVhYzExMTRiNjEyMmZkOTc3NWQ2ZTQ4ZmE3MiIsInN1YiI6IjY2NTQ0YTkzN2Q1NmZkOTg5ODAzZjJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GDpAQ58LIDFZf1Bsg3pj8TEDpmv91eAxjvOZrC8shmc'
    }
  });

  export default instance