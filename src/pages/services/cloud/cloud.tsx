import '../services.css';
export function Cloud() {
  return (
    <div>
      <img src="/cloud.avif" alt="environment" className="ServiceImage" />
      <div>
        <div className="MainServiceHero">Cloud & Infrastructure</div>
        <div className="MainServicePage">
          Global BiomeServices undertakes a large-scale cloud migration
          initiative to modernize its geospatial data and analytics
          infrastructure. The company's existing on-premises systems struggle to
          keep up with growing data volumes, irregular satellite ingestion
          patterns, and the compute demands of advanced analytics. Scaling
          hardware for peak workloads is costly and inefficient, limiting the
          organization's ability to respond quickly to new projects and global
          events. <br />
          <br />
          The migration strategy begins with a phased, workload-driven approach
          rather than a simple lift-and-shift. Core geospatial services, data
          ingestion pipelines, and storage layers are re-architected to run on
          cloud-native infrastructure. Legacy GIS applications are decomposed
          into modular services, enabling independent scaling of
          compute-intensive tasks such as image processing, spatial indexing,
          and large-area analysis. <br />
          <br />
          As data moves to the cloud, Global BiomeServices establishes a secure,
          highly available geospatial data lake that serves as the foundation
          for all analytics and AI workloads. Object storage is used for massive
          raster and vector datasets, while managed databases support spatial
          queries and time-series workloads. Automated lifecycle policies move
          older or less frequently accessed data to lower-cost storage tiers,
          significantly reducing long-term operational costs. <br />
          <br />
          To ensure reliability and performance, the company adopts
          infrastructure-as-code and automated deployment pipelines.
          Environments for development, testing, and production are
          standardized, making it easier to deploy new geospatial services
          globally with minimal risk. Auto-scaling and managed compute services
          allow the platform to handle sudden spikes in demand, such as during
          natural disasters or large-scale environmental monitoring events.{' '}
          <br />
          <br />
          Finally, cloud-native governance and security controls are embedded
          throughout the migration. Fine-grained access management, encryption,
          and audit logging ensure that sensitive geospatial data is protected
          while still being easily accessible to authorized users. By completing
          this cloud migration, Global BiomeServices gains the flexibility,
          resilience, and scale needed to support advanced geospatial analytics
          and AI-driven solutions on a global level.
        </div>
      </div>
    </div>
  );
}
