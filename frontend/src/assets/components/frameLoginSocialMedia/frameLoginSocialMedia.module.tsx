import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";

const socialMediaIcons = [
  { icon: faGoogle },
  { icon: faFacebook },
  { icon: faApple },
  { icon: faTwitter }
];

export default function FrameLoginSocialMedia() {
  return (
    <div className="w-full h-24 p-6 flex gap-4">
      {socialMediaIcons.map((socialMedia, index) => (
        <div key={index} className="flex items-center justify-center rounded-full">
          <button
            style={{ borderColor: '#6A6A6A' }}
            className="w-20 h-12 flex justify-center items-center border-solid border rounded-lg">
            <FontAwesomeIcon icon={socialMedia.icon} className="w-4 h-6 font-normal size-4"/>
          </button>
        </div>
      ))}
    </div>
  );
}
