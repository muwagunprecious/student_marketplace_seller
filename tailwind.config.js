module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#0071CE", // blue-600
          50: "#EBF5FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#0071CE", // custom blue
          700: "#1D4ED8", // blue-700
          900: "#1E3A8A", // blue-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#F8F9FA", // gray-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
        },
        // Accent Colors
        accent: {
          DEFAULT: "#28A745", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
          600: "#28A745", // custom green
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          DEFAULT: "#F1F3F4", // gray-100
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
        },
        // Text Colors
        text: {
          primary: "#212529", // gray-800
          secondary: "#6C757D", // gray-500
          tertiary: "#9CA3AF", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#28A745", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
        },
        warning: {
          DEFAULT: "#FFC107", // yellow-400
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
        },
        error: {
          DEFAULT: "#DC3545", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
        },
        // Border Colors
        border: {
          DEFAULT: "#E9ECEF", // gray-200
          light: "#F3F4F6", // gray-100
          dark: "#D1D5DB", // gray-300
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'modal': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      scale: {
        '98': '0.98',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
}