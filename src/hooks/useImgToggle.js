import { useState } from 'react';

export const useImageToggle = (
  initialImage,
  toggledImage,
  initialColor,
  toggledColor
) => {
  const [image, setImage] = useState(initialImage);
  const [color, setColor] = useState(initialColor);

  const toggleImageAndColor = () => {
    setImage((prevImage) =>
      prevImage === initialImage ? toggledImage : initialImage
    );
    setColor((prevColor) =>
      prevColor === initialColor ? toggledColor : initialColor
    );
  };

  const resetImageAndColor = () => {
    setImage(initialImage);
    setColor(initialColor);
  };

  return [image, color, toggleImageAndColor, resetImageAndColor];
};

// export default useImageToggle;
