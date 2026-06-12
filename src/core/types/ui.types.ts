
/**
 * UI Level represents the importance of a UI element, such as a button or a card. 
 * It can be used to indicate the primary action, optional actions, or critical actions.
 */
export interface UILevel {
   level:'primary' | 'optional' | 'critical';
}

/**
 * UISize represents the size of a UI element, such as a button or a card.
 */
export interface UISize {
   size:'small' | 'medium' | 'large';
}

/**
 * UIActionnable represents an actionable UI element, such as a button or a card.
 */
export interface UIActionnable {
   action:()=>any;
}

/**
 * UIAccent represents the accent of a UI element, such as a button or a card.
 * It can be used to indicate the primary, secondary, or tertiary accent of the element.
 */
export interface UIAccent {
   accent: 'primary' | 'secondary' | 'tertiary';
}