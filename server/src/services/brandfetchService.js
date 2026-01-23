// using global fetch


const BRANDFETCH_API_KEY = process.env.BRANDFETCH_API_KEY;
const API_URL = process.env.BRANDFETCH_API_URL || 'https://api.brandfetch.io/v2/brands/domain';

/**
 * Obtener links de redes sociales desde Brandfetch
 * @param {string} domain - El dominio de la marca (ej: google.com)
 * @returns {Promise<Array>} - Array de objetos de redes sociales
 */
export const getSocialLinks = async (domain) => {
  if (!domain) return [];

  try {
    // Limpiar el dominio para asegurar que sea solo el host (ej: www.google.com -> google.com)
    // Aunque Brandfetch suele manejar bien urls completas, es mejor limpiar o extraer el dominio si es posible.
    // Por simplicidad, asumiremos que puede llegar una URL o un dominio y trataremos de extraer el hostname
    let cleanDomain = domain;
    try {
        if (domain.startsWith('http')) {
            cleanDomain = new URL(domain).hostname;
        }
    } catch (e) {
        // Si falla el parsing, usamos el string original
        cleanDomain = domain; 
    }

    const response = await fetch(`${API_URL}/${cleanDomain}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${BRANDFETCH_API_KEY}`,
      },
    });

    if (!response.ok) {
        if (response.status === 404) {
            console.warn(`Brandfetch: Domain not found for ${cleanDomain}`);
            return [];
        }
        if (response.status === 429) {
             console.warn(`Brandfetch: Rate limit exceeded.`);
             // Podríamos lanzar error o simplemente retornar vacío para no romper el flujo
             return [];
        }
        if (response.status === 401) {
             console.error(`Brandfetch: Unauthorized. Check API Key.`);
             return [];
        }
        
        console.warn(`Brandfetch error: ${response.status} ${response.statusText}`);
        return [];
    }

    const data = await response.json();
    
    if (data.links && Array.isArray(data.links)) {
        return data.links.map(link => ({
            network: link.name,
            url: link.url,
            followers: null // Brandfetch no devuelve followers en este endpoint simple
        }));
    }

    return [];

  } catch (error) {
    console.error('Error fetching data from Brandfetch:', error);
    return [];
  }
};

export default {
  getSocialLinks
};
