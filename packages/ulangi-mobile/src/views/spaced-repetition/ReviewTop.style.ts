/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { TextStyle, ViewStyle } from 'react-native';

import { config } from '../../constants/config';
import { ResponsiveStyleSheet, ScaleByFactor } from '../../utils/responsive';

export interface ReviewTopStyles {
  container: ViewStyle;
  number_container: ViewStyle;
  number: TextStyle;
  note_container: ViewStyle;
  note: TextStyle;
}

export class ReviewTopResponsiveStyles extends ResponsiveStyleSheet<
  ReviewTopStyles
> {
  public baseStyles(scaleByFactor: ScaleByFactor): ReviewTopStyles {
    return {
      container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scaleByFactor(16),
        marginTop: scaleByFactor(20),
        marginBottom: scaleByFactor(20),
      },

      number_container: {
        height: scaleByFactor(24),
        paddingHorizontal: scaleByFactor(16),
        borderRadius: scaleByFactor(12),
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

      number: {
        fontSize: scaleByFactor(15),
        fontWeight: 'bold',
      },

      note_container: {
        marginTop: scaleByFactor(6),
      },

      note: {
        fontSize: scaleByFactor(14),
        textAlign: 'center',
      },
    };
  }

  public lightStyles(): Partial<ReviewTopStyles> {
    return {
      number_container: {
        borderColor: config.styles.light.secondaryTextColor,
      },

      number: {
        color: config.styles.light.secondaryTextColor,
      },

      note: {
        color: config.styles.light.secondaryTextColor,
      },
    };
  }

  public darkStyles(): Partial<ReviewTopStyles> {
    return {
      number_container: {
        borderColor: config.styles.dark.secondaryTextColor,
      },

      number: {
        color: config.styles.dark.secondaryTextColor,
      },

      note: {
        color: config.styles.dark.secondaryTextColor,
      },
    };
  }
}

export const reviewTopResponsiveStyles = new ReviewTopResponsiveStyles();
