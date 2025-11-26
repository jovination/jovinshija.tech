import { NextResponse } from "next/server";
import { Resend } from "resend";
import { UserConfirmationEmail } from "@/emails/UserConfirmationEmail";
import { AdminNotificationEmail } from "@/emails/AdminNotificationEmail";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set in environment variables');
    return false;
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    
    const data = await response.json();
    console.log('reCAPTCHA verification response:', data);
    
    // For reCAPTCHA v2, we only need to check data.success
    // For v3, you might want to check the score as well
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, message, recaptchaToken } = await request.json();

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA token is missing" },
        { status: 400 }
      );
    }

    if (process.env.NODE_ENV === 'development' && recaptchaToken === 'dev-skip-recaptcha') {
      console.log('Skipping reCAPTCHA verification in development mode');
    } else {
      const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
      if (!isRecaptchaValid) {
        console.error('reCAPTCHA verification failed for token:', recaptchaToken);
        return NextResponse.json(
          { error: "reCAPTCHA verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // Send confirmation email to the user
    const userEmailResult = await resend.emails.send({
      from: "Jovin Shija <developer@jovinshija.tech>",
      to: email,
      subject: "Thank you for your message!",
      react: await UserConfirmationEmail({ name }),
    });

    if (userEmailResult.error) {
      console.error("Error sending user confirmation email:", userEmailResult.error);
      return NextResponse.json(
        { error: "Failed to send confirmation email" },
        { status: 500 }
      );
    }

    // Send notification email to the admin
    const adminEmailResult = await resend.emails.send({
      from: "Website Contact Form <developer@jovinshija.tech>",
      to: "booking@jovinshija.tech",
      subject: "New Contact Form Submission",
      react: await AdminNotificationEmail({ name, email, message }),
    });

    if (adminEmailResult.error) {
      console.error("Error sending admin notification email:", adminEmailResult.error);
      return NextResponse.json(
        { error: "Failed to notify administrator" },
        { status: 500 }
      );
    }

    // Return a success response
    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}