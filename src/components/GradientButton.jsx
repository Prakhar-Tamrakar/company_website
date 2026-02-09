export default function GradientButton({ text = "Get Started", onClick }) {
  return (
    <button className="uiverse-btn" onClick={onClick}>
      {text}
    </button>
  );
}
