import React, {ReactNode} from 'react';
import {StyleProp, Text} from 'react-native';

import {CpkTheme, isEmptyObject} from '../../../utils/theme';
import {withTheme} from '../../../providers/ThemeProvider';
import {light} from '../../../utils/colors';
import {type TextStyle} from 'react-native';
import styled, {css} from '@emotion/native';

// Base Styled Component Factory
const createBaseText = (
  colorResolver: (theme: CpkTheme) => string,
  fallbackColor: string,
) => styled.Text<{theme?: CpkTheme; fontWeight?: 'normal' | 'bold' | 'thin'}>`
  font-family: ${({fontWeight}) =>
    fontWeight === 'bold'
      ? 'Pretendard-Bold'
      : fontWeight === 'thin'
        ? 'Pretendard-Thin'
        : 'Pretendard'};
  color: ${({theme}) => {
    if (!theme || isEmptyObject(theme)) {
      return fallbackColor;
    }
    return colorResolver(theme);
  }};
`;

// Common Text Component Factory
type TextComponentType = ReturnType<typeof styled.Text>;

const createTextComponent = ({
  BaseText,
  fontSize,
  lineHeight,
  fontWeight,
}: {
  BaseText: TextComponentType;
  fontSize: number;
  lineHeight: number;
  fontWeight?: 'normal' | 'bold' | 'thin';
}) =>
  withTheme(
    ({
      style,
      children,
      theme,
      ...props
    }: {
      style?: StyleProp<TextStyle>;
      children?: ReactNode;
      theme?: CpkTheme;
    }) => (
      <BaseText
        {...props}
        style={[
          css`
            font-size: ${fontSize + 'px'};
            line-height: ${lineHeight + 'px'};
          `,
          {includeFontPadding: false},
          style,
        ]}
      >
        {children}
      </BaseText>
    ),
  ) as unknown as TextComponentType;

// Standard and Inverted Base Components
const StandardBaseText = createBaseText((theme) => theme.text.basic, 'gray');
const InvertedBaseText = createBaseText(
  (theme) => theme.text.contrast,
  light.text.contrast,
);

// Standard Typography Components
const Title = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 36,
  lineHeight: 50.4,
  fontWeight: 'bold',
});

const Heading1 = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 28,
  lineHeight: 39.2,
  fontWeight: 'bold',
});

const Heading2 = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 26,
  lineHeight: 36.4,
  fontWeight: 'bold',
});

const Heading3 = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 24,
  lineHeight: 33.6,
  fontWeight: 'bold',
});

const Heading4 = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 22,
  lineHeight: 30.8,
  fontWeight: 'bold',
});

const Heading5 = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 20,
  lineHeight: 28,
  fontWeight: 'bold',
});

const Body1 = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 18,
  lineHeight: 25.2,
});

const Body2 = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 16,
  lineHeight: 22.4,
});

const Body3 = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 14,
  lineHeight: 19.6,
});

const Body4 = createTextComponent({
  BaseText: StandardBaseText,
  fontSize: 12,
  lineHeight: 16.4,
});

// Inverted Typography Components
const InvertedTitle = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 36,
  lineHeight: 50.4,
  fontWeight: 'bold',
});

const InvertedHeading1 = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 28,
  lineHeight: 39.2,
  fontWeight: 'bold',
});

const InvertedHeading2 = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 26,
  lineHeight: 36.4,
  fontWeight: 'bold',
});

const InvertedHeading3 = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 24,
  lineHeight: 33.6,
  fontWeight: 'bold',
});

const InvertedHeading4 = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 22,
  lineHeight: 30.8,
  fontWeight: 'bold',
});

const InvertedHeading5 = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 20,
  lineHeight: 28,
  fontWeight: 'bold',
});

const InvertedBody1 = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 18,
  lineHeight: 25.2,
});

const InvertedBody2 = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 16,
  lineHeight: 22.4,
});

const InvertedBody3 = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 14,
  lineHeight: 19.6,
});

const InvertedBody4 = createTextComponent({
  BaseText: InvertedBaseText,
  fontSize: 12,
  lineHeight: 16.4,
});

export const Typography = {
  Title,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Body1,
  Body2,
  Body3,
  Body4,
};

export const TypographyInverted = {
  Title: InvertedTitle,
  Heading1: InvertedHeading1,
  Heading2: InvertedHeading2,
  Heading3: InvertedHeading3,
  Heading4: InvertedHeading4,
  Heading5: InvertedHeading5,
  Body1: InvertedBody1,
  Body2: InvertedBody2,
  Body3: InvertedBody3,
  Body4: InvertedBody4,
};

export const setFontFamily = (fontFamily: string): void => {
  const style = {
    includeFontPadding: false,
    fontFamily,
  };

  // @ts-ignore
  let oldRender = Text.render;

  // @ts-ignore
  Text.render = (...args: any) => {
    let origin = oldRender.call(this, ...args);

    return React.cloneElement(origin, {
      style: [style, origin.props.style],
    });
  };
};
