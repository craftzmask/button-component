import './Aside.scss';

export default function Aside(props) {
  return (
    <aside>
      <div className="brand"><span className="dev">Dev</span>challenges.io</div>
      <div className="links">
        <div className="link">Colors</div>
        <div className="link">Typography</div>
        <div className="link">Spaces</div>
        <div className="link focus">Buttons</div>
        <div className="link">Inputs</div>
        <div className="link">Grid</div>
      </div>
    </aside>
  );
}