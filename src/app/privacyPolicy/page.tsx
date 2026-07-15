import Image from "next/image";
import Navbar from "@/components/navigation/navBar";
import BriefList from "./briefList";

const PRIVACY_POLICY = [
  {
    title: "1. PERSONAL DATA WE MAY COLLECT ABOUT YOU",
    paragraph: "We may collect, use or process Personal data such as:",
    list: [
      "Identity Data: Information such as, your full name, your government-issued identity number, and your date of birth. This data is to enable us to verify your identity in order to offer our Services to you. We also collect copy(ies) of your passport, driving licence or other any government-issued identity card, a photograph or image in photo or video form (if applicable) and any other registration information you may provide to prove you are eligible to use our Services and in compliance with regulatory requirements on Know Your Customer (KYC), Know-Your-Business (KYB) and Anti-Money Laundering Laws (AML) and regulations;",
      "Contact Data: This includes your country of residence, contact address, email address, contact number, details of the device you use and billing details. We require this data to reach out to you for the purpose of providing our Services to you and verifying your login requests.",
      "Log/Technical Data: When you access MEMMCOL Services, our servers automatically record information that your browser sends whenever you visit a website, links you have clicked on, length of visit on certain pages, unique device identifier, information on your page interaction (e.g, scrolls and clicks), log-in information, internet protocol (IP) address, location and other device details.",
      "Transactional Data: This is information relating to a payment or transaction when you as a merchant (using one or more of our payment processing Services) or as a User, are using our products or Services;",
      "Marketing and Communications Data: This includes both a record of your decision to subscribe to or withdraw from receiving marketing materials from us or from our third parties. This also includes the content of your communication with us through mobile calls, call recordings, online chats or other means of communication.",
    ],
    desc: [
      "We may also collect, store, use and transfer non-Personal Data or anonymized data such as statistical or demographic data.",
      "As a principle, we do not collect any Sensitive Personal Data. However, If we do collect any Sensitive Personal Data, we will ensure compliance with the Data Protection Legislation.",
      "This Privacy Notice applies to MEMMCOL Services only. We do not exercise control over the sites displayed or linked from within our various Services. These other sites may place their own cookies, plug- ins or other files on your computer, collect data or solicit personal information from you. MEMMCOL does not control these third-party websites and we are not responsible for their privacy statements. Please consult such third parties’ privacy statements and set appropriate controls from your settings when using any third- party services.",
    ],
  },
  {
    title: "2. HOW WE GET YOUR PERSONAL DATA AND WHY WE HAVE IT",
    paragraph:
      "The Personal Data we have about you is directly made available to us when you:",
    list: [
      "sign up or register to use a MEMMCOL Account;",
      "use any of our Services or receive transfers through any of our Services;",
      "fill in our online forms or respond to surveys;",
      "apply for employment opportunities we advertise;",
      <>
        register for and attend our webinars, events or online discussions;3.
        THE LEGAL BASIS FOR USING YOUR PERSONAL DATA
        <br />
        The legal basis we rely on for processing your Personal Data are:
        <br />
        Your consent: Where you agree to us collecting and using your Personal
        Data.
        <br />
        We have a contractual obligation: Without your Personal Data, we cannot
        provide our Services to you.
        <br />
      </>,
    ],
    desc: [
      "We have a legal obligation: We have a legal obligation and responsibility to act in compliance with applicable laws, legislations and regulations to prevent fraud by verifying your identity, terrorism financing, proliferation financing and money laundering. To ensure we are fully compliant with all applicable financial legislations such as Anti-Money Laundering and Counter Terrorist Financing Laws, we must collect and store your Personal Data.",
      "We have a legitimate interest: In certain instances and as permitted by law, we may rely on legitimate interests in our business to process your Personal Data. These may include sharing your data with our affiliates, or protecting against fraud by checking your identity before providing you with a service.",
    ],
  },
  {
    title: "3. HOW WE MAY USE YOUR PERSONAL DATA",
    paragraph: "We may use your Personal Data that we collect to:",
    list: [
      "create and manage any Accounts you may have with us, verify your identity, provide our Services, and respond to your inquiries;",
      "process your payment and other transactions (including authorization, clearing, chargebacks and other related dispute resolution activities) and provide other payment related services to you;",
      "protect against and prevent fraud, un-authorized transactions, claims and other liabilities;",
      "communicate with you about products, newsletters, advertisements, offers, programs and promotions of MEMMCOL, financial institutions, merchants and other partners. You have the right to opt-out of this at any time;",
      "send communication on service updates (downtime, service support, regulatory notices, etc);",
      "communicate with you to resolve an inquiry, complaint or concerns with your Account. We also use your contact data to send you one-time passwords (OTP) for account authentication via short messaging service (SMS), email, whatsapp or other electronic mediums.",
      "evaluate and improve our business, including developing new products and Services;",
      "establish, exercise and defend legal rights, as necessary;",
      "comply with applicable laws and regulations, including for compliance with Know-Your-Customer, Know-Your-Business, Anti-Money Laundering, anti-corruption, fraud monitoring, sanctions screening and risk assessment requirements, or as requested by any judicial process, law enforcement or governmental agencies having or claiming jurisdiction over MEMMCOL or MEMMCOL’s affiliates;",
      "use data analytics to improve our website, products or Services, user experience and to optimise our Services.",
      "If you register for and/or attend any MEMMCOL sponsored events, we collect your registration and contact details to complete your registration. We may also collect your images, in video or still form, audio-visual recordings or other forms of digital information gathered at such events by the media team and use them for promotion, publication or marketing of the event as MEMMCOL may determine.",
      "Employment: if you apply for employment with MEMMCOL, we use your Personal Data to evaluate your interest in employment, for compliance checks and to contact you regarding possible employment with MEMMCOL;",
      "For other purposes, for which we provide specific notices at the time of collection.5. YOUR DATA PROTECTION RIGHTSBy virtue of the Data Protection Legislation, below are the rights you have as a User in relation to your Personal Data:Right to be informed on how we process your data. This Privacy Notice explains our privacy practices.Right to request for access to all or copies of your Personal Data by signing into your Account or contacting us. We will not give you personal data we hold on other individuals.Right to request that MEMMCOL delete or erase your Personal Data. Please note that this is a limited right which applies where the continued processing of your Personal Data has no legal justification. The exceptions to this right is where the applicable law requires MEMMCOL, as a regulated financial services institution, to retain a historical archive of your personal data to fulfil regulatory requirements or where we retain a core set of your personal data to ensure we do not inadvertently contact you in future, where you object to your data being used for marketing purposes.Right to correct or rectify any Personal Data that you provide which may be incorrect, out of date or inaccurate. You also have the right to ask us to update information you think is incomplete or outdated.Right to opt-out of direct marketing. You have a right to ask us not to contact you for marketing purposes by adjusting your notification preferences on the settings page of our Sites or by opting out via the unsubscribe link in marketing emails we send you.Right to object to processing: You have the right to object to or restrict the processing of your Personal Data in certain circumstances. Please note that where you object to or restrict us from processing your Personal Data, we might be unable to provide our Services to you.Right to withdraw your consent where you had previously given the same. Right to not be subject to a decision based solely on automated processing.",
    ],
    desc: [
      "Right to request that we move or transfer your Personal Data across different Services we provide, or have it moved or transferred from us to another company in a structured, commonly used and machine-readable format. The exception to this right is where your request is not technically feasible or possible.",
      "You can exercise your rights at no cost. However, we are permitted by law to refuse your request or charge a reasonable fee where your request is excessive, manifestly unfounded or would impose unreasonable costs on MEMMCOL. If we decide to charge a fee, we will inform you before treating your request.",
      "If you wish to exercise any of your rights set out above, please contact us at info@memmcol.com . Where we are unsure of your identity, we might ask you for proof of your identity for security reasons, before dealing with your request. Where a third party exercises any of these rights on your behalf, we would need sufficient proof that you have authorised them to act on your behalf.",
    ],
  },
  {
    title: "4. DISCLOSING YOUR PERSONAL DATA",
    paragraph: (
      <div className="space-y-4">
        <p>
          We may disclose or share your Personal Data with third parties as may
          be reasonably necessary for the purposes set out in this Notice.,
        </p>

        <p>
          We share Personal Data with external third parties in the following
          limited circumstances:
        </p>
        <p>
          We provide such information to our subsidiaries or affiliated entities
          for the purpose of processing Personal Data on our behalf. We require
          that these parties agree to process such information based on our
          instructions, implement appropriate confidentiality and security
          measures and comply with the Data Protection Legislation.
        </p>

        <p>
          We share your data with our third party providers or service
          providers, financial partners or suppliers for the purpose of
          effectively providing our Services to you. These services include
          identity verification and fraud prevention, customer service and
          support, analytics, payment facilitation by our banking and financial
          service partners including the card networks, communication service
          providers and information technology services
        </p>
        <p>
          We may share your Personal Data to comply with a subpoena, court
          order, summons, police or other law enforcement agencies, regulatory
          requests (which may be outside your country of residence) or as
          required by law.;
        </p>

        <p>
          We may share your Personal data where disclosure is reasonably
          necessary to:
        </p>
      </div>
    ),
    list: [
      "satisfy any applicable law, regulation, legal process or enforceable governmental request;",
      "Detect or prevent fraud including investigation of potential violations to our Terms of Service;",
      "detect, prevent, or otherwise address security or technical issues, or protect against imminent harm to the rights, property or safety of MEMMCOL, its Users or the public as required or permitted by law.",
      "We have your consent. In some instances, we may provide a service through a third party, which would require us to share your Personal Data to third parties authorised by you to receive such: Information The use of your Personal Data by an authorised third party is subject to the third party’s Privacy Notice and MEMMCOL shall bear no liability for any breach which may arise from such authorization by you.",
      " If MEMMCOL becomes involved in a merger, acquisition, or any form of sale of some or all of its assets, we may share your Personal Data with parties involved in the transaction and any entity that acquires our business will continue to process your Personal Data in line with this Privacy Notice, or a revised version that we will communicate to you.",
    ],
  },
  {
    title: "5. DATA SECURITY & RETENTION",
    paragraph: (
      <div className="space-y-4">
        <p>
          The security of your Personal Data is important to MEMMCOL. We are
          committed to protecting the information we collect. We maintain
          administrative, technical and physical controls designed to protect
          the employees in order to fulfil their job responsibilities.
        </p>

        <p>
          When you use any of your Accounts, we implore you to always use strong
          passwords (a combination of letters, numbers, upper and lower cases
          and special characters), enable two-factor authentication on your
          Accounts, ensure you do not share your password with anyone, and that
          your login credentials are kept confidential at all times.
        </p>
        <p>
          We are committed to conducting our business in accordance with these
          principles in order to ensure that the confidentiality of your
          Personal Data is protected and maintained. Personal Data you provide,
          or we collect against loss or theft, as well as against any
          unauthorised access, risk of loss, disclosure, copying, misuse or
          modification.
        </p>

        <p>
          Other security measures include but are not limited to, secure
          servers, firewalls, data encryption and granting access only to
          specific
        </p>
        <p>
          We would take all reasonable steps to ensure that your Personal Data
          is secured and well protected.
        </p>

        <p>
          We will only retain Personal Data on our servers for as long as is
          reasonably necessary as long as we are providing Services to you. If
          you close your Account, your data is stored on our servers to the
          extent necessary to comply with regulatory and Anti-Money Laundering
          obligations, being a 5-year minimum storage period, and further for
          the purpose of fraud monitoring, detection and prevention. Where we
          retain your Personal Data, we do so in compliance with limitation
          periods or retention obligations imposed by applicable law.
        </p>
      </div>
    ),
  },
  {
    title: "6. MARKETING",
    paragraph: (
      <div className="space-y-4">
        <p>
          We may process your Personal Data in order to contact you or send you
          marketing content and communication about our products, Services or
          surveys, where we have obtained your consent. You may exercise your
          right to object to such contact from us or opt out from the marketing
          communication. Please note however that if you opt-out of marketing
          content, we may still send you messages relating to transactions and
          our Services, related to our ongoing business relationship.
        </p>

        <p>
          We may ask you for permission to send notifications to you. Our
          Services will still work if you do not grant us consent to send you
          notifications.
        </p>
      </div>
    ),
  },
  {
    title: "7. COOKIES",
    paragraph:
      "Like many other websites, we use cookies to distinguish you from other Users, to measure your engagement with our website and to customise and improve our Services. Depending on how you manage your cookies settings and preferences, we may place cookies on your device when you visit our website. We will only place advertising and analytics cookies if you consent or accept these cookies. Some browsers may automatically accept cookies, while some can be modified to decline cookies or alert you when a website wants to place a cookie on your computer. If you do choose to disable non-essential cookies, it may limit your ability to get a full experience of our website. For detailed information on the cookies and how we use them see our Cookie Notice:",
  },
  {
    title: "8. MINORS",
    paragraph: (
      <div className="space-y-4">
        <p>
          MEMMCOL’s services and applications are not directed at persons under
          the age of eighteen (18)years and we do not collect any Personal Data
          knowingly or directly from individuals who fall within this category.
        </p>

        <p>
          Where you have any belief that MEMMCOL has mistakenly or unknowingly
          collected information from a minor, please contact us to enable us to
          investigate and restrict such data collection.
        </p>
      </div>
    ),
  },
  {
    title: "9.  INTERNATIONAL DATA TRANSFERS",
    paragraph:
      "Our business is global with affiliates and service providers located around the world. As such, we may need to transfer your Personal Data to help us provide you with our Services. Your Personal Data may be transferred to countries which may not have the same data protection laws as your country, but whenever we have to transfer or transmit your Personal Data internationally, we will take reasonable steps to ensure your Personal Data is handled securely in compliance with the Data Protection Legislation. We may use any of the data transfer mechanisms like checking that the data protection laws of the recipient country are adequate, ensuring the existence of appropriate safeguards like standard contracting clauses, or other data transfer mechanisms stipulated by the Data Protection Legislation.",
  },
  {
    title: "10. UPDATES TO OUR PRIVACY NOTICE",
    paragraph:
      "From time to time, we may change, amend or review this Privacy Notice to reflect new Services or changes and place any updates on this page. All changes made will be posted on this page and where changes will materially affect you, we will notify you of this change by placing a notice online, on your MEMMCOL dashboard or by email.",
  },
  {
    title: "11. CONTACT US",
    paragraph: (
      <div className="space-y-4">
        <p>
          MEMMCOL has appointed a Data Protection Officer (DPO) responsible for
          overseeing compliance with the Data Protection Legislation. To
          exercise your rights or if you have any inquiries, comments or
          concerns with our privacy practices, please contact us at
          info@memmcol.com We will investigate and work on resolutions for your
          concerns within thirty (30) days and/or in accordance with the Data
          Protection Legislation.
        </p>

        <p>
          Where we require more time to resolve your inquiry, we would
          communicate with you. We may request additional details from you
          regarding your inquiries and keep records of your requests and
          resolution.
        </p>

        <p>
          If you feel that we have not addressed your questions or concerns
          adequately, you may contact the Nigeria Data Protection Commission
          here
        </p>
      </div>
    ),
  },
  {
    title: "DEFINITIONS",
    paragraph: (
      <div className="space-y-4">
        <p>
          Account: means a profile created by a User on any MEMMCOL platform or
          MEMMCOL product.
        </p>

        <p>
          Cookies: A cookie is a small data file that is transferred to your
          computer or mobile device. It enables us to remember your account
          log-in information, IP addresses, web traffic, number of times you
          visit, browser type and version, device details, date and time of
          visits.
        </p>

        <p>
          Data Protection Legislation: means the Nigeria Data Protection Act
          2023, the General Application and Implementation Directive 2025 and/or
          any other applicable legislation on the protection of personal data in
          Nigeria.
        </p>
        <p>
          Personal Data: Any information that can be used to identify a living
          or natural person including email address, date of birth, mobile
          number, residential address, payment card, financial information such
          as bank account number, etc.), government-issued Identity credentials
          (e.g, national ID number, international passport, driver’s licence
          number, etc), or taxpayer identification number. It may also include
          information that is linked to you, for example, your internet protocol
          (IP) address, log-in information, information about your device or
          device’s web browser.
        </p>
        <p>
          Services: means any products, applications, features, related
          websites, tools, software, offerings or any service offered by MEMMCOL
          to you or accessed by you.
        </p>
        <p>
          Sites: means any platform including but not limited to mobile
          applications, websites and social media platforms.
        </p>
        <p>
          User: means an entity (“merchant”) or individual, who uses the
          Services or accesses the Sites, and has agreed to use the end services
          of MEMMCOL.
        </p>
        <p>
          Sensitive Personal Data: means details about your race or ethnicity,
          religious or philosophical beliefs, sex life, sexual orientation,
          political opinions, trade union membership, information about your
          health, genetic,biometric data or any other category defined from time
          to time by the applicable Data Protection Legislation.
        </p>
        <p>This Privacy Notice was last updated in May 2025.</p>
      </div>
    ),
  },
  {
    title: "CONTACT",
    paragraph: (
      <div className="space-y-4">
        <p>info@memmcol.com</p>
        <p>
          +2349076661264
          <br />
          Our call lines are available 24/7.
        </p>
      </div>
    ),
  },
];

export default function AboutHero() {
  return (
    <>
      <section className="relative w-full h-50 md:h-90 overflow-hidden">
        <Image
          src="/images/aboutus.png"
          alt="MEMMCOL team"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 flex flex-col h-full">
          <Navbar light />

          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-xl md:text-3xl font-semibold text-white text-center">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      <div className="pt-20 text-gray-600 px-4 md:px-24 ">
        <p className=" text-justify mt-10">
          We are MOMAS ELECTRICITY METER MANUFACTURING COMPANY LTD (“MEMMCOL”),
          a company incorporated under the laws of Nigeria with offices at No 4,
          Bode Thomas Street, Surulere, Lagos. For any access request,
          questions, or inquiries about how we use your Personal Data and our
          privacy practices, 7lease contact us at info@memmcol.com .
        </p>

        <div className="mt-8">
          <span>OVERVIEW</span>
          <p className=" text-justify mt-8">
            MEMMCOL and its affiliates (“we”, “us”, “our” collectively,
            “MEMMCOL”) is committed to protecting the rights and privacy of
            individuals in accordance with the Data Protection Legislation. This
            Privacy Notice (“Notice”) is designed to give you information on our
            privacy practices, the measures we take to protect the security of
            the data and to help you understand your rights and choices when we
            collect or process your Personal Data.
          </p>
          <p className="mt-8">
            This Privacy Notice is applicable to all MEMMCOL Services accessed
            by you.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <span>OUR PRIVACY PRINCIPLES</span>
          <p className="mt-8">
            MEMMCOL focuses on the following core principles:
          </p>
          <div>
            To empower the individual: MEMMCOL wants you to be in charge of your
            Personal Data and to make your own voluntary choices about your
            Personal Data;
          </div>
          <div>
            To keep and secure Personal Data: MEMMCOL does not take your
            trusting us with your information for granted. We take
            responsibility in ensuring that appropriate security measures are
            put in place and your Personal Data is protected;
          </div>
          <div>
            To be transparent and to educate Users: For you to know what
            Personal Data is, how we collect it, for what purposes it is
            collected and how we secure it;
          </div>
          <div>
            To abide by local laws: MEMMCOL is a global company with local
            privacy expertise. Our privacy practices may vary among the
            countries in which we operate to reflect local practices and legal
            requirements. Specific privacy notices may apply to some of our
            products and Services. Please visit the webpage or digital assets of
            the specific product or service to learn more about our privacy and
            information practices in relation to that product or service.
          </div>
          <div>
            To ensure that Personal Data collected is up to date : We take steps
            to ensure that Personal Data collected is kept accurate.
          </div>
          <div>
            To collect and store Personal Data on a “need to collect” basis:
            MEMMCOL collects Personal Data to perform its Services for you.
            Where we store or retain Personal Data, we do this in accordance
            with retention obligations and requirements imposed by applicable
            laws.
          </div>
        </div>

        <div className="py-10">
          {PRIVACY_POLICY.map((details, index) => (
            <div key={index}>
              <BriefList
                title={details.title}
                paragraph={details.paragraph}
                list={details.list}
                desc={details.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
