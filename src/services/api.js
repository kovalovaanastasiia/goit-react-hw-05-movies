import axios from 'axios';

const API_KEY = 'fcad8017f20df8fe2af32c15ba19b665';
const BASE_URL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export async function getTrendingMovies() {
  const query = BASE_URL + `/trending/movie/day`;
  try {
    const {data} = await instance.get(query);
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function getFilmById(id) {
  const query = BASE_URL + `/movie/${id}`;
  try {
    const {data} = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCast(id) {
  const query = `/movie/${id}/credits`;
  try {
    const {data} = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getReviews(id) {
  const query = `/movie/${id}/reviews`;
  try {
    const {data} = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getFilmByFilters(filter) {
  const query = `search/movie`;
  try {
    const {data} = await instance.get(query, {
      params: {
        query: filter
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}
