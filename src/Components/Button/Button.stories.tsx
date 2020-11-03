import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import Button from '.';

import { EButtonTypes } from '../../enums';

import DonwloadIcon from '../../Icons/DownloadIcon';

export default {
  title: 'UI/Button'
};

export const Primary = (): React.ReactElement => (
  <Button
    type='button'
    format={EButtonTypes.PRIMARY}
    onClick={action('Hiciste click!')}
    disabled={false}
  >
    Primary Button
  </Button>
);

export const PrimaryIcon = (): React.ReactElement => (
  <Button
    type='button'
    format={EButtonTypes.PRIMARY}
    onClick={action('Hiciste click!')}
    disabled={false}
  >
    {' '}
    <DonwloadIcon selected /> Primary Button
  </Button>
);

export const PrimaryDisabled = (): React.ReactElement => (
  <Button
    type='button'
    format={EButtonTypes.PRIMARY}
    onClick={action('Hiciste click!')}
    disabled
  >
    Primary Button
  </Button>
);

export const Secondary = (): React.ReactElement => (
  <Button
    type='button'
    format={EButtonTypes.SECONDARY}
    onClick={action('Hiciste click!')}
    disabled={false}
  >
    Secondary Button
  </Button>
);

export const SecondaryIcon = (): React.ReactElement => (
  <Button
    type='button'
    format={EButtonTypes.SECONDARYICON}
    onClick={action('Hiciste click!')}
    disabled={false}
  >
    {' '}
    <DonwloadIcon selected /> Secondary Button
  </Button>
);

export const FullWidth = (): React.ReactElement => (
  <Button
    type='button'
    format={EButtonTypes.PRIMARY}
    full
    disabled={false}
    onClick={action('Hiciste click!')}
  >
    <DonwloadIcon selected /> Full Width
  </Button>
);

export const Loading = (): React.ReactElement => (
  <Button
    type='button'
    format={EButtonTypes.PRIMARY}
    loading
    onClick={action('Hiciste click!')}
    disabled={false}
  >
    Loading
  </Button>
);
