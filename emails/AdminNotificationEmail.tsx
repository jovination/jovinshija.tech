// emails/AdminNotificationEmail.tsx
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
  Hr,
} from "@react-email/components";

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const AdminNotificationEmail: React.FC<AdminNotificationEmailProps> = ({
  name,
  email,
  message,
}) => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.headerSection}>
            <Heading style={styles.heading}>Contact</Heading>
            <Text style={styles.subheading}>
              New form submission received on {currentDate} at {currentTime}
            </Text>
          </Section>
          
          <Section style={styles.formSection}>
            <Section style={styles.formField}>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.input}>{name}</Text>
            </Section>
            
            <Section style={styles.formField}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.input}>{email}</Text>
            </Section>
            
            <Section style={styles.formField}>
              <Text style={styles.label}>Message</Text>
              <Text style={styles.textarea}>{message}</Text>
            </Section>
          </Section>
          
          <Section style={styles.footerSection}>
            <Text style={styles.footerText}>Let's chat!</Text>
            <Text style={styles.phone}>+255 (747) 510-151</Text>
            <Text style={styles.email}>booking@jovinshija.tech</Text>
            <Text style={styles.copyright}>© Copyright 2025. All rights Reserved.</Text>
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
  formSection: {
    padding: "16px 24px",
  },
  formField: {
    marginBottom: "16px",
  },
  label: {
    color: "#8f8f8f",
    fontSize: "14px",
    margin: "0 0 4px 8px",
  },
  input: {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    fontSize: "16px",
    padding: "16px",
    borderRadius: "50px",
    margin: "0",
  },
  textarea: {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    fontSize: "16px",
    padding: "16px",
    borderRadius: "16px",
    minHeight: "120px",
    margin: "0",
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

export default AdminNotificationEmail;