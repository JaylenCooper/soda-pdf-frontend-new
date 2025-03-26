import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {FeatureCard} from './FeatureCard';

const meta: Meta<typeof FeatureCard> = {
  component: FeatureCard,
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const Basic: Story = {args: {}};
