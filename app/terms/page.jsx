const TermsPage = () => {
    return (
        <section className="bg-blue-50 min-h-screen py-12">
            <div className="container max-w-4xl mx-auto px-6">
                <div className="bg-white p-8 rounded-md shadow-md">
                    <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
                    <p className="mb-4 text-sm text-gray-700">Last updated: May 4, 2025</p>

                    <p className="mb-4">
                        Welcome to <strong>Next Property</strong>. By accessing or using our
                        platform, you agree to comply with and be bound by the following terms and
                        conditions. Please read them carefully.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By using this website, you agree to these terms, our Privacy Policy, and any
                        other policies we publish. If you disagree with any part of the terms,
                        please do not use the site.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">2. Services Provided</h2>
                    <p className="mb-4">
                        Next Property is a web platform that helps users discover rental properties.
                        Users can list, search, save, and share property listings, as well as
                        communicate with other users through internal messaging.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            Provide accurate and up-to-date information on your listings and
                            profile.
                        </li>
                        <li>Do not use the platform for any unlawful or harmful activity.</li>
                        <li>
                            Respect other users and refrain from sending abusive or spammy messages.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-2">4. User Accounts</h2>
                    <p className="mb-4">
                        You are responsible for maintaining the confidentiality of your account
                        credentials and for all activities under your account. Use of third-party
                        authentication (Google) must comply with their respective terms.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
                    <p className="mb-4">
                        All content, including logos, text, graphics, and software, is the property
                        of Next Property or its content suppliers and protected by copyright and
                        other laws.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">6. External Services & APIs</h2>
                    <p className="mb-4">
                        Next Property integrates third-party services like Google, Mapbox,
                        Cloudinary, and MongoDB. We are not responsible for any disruptions or
                        issues arising from these services.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
                    <p className="mb-4">
                        Next Property is not liable for any damages arising out of the use or
                        inability to use the service. All listings and communications are
                        user-generated.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
                    <p className="mb-4">
                        We may modify these terms at any time. Changes will be effective immediately
                        upon posting. Continued use of the site means you accept those changes.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at{" "}
                        <a
                            href="mailto:support@nextproperty.com"
                            className="text-blue-600 underline"
                        >
                            support@nextproperty.com
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TermsPage;

