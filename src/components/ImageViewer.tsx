import { useMemo } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

interface Props {
  source: ImageSourcePropType;
  selectedImage?: string;
}

const ImageViewer = ({ source, selectedImage }: Props) => {
  const imageSource = useMemo(() => {
    return selectedImage ? { uri: selectedImage } : source;
  }, [selectedImage, source]);

  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
