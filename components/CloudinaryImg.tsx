"use client";
import { CldImage } from 'next-cloudinary';

export default function CloudinaryImg({ src }: { src: string }) {

    return (
        <CldImage
            className="overflow-hidden object-cover rounded-t-md"
            height="0"
            sizes="100vw"
            src={src}
            style={{ width: '100%', height: 'auto' }}
            width="0"
            alt="Description of my image"
        />
    )
}
