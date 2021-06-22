import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

export interface ListItemLinkProps {
  primary: string;
  to: string;
  icon?: React.ReactElement | null;
  selected?: boolean | 'matchPath' | 'matchExactPath';
}

export function ListItemLink(props: ListItemLinkProps): React.ReactElement {
  const { icon, primary, to, selected = 'matchPath' } = props;
  const path = useLocation().pathname;
  let isSelected: boolean;

  switch (selected) {
    case 'matchPath':
      isSelected = new RegExp(`^${to}`).test(path);
      break;
    case 'matchExactPath':
      isSelected = path === to;
      break;
    default:
      isSelected = selected;
  }

  const renderLink = React.useMemo(
    () =>
      // eslint-disable-next-line react/display-name
      React.forwardRef<never, Omit<LinkProps, 'to'>>((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} selected={isSelected}>
        {icon === undefined ? null : <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}
