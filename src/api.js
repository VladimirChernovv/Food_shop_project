import {API_URL} from './config';

const getMaelById = async (mealId) => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
  return await response.json();
};

const getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php');
  return await response.json();
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + 'filter.php?c=' + catName);
  return await response.json(); // await необходим перед fetch
};

export {getMaelById, getAllCategories, getFilteredCategory};