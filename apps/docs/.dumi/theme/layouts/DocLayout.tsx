import React from 'react';
import { useOutlet } from 'dumi';
import NavbarExtra from '../slots/NavbarExtra';
import ContextWrapper from '../ContextWrapper';
import Layout from 'dumi/theme-default/layouts/DocLayout';

export default function DocLayout(props: any) {
  const outlet = useOutlet();
  
  return (
    <ContextWrapper>
      <Layout {...props}>
         {outlet}
      </Layout>
    </ContextWrapper>
  );
}
