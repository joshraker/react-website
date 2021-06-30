import { ListItem, ListItemProps } from '@material-ui/core';
import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export default function ListItemLink(
  props: Omit<ListItemProps<NavLink, NavLinkProps>, 'component'>
): React.ReactElement {
  // Don't know why the types aren't checking out here
  return <ListItem button activeClassName="Mui-selected" {...(props as any)} component={NavLink} />;
}
