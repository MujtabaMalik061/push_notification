import LegalPage from "./LegalPage";
const sections = [
  [
    "service",
    "Using the service",
    [
      "These terms describe the use of Dev Push Notification, including its dashboard, API, SDK integration, rewards, and credit features. By using the service, you agree to these terms and should review our Privacy Policy.",
      "The platform provides tools to request push notification delivery through a messaging provider. You are responsible for configuring your application and Firebase project correctly.",
    ],
  ],
  [
    "account",
    "Accounts and API keys",
    [
      "Provide accurate account information and keep your sign-in credentials, API keys, and Firebase configuration secure. You are responsible for activity performed through your account and keys. Revoke keys you no longer need and contact support if you suspect unauthorized access.",
    ],
  ],
  [
    "acceptable-use",
    "Responsible messaging",
    [
      "Send notifications only to users whose permission you have obtained. Respect permission changes and the rules of the platforms and messaging providers you use.",
      "Do not use the service for spam, deceptive messages, unlawful content, harassment, or unauthorized access. Do not attempt to bypass credit checks, misuse rewards, or interfere with the platform. You are responsible for your notification content and its compliance with applicable requirements.",
    ],
  ],
  [
    "credits",
    "Credits, rewards, and payments",
    [
      "Basic accounts consume credits for supported API actions, including device token generation and notification requests. Sending to multiple device tokens can consume multiple credits. Review your account balance, API responses, and current purchase options before use.",
      "Rewards are subject to eligibility and claim limits shown in the dashboard. Purchase details and prices are displayed at checkout. Contact support about billing errors or refund requests; any applicable purchase conditions and legal rights remain relevant.",
    ],
  ],
  [
    "delivery",
    "Availability and delivery",
    [
      "Notification delivery depends on valid tokens, user permissions, device connectivity, Firebase, and other external services. A successful API request does not guarantee that a person will see a notification. Review individual delivery results and handle failures in your application.",
      "The service may experience interruptions or change over time. Do not rely on push notifications as the sole channel for emergency or time-critical communications.",
    ],
  ],
  [
    "access",
    "Access restrictions",
    [
      "Account access may be restricted for misuse, security concerns, or violations of these terms. If you believe your access has been restricted in error, contact support with your account details and relevant context.",
    ],
  ],
  [
    "ownership",
    "Your content and applications",
    [
      "You remain responsible for the applications and content you connect to Dev Push. You must have the rights and permissions needed to submit notification content and device information. Use of the service does not transfer ownership of your application or messages.",
    ],
  ],
  [
    "questions",
    "Changes and questions",
    [
      "Review this page periodically for updates as the platform evolves. Contact support if you have questions about the service, your account, or these terms.",
    ],
  ],
];
export default function LandingTerms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="A shared understanding of how to use Dev Push responsibly, manage your account, and work with credits."
      summary="Keep your account secure, send messages with permission, and monitor your credit usage. Delivery relies on your configuration and external providers. Contact us for account or billing questions."
      sections={sections}
      relatedPath="/privacy"
      relatedLabel="Privacy Policy"
    />
  );
}
