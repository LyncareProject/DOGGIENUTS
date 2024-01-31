import { useState } from "react";
import "./Contact.css";
import { postEmail } from "../../service/emailService";

const Contact = ({ setSending }) => {
  const [inputs, setInputs] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Company: "",
    Country: "",
    TextArea: "",
  });
  const { Name, Phone, Email, Company, Country, TextArea } = inputs;
  const [selectItems, setSelectItems] = useState([]);
  const [sample, setSample] = useState([]);
  const handleInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const emailCheck = (Email) => {
    return emailRegEx.test(Email);
  };

  const sendBtn = async () => {
    if (!Name || !Email) {
      return alert(
        "Please ensure that all required fields are filled out accurately"
      );
    }
    if (Email.match(emailRegEx) === null) {
      return alert("Ensure that your email is entered correctly");
    }
    setSending(true);
    await postEmail({
      name: Name,
      phone: Phone,
      email: Email,
      company: Company,
      country: Country,
      products: TextArea,
      selectItems: JSON.stringify(selectItems),
      sample: JSON.stringify(sample),
    }).then((response) => {
      if (response.data.message === "Success") {
        alert(
          "Thank you for reaching out. We'll get in touch with you at the earliest opportunity."
        );
        setInputs({
          Name: "",
          Phone: "",
          Email: "",
          Company: "",
          Country: "",
          TextArea: "",
        });
      }
      setSending(false);
    });
  };
  const items = ["Donuts", "Chips", "Stew", "Omega"];
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectItems.includes(value)) {
      setSelectItems(selectItems.filter((item) => item !== value));
    } else {
      setSelectItems([...selectItems, value]);
    }
  };
  const sampleItems = ["Donuts", "Chips", "Stew", "Omega"];
  const sampleCheckboxChange = (event) => {
    const value = event.target.value;
    if (sample.includes(value)) {
      setSample(sample.filter((sampleItems) => sampleItems !== value));
    } else {
      setSample([...sample, value]);
    }
  };

  // useEffect(() => {
  //   console.log(selectItems); // 업데이트된 상태를 확인합니다
  // }, [selectItems]); // selectItems가 변경될 때만 실행됩니다

  return (
    <div className="Contact Wrap">
      <div className="ContactBanner">
        <h3>Contact</h3>
        <div>If you have any suggestions or any questions,</div>
        <div>please contact us.</div>
        <div>We are looking forward to hearing from you.</div>
      </div>
      <div className="ContactWrap">
        <div className="ContactDivision">
          <div className="ContactInputSubWrap">
            <div>
              <h3 className="ContactInputTitle">
                Name <span className="Red">*</span>
              </h3>
              <input
                id="Name"
                className="ContactInputDivision"
                name="Name"
                type="text"
                placeholder="Name"
                onChange={handleInput}
                value={Name}
              />
            </div>
            <div>
              <h3 className="ContactInputTitle">Phone</h3>
              <input
                className="ContactInputDivision"
                name="Phone"
                type="text"
                placeholder="Phone"
                onChange={handleInput}
                value={Phone}
              />
            </div>
          </div>
          <div className="ContactInputWrap">
            <h3 className="ContactInputTitle">
              Email <span className="Red">*</span>
            </h3>
            <input
              className="ContactInput"
              type="text"
              name="Email"
              placeholder="Email"
              onChange={handleInput}
              value={Email}
            />
          </div>
          <div className="ContactInputWrap">
            <h3 className="ContactInputTitle">Company</h3>
            <input
              className="ContactInput"
              type="text"
              name="Company"
              placeholder="Company"
              onChange={handleInput}
              value={Company}
            />
          </div>
          <div className="ContactInputWrap">
            <h3 className="ContactInputTitle">Country</h3>
            <input
              className="ContactInput"
              type="text"
              name="Country"
              placeholder="Country"
              onChange={handleInput}
              value={Country}
            />
          </div>
        </div>

        <div className="ContactDivision">
          <h3 className="ContactInputTitle">Product of Interest (Multiple)</h3>
          <div className="ContactSelectWrap">
            {items.map((item) => (
              <div className="CheckboxWrap">
                <input
                  type="checkbox"
                  value={item}
                  checked={selectItems.includes(item)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
          <h3 className="ContactInputTitle">Sample of Interest (Multiple)</h3>
          <div className="ContactSelectWrap">
            {sampleItems.map((sampleItems) => (
              <div className="CheckboxWrap">
                <input
                  type="checkbox"
                  value={sampleItems}
                  checked={sample.includes(sampleItems)}
                  onChange={sampleCheckboxChange}
                />
                <label htmlFor={sampleItems}>{sampleItems}</label>
              </div>
            ))}
          </div>
          <div className="ContactInputWrap">
            <h3 className="ContactInputTitle">Text Area</h3>
            <textarea
              className="ContactTextArea"
              name="TextArea"
              id=""
              cols="30"
              rows="10"
              placeholder="Sample Request
- Minimum of 1 box per sample
- a shipping fee
- Wholesale supply price "
              onChange={handleInput}
              value={TextArea}
            ></textarea>
          </div>
          <button className="SendBtn" onClick={sendBtn}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
