import React from "react";
// import {
//   Card,
//   Avatar,
//   Row,
//   Col,
//   Text,
//   Button,
//   Spacer,
//   Grid,
// } from "@nextui-org/react";
import Image from "next/image";
import { Images } from "../components/images";

export const UserTwitterCard = ({
  avatarUrl,
  avatarProps,
  css,
  onClick,
  ...props
}) => {
  const [following, setFollowing] = React.useState(false);

  return (
    <div className="tw-card tw-w-96 tw-bg-white">
      <figure>
        <img
          src="/images/homepage/hover/time.png"
          alt="Shoes"
        />
      </figure>
      <div className="tw-card-body">
        <div className="tw-flex tw-flex-col tw-list-image-[url(/images/homepage/hover/check.png)]">
          <div className="tw-flex tw-text-[10px]">
            <Image
              src={Images.bankCheck}
              className="banking-web-img"
              alt=""
            />
            <div>Open your account in 3 minutes</div>
          </div>
          <div className="tw-text-[10px]">No hidden fees & tricks (ever)</div>
          <div className="tw-text-[10px]">Your new BFF (Best Financial Friend)</div>
        </div>
      </div>
    </div>
  );
};
