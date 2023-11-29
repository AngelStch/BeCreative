const checkAuthentication = (req, res, next) => {
    try {
      // Perform authentication check here
      // For example, check if the user has a valid token
  
      // Replace the following line with your actual authentication logic
      const isAuthenticated = /* Your authentication logic here */ true;
  
      if (isAuthenticated) {
        // If authenticated, proceed to the next middleware or route handler
        next();
      } else {
        // If not authenticated, return a 401 Unauthorized response
        res.status(401).json({ message: 'Unauthorized' });
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  module.exports = { checkAuthentication };