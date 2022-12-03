import React from "react";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });

function PrivacyPolicy() {
  return (
    <Layout>
      <style>
        {`
          h2, h3, h4, h5, h6 {
            margin-top: 1.5em;
            margin-bottom: 0.5em;
          }
          h4{
            font-size: 1.25rem;
          }
          h2{
            font-weight: 600;
          }
          h3, h4{
            font-weight: 500;
          }
          li{
            list-style-type: disc;
            margin-left: 1.5em;
            opacity: 0.8;
            margin-bottom: 0.5em;
          }
          ul{
            margin-top: 0.5em;
            margin-bottom: 1.5em;
          }
          p:not(:last-child){
            margin-bottom: .5em;
          }
          p{
            opacity: 0.8;
          }
          li, p{
            line-height: 1.75;
          }
        `}
      </style>
      <div className="col-span-full">
        <h1 className="text-2xl">Privacy policy</h1>
        <h2 className="text-xl">1. Data protection at a glance</h2>
        <h3 className="text-lg">General notes</h3>{" "}
        <p>
          The following notices provide a simple overview of what happens to
          your personal data when you visit this website. Personal data is any
          data that can be used to identify you personally. For detailed
          information on the subject of data protection, please refer to my
          privacy policy listed below this text.
        </p>
        <h3 className="text-lg">Data collection on this website</h3>{" "}
        <h4>Who is responsible for the data collection on this website?</h4>{" "}
        <p>
          Data processing on this website is carried out by the website
          operator. You can find the contact details of the website operator in
          the section &quot;Information about the responsible party&quot; in
          this data protection declaration.
        </p>{" "}
        <h4>How do I capture your data?</h4>{" "}
        <p>
          On the one hand, your data is collected when you provide it to me.
          This can be, for example, data that you enter in a contact form.
        </p>{" "}
        <p>
          Other data is collected automatically or after your consent when you
          visit the website by my IT systems. This is mainly technical data
          (e.g. Internet browser, operating system or time of page view). The
          collection of this data takes place automatically as soon as you enter
          this website.
        </p>{" "}
        <h4>What do I use your data for?</h4>{" "}
        <p>To get in touch with you by email about your issue.</p>{" "}
        <h4>What rights do you have regarding your data?</h4>{" "}
        <p>
          You have the right at any time to receive information free of charge
          about the origin, recipient and purpose of your stored personal data.
          You also have a right to request the correction or deletion of this
          data. If you have given your consent to data processing, you can
          revoke this consent at any time for the future. You also have the
          right to request the restriction of the processing of your personal
          data under certain circumstances. Furthermore, you have the right to
          lodge a complaint with the competent supervisory authority.
        </p>{" "}
        <p>
          For this purpose, as well as for further questions on the subject of
          data protection, you can contact me at any time.
        </p>
        <h2 className="text-xl">2. Hosting</h2>
        <p>I host the content of my website with the following provider:</p>
        <h3 className="text-lg">External hosting</h3>{" "}
        <p>
          This website is hosted externally. The personal data collected on this
          website is stored on the servers of the hoster(s). This may include,
          but is not limited to, IP addresses, contact requests, meta and
          communication data, contractual data, contact details, names, website
          accesses and other data generated via a website.
        </p>{" "}
        <p>
          External hosting is carried out for the purpose of contract
          fulfillment vis-à-vis my potential and existing customers (Art. 6
          para. 1 lit. b DSGVO) and in the interest of a secure, fast and
          efficient provision of my online offer by a professional provider
          (Art. 6 para. 1 lit. f DSGVO). Insofar as a corresponding consent has
          been requested, the processing is carried out exclusively on the basis
          of Art. 6 para. 1 lit. a DSGVO and § 25 para. 1 TTDSG, insofar as the
          consent includes the storage of cookies or access to information in
          the user&quot;s terminal device (e.g. device fingerprinting) as
          defined by the TTDSG. The consent can be revoked at any time.
        </p>{" "}
        <p>
          My hoster(s) will only process your data to the extent necessary to
          fulfill their service obligations and follow my instructions regarding
          this data.
        </p>{" "}
        <p>I use the following hoster:</p>
        <p>Vercel.com</p>
        <h2 className="text-xl">3. general notes and mandatory information</h2>
        <h3 className="text-lg">Privacy</h3>{" "}
        <p>
          The operators of these pages take the protection of your personal data
          very seriously. I treat your personal data confidentially and in
          accordance with the statutory data protection regulations and this
          privacy policy.
        </p>{" "}
        <p>
          When you use this website, various personal data are collected.
          Personal data is data with which you can be personally identified.
          This privacy policy explains what data I collect and what I use it
          for. It also explains how and for what purpose this is done.
        </p>{" "}
        <p>
          I would like to point out that data transmission on the Internet (e.g.
          when communicating by e-mail) can have security gaps. A complete
          protection of the data against access by third parties is not
          possible.
        </p>
        <h3 className="text-lg">Note on the responsible body</h3>{" "}
        <p>The responsible party for data processing on this website is:</p>{" "}
        <p>
          Muslim Hasmagomadv
          <br />
          Hindenburgstr. 109
          <br />
          30851 Langenhagen, Germany
        </p>
        <p>
          phone: 015757794897
          <br />
          email: kontakt@adamh.de
        </p>
        <p>
          The controller is the natural or legal person who alone or jointly
          with others determines the purposes and means of the processing of
          personal data (e.g. names, e-mail addresses, etc.).
        </p>
        <h3 className="text-lg">Storage duration</h3>{" "}
        <p>
          Unless a more specific storage period has been specified within this
          privacy policy, your personal data will remain with me until the
          purpose for data processing no longer applies. If you assert a
          legitimate request for deletion or revoke your consent to data
          processing, your data will be deleted unless I have other legally
          permissible reasons for storing your personal data (e.g. retention
          periods under tax or commercial law); in the latter case, the data
          will be deleted once these reasons no longer apply.
        </p>
        <h3 className="text-lg">
          General information about the legal basis of data processing on this
          website
        </h3>{" "}
        <p>
          If you have consented to data processing, I process your personal data
          on the basis of Art. 6 (1) a DSGVO or Art. 9 (2) a DSGVO, if special
          categories of data are processed according to Art. 9 (1) DSGVO. In the
          case of explicit consent to the transfer of personal data to third
          countries, the data processing is also based on Art. 49 (1) a DSGVO.
          If you have consented to the storage of cookies or to the access to
          information in your terminal device (e.g. via device fingerprinting),
          the data processing is additionally carried out on the basis of
          Section 25 (1) TTDSG. The consent can be revoked at any time. If your
          data is required for the performance of a contract or for the
          implementation of pre-contractual measures, I process your data on the
          basis of Art. 6 para. 1 lit. b DSGVO. Furthermore, if your data is
          required for the fulfillment of a legal obligation, I process it on
          the basis of Art. 6 para. 1 lit. c DSGVO. Furthermore, the data
          processing may be carried out on the basis of my legitimate interest
          according to Art. 6 para. 1 lit. f DSGVO. Information about the
          relevant legal basis in each individual case is provided in the
          following paragraphs of this privacy policy.
        </p>
        <h3 className="text-lg">
          Revocation of your consent to data processing
        </h3>{" "}
        <p>
          Many data processing operations are only possible with your express
          consent. You can revoke consent you have already given at any time.
          The legality of the data processing carried out until the revocation
          remains unaffected by the revocation.
        </p>
        <h3 className="text-lg">
          Right to object to data collection in special cases and to direct
          marketing (Art. 21 DSGVO)
        </h3>{" "}
        <p>
          IF THE DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 ABS. 1
          LIT. E OR F DSGVO, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF
          YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR
          PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE
          PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED
          CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, I WILL NO LONGER
          PROCESS YOUR PERSONAL DATA CONCERNED UNLESS I CAN DEMONSTRATE
          COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR
          INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING IS FOR THE PURPOSE
          OF ASSERTING, EXERCISING OR DEFENDING LEGAL CLAIMS (OBJECTION UNDER
          ARTICLE 21(1) DSGVO).
        </p>{" "}
        <p>
          IF YOUR PERSONAL DATA ARE PROCESSED FOR THE PURPOSE OF DIRECT
          MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING
          OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH MARKETING;
          THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS RELATED TO SUCH DIRECT
          MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO
          LONGER BE USED FOR THE PURPOSE OF DIRECT MARKETING (OBJECTION PURSUANT
          TO ARTICLE 21 (2) DSGVO).
        </p>
        <h3 className="text-lg">
          Right of appeal to the competent supervisory authority
        </h3>{" "}
        <p>
          In the event of breaches of the GDPR, data subjects shall have a right
          of appeal to a supervisory authority, in particular in the Member
          State of their habitual residence, their place of work or the place of
          the alleged breach. The right of appeal is without prejudice to other
          administrative or judicial remedies.
        </p>
        <h3 className="text-lg">Right to data portability</h3>{" "}
        <p>
          You have the right to have data that I process automatically on the
          basis of your consent or in fulfillment of a contract handed over to
          you or to a third party in a common, machine-readable format. If you
          request the direct transfer of the data to another controller, this
          will only be done insofar as it is technically feasible.
        </p>
        <h3 className="text-lg">Information, deletion and correction</h3>{" "}
        <p>
          Within the framework of the applicable legal provisions, you have the
          right at any time to free information about your stored personal data,
          its origin and recipient and the purpose of data processing and, if
          necessary, a right to correction or deletion of this data. For this
          purpose, as well as for further questions on the subject of personal
          data, you can contact me at any time.
        </p>
        <h3 className="text-lg">Right to restriction of processing</h3>{" "}
        <p>
          You have the right to request the restriction of the processing of
          your personal data. For this purpose, you can contact me at any time.
          The right to restriction of processing exists in the following cases:
        </p>{" "}
        <ul>
          {" "}
          <li>
            If you dispute the accuracy of your personal data stored by me, I
            usually need time to verify this. For the duration of the review,
            you have the right to request the restriction of the processing of
            your personal data.
          </li>{" "}
          <li>
            If the processing of your personal data happened/is happening
            unlawfully, you may request the restriction of data processing
            instead of erasure.
          </li>{" "}
          <li>
            If I no longer need your personal data, but you need it to exercise,
            defend or enforce legal claims, you have the right to request
            restriction of the processing of your personal data instead of
            deletion.
          </li>{" "}
          <li>
            If you have lodged an objection pursuant to Art. 21 (1) DSGVO, a
            balancing of your and my interests must be carried out. As long as
            it has not yet been determined whose interests prevail, you have the
            right to request the restriction of the processing of your personal
            data.
          </li>{" "}
        </ul>{" "}
        <p>
          If you have restricted the processing of your personal data, this data
          may - apart from being stored - only be processed with your consent or
          for the assertion, exercise or defense of legal claims or for the
          protection of the rights of another natural or legal person or for
          reasons of an important public interest of the European Union or a
          Member State.
        </p>
        <h3 className="text-lg">SSL or TLS encryption</h3>{" "}
        <p>
          This site uses SSL or TLS encryption for security reasons and to
          protect the transmission of confidential content, such as orders or
          requests that you send to me as the site operator. You can recognize
          an encrypted connection by the fact that the address line of the
          browser changes from &quot;http://&quot; to &quot;https://&quot; and
          by the lock symbol in your browser line.
        </p>{" "}
        <p>
          If SSL or TLS encryption is activated, the data you transmit to me
          cannot be read by third parties.
        </p>
        <h2 className="text-xl">4. data collection on this website</h2>
        <h3 className="text-lg">Contact form</h3>{" "}
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r
          den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter.
        </p>{" "}
        <p>
          The processing of this data is based on Art. 6 (1) lit. b DSGVO, if
          your request is related to the performance of a contract or is
          necessary for the implementation of pre-contractual measures. In all
          other cases, the processing is based on my legitimate interest in the
          effective processing of the requests sent to me (Art. 6 (1) (f) DSGVO)
          or on your consent (Art. 6 (1) (a) DSGVO) if this was requested; the
          consent can be revoked at any time.
        </p>{" "}
        <p>
          The data you enter in the contact form will remain with me until you
          request me to delete it, revoke your consent to store it, or the
          purpose for storing the data no longer applies (e.g. after I have
          completed processing your request). Mandatory legal provisions - in
          particular retention periods - remain unaffected.
        </p>
        <h3 className="text-lg">Request by e-mail, phone or fax</h3>{" "}
        <p>
          When you contact me by e-mail, telephone or fax, your inquiry
          including all personal data resulting from it (name, inquiry) will be
          stored and processed by me for the purpose of processing your request.
          stored and processed. I do not pass on this data without your without
          your consent.
        </p>{" "}
        <p>
          The processing of this data is based on Art. 6 (1) lit. b DSGVO, if
          your request is related to the performance of a contract or is
          necessary for the implementation of pre-contractual measures. In all
          other cases, the processing is based on my legitimate interest in the
          effective processing of the requests sent to me (Art. 6 (1) (f) DSGVO)
          or on your consent (Art. 6 (1) (a) DSGVO) if this has been requested;
          the consent can be revoked at any time.
        </p>{" "}
        <p>
          The data you send to me via contact requests will remain with me until
          you request me to delete it, revoke your consent to store it, or the
          purpose for storing the data no longer applies (e.g. after I have
          completed processing your request). Mandatory legal provisions - in
          particular legal retention periods - remain unaffected.
        </p>
        <p>
          Source:{" "}
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </p>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
