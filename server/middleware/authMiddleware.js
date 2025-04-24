module.exports = {
  isAuthenticated: (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    next();
  },
  
  isOrganizer: async (req, res, next) => {
    try {
      const user = await User.findById(req.session.userId);
      if (!user || user.roleid !== 3) { // 3 is organizer role
        return res.status(403).json({ success: false, message: 'Organizer access required' });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error('Organizer check error:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
};