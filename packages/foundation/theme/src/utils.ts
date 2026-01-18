import { tokens } from '@enterprise-ui/design-tokens';

function createCSSVariables() {
  const cssVars: string[] = [];
  const { colors, spacing, radius } = tokens;

  // Colors
  Object.entries(colors.primary).forEach(([key, value]) => {
    cssVars.push(`--color-primary-${key}: ${value};`);
  });
  // ... map other colors ...
  
  // For simplicity in this demo, we'll just set some core variables
  cssVars.push(`--color-primary: ${colors.primary[500]};`);
  cssVars.push(`--color-primary-hover: ${colors.primary[400]};`);
  cssVars.push(`--color-primary-active: ${colors.primary[600]};`);
  
  cssVars.push(`--color-error: ${colors.error.base};`);
  cssVars.push(`--color-warning: ${colors.warning.base};`);
  cssVars.push(`--color-success: ${colors.success.base};`);

  cssVars.push(`--radius-sm: ${radius.sm}px;`);
  cssVars.push(`--radius-md: ${radius.md}px;`);
  cssVars.push(`--radius-lg: ${radius.lg}px;`);

  return `:root { ${cssVars.join(' ')} }`;
}

export const injectThemeVariables = () => {
  if (typeof document === 'undefined') return;
  
  const styleId = 'enterprise-ui-theme-vars';
  if (document.getElementById(styleId)) return;

  const style = document.createElement('style');
  style.id = styleId;
  style.innerHTML = createCSSVariables();
  document.head.appendChild(style);
};
