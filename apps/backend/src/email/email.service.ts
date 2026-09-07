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
    from: `"Employee Management System" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to Employee Management System",

    html: `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Employee Management System</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #f4f7fb;
  font-family: Arial, Helvetica, sans-serif;
">

  <div style="
    max-width: 620px;
    margin: 40px auto;
    background-color: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  ">

    <!-- Header -->
    <div style="
      background: linear-gradient(135deg, #2563eb, #4f46e5);
      padding: 40px 30px;
      text-align: center;
      color: white;
    ">

      <div style="
        width: 60px;
        height: 60px;
        margin: 0 auto 15px;
        background-color: rgba(255,255,255,0.18);
        border-radius: 50%;
        line-height: 60px;
        font-size: 30px;
      ">
        👋
      </div>

      <h1 style="
        margin: 0;
        font-size: 28px;
      ">
        Welcome Aboard!
      </h1>

      <p style="
        margin: 10px 0 0;
        font-size: 15px;
      ">
        Employee Management System
      </p>

    </div>


    <!-- Main Content -->
    <div style="padding: 40px 35px;">

      <h2 style="
        margin: 0 0 15px;
        color: #111827;
        font-size: 23px;
      ">
        Hello ${firstName} ${lastName}! 👋
      </h2>

      <p style="
        color: #4b5563;
        font-size: 15px;
        line-height: 1.7;
      ">
        We're happy to let you know that your employee account
        has been successfully created.
      </p>

      <p style="
        color: #4b5563;
        font-size: 15px;
        line-height: 1.7;
      ">
        Welcome to the team! You can now access the Employee
        Management System and use the features available for your role.
      </p>


      <!-- Account Details -->
      <div style="
        background-color: #f8fafc;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 22px;
        margin-top: 25px;
      ">

        <h3 style="
          margin: 0 0 18px;
          color: #111827;
          font-size: 17px;
        ">
          Account Details
        </h3>


        <!-- Email -->
        <div style="margin-bottom: 16px;">

          <span style="
            color: #6b7280;
            font-size: 13px;
          ">
            EMAIL
          </span>

          <div style="
            margin-top: 5px;
            color: #111827;
            font-size: 15px;
          ">
            ${email}
          </div>

        </div>


        <!-- Role -->
        <div>

          <span style="
            color: #6b7280;
            font-size: 13px;
          ">
            ROLE
          </span>

          <div style="margin-top: 7px;">

            <span style="
              display: inline-block;
              background-color: #dbeafe;
              color: #1d4ed8;
              padding: 6px 12px;
              border-radius: 20px;
              font-size: 13px;
              font-weight: 600;
            ">
              ${role}
            </span>

          </div>

        </div>

      </div>


      <!-- Support -->
      <p style="
        color: #6b7280;
        font-size: 14px;
        line-height: 1.6;
        text-align: center;
        margin-top: 30px;
      ">
        If you have any questions or need assistance,
        please contact your administrator.
      </p>

      <p style="
        color: #374151;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
        margin-top: 25px;
      ">
        We're glad to have you with us! 🎉
      </p>

    </div>


    <!-- Footer -->
    <div style="
      background-color: #f9fafb;
      border-top: 1px solid #e5e7eb;
      padding: 22px 30px;
      text-align: center;
    ">

      <p style="
        margin: 0;
        color: #6b7280;
        font-size: 12px;
      ">
        © ${new Date().getFullYear()} Employee Management System
      </p>

      <p style="
        margin: 7px 0 0;
        color: #9ca3af;
        font-size: 11px;
      ">
        This is an automated email. Please do not reply to this message.
      </p>

    </div>

  </div>

</body>

</html>

    `,
  });

  console.log("Welcome email sent to:", email);
};
