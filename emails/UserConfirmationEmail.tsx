// emails/UserConfirmationEmail.tsx
import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface UserConfirmationEmailProps {
  name: string;
}

export const UserConfirmationEmail: React.FC<UserConfirmationEmailProps> = ({
  name,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out! Your message has been received.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.headerSection}>
            <Heading style={styles.heading}>Contact</Heading>
            <Text style={styles.subheading}>
              Fill out the form, or reach out directly.
              I'll respond within 24 hours.
            </Text>
          </Section>
          
          <Section style={styles.messageSection}>
            <Text style={styles.message}>
              Hello {name},
              <br /><br />
              Thank you for your message. I've received your submission and will 
              get back to you as soon as possible, usually within 24 hours.
              <br /><br />
              In the meantime, feel free to check out my portfolio or connect with 
              me on social media.
            </Text>
            
            <Button style={styles.button} href="https://jovinshija.tech">
            Visit Portfolio
            </Button>
          </Section>
          
          <Section style={styles.footerSection}>
            <Text style={styles.footerText}>Let's chat!</Text>
            <Text style={styles.phone}>+255 (747) 510-151</Text>
            <Text style={styles.email}>booking@jovinshija.tech</Text>
            <Text style={styles.copyright}>© Copyright {currentYear}. All rights Reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: "#000000",
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "0",
  },
  container: {
    backgroundColor: "#121212",
    margin: "40px auto",
    maxWidth: "400px",
    borderRadius: "24px",
    overflow: "hidden",
    border: "1px solid #1a1a1a",
  },
  headerSection: {
    padding: "32px 24px 16px",
    textAlign: "center" as const,
  },
  heading: {
    color: "#ffffff",
    fontSize: "32px",
    fontWeight: "500",
    margin: "0 0 8px",
  },
  subheading: {
    color: "#8f8f8f",
    fontSize: "14px",
    fontWeight: "normal",
    margin: "0",
    lineHeight: "1.5",
  },
  messageSection: {
    padding: "16px 24px 24px",
    textAlign: "center" as const,
  },
  message: {
    color: "#ffffff",
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "0 0 24px",
    textAlign: "left" as const,
  },
  button: {
    backgroundColor: "#5046e5",
    borderRadius: "50px",
    color: "#ffffff",
    fontWeight: "500",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
  },
  footerSection: {
    padding: "24px",
    textAlign: "center" as const,
  },
  footerText: {
    color: "#8f8f8f",
    fontSize: "14px",
    margin: "0 0 4px",
  },
  phone: {
    color: "#ffffff",
    fontSize: "16px",
    margin: "0 0 2px",
    fontWeight: "500",
  },
  email: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0 0 16px",
  },
  copyright: {
    color: "#8f8f8f",
    fontSize: "12px",
    margin: "0",
  },
};

export default UserConfirmationEmail;