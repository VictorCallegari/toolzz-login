import Image from 'next/image';

const ImagemBanner: React.FC = () => {
  return (
    <div>
      <Image src="/Banner.jpg" alt="Banner" width={1228} height={1080} />
    </div>
  );
};

export default ImagemBanner;
