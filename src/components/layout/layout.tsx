import { Box } from '@mui/material';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            sx={{
                minHeight: '80vh',
                backgroundColor: '#fff8e1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: 2
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '800px'
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
