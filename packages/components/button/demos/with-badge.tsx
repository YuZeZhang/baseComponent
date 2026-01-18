import React, { useState } from 'react';
import { Button } from '@enterprise-ui/button';

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const NotificationIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

export default () => {
  const [count1, setCount1] = useState(5);
  const [count2, setCount2] = useState(99);
  const [count3, setCount3] = useState(999);
  const [showDot, setShowDot] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <h3>Badges with Count</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" badge={count1} startIcon={<MailIcon />}>
            Mail ({count1})
          </Button>
          <Button variant="contained" badge={count2} startIcon={<MailIcon />}>
            Mail ({count2})
          </Button>
          <Button variant="contained" badge={count3} startIcon={<MailIcon />}>
            Mail ({count3})
          </Button>
        </div>
      </div>

      <div>
        <h3>Badges with Dot</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" badge startIcon={<NotificationIcon />}>
            Notifications
          </Button>
          <Button variant="outlined" badge startIcon={<NotificationIcon />}>
            Notifications
          </Button>
          <Button variant="text" badge startIcon={<NotificationIcon />}>
            Notifications
          </Button>
        </div>
      </div>

      <div>
        <h3>Icon Buttons with Badges</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" badge={12} iconButton>
            <MailIcon />
          </Button>
          <Button variant="outlined" badge={5} iconButton>
            <NotificationIcon />
          </Button>
          <Button variant="text" badge iconButton>
            <NotificationIcon />
          </Button>
        </div>
      </div>

      <div>
        <h3>Badge Colors</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" badge={5} badgeAnchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            Default (Error)
          </Button>
          <Button 
            variant="contained" 
            badge={5} 
            badgeAnchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            color="secondary"
          >
            Secondary
          </Button>
          <Button 
            variant="contained" 
            badge={5} 
            badgeAnchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            color="success"
          >
            Success
          </Button>
        </div>
      </div>

      <div>
        <h3>Interactive Badge Counter</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
          <Button 
            variant="contained" 
            badge={count1} 
            startIcon={<MailIcon />}
            onClick={() => setCount1(Math.max(0, count1 - 1))}
          >
            Decrement
          </Button>
          <Button 
            variant="outlined" 
            badge={count1} 
            startIcon={<MailIcon />}
            onClick={() => setCount1(count1 + 1)}
          >
            Increment
          </Button>
          <span>Current count: {count1}</span>
        </div>
      </div>

      <div>
        <h3>Badge with Loading State</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" badge={99} loading>
            Loading with Badge
          </Button>
          <Button variant="outlined" badge loading iconButton>
            <MailIcon />
          </Button>
        </div>
      </div>

      <div>
        <h3>Disabled Button with Badge</h3>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button variant="contained" badge={5} disabled>
            Disabled
          </Button>
          <Button variant="outlined" badge iconButton disabled>
            <MailIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
