import React from 'react';
import reactDom from 'react-dom/client';
import { SpyClient } from './src/SpyClient.tsx';

reactDom.createRoot(document.getElementById('root')).render(<SpyClient />);
