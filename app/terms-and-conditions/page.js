/* eslint-disable react/no-unescaped-entities */
import React from "react";

function TermsAndConditions() {
  return (
    <div className="bg-black text-white h-[100%] py-20">
      <div className="prose prose-lg container mx-auto px-10 pt-8">
        <h1 className="font-bold text-3xl">
          Terms and Conditions for "The Bro Code" Podcast Website
        </h1>

        <h2 className="mt-10 font-bold text-2xl">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the website for "The Bro Code" Podcast
          (hereinafter referred to as "the Website"), you agree to comply with
          and be bound by these Terms and Conditions. If you do not agree with
          these terms, please refrain from using the Website.
        </p>

        <h2 className="mt-10 font-bold text-2xl">
          2. Information Collection and Use
        </h2>
        <h3 className="mt-10 font-bold text-xl">2.1. Personal Information</h3>
        <p>
          To access certain features of the Website, you may be required to
          provide personal information, including but not limited to your email
          address and phone number. By providing this information, you consent
          to its collection and use in accordance with our Privacy Policy.
        </p>

        <h3 className="mt-10 font-bold text-2xl">2.2. Marketing</h3>
        <p>
          We may use the information provided to market our podcast to brands
          and potential sponsors. Your personal information will not be sold to
          third parties without your explicit consent.
        </p>

        <h2 className="mt-10 font-bold text-2xl">3. User Responsibilities</h2>
        <h3 className="mt-5 font-bold text-xl">3.1. Accuracy of Information</h3>
        <p>
          You are responsible for providing accurate and up-to-date information
          during the sign-up process. Any false or misleading information may
          result in the termination of your account.
        </p>

        <h3 className="mt-10 font-bold text-2xl">3.2. Security</h3>
        <p>
          You are responsible for maintaining the security of your account login
          credentials. Any unauthorized use of your account should be reported
          immediately.
        </p>

        <h2 className="mt-10 font-bold text-2xl">4. Intellectual Property</h2>
        <h3 className="mt-5 font-bold text-xl">4.1. Content Ownership</h3>
        <p>
          All content on the Website, including but not limited to text,
          graphics, logos, and audio, is the property of "The Bro Code" Podcast
          or its licensors and is protected by copyright and other intellectual
          property laws.
        </p>

        <h3 className="mt-10 font-bold text-2xl">4.2. Use of Content</h3>
        <p>
          You may access and use the content on the Website for personal,
          non-commercial purposes only. Any other use, including reproduction,
          distribution, or modification, is prohibited without our prior written
          consent.
        </p>

        <h2 className="mt-10 font-bold text-2xl">5. Disclaimer</h2>
        <h3 className="mt-5 font-bold text-xl">5.1. Accuracy</h3>
        <p>
          While we strive to provide accurate and up-to-date information, we
          make no representations or warranties regarding the accuracy,
          completeness, or reliability of the content on the Website.
        </p>

        <h3 className="mt-10 font-bold text-2xl">5.2. External Links</h3>
        <p>
          The Website may contain links to external websites. We are not
          responsible for the content or privacy practices of these third-party
          sites.
        </p>

        <h2 className="mt-10 font-bold text-2xl">
          6. Changes to Terms and Conditions
        </h2>
        <p>
          We reserve the right to update or modify these Terms and Conditions at
          any time without prior notice. It is your responsibility to review
          these terms periodically.
        </p>

        <h2 className="mt-10 font-bold text-2xl">7. Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at{" "}
          <a
            href="mailto:brocodeglobal@gmail.com"
            className="underline text-blue-600"
          >
            brocodeglobal@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
