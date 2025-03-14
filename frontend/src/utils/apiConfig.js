/**
 * API configuration utility
 * This centralizes API URL management for all environments
 */

// Determine the base URL based on the environment
let API_BASE_URL;

// In production, use the deployed backend URL
if (import.meta.env.PROD) {
  // Use the correct backend URL
  API_BASE_URL = 'https://twitter-backend.onrender.com/api';
} else {
  // In development, use relative URLs that get proxied through Vite
  API_BASE_URL = '/api';
}

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