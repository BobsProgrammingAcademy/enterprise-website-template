import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StormIcon from '@mui/icons-material/Storm';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha, useTheme } from '@mui/material/styles';

import CustomButton from '../components/CustomButton';

interface Props {
  onSidebarOpen: () => void;
}

const Header = ({ onSidebarOpen }: Props): JSX.Element => {
  const theme = useTheme();
  
  return (
    <>
      <AppBar
        color='transparent'
        position='sticky'
        sx={{
          border: 0,
          padding: '10px 0',
          marginBottom: '5px',
          top: 'auto',
          boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)'
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <Link href='/' sx={{ textDecoration: 'none' }}>
            <IconButton size='large' disabled>
              <StormIcon 
                sx={{ 
                  color: theme.palette.primary.main, 
                  height: 40, 
                  width: 40 
                }} 
              />
              <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
                <Typography 
                  variant='h6' 
                  sx={{ 
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    marginLeft: '10px'
                  }}
                >
                  Bob's Company
                </Typography>
              </Box>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ 
              alignItems: 'center',
              display: { lg: 'flex', md: 'none', xs: 'none' } 
            }}
          >
            <CustomButton 
              href='#products'
              text='Products'
            />
            <CustomButton 
              href='#services'
              text='Services'
            />
            <CustomButton 
              href='#pricing'
              text='Pricing'
            />
            <CustomButton 
              href='#about'
              text='About'
            />
            <CustomButton 
              href='#contact'
              text='Contact'
            />
          </Box>
          <Box 
            sx={{ 
              display: { md: 'block', lg: 'none' } 
            }} 
            alignItems='center'
          >
            <Button
              onClick={() => onSidebarOpen()}
              aria-label='Menu'
              variant='outlined'
              sx={{
                borderRadius: 0,
                minWidth: 'auto',
                padding: 1,
                borderColor: alpha(theme.palette.divider, 0.2)
              }}
            >
              <MenuIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;