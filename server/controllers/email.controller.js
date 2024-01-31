const moment = require("moment");
const db = require("../models");
const nodemailer = require("nodemailer");
const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD } = require("../common");

const { email: Email } = db;

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE, // 메일 보내는 곳
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
  requireTLS: true,
  auth: {
    user: EMAIL_USER, // 보내는 메일의 주소
    pass: EMAIL_PASSWORD, // 보내는 메일의 비밀번호
  },
});
const customer = nodemailer.createTransport({
  service: EMAIL_SERVICE, // 메일 보내는 곳
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
  requireTLS: true,
  auth: {
    user: EMAIL_USER, // 보내는 메일의 주소
    pass: EMAIL_PASSWORD, // 보내는 메일의 비밀번호
  },
});

const doggienutsEmail = "chalgyu1029@gmail.com";

exports.postEmail = async (req, res) => {
  const {
    name,
    phone,
    email,
    company,
    selectItems,
    sample,
    country,
    products,
  } = req.body;
  const handleHtml = () => {
    if (email) {
      ("<p style='font-size : 18px; margin-bottom : 30px; color: #CACACA'>Email By <span style='font-weight : 600; margin-right: 10px;'>${ email }</span></p>");
    }
  };
  await transporter
    .sendMail({
      from: EMAIL_USER, // sender address
      to: doggienutsEmail, // list of receivers
      subject: "Doggienuts Product Inquiries", // Subject line
      html: `<div style='
                  width: 100%;
                  min-height: 1300px
              '>
                  <div style='
                          text-align: center;
                          width: 800px;
                          margin: 30px auto;
                          padding: 40px 80px;
                          border: 1px solid #EDEDED;
                          background: #FFF;
                          box-sizing: border-box;
                      '>
                      <h3 style='font-size : 26px; font-weight : 400; margin-bottom : 30px;'>Doggienuts 문의 내역</h3> 
                      <p style='font-size : 18px; margin-bottom : 30px;'>이메일 By <span style='font-weight : 600; margin-right: 10px;'>${email}</span></p>      
                      <p style='font-size : 18px;'>이름 : <span style='font-weight : 600; margin-right: 10px;'>${name}</span></p>
                      <p style='font-size : 18px;'>핸드폰 : <span style='font-weight : 600; margin-right: 10px;'>${phone}</span></p>
                      <p style='font-size : 18px;'>회사 : <span style='font-weight : 600; margin-right: 10px;'>${company}</span></p> 
                      <p style='font-size : 18px;'>국가 : <span style='font-weight : 600; margin-right: 10px;'>${country}</span></p> 
                      <p style='font-size : 18px;'>선택 품목 : <span style='font-weight : 600; margin-right: 10px;'>${JSON.parse(
                        selectItems
                      )}</span></p>
                      <p style='font-size : 18px;'>샘플 품목 : <span style='font-weight : 600; margin-right: 10px;'>${JSON.parse(
                        sample
                      )}</span></p>
                      <p style='font-size : 18px;'>문의내용 : <span style='font-weight : 600; margin-right: 10px;'>${products}</span></p>
                  </div>
              </div>`,
    })
    .then((response) => {
      console.log("Email sent: " + response.response);
      res.status(200).json({ message: "Success" });
    })
    .catch((error) => console.log(error))
    .then(
      await customer.sendMail({
        from: EMAIL_USER, // sender address
        to: email, // list of receivers
        subject: "Doggienuts Product Inquiries", // Subject line
        html: `<div style='
                  width: 100%;
                  min-height: 1300px
              '>
                  <div style='
                          text-align: center;
                          width: 800px;
                          margin: 30px auto;
                          padding: 40px 80px;
                          border: 1px solid #EDEDED;
                          background: #FFF;
                          box-sizing: border-box;
                      '>
                      <h3 style='font-size : 26px; font-weight : 400; margin-bottom : 30px;'>Doggienuts Product Inquiries</h3> 
                      <p style='font-size : 18px; margin-bottom : 30px;'>Email By  <span style='font-weight : 600; margin-right: 10px;'>${email}</span></p>      
                      <p style='font-size : 18px;'>Name : <span style='font-weight : 600; margin-right: 10px;'>${name}</span></p>
                      <p style='font-size : 18px;'>Phone : <span style='font-weight : 600; margin-right: 10px;'>${phone}</span></p>
                      <p style='font-size : 18px;'>Company : <span style='font-weight : 600; margin-right: 10px;'>${company}</span></p> 
                      <p style='font-size : 18px;'>Country : <span style='font-weight : 600; margin-right: 10px;'>${country}</span></p> 
                      <p style='font-size : 18px;'>Products of interest : <span style='font-weight : 600; margin-right: 10px;'>${JSON.parse(
                        selectItems
                      )}</span></p>
                      <p style='font-size : 18px;'>Sample of interest : <span style='font-weight : 600; margin-right: 10px;'>${JSON.parse(
                        sample
                      )}</span></p>
                      <p style='font-size : 18px;'>Text Area : <span style='font-weight : 600; margin-right: 10px;'>${products}</span></p>
                  </div>
              </div>`,
      })
    )
    .catch((error) => console.log(error));
};
