import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-bg text-text-main py-20 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                        Privacy Policy
                    </h1>
                    <p className="text-muted text-lg">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Introduction */}
                <section className="space-y-4">
                    <p className="leading-relaxed text-slate-300">
                        At Playdel ("we," "our," or "us"), we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By accessing or using Playdel, you agree to the terms of this Privacy Policy.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">1. Information We Collect</h2>
                    <div className="space-y-4 text-slate-300">
                        <p>We collect information that you provide securely to us and data automatically collected when you use our services.</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and account credentials when you register.</li>
                            <li><strong>Usage Data:</strong> Information about your interactions with the platform, such as pages visited, time spent, and game preferences.</li>
                            <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                        </ul>
                    </div>
                </section>

                {/* How We Use Your Information */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">2. How We Use Your Information</h2>
                    <div className="space-y-4 text-slate-300">
                        <p>We use the collected data for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>To provide and maintain our services, including booking courts and finding partners.</li>
                            <li>To personalize your experience and improve platform functionality.</li>
                            <li>To communicate with you regarding updates, offers, and support.</li>
                            <li>To ensure the security and integrity of our platform.</li>
                        </ul>
                    </div>
                </section>

                {/* Data Sharing and Disclosure */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">3. Data Sharing and Disclosure</h2>
                    <p className="leading-relaxed text-slate-300">
                        We do not sell your personal data. However, we may share your information with trusted third-party service providers who assist us in operating our direct platform, conducting business, or serving you, provided they agree to keep this information confidential. We may also disclose information if required by law.
                    </p>
                </section>

                {/* Data Security */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">4. Data Security</h2>
                    <p className="leading-relaxed text-slate-300">
                        We implement industry-standard security measures to protect your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                    </p>
                </section>

                {/* Your Rights */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">5. Your Rights</h2>
                    <p className="leading-relaxed text-slate-300">
                        You have the right to access, update, or delete your personal information held by us. If you wish to exercise these rights, please contact our support team.
                    </p>
                </section>

                {/* Contact Us */}
                <section className="space-y-6 border-t border-slate-700/50 pt-8 mt-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                    <p className="text-slate-300 mb-4">
                        If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-slate-800/50 p-6 rounded-lg inline-block">
                        <p className="text-primary font-semibold">Email: <a href="mailto:team@playdel.net" className="hover:underline">team@playdel.net</a></p>
                    </div>
                </section>

            </div>
        </div>
    );
}
