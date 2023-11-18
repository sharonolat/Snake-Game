let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener('keydown', setInputDirection);
window.addEventListener('click', setInputDirectionForMobile)

// Define a variable for border radius
let borderRadiusStyle = {};

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

export function getBorderRadiusStyle() {
  return borderRadiusStyle;
}

function setInputDirection(e) {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };

      // Set border radius for top corners
      borderRadiusStyle = {
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      };

      break;

    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };

      // Set border radius for bottom corners
      borderRadiusStyle = {
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
      };

      break;

    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };

      // Set border radius for left corners
      borderRadiusStyle = {
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
      };

      break;

    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };

      // Set border radius for right corners
      borderRadiusStyle = {
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
      };

      break;
  }
}

function setInputDirectionForMobile(e) {
  switch (e.target.className) {
    case 'm-controller-2':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };

      // Set border radius for top corners
      borderRadiusStyle = {
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      };

      break;

    case 'm-controller-8':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };

      // Set border radius for bottom corners
      borderRadiusStyle = {
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
      };

      break;

    case 'm-controller-4':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };

      // Set border radius for left corners
      borderRadiusStyle = {
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
      };

      break;

    case 'm-controller-6':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };

      // Set border radius for right corners
      borderRadiusStyle = {
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
      };

      break;
  }
}
