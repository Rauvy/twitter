import { getApiUrl } from './apiConfig';

/**
 * Test function to verify API connectivity
 * This will call the test endpoint on the backend and log the result
 */
export const testApiConnection = async () => {
  try {
    console.log("Testing API connection to:", getApiUrl('/test'));
    
    const response = await fetch(getApiUrl('/test'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ test: 'data' }),
      credentials: 'include'
    });
    
    const data = await response.json();
    console.log("API test response:", data);
    return { success: true, data };
  } catch (error) {
    console.error("API test failed:", error);
    return { success: false, error: error.message };
  }
}; 