import React, { useState } from 'react';
import { Button } from '@enterprise-ui/button';

export default () => {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const handleLoad = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(true);
    setTimeout(() => setter(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <h3>Loading States by Variant</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" loading>Contained Loading</Button>
          <Button variant="outlined" loading>Outlined Loading</Button>
          <Button variant="text" loading>Text Loading</Button>
        </div>
      </div>

      <div>
        <h3>Loading States by Color</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" color="primary" loading>Primary</Button>
          <Button variant="contained" color="secondary" loading>Secondary</Button>
          <Button variant="contained" color="error" loading>Error</Button>
          <Button variant="contained" color="success" loading>Success</Button>
          <Button variant="contained" color="warning" loading>Warning</Button>
        </div>
      </div>

      <div>
        <h3>Loading States by Size</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
          <Button variant="contained" size="small" loading>Small</Button>
          <Button variant="contained" size="medium" loading>Medium</Button>
          <Button variant="contained" size="large" loading>Large</Button>
        </div>
      </div>

      <div>
        <h3>Interactive Loading</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" loading={loading1} onClick={() => handleLoad(setLoading1)}>
            Load (3s)
          </Button>
          <Button variant="outlined" loading={loading2} onClick={() => handleLoad(setLoading2)}>
            Load (3s)
          </Button>
          <Button variant="text" loading={loading3} onClick={() => handleLoad(setLoading3)}>
            Load (3s)
          </Button>
        </div>
      </div>

      <div>
        <h3>Icon Button Loading</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" loading iconButton>
            <span>🔄</span>
          </Button>
          <Button variant="outlined" loading iconButton>
            <span>⚙️</span>
          </Button>
          <Button variant="text" loading iconButton>
            <span>✨</span>
          </Button>
        </div>
      </div>

      <div>
        <h3>Full Width Loading</h3>
        <div style={{ marginTop: 8 }}>
          <Button variant="contained" loading fullWidth>
            Full Width Loading Button
          </Button>
        </div>
      </div>
    </div>
  );
};
