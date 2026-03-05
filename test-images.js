const http = require('http');

// Test function
async function testImageRoute(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: `/api/images${path}`,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`${method} ${path} - Status: ${res.statusCode}`);
        console.log('Response:', body);
        console.log('---');
        resolve({ status: res.statusCode, body });
      });
    });

    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

// Test all image routes
async function testAllImageRoutes() {
  console.log('🖼️ Testing all image CRUD routes...\n');
  
  try {
    // Test GET all images
    await testImageRoute('GET', '/toutes_images');
    
    // Test POST create image
    const testImage = {
      nom_fichier: "test-image.jpg",
      chemin: "/uploads/test-image.jpg"
    };
    const createResult = await testImageRoute('POST', '/creer_image', testImage);
    
    // Extract ID from created image
    const createdImage = JSON.parse(createResult.body);
    const imageId = createdImage.data?.id;
    
    if (imageId) {
      // Test GET image by ID
      await testImageRoute('GET', `/image/${imageId}`);
      
      // Test PUT update image
      const updateData = {
        nom_fichier: "test-image-updated.jpg",
        chemin: "/uploads/test-image-updated.jpg"
      };
      await testImageRoute('PUT', `/image/${imageId}`, updateData);
      
      // Test GET search by filename
      await testImageRoute('GET', '/recherche?filename=test');
      
      // Test DELETE image
      await testImageRoute('DELETE', `/image/${imageId}`);
    }
    
    console.log('✅ All image CRUD routes tested successfully!');
    
  } catch (error) {
    console.error('❌ Error testing image routes:', error.message);
  }
}

// Wait for server to be ready, then test
setTimeout(testAllImageRoutes, 2000);
