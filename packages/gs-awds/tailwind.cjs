const { fontFamily } = require("tailwindcss/defaultTheme");

const colors = {
  gray: {
    50: "hsla(var(--awds-color-gray-50))",
    100: "hsla(var(--awds-color-gray-100))",
    200: "hsla(var(--awds-color-gray-200))",
    300: "hsla(var(--awds-color-gray-300))",
    400: "hsla(var(--awds-color-gray-400))",
    500: "hsla(var(--awds-color-gray-500))",
    600: "hsla(var(--awds-color-gray-600))",
    700: "hsla(var(--awds-color-gray-700))",
    800: "hsla(var(--awds-color-gray-800))",
    900: "hsla(var(--awds-color-gray-900))",
    950: "hsla(var(--awds-color-gray-950))",
  },
  content: {
    primary: "hsla(var(--awds-color-content-primary))",
    secondary: "hsla(var(--awds-color-content-secondary))",
    tertiary: "hsla(var(--awds-color-content-tertiary))",
    disabled: "hsla(var(--awds-color-content-disabled))",
    basic: "hsla(var(--awds-color-content-basic))",
    label: "hsla(var(--awds-color-content-label))",
  },
  primary: {
    DEFAULT: "hsl(var(--awds-color-brand-primary))",
    foreground: "hsl(var(--awds-color-content-basic))",
  },
  secondary: {
    DEFAULT: "hsl(var(--awds-color-background-secondary))",
    foreground: "hsl(var(--awds-color-content-secondary))",
  },
  destructive: {
    DEFAULT: "hsl(var(--awds-color-semantic-negative))",
    foreground: "hsl(var(--awds-color-content-basic))",
  },
  muted: {
    DEFAULT: "hsl(var(--awds-color-background-tertiary))",
    foreground: "hsl(var(--awds-color-content-tertiary))",
  },
  accent: {
    DEFAULT: "hsl(var(--awds-color-background-tertiary))",
    foreground: "hsl(var(--awds-color-content-primary))",
  },
  popover: {
    DEFAULT: "hsl(var(--awds-color-background-primary))",
    foreground: "hsl(var(--awds-color-content-secondary))",
  },
  card: {
    DEFAULT: "hsl(var(--awds-color-background-primary))",
    foreground: "hsl(var(--awds-color-content-secondary))",
  },
  background: {
    DEFAULT: "hsl(var(--awds-color-background-primary))",
    primary: "hsla(var(--awds-color-background-primary))",
    secondary: "hsla(var(--awds-color-background-secondary))",
    tertiary: "hsla(var(--awds-color-background-tertiary))",
    form: "hsla(var(--awds-color-background-form))",
  },
  foreground: "hsl(var(--awds-color-content-secondary))",
  border: {
    DEFAULT: "hsla(var(--awds-color-border-secondary))",
    primary: "hsla(var(--awds-color-border-primary))",
    secondary: "hsla(var(--awds-color-border-secondary))",
    tertiary: "hsla(var(--awds-color-border-tertiary))",
  },
  input: "hsl(var(--awds-color-border-secondary))",
  brand: {
    primary: "hsla(var(--awds-color-brand-primary))",
    "primary-hovered": "hsla(var(--awds-color-brand-primary-hovered))",
    "primary-pressed": "hsla(var(--awds-color-brand-primary-pressed))",
    "primary-soft": "hsla(var(--awds-color-brand-primary-soft))",
    "primary-soft-hovered":
      "hsla(var(--awds-color-brand-primary-soft-hovered))",
    "primary-soft-pressed":
      "hsla(var(--awds-color-brand-primary-soft-pressed))",
    dimo: "hsla(var(--awds-color-brand-dimo))",
    "dimo-hovered": "hsla(var(--awds-color-brand-dimo-hovered))",
    "dimo-pressed": "hsla(var(--awds-color-brand-dimo-pressed))",
    "dimo-soft": "hsla(var(--awds-color-brand-dimo-soft))",
    "dimo-soft-hovered": "hsla(var(--awds-color-brand-dimo-soft-hovered))",
    "dimo-soft-pressed": "hsla(var(--awds-color-brand-dimo-soft-pressed))",
    coni: "hsla(var(--awds-color-brand-coni))",
    "coni-hovered": "hsla(var(--awds-color-brand-coni-hovered))",
    "coni-pressed": "hsla(var(--awds-color-brand-coni-pressed))",
    "coni-soft": "hsla(var(--awds-color-brand-coni-soft))",
    "coni-soft-hovered": "hsla(var(--awds-color-brand-coni-soft-hovered))",
    "coni-soft-pressed": "hsla(var(--awds-color-brand-coni-soft-pressed))",
    voci: "hsla(var(--awds-color-brand-voci))",
    "voci-hovered": "hsla(var(--awds-color-brand-voci-hovered))",
    "voci-pressed": "hsla(var(--awds-color-brand-voci-pressed))",
    "voci-soft": "hsla(var(--awds-color-brand-voci-soft))",
    "voci-soft-hovered": "hsla(var(--awds-color-brand-voci-soft-hovered))",
    "voci-soft-pressed": "hsla(var(--awds-color-brand-voci-soft-pressed))",
  },
  data: {
    red: "hsla(var(--awds-color-data-red))",
    yellow: "hsla(var(--awds-color-data-yellow))",
    green: "hsla(var(--awds-color-data-green))",
    cyan: "hsla(var(--awds-color-data-cyan))",
    purple: "hsla(var(--awds-color-data-purple))",
    gold: "hsla(var(--awds-color-data-gold))",
    pink: "hsla(var(--awds-color-data-pink))",
    mint: "hsla(var(--awds-color-data-mint))",
  },
  semantic: {
    information: "hsla(var(--awds-color-semantic-information))",
    notice: "hsla(var(--awds-color-semantic-notice))",
    positive: "hsla(var(--awds-color-semantic-positive))",
    negative: "hsla(var(--awds-color-semantic-negative))",
  },
  gsshop: {
    leafgreen: "hsla(var(--awds-color-gsshop-leafgreen))",
    sunsetpink: "hsla(var(--awds-color-gsshop-sunsetpink))",
    aquablue: "hsla(var(--awds-color-gsshop-aquablue))",
    earthbrown: "hsla(var(--awds-color-gsshop-earthbrown))",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        "3xl": "1860px",
      },
      fontFamily: {
        sans: [
          "var(--awds-font-sans)",
          "var(--awds-font-sans-alt)",
          ...fontFamily.sans,
        ],
      },
      margin: {
        1.5: "1.5px",
      },
      outlineWidth: {
        3: "3px",
      },
      fontSize: {
        display1: [
          "var(--awds-font-size-32)",
          {
            lineHeight: "var(--awds-line-height-36)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-extra-bold)",
          },
        ],
        display2: [
          "var(--awds-font-size-28)",
          {
            lineHeight: "var(--awds-line-height-32)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-bold)",
          },
        ],
        display3: [
          "var(--awds-font-size-24)",
          {
            lineHeight: "var(--awds-line-height-32)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-bold)",
          },
        ],
        display4: [
          "var(--awds-font-size-24)",
          {
            lineHeight: "var(--awds-line-height-32)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-regular)",
          },
        ],
        headline1: [
          "var(--awds-font-size-20)",
          {
            lineHeight: "var(--awds-line-height-28)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-bold)",
          },
        ],
        headline2: [
          "var(--awds-font-size-18)",
          {
            lineHeight: "var(--awds-line-height-24)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-bold)",
          },
        ],
        label1: [
          "var(--awds-font-size-16)",
          {
            lineHeight: "var(--awds-line-height-24)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-bold)",
          },
        ],
        label2: [
          "var(--awds-font-size-14)",
          {
            lineHeight: "var(--awds-line-height-20)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-bold)",
          },
        ],
        label3: [
          "var(--awds-font-size-13)",
          {
            lineHeight: "var(--awds-line-height-20)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-bold)",
          },
        ],
        label4: [
          "var(--awds-font-size-12)",
          {
            lineHeight: "var(--awds-line-height-18)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-semibold)",
          },
        ],
        body1: [
          "var(--awds-font-size-20)",
          {
            lineHeight: "var(--awds-line-height-28)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-regular)",
          },
        ],
        body2: [
          "var(--awds-font-size-16)",
          {
            lineHeight: "var(--awds-line-height-24)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-regular)",
          },
        ],
        body3: [
          "var(--awds-font-size-14)",
          {
            lineHeight: "var(--awds-line-height-20)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-regular)",
          },
        ],
        body4: [
          "var(--awds-font-size-13)",
          {
            lineHeight: "var(--awds-line-height-20)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-regular)",
          },
        ],
        body5: [
          "var(--awds-font-size-12)",
          {
            lineHeight: "var(--awds-line-height-18)",
            letterSpacing: "var(--awds-letter-spacing--1)",
            fontWeight: "var(--awds-font-weight-regular)",
          },
        ],
        body6: [
          "var(--awds-font-size-11)",
          {
            lineHeight: "var(--awds-line-height-16)",
            letterSpacing: "var(--awds-letter-spacing-0)",
            fontWeight: "var(--awds-font-weight-regular)",
          },
        ],
      },
      borderWidth: {
        1: "1.5px",
      },
      boxShadow: {
        custom: "var(--awds-shadow-default)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
