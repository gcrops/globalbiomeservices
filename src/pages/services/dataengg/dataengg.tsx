import '../services.css';
export function DataEngg() {
  return (
    <div>
      <img
        src="/dataengineering.avif"
        alt="data engineering"
        className="ServiceImage"
      />
      <div>
        <div className="MainServiceHero">Data Engineering & Analytics</div>
        <div className="MainServicePage">
          Global BiomeServices is tasked with building a planet-scale data
          engineering platform to support advanced geospatial analytics and
          AI-driven decision-making. The organization must handle petabytes of
          spatial and temporal data arriving continuously from satellite
          constellations, aerial surveys, IoT sensors, climate models, and
          external research partners. Existing systems are siloed, batch-driven,
          and unable to support low-latency analytics or large-scale machine
          learning workloads. <br />
          <br />
          To solve this, Global BiomeServices designs a cloud-native,
          data-lake-centric architecture optimized for geospatial workloads. Raw
          data is ingested through high-throughput streaming pipelines that
          support real-time satellite downlinks and sensor feeds alongside large
          batch transfers of historical datasets. Spatial metadata is
          automatically extracted and indexed during ingestion, enabling
          efficient querying by location, time, and data type without requiring
          manual preprocessing. <br />
          <br />
          A robust data transformation layer standardizes and enriches the
          incoming data. Distributed processing frameworks perform coordinate
          normalization, reprojection, tiling, and temporal alignment at scale.
          Domain-specific data quality checks are embedded directly into the
          pipelines to detect corrupted imagery, missing sensor readings, and
          spatial inconsistencies. All transformations are versioned, making the
          data fully traceable and reproducible across analytical and regulatory
          use cases. <br />
          <br />
          The platform also introduces a unified geospatial data model that
          supports structured, semi-structured, and unstructured data. Vector
          data, raster imagery, time-series sensor readings, and textual reports
          are stored in formats optimized for both analytics and machine
          learning. Partitioning strategies are designed around spatial grids
          and time windows, dramatically reducing query latency for large-area
          or long-term analyses. <br />
          <br />
          To support downstream analytics and AI, Global BiomeServices builds a
          feature-ready data layer that exposes clean, curated datasets through
          APIs and data products. Data engineers collaborate closely with data
          scientists to ensure that spatial features, temporal aggregates, and
          training datasets are generated consistently and at scale. By treating
          geospatial data as a first-class engineering concern, Global
          BiomeServices enables reliable, high-performance analytics and AI
          systems that can operate at a truly global level.
        </div>
      </div>
    </div>
  );
}
