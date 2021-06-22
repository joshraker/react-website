import React from 'react';

interface _ShowProps {
  when?: boolean;
}

export type ShowProps = React.PropsWithChildren<_ShowProps>;

export default function Show(props: ShowProps): React.ReactElement | null {
  const { when = true, children } = props;

  if (when) {
    return <>{children}</>;
  }

  return null;
}
