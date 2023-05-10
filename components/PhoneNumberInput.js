import React, { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Images } from "../components/images";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="tw-relative tw-mt-3">
      <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-6">
        <Image src={Images.phoneJoin} alt={"phone-join"} />
      </div>
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
};

export default PhoneNumberInput;
