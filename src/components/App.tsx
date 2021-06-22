import ContentWrapper from 'components/ContentWrapper';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <ContentWrapper />
    </BrowserRouter>
  );
}
