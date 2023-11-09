import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('@assets/images/logo.png')}
      alt="소소하루"
      width={103}
      height={26}
    />
  );
};

export default Logo;
