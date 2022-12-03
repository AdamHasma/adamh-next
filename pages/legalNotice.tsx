import React from "react";
import Layout from "../components/Layout";

function LegalNotice() {
  return (
    <Layout title="Legal Notice">
      <div className="col-span-full impressum">
        <h1 className="text-2xl">Legal notice</h1>
        <p>Information according to § 5 TMG</p>
        <p className="mt-4">
          Muslim Hasmagomadov <br />
          Hindenburgstr. 109
          <br />
          30851 Langenhagen <br />
        </p>
        <p className="mt-4">
          {" "}
          <strong>Represented by: </strong>
          <br />
          Adam Hasmagomadov
          <br />
        </p>
        <p className="mt-4">
          <strong>Kontakt:</strong> <br />
          Phone: 01575-7794897
          <br />
          E-mail: <a href="mailto:kontakt@adamh.de">kontakt@adamh.de</a>
        </p>
      </div>
    </Layout>
  );
}

export default LegalNotice;
