/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import { styled, withStyle } from '../styles/index.js';
import { StyledListItem } from '../menu/index.js';
import { KIND } from './constants.js';

const StyledButton = styled<{ $isFocusVisible: boolean }>(
  'button',
  ({ $theme, $isFocusVisible }) => ({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: $theme.colors.contentPrimary,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    outline: $isFocusVisible ? `3px solid ${$theme.colors.accent}` : 'none',
    outlineOffset: '-3px',
    WebkitAppearance: 'none',
    cursor: 'pointer',
  })
);

export const StyledRoot = styled<{}>('div', (props) => {
  const { $theme } = props;
  return {
    ...$theme.typography.font300,
    boxSizing: 'border-box',
    backgroundColor: $theme.colors.backgroundPrimary,
  };
});

export const StyledSubnavContainer = styled('div', {});

export const StyledSpacing = styled<{}>('div', (props) => {
  const { $theme } = props;
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: $theme.sizing.scale400,
    paddingBottom: $theme.sizing.scale400,
    [$theme.mediaQuery.medium]: {
      paddingTop: $theme.sizing.scale700,
      paddingBottom: $theme.sizing.scale700,
    },
  };
});

export const StyledAppName = styled<{}>('div', ({ $theme }) => ({
  ...$theme.typography.font550,
  color: $theme.colors.primary,
  textDecoration: 'none',
  [$theme.mediaQuery.medium]: {
    ...$theme.typography.font650,
  },
}));

export const StyledSideMenuButton = withStyle<typeof StyledButton, {}>(
  StyledButton,
  ({ $theme }) => ({
    ...($theme.direction === 'rtl'
      ? { marginLeft: $theme.sizing.scale600 }
      : { marginRight: $theme.sizing.scale600 }),
    paddingTop: $theme.sizing.scale100,
    paddingBottom: $theme.sizing.scale100,
    paddingLeft: $theme.sizing.scale100,
    paddingRight: $theme.sizing.scale100,
  })
);

export const StyledPrimaryMenuContainer = styled<{}>('div', ({ $theme }) => {
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    paddingInlineEnd: $theme.sizing.scale1000,
  };
});

export const StyledMainMenuItem = styled<{
  $active?: boolean,
  $isFocusVisible: boolean,
  $kind: $Values<typeof KIND>,
}>('div', (props) => {
  const {
    $active,
    $isFocusVisible,
    $kind,
    $theme: { colors, sizing, direction },
  } = props;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    color: $active ? colors.contentPrimary : colors.contentTertiary,
    marginLeft: sizing.scale700,
    marginRight: sizing.scale700,
    paddingTop: $kind === KIND.secondary ? sizing.scale750 : '0',
    paddingBottom: $kind === KIND.secondary ? sizing.scale750 : '0',
    outline: $isFocusVisible ? `3px solid ${colors.accent}` : 'none',
    outlineOffset: '-3px',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: $active && !$isFocusVisible ? colors.primary : 'transparent',
    cursor: $active ? 'default' : 'pointer',
    whiteSpace: $kind === KIND.secondary ? 'nowrap' : 'initial',
    ':first-child': {
      ...(direction === 'rtl' ? { marginRight: '0' } : { marginLeft: '0' }),
    },
    ':last-child': {
      ...(direction === 'rtl' ? { marginLeft: '0' } : { marginRight: '0' }),
    },
    ':hover': {
      color: colors.primary,
    },
  };
});

export const StyledSecondaryMenuContainer = styled<{}>('div', ({ $theme }) => {
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    margin: 'auto',
    maxWidth: `${$theme.breakpoints.large}px`,
    alignItems: 'stretch',
    overflow: 'auto',
  };
});

export const StyledUserMenuButton = StyledButton;

export const StyledUserMenuProfileListItem = withStyle<typeof StyledListItem, {}>(
  StyledListItem,
  ({ $theme }) => ({
    paddingTop: '0',
    paddingBottom: '0',
    ...($theme.direction === 'rtl' ? { paddingLeft: '0' } : { paddingRight: '0' }),
  })
);

export const StyledUserProfileTileContainer = styled<{}>('div', ({ $theme }) => {
  return {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    paddingTop: $theme.sizing.scale650,
    paddingBottom: $theme.sizing.scale650,
  };
});

export const StyledUserProfilePictureContainer = styled<{}>('div', ({ $theme }) => {
  return {
    ...($theme.direction === 'rtl'
      ? { marginLeft: $theme.sizing.scale600 }
      : { marginRight: $theme.sizing.scale600 }),
  };
});

export const StyledUserProfileInfoContainer = styled<{}>('div', ({ $theme }) => {
  return {
    boxSizing: 'border-box',
    alignSelf: 'center',
  };
});

export const StyledDesktopMenuContainer = styled<{}>('div', ({ $theme }) => {
  return {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: `${$theme.colors.borderOpaque}`,
  };
});

export const StyledDesktopMenu = styled<{}>('div', ({ $theme }) => {
  return {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: `${$theme.breakpoints.large}px`,
    paddingBlockStart: '18px',
    paddingBlockEnd: '18px',
  };
});
