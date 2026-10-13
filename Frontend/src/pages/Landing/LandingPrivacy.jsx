import LegalPage from "./LegalPage";
const sections = [
  [
    "information",
    "Information we process",
    [
      "Dev Push Notification processes account information such as your name, email address, password credentials, profile image, account status, and credit balance. We also process API keys, Firebase configuration, and information you provide when contacting us.",
      "When you use notification features, we process message content and device tokens to request delivery. API activity records may include timestamps, action names, results, usage counts, notification details, and device token information.",
    ],
  ],
  [
    "purposes",
    "How information is used",
    [
      "We use this information to provide account access, authenticate API requests, send notifications, manage credits and rewards, record transactions, and display usage analytics. Support information helps us respond to questions and investigate problems.",
    ],
  ],
  [
    "providers",
    "Service providers",
    [
      "The platform uses external services for messaging, payments, and email. Firebase processes notification delivery requests, and Stripe handles payment processing. Information needed for these functions is passed to the relevant provider and is subject to that provider’s own privacy practices.",
    ],
  ],
  [
    "storage",
    "Browser storage",
    [
      "The frontend uses browser storage to remember your theme preference and support the account sign-in experience. Your browser may also store notification permission settings and messaging information used by your application.",
    ],
  ],
  [
    "retention",
    "Retention and security",
    [
      "Account, payment, and API usage records support the operation of the service and troubleshooting. Some usage logs can contain notification details or device tokens; avoid sending sensitive personal information in notification content.",
      "Protect your password, API keys, and Firebase credentials. If you suspect unauthorized access, revoke affected keys where possible and contact support. No online service can promise absolute security.",
    ],
  ],
  [
    "choices",
    "Your choices",
    [
      "You can update available profile settings, manage API keys, and change notification permissions through your browser or device. Contact support to request access to, correction of, or deletion of account information. Requests may require verification of account ownership; some records may need to be retained for transactions or other applicable obligations.",
      "If you send notifications through Dev Push, you are responsible for explaining your own application’s data practices and obtaining the permissions needed from your users.",
    ],
  ],
  [
    "updates",
    "Updates and contact",
    [
      "Changes to the service may require updates to this page. Review this policy periodically, and contact support if you have questions about how the platform handles your information.",
    ],
  ],
];
export default function LandingPrivacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Understand the information behind your account, your API activity, and your notification workflow."
      summary="We process account and usage information to operate Dev Push. Notification and payment providers process the information needed to deliver their services. You can manage your settings and contact us about your data."
      sections={sections}
      relatedPath="/terms"
      relatedLabel="Terms & Conditions"
    />
  );
}
