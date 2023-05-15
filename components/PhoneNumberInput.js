import { useState, useEffect } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = ({ onPhoneChange }) => {
  const [phone, setPhone] = useState("");
  const [value, setValue]= useState('')
  

  useEffect(() => {

    let timer = setTimeout(() => setValue('1'), 100)
    let timer2 = setTimeout(() => setValue(''), 200)
    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [])


  const handlePhoneChange = (phone) => {
    setPhone(phone);
    onPhoneChange(phone);
  };

  return (
    <div className="tw-relative tw-mt-4 tw-flex tw-space-x-2">
      <PhoneInput
        country={"ke"}
        placeholder={"How can we reach out to you?"}
        value={phone}
        onChange={handlePhoneChange}
        inputProps={{
          name: 'phone',
          required: true,
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;
