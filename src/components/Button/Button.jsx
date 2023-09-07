import './Button.scss';

export default function Button({
  variant,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  text,
  focus
}) {

  return (
    <button className={`${variant} ${size} ${color} ${focus}`} disabled={Boolean(disabled)} >
      <span class="material-symbols-outlined">
        {startIcon}
      </span>
      {text ? text : "Default"}
      <span class="material-symbols-outlined">
        {endIcon}
      </span>
    </button>
  );
}