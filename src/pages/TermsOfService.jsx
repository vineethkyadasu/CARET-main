import React from "react";

const TermsOfService = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Terms & Conditions
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Effective Date: <strong>December 16, 2025</strong>
        </p>

        <p className="mb-6">
          <strong>CARET ENTERPRISES LLC</strong> (“Company,” “we,” “our,” or “us”)
          provides access to its website, products, and services. These Terms &
          Conditions govern your use of our website and services.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="mb-6">
          By using our website, you agree to these Terms & Conditions.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          2. Website Use
        </h2>
        <p className="mb-3">You agree not to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Violate any applicable laws</li>
          <li>Access systems without authorization</li>
          <li>Interfere with website functionality</li>
          <li>Engage in fraudulent activity</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          3. Products & Orders
        </h2>

        <h3 className="font-semibold mt-3 mb-2">3.1 Product Information</h3>
        <p className="mb-4">
          We strive for accuracy but do not guarantee product completeness.
        </p>

        <h3 className="font-semibold mt-3 mb-2">3.2 Order Acceptance</h3>
        <p className="mb-4">
          We may cancel or limit orders at our discretion.
        </p>

        <h3 className="font-semibold mt-3 mb-2">3.3 Pricing</h3>
        <p className="mb-6">
          Prices may change without notice.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          4. Payments
        </h2>
        <p className="mb-6">
          Payments are processed through third-party gateways. We do not store
          full card details.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          5. Shipping & Delivery
        </h2>
        <p className="mb-6">
          We are not responsible for delays caused by carriers or external
          factors.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          6. Returns & Refunds
        </h2>
        <p className="mb-6">
          Returns are governed by our posted refund policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          7. Intellectual Property
        </h2>
        <p className="mb-6">
          All content, trademarks, and intellectual property belong to CARET
          ENTERPRISES LLC and may not be reproduced without prior written
          permission.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          8. User Accounts
        </h2>
        <p className="mb-6">
          Users must maintain account security. We may suspend accounts that
          violate our policies.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          9. Limitation of Liability
        </h2>
        <p className="mb-6">
          We are not liable for indirect or consequential damages.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          10. Disclaimer of Warranties
        </h2>
        <p className="mb-6">
          Services are provided “AS IS” with no warranties.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          11. Indemnification
        </h2>
        <p className="mb-6">
          You agree to indemnify CARET ENTERPRISES LLC for claims arising from
          misuse.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          12. Governing Law
        </h2>
        <p className="mb-6">
          These Terms are governed by Wyoming state law.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          13. Amendments
        </h2>
        <p className="mb-6">
          We may update these Terms at any time.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          14. Contact Information
        </h2>
        <p>
          Email:{" "}
          <a
            href="mailto:support@caretenterprises.net"
            className="text-red-600"
          >
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

export default TermsOfService;
