import Image from 'next/image';

export const ProfilePic = () => (
    <Image 
        src="/images/chilling.png"
        height={144}
        width={144}
        alt="it's me!"
    />
);