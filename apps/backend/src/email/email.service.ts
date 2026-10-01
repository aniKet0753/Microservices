import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASSWORD!,
  },
});

export const sendUserDetails = async ({
  firstName,
  lastName,
  email,
  role,
}: {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}) => {
  console.log(" Attempting to send email to:", email);

  await transporter.sendMail({
    from: `"XYZ comapny" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Welcome to the company ${firstName} ${lastName}`,

    html: `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Employee Account Created</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  color: #333333;
">

  <div style="
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
  ">

    <p style="font-size: 16px;">
      Hi ${firstName},
    </p>

    <p style="
      font-size: 15px;
      line-height: 1.6;
    ">
      Your employee account has been successfully created.
      Here are your account details:
    </p>

    <p style="
      font-size: 15px;
      line-height: 1.6;
    ">
      <strong>First Name:</strong> ${firstName}<br />
      <strong>Last Name:</strong> ${lastName}<br />
      <strong>Email:</strong> ${email}<br />
      <strong>Role:</strong> ${role}
    </p>

    <p style="
      font-size: 15px;
      line-height: 1.6;
    ">
      You can now use your account to access the Employee
      Management System.
    </p>

    <p style="
      font-size: 15px;
      line-height: 1.6;
    ">
      If you have any questions or need assistance, please
      contact your administrator.
    </p>

    <p style="
      font-size: 15px;
      margin-top: 30px;
    ">
      Regards,<br />
      <strong>Employee Management System</strong>
    </p>

    <hr style="
      border: none;
      border-top: 1px solid #eeeeee;
      margin-top: 30px;
    " />

    <p style="
      font-size: 12px;
      color: #888888;
    ">
      This is an automated email. Please do not reply to this message.
    </p>

  </div>

</body>

</html>
    `,
  });

  console.log("Welcome email sent to:", email);
};
