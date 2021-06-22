import React from 'react';

interface _HideProps {
  when?: boolean;
}

export type HideProps = React.PropsWithChildren<_HideProps>;

export default function Hide(props: HideProps): React.ReactElement | null {
  const { when = true, children } = props;

  if (when) {
    return null;
  }

  return <>{children}</>;
}
