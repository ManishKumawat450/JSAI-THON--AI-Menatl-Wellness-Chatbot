import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  useTheme, 
  PaletteMode,
  Avatar
} from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/animations.css';

interface HeaderProps {
  toggleColorMode: () => void;
  mode: PaletteMode;
}

const Header: React.FC<HeaderProps> = ({ toggleColorMode, mode }) => {
  const theme = useTheme();

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        background: mode === 'dark' 
          ? 'linear-gradient(90deg, #311B92 0%, #512DA8 100%)' 
          : 'linear-gradient(90deg, #2196F3 0%, #21CBF3 100%)', 
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
      className="app-header"
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar 
              src="/logo.svg"
              alt="Logo" 
              sx={{ width:80 , height: 80, mr: 3 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(90deg, #ffffff 0%, #e0e0ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0px 2px 8px rgba(0,0,0,0.15)'
              }}
            >
              Mental Wellness AI Assistant
            </Typography>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
