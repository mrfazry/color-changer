export const COLOR_COMPONENT_RANDOMIZE = 'COLOR_COMPONENT_RANDOMIZE';
export const COLOR_COMPONENT_CHANGE = 'COLOR_COMPONENT_CHANGE';

export function randomizeColorComponent(value, colorComponent) {
  return {
    type: COLOR_COMPONENT_RANDOMIZE,
    value,
    colorComponent
  };
}

export function changeColorComponent(colorComponent, value) {
  return {
    type: COLOR_COMPONENT_CHANGE,
    value,
    colorComponent
  };
}