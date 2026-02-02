import '../services.css';
export function Security() {
  return (
    <div>
      <img src="/security.avif" alt="environment" className="ServiceImage" />
      <div>
        <div className="MainServiceHero">Security & Compliance</div>
        <div className="MainServicePage">
          Global BiomeServices implements a cloud-first security architecture to
          protect its geospatial platforms as they scale globally. The
          organization manages highly sensitive datasets, including
          high-resolution satellite imagery, environmental intelligence, and
          government-regulated data, making security a foundational requirement
          rather than an afterthought. As workloads migrate to the cloud, the
          security model shifts from perimeter-based defenses to a zero-trust
          approach designed for distributed, cloud-native systems. <br />
          <br />
          Identity and access management is centralized and tightly controlled
          across all cloud environments. Every user, service, and application
          component is authenticated and authorized using least-privilege
          principles. Role-based and attribute-based access controls ensure that
          engineers, data scientists, and external partners can only access the
          geospatial datasets and services relevant to their responsibilities.
          All access is continuously monitored and audited to maintain
          compliance and traceability. <br />
          <br />
          Data security is enforced at every stage of the geospatial data
          lifecycle. All data is encrypted both at rest and in transit,
          including massive raster imagery and real-time sensor streams.
          Sensitive datasets are isolated using secure network boundaries and
          private endpoints, preventing exposure to the public internet.
          Automated key management and rotation policies reduce operational risk
          while maintaining strong cryptographic controls. <br />
          <br />
          To protect the platform from threats and misconfigurations, Global
          BiomeServices deploys continuous security monitoring and automated
          policy enforcement. Infrastructure-as-code templates are scanned for
          vulnerabilities before deployment, while runtime security tools
          monitor workloads for anomalous behavior such as unauthorized access
          patterns or abnormal data exfiltration. Security events are correlated
          with geospatial and temporal context, enabling faster investigation
          and response. <br />
          <br />
          Finally, the company embeds security into its engineering and
          operations culture through DevSecOps practices. Security controls are
          integrated directly into CI/CD pipelines, ensuring that new geospatial
          services meet compliance and security standards before reaching
          production. Regular risk assessments, penetration testing, and
          incident response drills keep the organization prepared for emerging
          threats. Through this comprehensive cloud security strategy, Global
          BiomeServices ensures that its geospatial intelligence platforms
          remain secure, resilient, and trusted at global scale.
        </div>
      </div>
    </div>
  );
}
