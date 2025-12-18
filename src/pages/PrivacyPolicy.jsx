import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Effective Date: <strong>December 16, 2025</strong>
        </p>

        <p className="mb-6">
          <strong>CARET ENTERPRISES LLC</strong> (“Company,” “we,” “our,” or “us”) 
          operates online platforms and services related to electronic shopping, 
          online ordering, and digital commerce. This Privacy Policy explains how 
          we collect, use, disclose, and safeguard your information when you visit 
          our website or use our services.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          1. Information We Collect
        </h2>

        <h3 className="font-semibold mt-4 mb-2">1.1 Personal Information</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Shipping and billing address</li>
          <li>Payment information</li>
          <li>Account login information</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">
          1.2 Automatically Collected Information
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device identifiers</li>
          <li>Pages visited</li>
          <li>Cookies and tracking data</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">
          1.3 Order & Transaction Data
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Purchase history</li>
          <li>Order details</li>
          <li>Delivery information</li>
          <li>Customer service interactions</li>
        </ul>

        {/* 2. Usage */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Process and deliver orders</li>
          <li>Provide customer support</li>
          <li>Improve website functionality</li>
          <li>Personalize recommendations</li>
          <li>Verify identities</li>
          <li>Send transactional notifications</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>

        {/* 3. Sharing */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          3. Sharing of Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Payment processors</li>
          <li>Shipping carriers</li>
          <li>Analytics providers</li>
          <li>Cloud hosting partners</li>
        </ul>

        {/* 4. Cookies */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          4. Cookies & Tracking Technologies
        </h2>
        <p className="mb-6">
          We use cookies to maintain sessions, store preferences, and improve 
          your shopping experience.
        </p>

        {/* 5. Retention */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          5. Data Retention
        </h2>
        <p className="mb-6">
          We retain personal data only as long as necessary to fulfill legal and 
          business obligations.
        </p>

        {/* 6. Security */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          6. Data Security
        </h2>
        <p className="mb-6">
          We implement SSL encryption, access control, and continuous monitoring 
          to protect user data.
        </p>

        {/* 7. Children */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          7. Children’s Privacy
        </h2>
        <p className="mb-6">
          We do not knowingly collect information from children under the age of 13.
        </p>

        {/* 8. Rights */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          8. Your Rights
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Access your personal data</li>
          <li>Request correction</li>
          <li>Request deletion</li>
          <li>Opt out of communications</li>
        </ul>

        {/* 9. Third Party */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          9. Third-Party Links
        </h2>
        <p className="mb-6">
          We are not responsible for the privacy practices of external websites.
        </p>

        {/* 10. Updates */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          10. Changes to This Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy periodically. Updates will be posted 
          on this page.
        </p>

        {/* 11. Contact */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          11. Contact Information
        </h2>
        <p>
          Email: <a href="mailto:support@caretenterprises.net" className="text-red-600">
            support@caretenterprises.net
          </a>
        </p>
        <p className="mt-2">
          Address: 5830 E 2nd St, Ste 7000 #30362, Casper, Wyoming, 82609
        </p>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
