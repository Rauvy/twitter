/**
 * API configuration utility
 * This centralizes API URL management for all environments
 */

// Use the deployed backend URL
const API_BASE_URL = 'https://twitter-opi0.onrender.com/api';

/**
 * Get the complete API URL for a given endpoint
 * @param {string} endpoint - The API endpoint (should start with /)
 * @returns {string} The complete URL
 */
export const getApiUrl = (endpoint) => {
  // Make sure the endpoint starts with a slash
  if (!endpoint.startsWith('/')) {
    endpoint = `/${endpoint}`;
  }
  
  return `${API_BASE_URL}${endpoint}`;
};

export default getApiUrl; 