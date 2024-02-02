import { useState } from "react";
import "./Contact.css";
import { postEmailZhCht } from "../../service/emailService";

const ContactZhCht = ({ setSending }) => {
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

  const sendBtn1 = async () => {
    if (!Name || !Email) {
      return alert("請確認是否輸入了所有必需項目。");
    }
    if (Email.match(emailRegEx) === null) {
      return alert("請確認是否正確輸入了電子郵件。");
    }
    setSending(true);
    await postEmailZhCht({
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
        alert("感謝您的諮詢。 我們會盡快與您聯係。");
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
  const items = ["甜甜圈", "脆片", "燉菜", "Omega 3"];
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (selectItems.includes(value)) {
      setSelectItems(selectItems.filter((item) => item !== value));
    } else {
      setSelectItems([...selectItems, value]);
    }
  };
  const sampleItems = ["甜甜圈", "脆片", "燉菜", "Omega 3"];
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
        <h3>聯係</h3>
        <div>如果您有任何建議或問題,</div>
        <div>請聯係我們。</div>
        <div>我們期待您的來信。</div>
      </div>
      <div className="ContactWrap">
        <div className="ContactDivision">
          <div className="ContactInputSubWrap">
            <div>
              <h3 className="ContactInputTitle">
                姓名 <span className="Red">*</span>
              </h3>
              <input
                id="Name"
                className="ContactInputDivision"
                name="Name"
                type="text"
                placeholder="姓名"
                onChange={handleInput}
                value={Name}
              />
            </div>
            <div>
              <h3 className="ContactInputTitle">電話號碼</h3>
              <input
                className="ContactInputDivision"
                name="Phone"
                type="text"
                placeholder="電話號碼"
                onChange={handleInput}
                value={Phone}
              />
            </div>
          </div>
          <div className="ContactInputWrap">
            <h3 className="ContactInputTitle">
              電子郵箱 <span className="Red">*</span>
            </h3>
            <input
              className="ContactInput"
              type="text"
              name="Email"
              placeholder="電子郵箱"
              onChange={handleInput}
              value={Email}
            />
          </div>
          <div className="ContactInputWrap">
            <h3 className="ContactInputTitle">公司</h3>
            <input
              className="ContactInput"
              type="text"
              name="Company"
              placeholder="公司"
              onChange={handleInput}
              value={Company}
            />
          </div>
          <div className="ContactInputWrap">
            <h3 className="ContactInputTitle">國家</h3>
            <input
              className="ContactInput"
              type="text"
              name="Country"
              placeholder="國家"
              onChange={handleInput}
              value={Country}
            />
          </div>
        </div>

        <div className="ContactDivision">
          <h3 className="ContactInputTitle">感興趣的產品(多個)</h3>
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
          <h3 className="ContactInputTitle">感興趣的樣品(多個)</h3>
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
            <h3 className="ContactInputTitle">咨詢內容</h3>
            <textarea
              className="ContactTextArea"
              name="TextArea"
              id=""
              cols="30"
              rows="10"
              placeholder="申請樣品時:
- 每個樣品至少購買1箱
- 運費另算
- 提供批發價 "
              onChange={handleInput}
              value={TextArea}
            ></textarea>
          </div>
          <button className="SendBtn" onClick={sendBtn1}>
            發送
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactZhCht;
