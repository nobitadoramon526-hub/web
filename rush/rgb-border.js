/**
 * Random RGB Border Color Animation
 * Automatically changes border colors to random RGB values
 */

function generateRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function updateRandomBorders() {
    // Update all rgb-border elements
    const rgbBorders = document.querySelectorAll('.rgb-border');
    rgbBorders.forEach(element => {
        element.style.borderColor = generateRandomRGB();
    });

    // Update all rgb-border-small elements
    const rgbBordersSmall = document.querySelectorAll('.rgb-border-small');
    rgbBordersSmall.forEach(element => {
        element.style.borderColor = generateRandomRGB();
    });

    // Update all rgb-border-medium elements
    const rgbBordersMedium = document.querySelectorAll('.rgb-border-medium');
    rgbBordersMedium.forEach(element => {
        element.style.borderColor = generateRandomRGB();
    });

    // Update all rgb-border-large elements
    const rgbBordersLarge = document.querySelectorAll('.rgb-border-large');
    rgbBordersLarge.forEach(element => {
        element.style.borderColor = generateRandomRGB();
    });

    // Update directional borders
    const rgbBorderTop = document.querySelectorAll('.rgb-border-top');
    rgbBorderTop.forEach(element => {
        element.style.borderTopColor = generateRandomRGB();
    });

    const rgbBorderBottom = document.querySelectorAll('.rgb-border-bottom');
    rgbBorderBottom.forEach(element => {
        element.style.borderBottomColor = generateRandomRGB();
    });

    const rgbBorderLeft = document.querySelectorAll('.rgb-border-left');
    rgbBorderLeft.forEach(element => {
        element.style.borderLeftColor = generateRandomRGB();
    });

    const rgbBorderRight = document.querySelectorAll('.rgb-border-right');
    rgbBorderRight.forEach(element => {
        element.style.borderRightColor = generateRandomRGB();
    });

    // Update glow effects
    const rgbGlow = document.querySelectorAll('.rgb-border-glow');
    rgbGlow.forEach(element => {
        const color = generateRandomRGB();
        element.style.borderColor = color;
        element.style.boxShadow = `0 0 12px ${color}`;
    });

    // Update pulse effects
    const rgbPulse = document.querySelectorAll('.rgb-border-pulse');
    rgbPulse.forEach(element => {
        element.style.borderColor = generateRandomRGB();
    });
}

// Initialize - run updates every 1 second
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        updateRandomBorders(); // Initial update
        setInterval(updateRandomBorders, 1000); // Update every 1 second
    });
} else {
    updateRandomBorders(); // Initial update
    setInterval(updateRandomBorders, 1000); // Update every 1 second
}
