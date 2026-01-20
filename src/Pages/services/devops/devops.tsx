import './devops.css';

export function Devops() {
  return (
    <div>
      <div className="dev">
        <div className="devopstext">
          <div className="devopsDivinText">
            DevOps is not a Goal, But a never-ending process of continual
            improvement
          </div>
          <div
            className="consult"
            onClick={() => {
              location.href = '/contact';
            }}
          >
            SCHEDULE A CONSULTATION
          </div>
        </div>
        <img src="/devops.jpeg" alt="devops" className="devopsImage" />
      </div>
    </div>
  );
}
