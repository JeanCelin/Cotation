import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="container">
        <h2>Currency Cotation</h2>
        <p className="headerText">
          Select a pair of currencies and see the current value. You can also
          use the fields to customize the amount and see the corresponding
          values.
        </p>
      </div>
    </>
  );
}
