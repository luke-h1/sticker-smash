import { View, Image, ImageProps, ImageSourcePropType } from "react-native";

interface Props {
  imageSize: number;
  stickerSource: ImageSourcePropType;
}

const EmojiSticker = ({ imageSize, stickerSource }: Props) => {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
    </View>
  );
};

export default EmojiSticker;
