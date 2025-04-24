import { FaReact, FaServer, FaCode, FaNetworkWired, FaArrowRight } from 'react-icons/fa';

/**
 * Page explaining the codebase structure and frontend-backend integration
 */
const CodeExplanationPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Code Documentation</h1>
        <p className="text-gray-600">
          Understanding the NomLog frontend and its connection to the backend
        </p>
      </div>
      
      {/* Frontend Overview */}
      <div className="card mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FaReact className="text-2xl text-primary-500" />
          <h2 className="text-2xl font-bold">Frontend Architecture</h2>
        </div>
        
        <p className="mb-4">
          The NomLog frontend is built with React and uses modern web development practices for a
          responsive and interactive user experience. Here's how it's structured:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <pre className="whitespace-pre-wrap text-sm">
{`
📁 frontend/
 ┣ 📁 src/
 ┃ ┣ 📁 components/      # Reusable UI components
 ┃ ┃ ┣ 📄 ImageUploader.jsx   # Handles image upload with drag & drop
 ┃ ┃ ┣ 📄 Layout.jsx          # App layout with navigation
 ┃ ┃ ┗ 📄 MacroResults.jsx    # Displays nutritional results
 ┃ ┣ 📁 pages/           # Application pages/routes
 ┃ ┃ ┣ 📄 HomePage.jsx        # Landing page with features
 ┃ ┃ ┣ 📄 AnalyzePage.jsx     # Food analysis page
 ┃ ┃ ┣ 📄 AboutPage.jsx       # Project information
 ┃ ┃ ┗ 📄 CodeExplanationPage.jsx  # This documentation
 ┃ ┣ 📁 utils/           # Utility functions and services
 ┃ ┃ ┗ 📄 api.js              # API integration with backend
 ┃ ┣ 📄 App.jsx          # Main app component with routing
 ┃ ┣ 📄 index.css        # Global styles and Tailwind imports
 ┃ ┗ 📄 main.jsx         # Application entry point
 ┣ 📄 index.html         # HTML template
 ┣ 📄 package.json       # Dependencies and scripts
 ┣ 📄 tailwind.config.js # Tailwind CSS configuration
 ┣ 📄 vite.config.js     # Vite bundler configuration
 ┗ 📄 postcss.config.js  # PostCSS configuration
`}
          </pre>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Key Technologies</h3>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>React</strong> - Frontend library for building user interfaces</li>
          <li><strong>React Router</strong> - Client-side routing between pages</li>
          <li><strong>Tailwind CSS</strong> - Utility-first CSS framework for styling</li>
          <li><strong>Axios</strong> - HTTP client for API requests</li>
          <li><strong>Vite</strong> - Fast, modern frontend build tool</li>
        </ul>
      </div>
      
      {/* Backend Integration */}
      <div className="card mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FaNetworkWired className="text-2xl text-primary-500" />
          <h2 className="text-2xl font-bold">Frontend-Backend Integration</h2>
        </div>
        
        <p className="mb-4">
          The frontend connects to the backend via a simple REST API. Here's how the integration works:
        </p>
        
        <div className="relative overflow-x-auto mb-6">
          <div className="flex items-center justify-center py-6 bg-gray-50 rounded-lg">
            <div className="text-center px-4">
              <div className="bg-primary-100 p-3 rounded-lg inline-block mb-2">
                <FaReact className="text-3xl text-primary-500" />
              </div>
              <div className="font-medium">React Frontend</div>
              <div className="text-sm text-gray-500">
                User interface, Image upload
              </div>
            </div>
            
            <FaArrowRight className="text-gray-400 mx-4" />
            
            <div className="text-center border-2 border-dashed border-gray-300 p-4 rounded-lg">
              <div className="font-medium">/api/analyze</div>
              <div className="text-sm text-gray-500">
                FormData with image file
              </div>
            </div>
            
            <FaArrowRight className="text-gray-400 mx-4" />
            
            <div className="text-center px-4">
              <div className="bg-primary-100 p-3 rounded-lg inline-block mb-2">
                <FaServer className="text-3xl text-primary-500" />
              </div>
              <div className="font-medium">FastAPI Backend</div>
              <div className="text-sm text-gray-500">
                Image analysis, Database lookup
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">API Integration</h3>
        <p className="mb-4">
          The frontend uses the <code>api.js</code> utility file to handle communication with the backend:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6 overflow-x-auto">
          <pre className="text-sm">
{`// src/utils/api.js
import axios from 'axios';

// Base URL for API requests
const API_URL = '/api';

/**
 * Analyzes a food image by sending it to the backend
 * 
 * @param {File} imageFile - The image file to analyze
 * @returns {Promise} - Promise that resolves with the analysis results
 */
export const analyzeFoodImage = async (imageFile) => {
  // Create a FormData object to send the image
  const formData = new FormData();
  formData.append('file', imageFile);
  
  // Make a POST request to the analyze endpoint
  const response = await axios.post(\`\${API_URL}/analyze\`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
};`}
          </pre>
        </div>
      </div>
      
      {/* Backend Structure */}
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <FaServer className="text-2xl text-primary-500" />
          <h2 className="text-2xl font-bold">Backend Architecture</h2>
        </div>
        
        <p className="mb-4">
          The backend is built with FastAPI and provides the following functionality:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <pre className="whitespace-pre-wrap text-sm">
{`
📁 api/
 ┣ 📄 main.py          # FastAPI application with /analyze endpoint
 ┣ 📄 food_lookup.py   # Food-to-macros mapping database 
 ┗ 📄 prompts.py       # GPT summary generation templates
📁 credentials/
 ┗ 📄 GCV_API.json     # Google Cloud Vision API credentials (you need to provide this)
📄 run_api.py          # API server starter
`}
          </pre>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">API Endpoints</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Endpoint</th>
                <th className="px-4 py-2 text-left">Method</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">/analyze</td>
                <td className="px-4 py-2">POST</td>
                <td className="px-4 py-2">Analyzes a food image to identify food and get nutrition info</td>
                <td className="px-4 py-2">
                  <pre className="text-xs">
{`{
  "success": true,
  "results": [
    {
      "label": "pizza",
      "macros": {
        "calories": 266,
        "protein": 11,
        "carbs": 33,
        "fat": 10
      }
    }
  ]
}`}
                  </pre>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">/api/analyze-image</td>
                <td className="px-4 py-2">POST</td>
                <td className="px-4 py-2">Alternative endpoint with same functionality as /analyze</td>
                <td className="px-4 py-2">Same as /analyze</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">/test-food-detection</td>
                <td className="px-4 py-2">POST</td>
                <td className="px-4 py-2">Test endpoint that only returns detected food labels</td>
                <td className="px-4 py-2">
                  <pre className="text-xs">
{`{
  "detected_labels": ["pizza", "cheese", "italian food"]
}`}
                  </pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">Google Cloud Vision API Integration</h3>
        <p className="mb-4">
          The application uses the Google Cloud Vision API for accurate food detection in images. To use this feature:
        </p>
        <ol className="list-decimal pl-5 space-y-1 mb-6">
          <li>Create a Google Cloud account and project</li>
          <li>Enable the Vision API for your project</li>
          <li>Create a service account with Vision API access</li>
          <li>Download the service account key as JSON (GCV_API.json)</li>
          <li>Place the JSON file in one of these locations:
            <ul className="list-disc pl-5 mt-1">
              <li>Project root directory</li>
              <li>credentials/ directory</li>
            </ul>
          </li>
        </ol>
        
        <h3 className="text-xl font-semibold mb-2">Running the API Server</h3>
        <p className="mb-4">
          Running the API server is simple:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <pre className="text-sm">
{`# Navigate to the project directory
cd photo-to-macros

# Start the API server
python run_api.py
`}
          </pre>
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">Current Backend Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Integration with Google Cloud Vision API for accurate food recognition</li>
          <li>Local food database for nutritional information</li>
          <li>Fallback to database matching when Vision API credentials are not available</li>
          <li>Enhanced error handling and user feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default CodeExplanationPage; 