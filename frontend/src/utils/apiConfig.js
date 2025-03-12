/**
 * API configuration utility
 * This centralizes API URL management for all environments
 */

// In development, we use relative URLs that get proxied through Vite
// In production, the URL will be automatically determined
const API_BASE_URL = '/api';

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