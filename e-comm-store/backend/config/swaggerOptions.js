// swaggerOptions.js
const swaggerJsdoc = require("swagger-jsdoc");
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Express avec Swagger',
        version: '1.0.0',
        description: 'Documentation de l\'API Express avec Swagger',
      },
      servers: [
        {
          url: 'http://localhost:3000', // URL de base de votre API
        },
      ],
    },
    // Définissez où Swagger trouvera les annotations
    apis: ['./routes/*.js'], // Indique les fichiers contenant les annotations de la documentation
  };
  
  const swaggerSpec = swaggerJsdoc(options);
  module.exports = swaggerSpec;