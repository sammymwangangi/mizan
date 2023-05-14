import { useState, useEffect } from 'react';
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Images } from "../components/images";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");
  const [value, setValue]= useState('')
  // ...

  useEffect(() => {
    // tricky way of set as empty the phoneInput with a country code selected

    let timer = setTimeout(() => setValue('1'), 100)  // or whatever state you have, Formik, RHF...
    let timer2 = setTimeout(() => setValue(''), 200)
    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="tw-relative tw-mt-4 tw-flex tw-space-x-2">
      <PhoneInput
        country={"ke"}
        placeholder={"How can we reach out to you?"}
        value={phone}
        onChange={(phone) => setPhone(phone)}
        inputProps={{
          name: 'phone',
          required: true,
          specialLabel: 'sdqwsqw'
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;
